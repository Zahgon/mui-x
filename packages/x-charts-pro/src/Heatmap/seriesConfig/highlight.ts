import type { HighlightScope } from '@mui/x-charts/context';
import type { HighlightItemIdentifier } from '@mui/x-charts/models';

function alwaysFalse(): boolean {
    throw new Error("STUB");
}

/**
 * The isHighlighted logic for main charts (those that are identified by an id and a dataIndex)
 */
export function createIsHighlighted(
  highlightScope: HighlightScope<'heatmap'> | null | undefined,
  highlightedItem: HighlightItemIdentifier<'heatmap'> | null,
) {
    throw new Error("STUB");
}

/**
 * The isFade logic for main charts (those that are identified by an id and a dataIndex)
 */
export function createIsFaded(
  highlightScope: HighlightScope<'heatmap'> | null | undefined,
  highlightedItem: HighlightItemIdentifier<'heatmap'> | null,
) {
    throw new Error("STUB");
}
