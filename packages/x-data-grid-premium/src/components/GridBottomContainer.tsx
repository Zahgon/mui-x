import * as React from 'react';
import clsx from 'clsx';
import { styled } from '@mui/material/styles';
import composeClasses from '@mui/utils/composeClasses';
import {
  gridClasses,
  getDataGridUtilityClass,
  useGridSelector,
  gridRowsLoadingSelector,
  gridRowTreeSelector,
  GRID_ROOT_GROUP_ID,
} from '@mui/x-data-grid-pro';
import type { GridGroupNode } from '@mui/x-data-grid-pro';
import { useGridPrivateApiContext } from '../hooks/utils/useGridPrivateApiContext';
import { GridAggregationRowOverlay } from './GridAggregationRowOverlay';
import { useGridRootProps } from '../typeOverloads/reexports';
import { gridAggregationModelSelector } from '../hooks';

const useUtilityClasses = () => {
  const slots = {
    root: ['bottomContainer'],
  };
  return composeClasses(slots, getDataGridUtilityClass, {});
};

export type GridBottomContainerProps = React.PropsWithChildren;

const Element = styled('div', {
  slot: 'internal',
  shouldForwardProp: undefined,
})({
  position: 'sticky',
  zIndex: 40,
  bottom: 'calc(var(--DataGrid-hasScrollX) * var(--DataGrid-scrollbarSize))',
  [`.${gridClasses['virtualizer--layoutControlled']} &`]: {
    position: 'absolute',
  },
});

export function GridBottomContainer(props: GridBottomContainerProps) {
    throw new Error("STUB");
}
