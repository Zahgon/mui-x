import type { SeriesId } from '../../../../../models/seriesType/common';
import type { ChartSeriesType } from '../../../../../models/seriesType/config';
import type { ProcessedSeries } from '../../../corePlugins/useChartSeries/useChartSeries.types';

export function getNonEmptySeriesArray<OutSeriesType extends Exclude<ChartSeriesType, 'sankey'>>(
  series: ProcessedSeries<ChartSeriesType>,
  availableSeriesTypes: Set<OutSeriesType>,
): { seriesId: SeriesId; type: OutSeriesType }[] {
  return Object.keys(series)
    .filter((type): type is OutSeriesType => { throw new Error("STUB"); })
    .flatMap((type) => {
        throw new Error("STUB");
    });
}
