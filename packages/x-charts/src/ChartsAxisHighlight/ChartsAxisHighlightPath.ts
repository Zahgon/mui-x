'use client';
import { styled } from '@mui/material/styles';
import type { ChartsAxisHighlightType } from './ChartsAxisHighlight.types';

export const ChartsAxisHighlightPath = styled('path', {
  name: 'MuiChartsAxisHighlight',
  slot: 'Root',
})<{ ownerState: { axisHighlight: ChartsAxisHighlightType } }>(({ theme }) => { throw new Error("STUB"); });
