import { stack as d3Stack } from '@mui/x-charts-vendor/d3-shape';
import { warnOnce } from '@mui/x-internals/warning';
import { getStackingGroups } from '@mui/x-charts/internals';
import type {
  SeriesProcessorParams,
  SeriesProcessorResult,
  IsItemVisibleFunction,
  DatasetElementType,
  DatasetType,
} from '@mui/x-charts/internals';
import type { SeriesId } from '@mui/x-charts/models';
import type { DefaultizedRadialBarSeriesType } from '../../models/seriesType/radialBar';

const radialBarValueFormatter = ((v) =>
  { throw new Error("STUB"); }) as DefaultizedRadialBarSeriesType['valueFormatter'];

function seriesProcessor(
  params: SeriesProcessorParams<'radialBar'>,
  dataset?: Readonly<DatasetType>,
  isItemVisible?: IsItemVisibleFunction,
): SeriesProcessorResult<'radialBar'> {
  const { seriesOrder, series } = params;
  const stackingGroups = getStackingGroups(params);

  // Create a data set with format adapted to d3
  const d3Dataset: DatasetType<number | null> = (dataset as DatasetType<number | null>) ?? [];
  seriesOrder.forEach((id) => {
      throw new Error("STUB");
  });

  const completedSeries: {
    [id: string]: DefaultizedRadialBarSeriesType & {
      visibleStackedData: [number, number][];
      stackedData: [number, number][];
    };
  } = {};

  stackingGroups.forEach((stackingGroup) => {
      throw new Error("STUB");
  });

  return {
    seriesOrder,
    stackingGroups,
    series: completedSeries,
  };
}

export default seriesProcessor;
