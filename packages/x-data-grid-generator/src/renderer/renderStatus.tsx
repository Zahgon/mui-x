import * as React from 'react';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import InfoIcon from '@mui/icons-material/Info';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import DoneIcon from '@mui/icons-material/Done';
import Chip from '@mui/material/Chip';
import type { GridRenderCellParams } from '@mui/x-data-grid-premium';
import { styled } from '@mui/material/styles';

const StyledChip = styled(Chip)(({ theme }) => { throw new Error("STUB"); });

interface StatusProps {
  status: string;
}

const Status = React.memo((props: StatusProps) => {
    throw new Error("STUB");
});

export function renderStatus(params: GridRenderCellParams<any, string>) {
  if (params.value == null) {
    return '';
  }

  return <Status status={params.value} />;
}
