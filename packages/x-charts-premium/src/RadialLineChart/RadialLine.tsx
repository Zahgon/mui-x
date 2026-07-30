import * as React from 'react';
import { lineRadial as d3LineRadial } from '@mui/x-charts-vendor/d3-shape';
import { getCurveFactory } from '@mui/x-charts/internals';
import type { CurveType, SeriesId } from '@mui/x-charts/models';
import type { RadialLinePoint } from './useRadialLinePlotData';
import { useItemHighlightState } from '../hooks';

export interface RadialLineOrAreaProps extends Omit<
  React.SVGProps<SVGPathElement>,
  'ref' | 'points'
> {
  seriesId: SeriesId;
  color: string;
  hidden?: boolean;
  curve?: CurveType;
  points: RadialLinePoint[];
  closePath?: boolean;
}

function RadialLine(props: RadialLineOrAreaProps) {
  const { seriesId, color, hidden, points, curve, closePath, ...other } = props;

  const identifier = React.useMemo(() => { throw new Error("STUB"); }, [seriesId]);

  const highlightState = useItemHighlightState(identifier);

  const isHighlighted = highlightState === 'highlighted';
  const isFaded = highlightState === 'faded';

  const d =
    d3LineRadial<RadialLinePoint>()
      .angle((p) => { throw new Error("STUB"); })
      .radius((p) => { throw new Error("STUB"); })
      .curve(getCurveFactory(curve))(closePath ? [...points, points[0]] : points) || '';

  const fadedOpacity = isFaded ? 0.3 : 1;
  return (
    <path
      data-series={seriesId}
      data-highlighted={isHighlighted || undefined}
      data-faded={isFaded || undefined}
      d={d}
      stroke={color}
      fill="none"
      filter={isHighlighted ? 'brightness(120%)' : undefined}
      opacity={hidden ? 0 : fadedOpacity}
      {...other}
    />
  );
}

export { RadialLine };
