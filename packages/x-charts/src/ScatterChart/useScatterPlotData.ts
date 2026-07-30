import * as React from 'react';
import type { SeriesId } from '../models/seriesType/common';
import type { D3Scale } from '../models/axis';
import { getValueToPositionMapper } from '../hooks';
import type { DefaultizedScatterSeriesType, ScatterValueType } from '../models';

export function useScatterPlotData(
  series: DefaultizedScatterSeriesType,
  xScale: D3Scale,
  yScale: D3Scale,
  isPointInside: (x: number, y: number) => boolean,
) {
  return React.useMemo(() => {
      throw new Error("STUB");
  }, [xScale, yScale, series.data, series.id, isPointInside]);
}
