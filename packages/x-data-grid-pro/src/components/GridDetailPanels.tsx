'use client';
import * as React from 'react';
import composeClasses from '@mui/utils/composeClasses';
import { getDataGridUtilityClass, useGridSelector } from '@mui/x-data-grid';
import type { GridRowId } from '@mui/x-data-grid';
import type { GridDetailPanelsProps } from '@mui/x-data-grid/internals';
import { useGridPrivateApiContext } from '../hooks/utils/useGridPrivateApiContext';
import { useGridRootProps } from '../hooks/utils/useGridRootProps';
import {
  gridDetailPanelExpandedRowsContentCacheSelector,
  gridDetailPanelExpandedRowIdsSelector,
} from '../hooks/features/detailPanel';
import { GridDetailPanel } from './GridDetailPanel';
import { gridDetailPanelRawHeightCacheSelector } from '../hooks/features/detailPanel/gridDetailPanelSelector';

const useUtilityClasses = () => {
  const slots = {
    detailPanel: ['detailPanel'],
  };
  return composeClasses(slots, getDataGridUtilityClass, {});
};

export function GridDetailPanels(props: GridDetailPanelsProps) {
    throw new Error("STUB");
}

function GridDetailPanelsImpl(_props: GridDetailPanelsProps) {
    throw new Error("STUB");
}
