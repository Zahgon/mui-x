'use client';
import * as React from 'react';
import clsx from 'clsx';
import { styled } from '@mui/material/styles';
import useForkRef from '@mui/utils/useForkRef';
import useEnhancedEffect from '@mui/utils/useEnhancedEffect';
import {
  gridClasses,
  gridResizingColumnFieldSelector,
  useGridRootProps,
  useGridSelector,
} from '@mui/x-data-grid';
import type { GridSlotProps, ValueOptions } from '@mui/x-data-grid';
import { NotRendered, useSyncExternalStore, useTimeout } from '@mui/x-data-grid/internals';
import type { DataGridProProcessedProps } from '../../models/dataGridProProps';
import {
  DEFAULT_GAP,
  DEFAULT_OVERFLOW_CHIP_WIDTHS,
  calculateVisibleCount,
} from '../../utils/multiSelectCellUtils';
import { useGridPrivateApiContext } from '../../hooks/utils/useGridPrivateApiContext';

type OwnerState = DataGridProProcessedProps;

export const MultiSelectChipsRoot = styled('div', {
  name: 'MuiDataGrid',
  slot: 'MultiSelectChips',
  shouldForwardProp: (prop) => { throw new Error("STUB"); },
})<{ ownerState: OwnerState }>({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  gap: 4,
  overflow: 'hidden',
  position: 'relative',
});

const Chip = styled(NotRendered<GridSlotProps['baseChip']>, {
  name: 'MuiDataGrid',
  slot: 'MultiSelectChip',
})<{ ownerState: OwnerState }>({
  [`&.${gridClasses['multiSelectCellChip--hidden']}`]: {
    display: 'none',
  },
});

// Delay before revealing all chips on resize start, so a quick double-click (autosize) — which
// toggles the resizing state in short bursts — doesn't flash every chip.
const RESIZE_REVEAL_DELAY_MS = 150;

export interface GridMultiSelectChipsProps<V extends ValueOptions = ValueOptions> extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'children'
> {
  values: any[];
  field: string;
  columnWidth: number;
  optionByValue: Map<any, ValueOptions>;
  getOptionLabel: (option: ValueOptions) => string;
  /** When true, skip overflow measurement and render every chip (for auto-row-height rows). */
  autoWrap?: boolean;
  classes?: {
    root?: string;
    chip?: string;
    chipHidden?: string;
    overflow?: string;
  };
  slotProps?: {
    root?: React.HTMLAttributes<HTMLDivElement>;
    chip?:
      | Partial<GridSlotProps['baseChip']>
      | ((value: V, index: number) => Partial<GridSlotProps['baseChip']>);
    /** Props for the `+N` overflow chip. Omit to render it as a non-interactive indicator. */
    overflow?: Partial<GridSlotProps['baseChip']>;
  };
}

function GridMultiSelectChipsImpl<V extends ValueOptions = ValueOptions>(
  props: GridMultiSelectChipsProps<V>,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
    throw new Error("STUB");
}

export const GridMultiSelectChips = React.forwardRef(GridMultiSelectChipsImpl) as <
  V extends ValueOptions = ValueOptions,
>(
  props: GridMultiSelectChipsProps<V> & { ref?: React.ForwardedRef<HTMLDivElement> },
) => React.ReactElement;
