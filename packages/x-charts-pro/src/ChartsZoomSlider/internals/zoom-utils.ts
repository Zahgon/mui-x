import {
  selectorChartAxisZoomOptionsLookup,
  selectorChartDrawingArea,
  selectorChartRawAxis,
} from '@mui/x-charts/internals';
import type {
  AxisId,
  ChartState,
  DefaultedXAxis,
  DefaultedYAxis,
  DefaultizedZoomOptions,
  ZoomData,
} from '@mui/x-charts/internals';
import type { ChartDrawingArea } from '@mui/x-charts/hooks';

export function calculateZoomFromPoint(state: ChartState<any>, axisId: AxisId, point: DOMPoint) {
    throw new Error("STUB");
}

export function calculateZoomFromPointImpl(
  drawingArea: ChartDrawingArea,
  axis: Pick<DefaultedXAxis | DefaultedYAxis, 'position' | 'reverse'>,
  zoomOptions: Pick<DefaultizedZoomOptions, 'minStart' | 'maxEnd'>,
  point: Pick<DOMPoint, 'x' | 'y'>,
) {
    throw new Error("STUB");
}

export function calculateZoomStart(
  newStart: number,
  currentZoom: ZoomData,
  options: Pick<DefaultizedZoomOptions, 'minStart' | 'minSpan' | 'maxSpan'>,
) {
    throw new Error("STUB");
}

export function calculateZoomEnd(
  newEnd: number,
  currentZoom: ZoomData,
  options: Pick<DefaultizedZoomOptions, 'maxEnd' | 'minSpan' | 'maxSpan'>,
) {
    throw new Error("STUB");
}
