'use client';
import * as React from 'react';
import { arc as d3Arc } from '@mui/x-charts-vendor/d3-shape';
import { styled } from '@mui/material/styles';
import clsx from 'clsx';
import { useGaugeState } from './GaugeProvider';
import { gaugeClasses } from './gaugeClasses';

const StyledPath = styled('path', {
  name: 'MuiGauge',
  slot: 'ReferenceArc',
})(({ theme }) => { throw new Error("STUB"); });

export function GaugeReferenceArc({ className, ...other }: React.ComponentProps<'path'>) {
    throw new Error("STUB");
}
