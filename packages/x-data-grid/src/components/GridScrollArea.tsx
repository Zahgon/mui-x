'use client';
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as React from 'react';
import useEventCallback from '@mui/utils/useEventCallback';
import composeClasses from '@mui/utils/composeClasses';
import { styled } from '@mui/material/styles';
import { fastMemo } from '@mui/x-internals/fastMemo';
import type { RefObject } from '@mui/x-internals/types';
import { forwardRef } from '@mui/x-internals/forwardRef';
import type { DataGridProcessedProps } from '../models/props/DataGridProps';
import { useGridRootProps } from '../hooks/utils/useGridRootProps';
import { getDataGridUtilityClass, gridClasses } from '../constants';
import { useGridApiContext } from '../hooks/utils/useGridApiContext';
import { useGridEvent } from '../hooks/utils/useGridEvent';
import { useGridSelector } from '../hooks/utils/useGridSelector';
import {
  gridDimensionsSelector,
  gridColumnsTotalWidthSelector,
} from '../hooks/features/dimensions/gridDimensionsSelectors';
import { gridDensityFactorSelector } from '../hooks/features/density/densitySelector';
import type { GridScrollParams } from '../models/params/gridScrollParams';
import type { GridEventListener } from '../models/events';
import { useTimeout } from '../hooks/utils/useTimeout';
import { getTotalHeaderHeight } from '../hooks/features/columns/gridColumnsUtils';
import { createSelector } from '../utils/createSelector';
import { gridRowsMetaSelector } from '../hooks/features/rows/gridRowsMetaSelector';

const CLIFF = 1;
const SLOP = 1.5;

interface ScrollAreaProps {
  scrollDirection: 'left' | 'right' | 'up' | 'down';
  scrollPosition: RefObject<GridScrollParams>;
}

type OwnerState = DataGridProcessedProps & Pick<ScrollAreaProps, 'scrollDirection'>;

const useUtilityClasses = (ownerState: OwnerState) => {
  const { scrollDirection, classes } = ownerState;

  const slots = {
    root: ['scrollArea', `scrollArea--${scrollDirection}`],
  };

  return composeClasses(slots, getDataGridUtilityClass, classes);
};

const GridScrollAreaRawRoot = styled('div', {
  name: 'MuiDataGrid',
  slot: 'ScrollArea',
  overridesResolver: (props, styles) => {
      throw new Error("STUB");
  },
})<{ ownerState: OwnerState }>(() => { throw new Error("STUB"); });

const offsetSelector = createSelector(
  gridDimensionsSelector,
  (dimensions, direction: ScrollAreaProps['scrollDirection']) => {
      throw new Error("STUB");
  },
);

function GridScrollAreaWrapper(props: ScrollAreaProps) {
    throw new Error("STUB");
}

function GridHorizontalScrollAreaContent(props: ScrollAreaProps) {
    throw new Error("STUB");
}

function GridVerticalScrollAreaContent(props: ScrollAreaProps) {
    throw new Error("STUB");
}

interface GridScrollAreaContentProps extends ScrollAreaProps {
  getCanScrollMore: () => boolean;
  style: React.CSSProperties;
  handleDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
}

const GridScrollAreaContent = forwardRef(function GridScrollAreaContent(
  props: GridScrollAreaContentProps,
  ref: React.Ref<HTMLDivElement>,
) {
    throw new Error("STUB");
});

export const GridScrollArea = fastMemo(GridScrollAreaWrapper);
