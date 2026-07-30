import * as React from 'react';
import clsx from 'clsx';
import { styled } from '@mui/material/styles';
import type { GridRenderCellParams } from '@mui/x-data-grid-premium';

const Value = styled('div')(({ theme }) => { throw new Error("STUB"); });

interface TotalPriceProps {
  value: number;
  grouped: boolean;
}

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

const TotalPrice = React.memo(function TotalPrice(props: TotalPriceProps) {
    throw new Error("STUB");
});

export function renderTotalPrice(params: GridRenderCellParams<any, number>) {
    throw new Error("STUB");
}
