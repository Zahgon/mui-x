'use client';
import * as React from 'react';
import type { RefObject } from '@mui/x-internals/types';
import type { RowSpanningState } from '@mui/x-virtualizer/models';
import { Rowspan } from '@mui/x-virtualizer/features';
import { gridVisibleColumnDefinitionsSelector } from '../columns/gridColumnsSelector';
import { getVisibleRows } from '../../utils/useGridVisibleRows';
import { gridRenderContextSelector } from '../virtualization/gridVirtualizationSelectors';
import type { GridRenderContext } from '../../../models';
import type { GridColDef } from '../../../models/colDef';
import type { GridValidRowModel, GridRowEntry } from '../../../models/gridRows';
import type { DataGridProcessedProps } from '../../../models/props/DataGridProps';
import type { GridPrivateApiCommunity } from '../../../models/api/gridApiCommunity';
import type { GridStateInitializer } from '../../utils/useGridInitializeState';
import { getUnprocessedRange, isRowContextInitialized, getCellValue } from './gridRowSpanningUtils';
import { useGridEvent } from '../../utils/useGridEvent';
import { runIf } from '../../../utils/utils';
import { useRunOncePerLoop } from '../../utils/useRunOncePerLoop';

export interface GridRowSpanningState extends RowSpanningState {}

export type RowRange = { firstRowIndex: number; lastRowIndex: number };

const EMPTY_CACHES: RowSpanningState['caches'] = {
  spannedCells: {},
  hiddenCells: {},
  hiddenCellOriginMap: {},
};
const EMPTY_RANGE: RowRange = { firstRowIndex: 0, lastRowIndex: 0 };
const EMPTY_STATE = { caches: EMPTY_CACHES, processedRange: EMPTY_RANGE };

const computeRowSpanningState = (
  apiRef: RefObject<GridPrivateApiCommunity>,
  colDefs: GridColDef[],
  visibleRows: GridRowEntry<GridValidRowModel>[],
  range: RowRange,
  rangeToProcess: RowRange,
  resetState: boolean,
) => {
  const virtualizer = apiRef.current.virtualizer;
  const previousState = resetState ? EMPTY_STATE : Rowspan.selectors.state(virtualizer.store.state);

  const spannedCells = { ...previousState.caches.spannedCells };
  const hiddenCells = { ...previousState.caches.hiddenCells };
  const hiddenCellOriginMap = { ...previousState.caches.hiddenCellOriginMap };

  const processedRange = {
    firstRowIndex: Math.min(
      previousState.processedRange.firstRowIndex,
      rangeToProcess.firstRowIndex,
    ),
    lastRowIndex: Math.max(previousState.processedRange.lastRowIndex, rangeToProcess.lastRowIndex),
  };

  colDefs.forEach((colDef, columnIndex) => {
      throw new Error("STUB");
  });

  return { caches: { spannedCells, hiddenCells, hiddenCellOriginMap }, processedRange };
};

/**
 * @requires columnsStateInitializer (method) - should be initialized before
 * @requires rowsStateInitializer (method) - should be initialized before
 * @requires filterStateInitializer (method) - should be initialized before
 */
export const rowSpanningStateInitializer: GridStateInitializer = (state) => {
    throw new Error("STUB");
};

export const useGridRowSpanning = (
  apiRef: RefObject<GridPrivateApiCommunity>,
  props: Pick<DataGridProcessedProps, 'rowSpanning' | 'pagination' | 'paginationMode'>,
): void => {
  const updateRowSpanningState = React.useCallback(
    (renderContext: GridRenderContext, resetState: boolean = false) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  // Reset events trigger a full re-computation of the row spanning state:
  // - The `rowSpanning` prop is updated (feature flag)
  // - The filtering is applied
  // - The sorting is applied
  // - The `paginationModel` is updated
  // - The rows are updated
  const { schedule: deferredUpdateRowSpanningState, cancel } =
    useRunOncePerLoop(updateRowSpanningState);

  const resetRowSpanningState = React.useCallback(() => {
      throw new Error("STUB");
  }, [apiRef, deferredUpdateRowSpanningState]);

  useGridEvent(
    apiRef,
    'renderedRowsIntervalChange',
    runIf(props.rowSpanning, (renderContext: GridRenderContext) => {
        throw new Error("STUB");
    }),
  );

  useGridEvent(apiRef, 'sortedRowsSet', runIf(props.rowSpanning, resetRowSpanningState));
  useGridEvent(apiRef, 'paginationModelChange', runIf(props.rowSpanning, resetRowSpanningState));
  useGridEvent(apiRef, 'filteredRowsSet', runIf(props.rowSpanning, resetRowSpanningState));
  useGridEvent(apiRef, 'columnsChange', runIf(props.rowSpanning, resetRowSpanningState));
  useGridEvent(apiRef, 'rowExpansionChange', runIf(props.rowSpanning, resetRowSpanningState));

  React.useEffect(() => {
      throw new Error("STUB");
  }, [apiRef, props.rowSpanning, updateRowSpanningState]);
};
