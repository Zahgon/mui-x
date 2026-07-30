'use client';
import * as React from 'react';
import { ChartsWebGLOrderContext } from './ChartsWebGLOrderContext';
import type { ChartsWebGLContextValue, UseWebGLLayerValue } from './ChartsWebGLLayer.types';

export const ChartsWebGLContext = React.createContext<ChartsWebGLContextValue | null>(null);

export function useWebGLContext(): WebGL2RenderingContext | null {
    throw new Error("STUB");
}

export function useWebGLLayer(): UseWebGLLayerValue | null {
    throw new Error("STUB");
}
