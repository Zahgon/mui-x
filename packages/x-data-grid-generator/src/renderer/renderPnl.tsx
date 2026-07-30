import * as React from 'react';
import clsx from 'clsx';
import { styled } from '@mui/material/styles';
import type { GridRenderCellParams } from '@mui/x-data-grid-premium';

const Value = styled('div')(({ theme }) => { throw new Error("STUB"); });

function pnlFormatter(value: number) {
  return value < 0 ? `(${Math.abs(value).toLocaleString()})` : value.toLocaleString();
}

interface PnlProps {
  value: number;
}

const Pnl = React.memo(function Pnl(props: PnlProps) {
    throw new Error("STUB");
});

export function renderPnl(params: GridRenderCellParams<any, number, any>) {
    throw new Error("STUB");
}
