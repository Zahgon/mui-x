'use client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import { forwardRef } from '@mui/x-internals/forwardRef';
import type { DataGridProcessedProps } from '../../models/props/DataGridProps';
import { useGridRootProps } from '../../hooks/utils/useGridRootProps';
import { useGridConfiguration } from '../../hooks/utils/useGridConfiguration';
import type {
  GridOverlayType,
  GridLoadingOverlayVariant,
} from '../../hooks/features/overlays/gridOverlaysInterfaces';

const GridPanelAnchor = styled('div', {
  slot: 'internal',
  shouldForwardProp: undefined,
})({
  position: 'absolute',
  top: `var(--DataGrid-headersTotalHeight)`,
  left: 0,
  width: 'calc(100% - (var(--DataGrid-hasScrollY) * var(--DataGrid-scrollbarSize)))',
});

type OwnerState = Pick<DataGridProcessedProps, 'classes'> & {
  hasScrollX: boolean;
  hasPinnedRight: boolean;
  overlayType: GridOverlayType;
  loadingOverlayVariant: GridLoadingOverlayVariant | null;
};

const Element = styled('div', {
  name: 'MuiDataGrid',
  slot: 'Main',
  overridesResolver: (props, styles) => {
      throw new Error("STUB");
  },
})<{ ownerState: OwnerState }>({
  flexGrow: 1,
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
});

export const GridMainContainer = forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<{
    className: string;
    ownerState: OwnerState;
  }>
>((props, ref) => {
    throw new Error("STUB");
});
