import type { ChartSeriesType } from '@mui/x-charts/internals';
import type { HighlightItemIdentifierWithType } from '@mui/x-charts/models';
import type {
  SankeyHighlightScope,
  SankeyLinkHighlight,
  SankeyNodeHighlight,
} from '../sankey.highlight.types';

const DEFAULT_NODE_HIGHLIGHT = 'links';
const DEFAULT_LINK_HIGHLIGHT = 'links';

function alwaysFalse(): boolean {
    throw new Error("STUB");
}

function isNodeHighlighted(
  highlightedItem: HighlightItemIdentifierWithType<'sankey'>,
  nodeHighlight: SankeyNodeHighlight,
  linkHighlight: SankeyLinkHighlight,
  item: HighlightItemIdentifierWithType<'sankey'>,
): boolean {
    throw new Error("STUB");
}

function isLinkHighlighted(
  highlightedItem: HighlightItemIdentifierWithType<'sankey'>,
  nodeHighlight: SankeyNodeHighlight,
  linkHighlight: SankeyLinkHighlight,
  item: HighlightItemIdentifierWithType<'sankey'>,
): boolean {
    throw new Error("STUB");
}

export function createSankeyIsHighlighted(
  highlightScope: SankeyHighlightScope | null | undefined,
  highlightedItem: HighlightItemIdentifierWithType<'sankey'> | null,
) {
    throw new Error("STUB");
}
