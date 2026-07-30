import type { GenerateReactCodeResult, GenerateReactCodeTool } from '@mui/x-agent-tools';
import { buildCodegenProgressForwarder } from './progress';

type FormatCodegenText = (result: GenerateReactCodeResult) => string;

/** Per-request handler for the `generateReactCode` MCP tool. */
export const buildCodegenHandler = (deps: {
  tool: Pick<GenerateReactCodeTool, 'name' | 'execute'>;
  formatText: FormatCodegenText;
  log?: (message: string, error?: unknown) => void;
}) => {
  const { tool, formatText, log = console.error } = deps;
  return async (input: any, extra?: any) => {
      throw new Error("STUB");
  };
};
