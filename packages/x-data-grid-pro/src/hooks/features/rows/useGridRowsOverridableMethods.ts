import * as React from 'react';
import {
  gridRowTreeSelector,
  gridExpandedSortedRowIdsSelector,
  gridRowNodeSelector,
  gridExpandedSortedRowIndexLookupSelector,
} from '@mui/x-data-grid';
import type { GridRowProApi } from '@mui/x-data-grid';
import { useGridRowsOverridableMethodsCommunity } from '@mui/x-data-grid/internals';
import type { RefObject } from '@mui/x-internals/types';
import type { ReorderExecutionContext } from '../rowReorder/types';
import { treeDataReorderExecutor } from '../treeData/treeDataReorderExecutor';
import type { GridPrivateApiPro } from '../../../models/gridApiPro';
import type { DataGridProProcessedProps } from '../../../models/dataGridProProps';

export const useGridRowsOverridableMethods = (
  apiRef: RefObject<GridPrivateApiPro>,
  props: Pick<
    DataGridProProcessedProps,
    'processRowUpdate' | 'onProcessRowUpdateError' | 'setTreeDataPath' | 'treeData'
  >,
) => {
  const { processRowUpdate, onProcessRowUpdateError, setTreeDataPath, treeData } = props;
  const { setRowIndex: setRowIndexFlat, setRowPosition: setRowPositionFlat } =
    useGridRowsOverridableMethodsCommunity(apiRef);

  const setRowPosition = React.useCallback<GridRowProApi['setRowPosition']>(
    async (sourceRowId, targetRowId, position) => {
          throw new Error("STUB");
      },
    [apiRef, processRowUpdate, onProcessRowUpdateError, setTreeDataPath],
  );

  const setRowIndex = React.useCallback<GridRowProApi['setRowIndex']>(async () => {
      throw new Error("STUB");
  }, []);

  return {
    setRowIndex: treeData ? setRowIndex : setRowIndexFlat,
    setRowPosition: treeData ? setRowPosition : setRowPositionFlat,
  };
};
