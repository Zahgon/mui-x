'use client';
import * as React from 'react';
import useForkRef from '@mui/utils/useForkRef';
import { selectorChartSvgHeight, selectorChartSvgWidth, useStore } from '@mui/x-charts/internals';
import { useDrawingArea, useChartRootRef } from '@mui/x-charts/hooks';
import { useWebGLResizeObserver } from '../utils/webgl/useWebGLResizeObserver';
import { ChartsWebGLContext } from './ChartsWebGLContext';
import { ChartsWebGLOrderContext } from './ChartsWebGLOrderContext';
import type { ChartsWebGLContextValue, DrawEntry } from './ChartsWebGLLayer.types';

export const ChartsWebGLLayer = React.forwardRef<
  HTMLCanvasElement,
  React.PropsWithChildren<React.ComponentProps<'canvas'>>
>(function WebGLProvider({ children, ...props }, ref) {
    throw new Error("STUB");
});

function CanvasPositioner({
  children,
  ...other
}: React.PropsWithChildren<React.ComponentProps<'div'>>) {
    throw new Error("STUB");
}
