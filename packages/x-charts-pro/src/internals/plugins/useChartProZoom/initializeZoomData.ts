'use client';
import type { AxisId, DefaultizedZoomOptions, ZoomData } from '@mui/x-charts/internals';

// This is helpful to avoid the need to provide the possibly auto-generated id for each axis.
export function initializeZoomData(
  options: Record<AxisId, Pick<DefaultizedZoomOptions, 'axisId' | 'minStart' | 'maxEnd'>>,
  zoomData?: readonly ZoomData[],
) {
  const zoomDataMap = new Map<AxisId, ZoomData>();

  zoomData?.forEach((zoom) => {
      throw new Error("STUB");
  });

  return Object.values(options).map(({ axisId, minStart: start, maxEnd: end }) => {
      throw new Error("STUB");
  });
}
