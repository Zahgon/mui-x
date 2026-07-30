import * as React from 'react';
import clsx from 'clsx';
import type { GridRenderCellParams } from '@mui/x-data-grid-premium';
import { styled } from '@mui/material/styles';

interface ProgressBarProps {
  value: number;
}

const Center = styled('div')({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
});

const Element = styled('div')(({ theme }) => { throw new Error("STUB"); });

const Value = styled('div')({
  position: 'absolute',
  lineHeight: '24px',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
});

const Bar = styled('div')({
  height: '100%',
  '&.low': {
    backgroundColor: '#f44336',
  },
  '&.medium': {
    backgroundColor: '#efbb5aa3',
  },
  '&.high': {
    backgroundColor: '#088208a3',
  },
});

const ProgressBar = React.memo(function ProgressBar(props: ProgressBarProps) {
    throw new Error("STUB");
});

export function renderProgress(params: GridRenderCellParams<any, number, any>) {
    throw new Error("STUB");
}
