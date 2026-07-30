'use client';
import * as React from 'react';
import clsx from 'clsx';
import { styled } from '@mui/material/styles';
import useForkRef from '@mui/utils/useForkRef';
import composeClasses from '@mui/utils/composeClasses';
import { useRtl } from '@mui/system/RtlProvider';
import { forwardRef } from '@mui/x-internals/forwardRef';
import { useGridApiContext } from '../hooks/utils/useGridApiContext';
import { useGridRootProps } from '../hooks/utils/useGridRootProps';
import {
  gridColumnPositionsSelector,
  gridDimensionsSelector,
  gridVisibleColumnDefinitionsSelector,
  gridVisiblePinnedColumnDefinitionsSelector,
  useGridEvent,
  useGridSelector,
} from '../hooks';
import { PinnedColumnPosition } from '../internals/constants';
import { gridColumnsTotalWidthSelector } from '../hooks/features/dimensions/gridDimensionsSelectors';
import type { GridColDef, GridEventListener } from '../models';
import type { DataGridProcessedProps } from '../models/props/DataGridProps';
import { getDataGridUtilityClass, gridClasses } from '../constants/gridClasses';
import { getPinnedCellOffset } from '../internals/utils/getPinnedCellOffset';
import { shouldCellShowLeftBorder, shouldCellShowRightBorder } from '../utils/cellBorderUtils';
import { escapeOperandAttributeSelector } from '../utils/domUtils';
import { rtlFlipSide } from '../utils/rtlFlipSide';
import { attachPinnedStyle } from '../internals/utils';

const SkeletonOverlay = styled('div', {
  name: 'MuiDataGrid',
  slot: 'SkeletonLoadingOverlay',
})({
  minWidth: '100%',
  width: 'max-content', // prevents overflow: clip; cutting off the x axis
  height: '100%',
  overflow: 'clip', // y axis is hidden while the x axis is allowed to overflow
});

type OwnerState = { classes: DataGridProcessedProps['classes'] };

type GridSkeletonLoadingOverlayInnerProps = React.HTMLAttributes<HTMLDivElement> & {
  skeletonRowsCount: number;
  showFirstRowBorder?: boolean;
  visibleColumns?: Set<GridColDef['field']>;
};

const useUtilityClasses = (ownerState: OwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['skeletonLoadingOverlay'],
  };

  return composeClasses(slots, getDataGridUtilityClass, classes);
};

const getColIndex = (el: HTMLElement) => parseInt(el.getAttribute('data-colindex')!, 10);

export const GridSkeletonLoadingOverlayInner = forwardRef<
  HTMLDivElement,
  GridSkeletonLoadingOverlayInnerProps
>(function GridSkeletonLoadingOverlayInner(props, forwardedRef) {
    throw new Error("STUB");
});

export const GridSkeletonLoadingOverlay = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(function GridSkeletonLoadingOverlay(props, forwardedRef) {
    throw new Error("STUB");
});
