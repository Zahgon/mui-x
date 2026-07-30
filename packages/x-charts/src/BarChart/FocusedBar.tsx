'use client';
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { useFocusedItem } from '../hooks/useFocusedItem';
import { useBarSeriesContext, useXAxes, useYAxes } from '../hooks';
import { createGetBarDimensions } from '../internals/createGetBarDimensions';

export function FocusedBar(props: React.SVGAttributes<SVGRectElement>) {
    throw new Error("STUB");
}
