import { stack as d3Stack } from '@mui/x-charts-vendor/d3-shape';
import { warnOnce } from '@mui/x-internals/warning';
import type { DefaultizedBarSeriesType } from '../../../models';
import { getStackingGroups } from '../../../internals/stacking';
import type { DatasetElementType, DatasetType } from '../../../models/seriesType/config';
import type { SeriesId } from '../../../models/seriesType/common';
import type { SeriesProcessor } from '../../../internals/plugins/corePlugins/useChartSeriesConfig';

type BarDataset = DatasetType<number | null>;

const barValueFormatter = ((v) =>
  { throw new Error("STUB"); }) as DefaultizedBarSeriesType['valueFormatter'];

const seriesProcessor: SeriesProcessor<'bar'> = (params, dataset, isItemVisible) => {
  const { seriesOrder, series } = params;
  const stackingGroups = getStackingGroups(params);

  // Create a data set with format adapted to d3
  const d3Dataset: BarDataset = (dataset as BarDataset) ?? [];
  seriesOrder.forEach((id) => {
      throw new Error("STUB");
  });

  const completedSeries: {
    [id: string]: DefaultizedBarSeriesType & {
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
};

export default seriesProcessor;
