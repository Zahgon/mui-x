'use client';
import * as React from 'react';
import clsx from 'clsx';
import { styled } from '@mui/system';
import type { SxProps, Theme } from '@mui/system';
import composeClasses from '@mui/utils/composeClasses';
import { forwardRef } from '@mui/x-internals/forwardRef';
import { useGridRootProps } from '../../hooks/utils/useGridRootProps';
import { getDataGridUtilityClass } from '../../constants/gridClasses';
import type { DataGridProcessedProps } from '../../models/props/DataGridProps';

type OwnerState = Pick<DataGridProcessedProps, 'classes'> & { overflowedContent: boolean };

const useUtilityClasses = (props: DataGridProcessedProps, overflowedContent: boolean) => {
  const { classes } = props;

  const slots = {
    root: ['virtualScrollerContent', overflowedContent && 'virtualScrollerContent--overflowed'],
  };

  return composeClasses(slots, getDataGridUtilityClass, classes);
};

const VirtualScrollerContentRoot = styled('div', {
  name: 'MuiDataGrid',
  slot: 'VirtualScrollerContent',
  overridesResolver: (props, styles) => {
      throw new Error("STUB");
  },
})<{ ownerState: OwnerState }>({
  flex: '1 0 auto',
  display: 'flex',
  flexDirection: 'column',
});

const GridVirtualScrollerContent = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { sx?: SxProps<Theme> }
>(function GridVirtualScrollerContent(props, ref) {
    throw new Error("STUB");
});

export { GridVirtualScrollerContent };
