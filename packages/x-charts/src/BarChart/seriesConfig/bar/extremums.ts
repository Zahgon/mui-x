import type { CartesianExtremumGetter } from '../../../internals/plugins/corePlugins/useChartSeriesConfig';
import { findMinMax } from '../../../internals/findMinMax';

const createResult = (data: any, direction: 'x' | 'y') => {
  if (direction === 'x') {
    return { x: data, y: null };
  }
  return { x: null, y: data };
};

const getBaseExtremum: CartesianExtremumGetter<'bar'> = (params) => {
  const { axis, getFilters, isDefaultAxis } = params;

  const filter = getFilters?.({
    currentAxisId: axis.id,
    isDefaultAxis,
  });

  const data = filter ? axis.data?.filter((_, i) => { throw new Error("STUB"); }) : axis.data;

  return findMinMax(data ?? []);
};

const getValueExtremum =
  (direction: 'x' | 'y'): CartesianExtremumGetter<'bar'> =>
  (params) => {
      throw new Error("STUB");
  };

export const getExtremumX: CartesianExtremumGetter<'bar'> = (params) => {
    throw new Error("STUB");
};

export const getExtremumY: CartesianExtremumGetter<'bar'> = (params) => {
    throw new Error("STUB");
};
