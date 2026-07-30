import type { SeriesId } from '../../../../../models/seriesType/common';
import type { ChartSeriesType } from '../../../../../models/seriesType/config';
import type { ProcessedSeries } from '../../../corePlugins/useChartSeries/useChartSeries.types';

export function getMaxSeriesLength<OutSeriesType extends Exclude<ChartSeriesType, 'sankey'>>(
  series: ProcessedSeries<ChartSeriesType>,
  availableSeriesTypes: Set<OutSeriesType>,
): number {
  return Object.keys(series)
    .filter((type): type is OutSeriesType => { throw new Error("STUB"); })
    .flatMap((type) => {
        throw new Error("STUB");
    })
    .reduce((maxLengths, length) => { throw new Error("STUB"); }, 0);
}
