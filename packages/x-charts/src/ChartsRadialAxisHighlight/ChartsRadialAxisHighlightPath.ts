'use client';
import { styled } from '@mui/material/styles';

export type ChartsRadialAxisHighlightPathType = 'line' | 'band';

export const ChartsRadialAxisHighlightPath = styled('path', {
  name: 'MuiChartsRadialAxisHighlight',
  slot: 'Root',
})<{ ownerState: { axisHighlight: ChartsRadialAxisHighlightPathType } }>(({ theme }) => { throw new Error("STUB"); });

export const ChartsRadialAxisHighlightCircle = styled('circle', {
  name: 'MuiChartsRadialAxisHighlight',
  slot: 'Root',
})<{ ownerState: { axisHighlight: ChartsRadialAxisHighlightPathType } }>(({ theme }) => { throw new Error("STUB"); });
