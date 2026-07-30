import * as React from 'react';
import {
  gridRowTreeSelector,
  gridExpandedSortedRowIdsSelector,
  gridRowNodeSelector,
  gridRowMaximumTreeDepthSelector,
  gridExpandedSortedRowIndexLookupSelector,
} from '@mui/x-data-grid-pro';
import type { GridRowProApi } from '@mui/x-data-grid-pro';
import {
  useGridRowsOverridableMethodsCommunity,
  useGridRowsOverridableMethodsPro,
  useGridSelector,
} from '@mui/x-data-grid-pro/internals';
import type { ReorderExecutionContext } from '@mui/x-data-grid-pro/internals';
import type { RefObject } from '@mui/x-internals/types';
import { rowGroupingReorderExecutor } from '../rowReorder/rowGroupingReorderExecutor';
import type { GridPrivateApiPremium } from '../../../models/gridApiPremium';
import type { DataGridPremiumProcessedProps } from '../../../models/dataGridPremiumProps';

export const useGridRowsOverridableMethods = (
  apiRef: RefObject<GridPrivateApiPremium>,
  props: Pick<
    DataGridPremiumProcessedProps,
    'processRowUpdate' | 'onProcessRowUpdateError' | 'treeData'
  >,
) => {
  const { processRowUpdate, onProcessRowUpdateError } = props;
  const { setRowIndex: setRowIndexPlain, setRowPosition: setRowPositionPlain } =
    useGridRowsOverridableMethodsCommunity(apiRef);
  const { setRowIndex: setRowIndexTreeData, setRowPosition: setRowPositionTreeData } =
    useGridRowsOverridableMethodsPro(apiRef, props);

  const flatTree = useGridSelector(apiRef, gridRowMaximumTreeDepthSelector) === 1;

  const setRowPosition = React.useCallback<GridRowProApi['setRowPosition']>(
    async (sourceRowId, targetRowId, position) => {
          throw new Error("STUB");
      },
    [apiRef, processRowUpdate, onProcessRowUpdateError],
  );

  const setRowIndex = React.useCallback<GridRowProApi['setRowIndex']>(
    async (sourceRowId, targetOriginalIndex) => {
          throw new Error("STUB");
      },
    [apiRef, processRowUpdate, onProcessRowUpdateError],
  );

  if (flatTree && !props.treeData) {
    return {
      setRowIndex: setRowIndexPlain,
      setRowPosition: setRowPositionPlain,
    };
  }

  if (props.treeData) {
    return {
      setRowIndex: setRowIndexTreeData,
      setRowPosition: setRowPositionTreeData,
    };
  }

  return {
    setRowIndex,
    setRowPosition,
  };
};
