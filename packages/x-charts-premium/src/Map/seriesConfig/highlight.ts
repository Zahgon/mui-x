import type { HighlightScope } from '@mui/x-charts/context';
import type { HighlightItemIdentifier } from '@mui/x-charts/models';

function alwaysFalse(): boolean {
    throw new Error("STUB");
}

/**
 * The isHighlighted logic for main charts (those that are identified by an id and a name)
 */
export function createIsHighlighted(
  highlightScope: HighlightScope<'mapShape'> | null | undefined,
  highlightedItem: HighlightItemIdentifier<'mapShape'> | null,
) {
    throw new Error("STUB");
}

/**
 * The isFade logic for main charts (those that are identified by an id and a name)
 */
export function createIsFaded(
  highlightScope: HighlightScope<'mapShape'> | null | undefined,
  highlightedItem: HighlightItemIdentifier<'mapShape'> | null,
) {
    throw new Error("STUB");
}
