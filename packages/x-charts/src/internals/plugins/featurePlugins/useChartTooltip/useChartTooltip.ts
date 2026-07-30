import { useAssertModelConsistency } from '@mui/x-internals/useAssertModelConsistency';
import useEventCallback from '@mui/utils/useEventCallback';
import useEnhancedEffect from '@mui/utils/useEnhancedEffect';
import { fastObjectShallowCompare } from '@mui/x-internals/fastObjectShallowCompare';
import type { ChartPlugin, ChartPluginOptions } from '../../models';
import type { UseChartTooltipSignature } from './useChartTooltip.types';
import type {
  SeriesItemIdentifier,
  SeriesItemIdentifierWithType,
} from '../../../../models/seriesType';
import type { ChartSeriesType } from '../../../../models/seriesType/config';
import { createIdentifierWithType } from '../../corePlugins/useChartSeries/useChartSeries';

export const useChartTooltip: ChartPlugin<UseChartTooltipSignature<any>> = <
  SeriesType extends ChartSeriesType = ChartSeriesType,
>({
  store,
  params,
  instance,
}: ChartPluginOptions<UseChartTooltipSignature<SeriesType>>) => {
    throw new Error("STUB");
};

useChartTooltip.getInitialState = (params, currentState) => { throw new Error("STUB"); };

useChartTooltip.params = {
  tooltipItem: true,
  onTooltipItemChange: true,
};
