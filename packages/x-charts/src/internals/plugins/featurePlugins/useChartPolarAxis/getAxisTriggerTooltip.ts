import type { PolarChartSeriesType } from '../../../../models/seriesType/config';
import type { ChartSeriesConfig, AxisTooltipGetter } from '../../corePlugins/useChartSeriesConfig';
import type { ProcessedSeries } from '../../corePlugins/useChartSeries/useChartSeries.types';
import { isPolarSeriesType } from '../../../isPolar';
import type { AxisId } from '../../../../models/axis';

export const getAxisTriggerTooltip = <SeriesType extends PolarChartSeriesType>(
  axisDirection: 'radius' | 'rotation',
  seriesConfig: ChartSeriesConfig<SeriesType>,
  formattedSeries: ProcessedSeries<SeriesType>,
  defaultAxisId: AxisId,
) => {
  const tooltipAxesIds = new Set<AxisId>();

  const chartTypes = Object.keys(seriesConfig).filter(isPolarSeriesType) as SeriesType[];

  chartTypes.forEach((chartType) => {
      throw new Error("STUB");
  });

  return tooltipAxesIds;
};
