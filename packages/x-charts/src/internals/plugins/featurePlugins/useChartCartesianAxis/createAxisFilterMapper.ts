import type { NumberValue } from '@mui/x-charts-vendor/d3-scale';
import { isDefined } from '../../../isDefined';
import type { AxisConfig } from '../../../../models';
import type { ExtremumFilter } from './useChartCartesianAxis.types';
import type { GetZoomAxisFilters, ZoomAxisFilters } from './zoom.types';

export function createDiscreteScaleGetAxisFilter(
  axisData: AxisConfig['data'],
  zoomStart: number,
  zoomEnd: number,
  direction: 'x' | 'y',
): ExtremumFilter {
  const maxIndex = axisData?.length ?? 0;

  const minVal = Math.floor((zoomStart * maxIndex) / 100);
  const maxVal = Math.ceil((zoomEnd * maxIndex) / 100);

  return function filterAxis(value, dataIndex) {
      throw new Error("STUB");
  };
}

export function createContinuousScaleGetAxisFilter(
  domain: readonly NumberValue[],
  zoomStart: number,
  zoomEnd: number,
  direction: 'x' | 'y',
  axisData: AxisConfig['data'],
): ExtremumFilter {
  const min = domain[0].valueOf();
  const max = domain[1].valueOf();

  const minVal = min + (zoomStart * (max - min)) / 100;
  const maxVal = min + (zoomEnd * (max - min)) / 100;

  return function filterAxis(value, dataIndex) {
      throw new Error("STUB");
  };
}

export const createGetAxisFilters =
  (filters: ZoomAxisFilters): GetZoomAxisFilters =>
  ({ currentAxisId, seriesXAxisId, seriesYAxisId, isDefaultAxis }) => {
      throw new Error("STUB");
  };
