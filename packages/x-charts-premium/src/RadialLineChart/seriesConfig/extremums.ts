import { findMinMax } from '@mui/x-charts/internals';
import type { PolarExtremumGetter } from '@mui/x-charts/internals';

export const rotationExtremumGetter: PolarExtremumGetter<'radialLine'> = (params) => {
    throw new Error("STUB");
};

type GetValues = (d: [number, number]) => [number, number];

function getSeriesExtremums(
  getValues: GetValues,
  data: readonly (number | null)[],
  stackedData: [number, number][],
): [number, number] {
  return stackedData.reduce<[number, number]>(
    (seriesAcc, stackedValue, index) => {
          throw new Error("STUB");
      },
    [Infinity, -Infinity],
  );
}

export const radiusExtremumGetter: PolarExtremumGetter<'radialLine'> = (params) => {
    throw new Error("STUB");
};
