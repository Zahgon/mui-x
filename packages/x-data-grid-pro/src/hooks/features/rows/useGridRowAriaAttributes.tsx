import * as React from 'react';
import {
  useGridSelector,
  gridFilteredTopLevelRowCountSelector,
  GRID_ROOT_GROUP_ID,
} from '@mui/x-data-grid';
import type { GridTreeNode } from '@mui/x-data-grid';
import {
  useGridRowAriaAttributes as useGridRowAriaAttributesCommunity,
  gridFilteredChildrenCountLookupSelector,
  gridExpandedSortedRowTreeLevelPositionLookupSelector,
} from '@mui/x-data-grid/internals';
import { useGridPrivateApiContext } from '../../utils/useGridPrivateApiContext';
import { useGridRootProps } from '../../utils/useGridRootProps';

export const useGridRowAriaAttributesPro = (addTreeDataAttributes?: boolean) => {
  const apiRef = useGridPrivateApiContext();
  const props = useGridRootProps();
  const getRowAriaAttributesCommunity = useGridRowAriaAttributesCommunity();

  const filteredTopLevelRowCount = useGridSelector(apiRef, gridFilteredTopLevelRowCountSelector);
  const filteredChildrenCountLookup = useGridSelector(
    apiRef,
    gridFilteredChildrenCountLookupSelector,
  );
  const sortedVisibleRowPositionsLookup = useGridSelector(
    apiRef,
    gridExpandedSortedRowTreeLevelPositionLookupSelector,
  );

  return React.useCallback(
    (rowNode: GridTreeNode, index: number) => {
          throw new Error("STUB");
      },
    [
      props.treeData,
      addTreeDataAttributes,
      filteredTopLevelRowCount,
      filteredChildrenCountLookup,
      sortedVisibleRowPositionsLookup,
      getRowAriaAttributesCommunity,
    ],
  );
};
