/** Async codegen tool: POST + SSE GET, buffered into `{ threadId, files, explanation }`. */
import { z } from 'zod';
import type { Logger, ToolOverrides } from '../types';
import { createAuthedFetch } from '../auth/authed-fetch';
import { wrapTool } from '../utils/wrap-tool';
import { generateResponseSchema, inputSchema, outputSchema, type MuiPairing } from './schemas';
import { safeJson, translateBackendError } from './errors';
import { consumeCodegenStream, type CodegenProgressEvent } from './stream';

export const CODEGEN_GENERATE_PATH = '/v1/codegen/generate';
export const codegenRunPath = (runId: string): string =>
  `/v1/codegen/runs/${encodeURIComponent(runId)}`;

export type CreateGenerateReactCodeToolOptions = {
  /** Base URL of recipes-backend (no trailing slash). */
  recipesBackendBaseUrl: string;
  /**
   * Returns a Bearer JWT, once per call. Usually an `ApiKeyJwtClient`. Gets the request signal so
   * a slow token exchange is aborted with the codegen fetches.
   * @param {object} [options] Per-call options.
   * @param {AbortSignal} [options.signal] Drops this caller's wait when the request is cancelled.
   * @returns {Promise<string>} The Bearer JWT to send.
   */
  getToken: (options?: { signal?: AbortSignal }) => Promise<string>;
  /** Called after a 401 so the next call mints a fresh JWT (clock skew, key rotation, revocation). */
  invalidateToken?: () => void;
  /** Silent by default. Host wires a logger to surface swallowed `onProgress` failures. */
  logger?: Logger;
  /** Override `globalThis.fetch`. Useful for tests. */
  fetcher?: typeof fetch;
  /** Override the tool's name / description (e.g. when restraining the agent's tool selection). */
  overrides?: ToolOverrides;
};

/** Render a codegen result as markdown: explanation + fenced files + threadId footer. */
export function formatCodegenText(result: {
  threadId: string;
  explanation: string;
  files: { filename: string; contents: string }[];
  muiPairing?: MuiPairing;
}): string {
    throw new Error("STUB");
}

export function createGenerateReactCodeTool(options: CreateGenerateReactCodeToolOptions) {
  const recipesBackendBaseUrl = options.recipesBackendBaseUrl.replace(/\/+$/, '');
  const fetcher = options.fetcher ?? globalThis.fetch;

  return wrapTool<typeof inputSchema, typeof outputSchema, CodegenProgressEvent>({
    name: 'generateReactCode',
    description:
      'generates React + Material UI code from a natural-language prompt (optionally grounded in a Figma frame). Returns the generated files plus a short explanation. Requires `MUI_RECIPES_API_KEY`. Pass `threadId` back on subsequent calls to keep multi-turn conversations on the same chat. Pass `muiPairing` to target a specific MUI / MUI X major.',
    ...options.overrides,
    inputSchema,
    outputSchema,
    execute: async (input, context) => {
        throw new Error("STUB");
    },
  });
}

/** The `generateReactCode` tool, as returned by `createGenerateReactCodeTool`. */
export type GenerateReactCodeTool = ReturnType<typeof createGenerateReactCodeTool>;

// Re-export the public codegen types so the barrel only needs this module.
export type { GenerateReactCodeResult } from './schemas';
export type { CodegenProgressEvent };
