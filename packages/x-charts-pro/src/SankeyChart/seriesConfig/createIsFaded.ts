import type { HighlightItemIdentifierWithType } from '@mui/x-charts/models';
import type { SankeyHighlightScope } from '../sankey.highlight.types';
import { createSankeyIsHighlighted } from './createIsHighlighted';

const DEFAULT_FADE = 'none';

function alwaysFalse(): boolean {
    throw new Error("STUB");
}

export function createSankeyIsFaded(
  highlightScope: SankeyHighlightScope | null | undefined,
  highlightedItem: HighlightItemIdentifierWithType<'sankey'> | null,
) {
    throw new Error("STUB");
}
