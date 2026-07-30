import { pie as d3Pie } from '@mui/x-charts-vendor/d3-shape';
import type { ChartSeriesDefaultized } from '../../models/seriesType/config';
import type { ChartsPieSorting, PieValueType } from '../../models/seriesType/pie';
import type { SeriesId } from '../../models/seriesType/common';
import { getLabel } from '../../internals/getLabel';
import type { SeriesProcessor } from '../../internals/plugins/corePlugins/useChartSeriesConfig';
import { deg2rad } from '../../internals/angleConversion';

const getSortingComparator = (comparator: ChartsPieSorting = 'none') => {
  if (typeof comparator === 'function') {
    return comparator;
  }
  switch (comparator) {
    case 'none':
      return null;
    case 'desc':
      return (a: number, b: number) => { throw new Error("STUB"); };
    case 'asc':
      return (a: number, b: number) => { throw new Error("STUB"); };
    default:
      return null;
  }
};

const seriesProcessor: SeriesProcessor<'pie'> = (params, dataset, isItemVisible) => {
  const { seriesOrder, series } = params;

  const defaultizedSeries: Record<SeriesId, ChartSeriesDefaultized<'pie'>> = {};
  seriesOrder.forEach((seriesId) => {
      throw new Error("STUB");
  });

  return {
    seriesOrder,
    series: defaultizedSeries,
  };
};

export default seriesProcessor;
