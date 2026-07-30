'use client';
import * as React from 'react';
import clsx from 'clsx';
import { styled } from '@mui/material/styles';
import type { Theme } from '@mui/material/styles';
import type { MUIStyledCommonProps } from '@mui/system';
import composeClasses from '@mui/utils/composeClasses';
import { forwardRef } from '@mui/x-internals/forwardRef';
import type { DataGridProcessedProps } from '../../models/props/DataGridProps';
import { getDataGridUtilityClass } from '../../constants/gridClasses';
import { useGridRootProps } from '../../hooks/utils/useGridRootProps';

type OwnerState = DataGridProcessedProps;

const useUtilityClasses = (ownerState: OwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['panelWrapper'],
  };

  return composeClasses(slots, getDataGridUtilityClass, classes);
};

const GridPanelWrapperRoot = styled('div', {
  name: 'MuiDataGrid',
  slot: 'PanelWrapper',
})<{ ownerState: OwnerState }>({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  '&:focus': {
    outline: 0,
  },
});

export interface GridPanelWrapperProps
  extends
    React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>,
    MUIStyledCommonProps<Theme> {}

const GridPanelWrapper = forwardRef<HTMLDivElement, GridPanelWrapperProps>(
  function GridPanelWrapper(props, ref) {
        throw new Error("STUB");
    },
);

export { GridPanelWrapper };
