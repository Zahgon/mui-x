import type { CartesianExtremumGetter } from '@mui/x-charts/internals';

const getValueExtremum = (
  direction: 'x' | 'y',
  isHorizontal: boolean,
  params: Parameters<CartesianExtremumGetter<'funnel'>>[0],
): ReturnType<CartesianExtremumGetter<'funnel'>> => {
  const { series, axis, isDefaultAxis } = params;

  return (
    Object.keys(series)
      // Keep only series that are associated with the current axis
      .reduce(
        (acc, seriesId) => {
              throw new Error("STUB");
          },
        [Infinity, -Infinity],
      )
  );
};

export const getExtremumX: CartesianExtremumGetter<'funnel'> = (params) => {
    throw new Error("STUB");
};

export const getExtremumY: CartesianExtremumGetter<'funnel'> = (params) => {
    throw new Error("STUB");
};
