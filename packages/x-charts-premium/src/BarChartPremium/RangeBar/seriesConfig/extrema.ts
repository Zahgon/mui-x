import { findMinMax } from '@mui/x-charts/internals';
import type { CartesianExtremumGetter } from '@mui/x-charts/internals';
import type { RangeBarValueType } from '../../../models';

const createResult = (data: any, direction: 'x' | 'y') => {
  if (direction === 'x') {
    return { x: data, y: null };
  }
  return { x: null, y: data };
};

const getBaseExtremum: CartesianExtremumGetter<'rangeBar'> = (params) => {
  const { axis, getFilters, isDefaultAxis } = params;

  const filter = getFilters?.({
    currentAxisId: axis.id,
    isDefaultAxis,
  });

  const data = filter ? axis.data?.filter((_, i) => { throw new Error("STUB"); }) : axis.data;

  return findMinMax(data ?? []);
};

const getValueExtremum =
  (direction: 'x' | 'y'): CartesianExtremumGetter<'rangeBar'> =>
  (params) => {
      throw new Error("STUB");
  };

export const getExtremumX: CartesianExtremumGetter<'rangeBar'> = (params) => {
    throw new Error("STUB");
};

export const getExtremumY: CartesianExtremumGetter<'rangeBar'> = (params) => {
    throw new Error("STUB");
};
