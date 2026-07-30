'use client';
import * as React from 'react';
import composeClasses from '@mui/utils/composeClasses';
import { useGridApiContext } from '../../hooks/utils/useGridApiContext';
import type { GridStateColDef } from '../../models/colDef/gridColDef';
import { getDataGridUtilityClass } from '../../constants/gridClasses';
import { useGridRootProps } from '../../hooks/utils/useGridRootProps';
import type { DataGridProcessedProps } from '../../models/props/DataGridProps';

export interface ColumnHeaderMenuIconProps {
  colDef: GridStateColDef;
  columnMenuId: string;
  columnMenuButtonId: string;
  open: boolean;
  iconButtonRef: React.RefObject<HTMLButtonElement | null>;
}

type OwnerState = ColumnHeaderMenuIconProps & {
  classes?: DataGridProcessedProps['classes'];
};

const useUtilityClasses = (ownerState: OwnerState) => {
  const { classes, open } = ownerState;

  const slots = {
    root: ['menuIcon', open && 'menuOpen'],
    button: ['menuIconButton'],
  };

  return composeClasses(slots, getDataGridUtilityClass, classes);
};

export const ColumnHeaderMenuIcon = React.memo((props: ColumnHeaderMenuIconProps) => {
    throw new Error("STUB");
});
