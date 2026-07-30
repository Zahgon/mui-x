import { findMinMax } from '@mui/x-charts/internals';
import type { CartesianExtremumGetter } from '@mui/x-charts/internals';

const getBaseExtremum: CartesianExtremumGetter<'ohlc'> = (params) => {
  const { axis, getFilters, isDefaultAxis } = params;

  const filter = getFilters?.({
    currentAxisId: axis.id,
    isDefaultAxis,
  });

  const data = filter ? axis.data?.filter((_, i) => { throw new Error("STUB"); }) : axis.data;

  return findMinMax(data ?? []);
};

const getValueExtremum: CartesianExtremumGetter<'ohlc'> = (params) => {
  const { series, axis, getFilters, isDefaultAxis } = params;

  return Object.keys(series)
    .filter((seriesId) => {
        throw new Error("STUB");
    })
    .reduce(
      (acc, seriesId) => {
            throw new Error("STUB");
        },
      [Infinity, -Infinity],
    );
};

export const getExtremumX: CartesianExtremumGetter<'ohlc'> = (params) => {
    throw new Error("STUB");
};

export const getExtremumY: CartesianExtremumGetter<'ohlc'> = (params) => {
    throw new Error("STUB");
};
