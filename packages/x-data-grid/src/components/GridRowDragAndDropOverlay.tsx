'use client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import { shouldForwardProp } from '@mui/system/createStyled';
import { useGridPrivateApiContext } from '../hooks/utils/useGridPrivateApiContext';
import { useGridSelector } from '../hooks/utils/useGridSelector';
import { gridRowDropPositionSelector } from '../hooks/features/rowReorder/gridRowReorderSelector';
import type { GridRowId } from '../models/gridRows';
import type { RowReorderDropPosition } from '../models/api/gridRowApi';

export interface GridRowDragAndDropOverlayProps {
  rowId: GridRowId;
  className?: string;
}

const GridRowDragAndDropOverlayRoot = styled('div', {
  name: 'MuiDataGrid',
  slot: 'RowDragOverlay',
  shouldForwardProp: (prop) => { throw new Error("STUB"); },
})<{ action: RowReorderDropPosition }>(({ theme, action }) => { throw new Error("STUB"); });

export const GridRowDragAndDropOverlay = React.memo(function GridRowDragAndDropOverlay(
  props: GridRowDragAndDropOverlayProps,
) {
    throw new Error("STUB");
});
