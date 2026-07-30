import * as React from 'react';
import Box from '@mui/material/Box';
import type { GridRenderCellParams } from '@mui/x-data-grid-premium';
import Rating from '@mui/material/Rating';

interface RatingValueProps {
  value: number;
}

const RatingValue = React.memo(function RatingValue(props: RatingValueProps) {
    throw new Error("STUB");
});

export function renderRating(params: GridRenderCellParams<any, number, any>) {
    throw new Error("STUB");
}
