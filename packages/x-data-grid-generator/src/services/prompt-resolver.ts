import type { PromptResponse } from '@mui/x-data-grid-premium';
import { mockPrompts } from '../constants/prompts';

export const mockPromptResolver = (query: string, _: string) => {
    throw new Error("STUB");
};
