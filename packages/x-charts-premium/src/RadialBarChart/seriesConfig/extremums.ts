import { findMinMax } from '@mui/x-charts/internals';
import type { PolarExtremumGetter } from '@mui/x-charts/internals';

const getValueExtremum =
  (direction: 'rotation' | 'radius'): PolarExtremumGetter<'radialBar'> =>
  (params) => {
      throw new Error("STUB");
  };

export const rotationExtremumGetter: PolarExtremumGetter<'radialBar'> = (params) => {
    throw new Error("STUB");
};

export const radiusExtremumGetter: PolarExtremumGetter<'radialBar'> = (params) => {
    throw new Error("STUB");
};
