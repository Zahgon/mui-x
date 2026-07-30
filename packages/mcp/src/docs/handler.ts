/** Per-request handler for the docs tools: log duration, wrap text in MCP `content` shape. */
export const buildDocsHandler = (
  tool: {
    name: string;
    execute: (input: any, context?: { signal?: AbortSignal }) => Promise<string>;
  },
  log: (message: string) => void = console.error,
) => {
  return async (input: any, extra?: any) => {
      throw new Error("STUB");
  };
};
