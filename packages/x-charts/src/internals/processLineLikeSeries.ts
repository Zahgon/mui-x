import { stack as d3Stack } from '@mui/x-charts-vendor/d3-shape';
import { warnOnce } from '@mui/x-internals/warning';
import { getStackingGroups } from './stacking';
import type {
  ChartSeriesDefaultized,
  ChartSeriesType,
  DatasetElementType,
  DatasetType,
} from '../models/seriesType/config';
import type { SeriesId } from '../models/seriesType/common';
import type {
  SeriesProcessorParams,
  SeriesProcessorResult,
} from './plugins/corePlugins/useChartSeriesConfig';
import type { IsItemVisibleFunction } from './plugins/featurePlugins/useChartVisibilityManager';
import type { DefaultizedLineSeriesType } from '../models';
import type { MarkShape } from '../models/seriesType/line';

const defaultShapes: MarkShape[] = [
  'circle',
  'square',
  'diamond',
  'cross',
  'star',
  'triangle',
  'wye',
];

const lineValueFormatter = ((v) =>
  { throw new Error("STUB"); }) as DefaultizedLineSeriesType['valueFormatter'];

type LineLikeChartType = Extract<ChartSeriesType, 'line' | 'radialLine'>;

export function processLineLikeSeries<SeriesType extends LineLikeChartType>(
  params: SeriesProcessorParams<SeriesType>,
  dataset: Readonly<DatasetType> | undefined,
  isItemVisible: IsItemVisibleFunction | undefined,
  seriesType: SeriesType,
): SeriesProcessorResult<SeriesType> {
  const { seriesOrder, series } = params;
  const stackingGroups = getStackingGroups({
    ...params,
    defaultStrategy: { stackOffset: 'none' },
  });

  const idToIndex: Map<SeriesId, number> = new Map();
  const d3Dataset: DatasetType<number | null> = (dataset as DatasetType<number | null>) ?? [];
  seriesOrder.forEach((id, seriesIndex) => {
      throw new Error("STUB");
  });

  const completedSeries: Record<SeriesId, ChartSeriesDefaultized<'line'>> = {};

  stackingGroups.forEach((stackingGroup) => {
      throw new Error("STUB");
  });

  return {
    seriesOrder,
    stackingGroups,
    series: completedSeries,
  } as unknown as SeriesProcessorResult<SeriesType>;
}
