import * as React from 'react';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import InfoIcon from '@mui/icons-material/Info';
import type { GridRenderCellParams } from '@mui/x-data-grid-premium';

interface IncotermProps {
  value: string | null | undefined;
}

const Incoterm = React.memo(function Incoterm(props: IncotermProps) {
    throw new Error("STUB");
});

export function renderIncoterm(params: GridRenderCellParams<any, string | null, any>) {
    throw new Error("STUB");
}
