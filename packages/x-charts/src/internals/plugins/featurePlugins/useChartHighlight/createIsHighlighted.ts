import type { HighlightItemIdentifierWithType } from '../../../../models/seriesType';
import type { ComposableChartSeriesType } from '../../../../models/seriesType/composition';
import type { ChartSeriesType, HighlightScope } from '../../../../models/seriesType/config';

function alwaysFalse(): boolean {
    throw new Error("STUB");
}

/**
 * The isHighlighted logic for main charts (those that are identified by an id and a dataIndex)
 */
export function createIsHighlighted<
  SeriesType extends Exclude<ChartSeriesType, 'sankey' | 'heatmap' | 'mapShape'>,
>(
  highlightScope: HighlightScope<SeriesType> | null | undefined,
  highlightedItem: HighlightItemIdentifierWithType<SeriesType> | null,
) {
    throw new Error("STUB");
}
