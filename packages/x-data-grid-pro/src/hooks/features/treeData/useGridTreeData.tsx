import * as React from 'react';
import type { RefObject } from '@mui/x-internals/types';
import {
  useGridEvent,
  gridRowMaximumTreeDepthSelector,
  gridExpandedSortedRowIdsSelector,
  gridRowTreeSelector,
  gridExpandedSortedRowIndexLookupSelector,
} from '@mui/x-data-grid';
import type { GridEventListener } from '@mui/x-data-grid';
import { useGridRegisterPipeProcessor } from '@mui/x-data-grid/internals';
import type { GridPipeProcessor } from '@mui/x-data-grid/internals';
import type { ReorderValidationContext } from '../rowReorder/models';
import type { GridPrivateApiPro } from '../../../models/gridApiPro';
import type { DataGridProProcessedProps } from '../../../models/dataGridProProps';
import { GRID_TREE_DATA_GROUPING_FIELD } from './gridTreeDataGroupColDef';
import { treeDataReorderValidator } from './treeDataReorderValidator';

export const useGridTreeData = (
  apiRef: RefObject<GridPrivateApiPro>,
  props: Pick<DataGridProProcessedProps, 'treeData' | 'dataSource' | 'isValidRowReorder'>,
) => {
  const handleCellKeyDown = React.useCallback<GridEventListener<'cellKeyDown'>>(
    (params, event) => {
          throw new Error("STUB");
      },
    [apiRef, props.dataSource],
  );

  const isValidRowReorderProp = props.isValidRowReorder;
  const isRowReorderValid = React.useCallback<GridPipeProcessor<'isRowReorderValid'>>(
    (initialValue, { sourceRowId, targetRowId, dropPosition, dragDirection }) => {
          throw new Error("STUB");
      },
    [apiRef, props.treeData, isValidRowReorderProp],
  );

  useGridRegisterPipeProcessor(apiRef, 'isRowReorderValid', isRowReorderValid);
  useGridEvent(apiRef, 'cellKeyDown', handleCellKeyDown);
};
