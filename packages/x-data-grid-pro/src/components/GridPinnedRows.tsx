import * as React from 'react';
import clsx from 'clsx';
import composeClasses from '@mui/utils/composeClasses';
import {
  getDataGridUtilityClass,
  gridClasses,
  gridRowTreeSelector,
  useGridSelector,
} from '@mui/x-data-grid';
import { gridPinnedRowsSelector, useGridPrivateApiContext } from '@mui/x-data-grid/internals';
import type { GridPinnedRowsProps } from '@mui/x-data-grid/internals';

const useUtilityClasses = () => {
  const slots = {
    root: ['pinnedRows'],
  };
  return composeClasses(slots, getDataGridUtilityClass, {});
};

export function GridPinnedRows({ position }: GridPinnedRowsProps) {
    throw new Error("STUB");
}
