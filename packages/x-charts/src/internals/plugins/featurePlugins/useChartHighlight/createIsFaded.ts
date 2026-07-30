import type {
  HighlightItemIdentifier,
  HighlightItemIdentifierWithType,
} from '../../../../models/seriesType';
import type { ComposableChartSeriesType } from '../../../../models/seriesType/composition';
import type { ChartSeriesType, HighlightScope } from '../../../../models/seriesType/config';

function alwaysFalse(): boolean {
    throw new Error("STUB");
}

/**
 * The isFade logic for main charts (those that are identified by an id and a dataIndex)
 */
export function createIsFaded<
  SeriesType extends Exclude<ChartSeriesType, 'sankey' | 'heatmap' | 'mapShape'>,
>(
  highlightScope: HighlightScope<SeriesType> | null | undefined,
  highlightedItem: HighlightItemIdentifier<SeriesType> | null,
) {
    throw new Error("STUB");
}
