/** Buffer the codegen SSE stream into `{ files, explanation }`. */
import { createParser, type EventSourceMessage } from 'eventsource-parser';

/** Progress event the codegen run emits as files stream in. */
export type CodegenProgressEvent =
  { kind: 'file'; filename: string; filesSeen: number } | { kind: 'done'; filesSeen: number };

// Buffer the SSE stream. Handles both server-shape and client-shape chunks; both end with `[DONE]`.
export async function consumeCodegenStream(
  response: Response,
  onProgress?: (event: CodegenProgressEvent) => void | Promise<void>,
  logger?: (message: string, error?: unknown) => void,
): Promise<{
  files: { filename: string; contents: string }[];
  explanation: string;
}> {
  if (!response.body) {
    throw new Error(
      'MUI X Agent Tools: Backend returned an SSE response with no body, so the generation stream cannot be read. Check that MUI_RECIPES_BACKEND_BASE_URL points at recipes-backend (not a proxy or error page), then retry.',
    );
  }

  const files = new Map<string, string>(); // last-write-wins for a given filename
  const explanationParts: string[] = [];

  // Chain progress events so they fire in order, and drain them before resolving so the result
  // never lands before the final `done` notification.
  let progressChain: Promise<void> = Promise.resolve();
  const fireProgress = (event: CodegenProgressEvent): void => {
    if (!onProgress) {
      return;
    }
    progressChain = progressChain.then(async () => {
        throw new Error("STUB");
    });
  };
  const drainProgress = (): Promise<void> => progressChain;

  await new Promise<void>((resolve, reject) => {
      throw new Error("STUB");
  });

  return {
    files: Array.from(files.entries()).map(([filename, contents]) => { throw new Error("STUB"); }),
    explanation: explanationParts.join(''),
  };
}

type CodegenChunk = {
  type?: unknown;
  text?: unknown;
  textDelta?: unknown;
  delta?: unknown;
  content?: unknown;
  fileName?: unknown;
  filename?: unknown;
  contents?: unknown;
  error?: unknown;
};

type ChunkOutcome =
  { kind: 'file'; filename: string } | { kind: 'error'; message: string } | { kind: 'noop' };

function handleCodegenChunk(
  chunk: unknown,
  files: Map<string, string>,
  explanationParts: string[],
): ChunkOutcome {
  if (!chunk || typeof chunk !== 'object') {
    return { kind: 'noop' };
  }
  const c = chunk as CodegenChunk;
  const type = typeof c.type === 'string' ? c.type : undefined;

  if (!type) {
    return { kind: 'noop' };
  }

  if (type === 'file-update') {
    const filename =
      (typeof c.fileName === 'string' && c.fileName) ||
      (typeof c.filename === 'string' && c.filename) ||
      '';
    const contents = typeof c.contents === 'string' ? c.contents : '';
    if (filename) {
      files.set(filename, contents);
      return { kind: 'file', filename };
    }
    return { kind: 'noop' };
  }

  // Collect the user-facing reply text. (`reasoning` chunks are a separate type, left uncollected.)
  if (type === 'text-delta' || type === 'body' || type === 'text') {
    const text =
      (typeof c.textDelta === 'string' && c.textDelta) ||
      (typeof c.text === 'string' && c.text) ||
      (typeof c.delta === 'string' && c.delta) ||
      (typeof c.content === 'string' && c.content) ||
      '';
    if (text) {
      explanationParts.push(text);
    }
    return { kind: 'noop' };
  }

  if (type === 'error') {
    const message =
      (typeof c.error === 'string' && c.error) ||
      (typeof c.text === 'string' && c.text) ||
      'Generation failed.';
    return { kind: 'error', message: `Generation failed: ${message}` };
  }
  // Other chunk types (finish, tool-call, source, …) aren't surfaced; the agent only needs
  // files + explanation.
  return { kind: 'noop' };
}

async function pumpStream(
  body: ReadableStream<Uint8Array>,
  parser: ReturnType<typeof createParser>,
  onDone: (err?: Error) => void,
  isFinished: () => boolean,
): Promise<void> {
  const decoder = new TextDecoder();
  try {
    for await (const value of body as unknown as AsyncIterable<Uint8Array>) {
      parser.feed(decoder.decode(value, { stream: true }));
      // Finished early: break to cancel the stream (via the iterator's `return()`) and free the connection.
      if (isFinished()) {
        break;
      }
    }
    onDone();
  } catch (err) {
    onDone(err instanceof Error ? err : new Error(String(err)));
  }
}
