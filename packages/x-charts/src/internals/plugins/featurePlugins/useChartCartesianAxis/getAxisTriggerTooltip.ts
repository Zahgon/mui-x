import type { CartesianChartSeriesType } from '../../../../models/seriesType/config';
import type { ChartSeriesConfig, AxisTooltipGetter } from '../../corePlugins/useChartSeriesConfig';
import type { ProcessedSeries } from '../../corePlugins/useChartSeries/useChartSeries.types';
import { isCartesianSeriesType } from '../../../isCartesian';
import type { AxisId } from '../../../../models/axis';

export const getAxisTriggerTooltip = <SeriesType extends CartesianChartSeriesType>(
  axisDirection: 'x' | 'y',
  seriesConfig: ChartSeriesConfig<SeriesType>,
  formattedSeries: ProcessedSeries<SeriesType>,
  defaultAxisId: AxisId,
) => {
  const tooltipAxesIds = new Set<AxisId>();

  const chartTypes = Object.keys(seriesConfig).filter(isCartesianSeriesType) as SeriesType[];

  chartTypes.forEach((chartType) => {
      throw new Error("STUB");
  });
  return tooltipAxesIds;
};
