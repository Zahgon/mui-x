import { warnOnce } from '@mui/x-internals/warning';
import { useAssertModelConsistency } from '@mui/x-internals/useAssertModelConsistency';
import useEventCallback from '@mui/utils/useEventCallback';
import useEnhancedEffect from '@mui/utils/useEnhancedEffect';
import { fastObjectShallowCompare } from '@mui/x-internals/fastObjectShallowCompare';
import type { ChartPluginOptions, ChartResponse, ChartPlugin } from '../../models';
import type { UseChartHighlightSignature } from './useChartHighlight.types';
import type {
  HighlightItemIdentifier,
  HighlightItemIdentifierWithType,
  SeriesItemIdentifier,
  SeriesItemIdentifierWithType,
} from '../../../../models/seriesType';
import type { ChartSeriesType } from '../../../../models/seriesType/config';
import { createIdentifierWithType } from '../../corePlugins/useChartSeries/useChartSeries';
import { cleanIdentifier } from '../../corePlugins/useChartSeriesConfig/utils/cleanIdentifier';

export const useChartHighlight: ChartPlugin<UseChartHighlightSignature<any>> = <
  SeriesType extends ChartSeriesType = ChartSeriesType,
>({
  store,
  params,
  instance,
}: ChartPluginOptions<UseChartHighlightSignature<SeriesType>>): ChartResponse<
  UseChartHighlightSignature<SeriesType>
> => {
    throw new Error("STUB");
};

useChartHighlight.getInitialState = (params, currentState) => { throw new Error("STUB"); };

useChartHighlight.params = {
  highlightedItem: true,
  onHighlightChange: true,
};
