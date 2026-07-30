'use client';
import * as React from 'react';
import { useResizeObserver } from '@mui/x-internals/useResizeObserver';
import { useGridRootProps, useGridSelector, gridColumnDefinitionsSelector } from '@mui/x-data-grid';
import type { DataGridProProcessedProps } from '../../models/dataGridProProps';
import { useGridPrivateApiContext } from '../../hooks/utils/useGridPrivateApiContext';
import { MultiSelectChipsRoot } from './GridMultiSelectChips';
import { GridMultiSelectCache } from '../../hooks/features/multiSelect/gridMultiSelectCache';
import { DEFAULT_GAP } from '../../utils/multiSelectCellUtils';

type OwnerState = DataGridProProcessedProps;

const SAMPLE_LABELS = ['+9', '+99', '+999'];

const HIDDEN_STYLE: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: 'auto',
  height: 'auto',
  visibility: 'hidden',
  pointerEvents: 'none',
};

/**
 * Hidden helper mounted once per grid (inside `<GridRoot>`) that publishes the measured `+N`
 * overflow chip widths and row gap to `apiRef.caches.multiSelect`. The measured chip comes from
 * the grid-level `baseChip` slot and the shared chip-row styling, so the metrics are identical
 * for every multiSelect column — one measurement per grid is enough. Renders nothing when the
 * grid has no multiSelect column. `ResizeObserver` re-fires when font / chip styles shift; the
 * cache dedupes equal metrics so subscribed cells only re-render on real change.
 */
export function GridMultiSelectMeasurer() {
    throw new Error("STUB");
}
