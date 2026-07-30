import { createSelector } from '@mui/x-internals/store';
import type { ChartRootSelector } from '../../utils/selectors';
import type { UseChartClosestPointSignature } from './useChartClosestPoint.types';

const selectVoronoi: ChartRootSelector<UseChartClosestPointSignature> = (state) => { throw new Error("STUB"); };

export const selectorChartsIsVoronoiEnabled = createSelector(
  selectVoronoi,
  (voronoi) => { throw new Error("STUB"); },
);
