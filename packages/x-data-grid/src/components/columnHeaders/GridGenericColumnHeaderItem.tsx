'use client';
import * as React from 'react';
import clsx from 'clsx';
import useForkRef from '@mui/utils/useForkRef';
import { forwardRef } from '@mui/x-internals/forwardRef';
import type { GridStateColDef } from '../../models/colDef/gridColDef';
import type { GridSortDirection } from '../../models/gridSortModel';
import { GridColumnHeaderTitle } from './GridColumnHeaderTitle';
import { GridColumnHeaderSeparator } from './GridColumnHeaderSeparator';
import type { GridColumnHeaderSeparatorProps } from './GridColumnHeaderSeparator';
import { useGridRootProps } from '../../hooks/utils/useGridRootProps';
import type { GridColumnGroup } from '../../models/gridColumnGrouping';

interface GridGenericColumnHeaderItemProps extends Pick<
  GridStateColDef,
  'headerClassName' | 'description' | 'resizable'
> {
  classes: Record<
    'root' | 'draggableContainer' | 'titleContainer' | 'titleContainerContent',
    string
  >;
  colIndex: number;
  columnMenuOpen: boolean;
  height: number;
  isResizing: boolean;
  sortDirection: GridSortDirection;
  sortIndex?: number;
  filterItemsCounter?: number;
  hasFocus?: boolean;
  tabIndex: 0 | -1;
  disableReorder?: boolean;
  separatorSide?: GridColumnHeaderSeparatorProps['side'];
  headerComponent?: React.ReactNode;
  elementId: GridStateColDef['field'] | GridColumnGroup['groupId'];
  isDraggable: boolean;
  width: number;
  columnMenuIconButton?: React.ReactNode;
  columnMenu?: React.ReactNode;
  columnTitleIconButtons?: React.ReactNode;
  label: string;
  draggableContainerProps?: Partial<React.HTMLProps<HTMLDivElement>>;
  columnHeaderSeparatorProps?: Partial<GridColumnHeaderSeparatorProps>;
  style?: React.CSSProperties;
}

const GridGenericColumnHeaderItem = forwardRef<HTMLDivElement, GridGenericColumnHeaderItemProps>(
  function GridGenericColumnHeaderItem(props, ref) {
        throw new Error("STUB");
    },
);

export { GridGenericColumnHeaderItem };
