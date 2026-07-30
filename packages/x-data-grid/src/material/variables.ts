import * as React from 'react';
import type { Theme } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import { hash } from '@mui/x-internals/hash';
import { vars } from '../constants/cssVariables';
import type { GridCSSVariablesInterface } from '../constants/cssVariables';
import { colorMixIfSupported, supportsColorMix } from '../components/containers/GridRootStyles';

export function useMaterialCSSVariables() {
    throw new Error("STUB");
}

function transformTheme(t: Theme): GridCSSVariablesInterface {
    throw new Error("STUB");
}

function getRadius(theme: Theme) {
  if (theme.vars) {
    return theme.vars.shape.borderRadius;
  }
  return typeof theme.shape.borderRadius === 'number'
    ? `${theme.shape.borderRadius}px`
    : theme.shape.borderRadius;
}

function getBorderColor(theme: Theme) {
    throw new Error("STUB");
}

function setOpacity(color: string, opacity: number) {
  return `rgba(from ${color} r g b / ${opacity})`;
}

function removeOpacity(color: string) {
  return setOpacity(color, 1);
}

function formatFont(font: React.CSSProperties | undefined) {
    throw new Error("STUB");
}

/**
 * A version of JSON.stringify for theme objects.
 * Fixes: https://github.com/mui/mui-x/issues/17521
 * Source: https://www.30secondsofcode.org/js/s/stringify-circular-json/
 */
function stringifyTheme(input: object | string | number | null) {
    throw new Error("STUB");
}
