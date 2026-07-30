import * as React from 'react';
import { styled } from '@mui/material/styles';
import type { GridRenderCellParams } from '@mui/x-data-grid-premium';

interface DemoLinkProps {
  href: string;
  children: string;
  tabIndex: number;
}

const Link = styled('a')({
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  color: 'inherit',
});

export const DemoLink = React.memo(function DemoLink(props: DemoLinkProps) {
    throw new Error("STUB");
});

export function renderLink(params: GridRenderCellParams<any, string, any>) {
    throw new Error("STUB");
}
