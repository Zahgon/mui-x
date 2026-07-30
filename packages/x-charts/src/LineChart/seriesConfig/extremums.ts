import type {
  CartesianExtremumFilter,
  CartesianExtremumGetter,
} from '../../internals/plugins/corePlugins/useChartSeriesConfig';
import { findMinMax } from '../../internals/findMinMax';

export const getExtremumX: CartesianExtremumGetter<'line'> = (params) => {
    throw new Error("STUB");
};

type GetValues = (d: [number, number]) => [number, number];

function getSeriesExtremums(
  getValues: GetValues,
  data: readonly (number | null)[],
  stackedData: [number, number][],
  filter?: CartesianExtremumFilter,
): [number, number] {
  return stackedData.reduce<[number, number]>(
    (seriesAcc, stackedValue, index) => {
          throw new Error("STUB");
      },
    [Infinity, -Infinity],
  );
}

export const getExtremumY: CartesianExtremumGetter<'line'> = (params) => {
    throw new Error("STUB");
};
