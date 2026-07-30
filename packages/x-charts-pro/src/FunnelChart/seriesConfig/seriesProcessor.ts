import type { SeriesProcessor, ChartSeriesDefaultized } from '@mui/x-charts/internals';
import type { FunnelCurveType } from '../curves';

const createPoint = ({
  main,
  other,
  inverse,
  useBandWidth,
  stackOffset,
}: {
  main: number;
  other: number;
  inverse: boolean;
  useBandWidth: boolean;
  stackOffset: number;
}) =>
  inverse
    ? { x: other, y: main, useBandWidth, stackOffset }
    : { x: main, y: other, useBandWidth, stackOffset };

const getFunnelDirection = (
  funnelDirection: 'increasing' | 'decreasing' | 'auto' | undefined,
  curve: FunnelCurveType | undefined,
  firstValue: number | undefined | null,
  lastValue: number | undefined | null,
): 'increasing' | 'decreasing' => {
  if (
    curve !== 'step' &&
    curve !== 'linear-sharp' &&
    (funnelDirection === 'increasing' || funnelDirection === 'decreasing')
  ) {
    return funnelDirection;
  }

  // Implicit check for null or undefined values
  return firstValue != null && lastValue != null && firstValue < lastValue
    ? 'increasing'
    : 'decreasing';
};

const seriesProcessor: SeriesProcessor<'funnel'> = (params) => {
  const { seriesOrder, series } = params;

  const completedSeries: Record<string, ChartSeriesDefaultized<'funnel'>> = {};

  const isHorizontal = seriesOrder.some((seriesId) => { throw new Error("STUB"); });

  seriesOrder.forEach((seriesId) => {
      throw new Error("STUB");
  });

  return {
    seriesOrder,
    series: completedSeries,
  };
};

export default seriesProcessor;
