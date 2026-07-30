'use client';
import * as React from 'react';
import useEnhancedEffect from '@mui/utils/useEnhancedEffect';
import type { RefObject } from '@mui/x-internals/types';
import { warnOnce } from '@mui/x-internals/warning';
import type { GridListViewColDef } from '../../../models/colDef/gridColDef';
import type { GridStateInitializer } from '../../utils/useGridInitializeState';
import type { GridPrivateApiCommunity } from '../../../models/api/gridApiCommunity';
import type { DataGridProcessedProps } from '../../../models/props/DataGridProps';
import type { GridEventListener } from '../../../models/events';
import { gridDimensionsSelector } from '../dimensions';
import { useGridEvent } from '../../utils/useGridEvent';

export type GridListViewState = (GridListViewColDef & { computedWidth: number }) | undefined;

export const listViewStateInitializer: GridStateInitializer<
  Pick<DataGridProcessedProps, 'listViewColumn'>
> = (state, props, apiRef) => { throw new Error("STUB"); };

export function useGridListView(
  apiRef: RefObject<GridPrivateApiCommunity>,
  props: Pick<DataGridProcessedProps, 'listView' | 'listViewColumn'>,
) {
  /*
   * EVENTS
   */
  const updateListColumnWidth = () => {
    apiRef.current.setState((state) => {
        throw new Error("STUB");
    });
  };

  const prevInnerWidth = React.useRef<number | null>(null);
  const handleGridSizeChange: GridEventListener<'viewportInnerSizeChange'> = (
    viewportInnerSize,
  ) => {
      throw new Error("STUB");
  };

  useGridEvent(apiRef, 'viewportInnerSizeChange', handleGridSizeChange);
  useGridEvent(apiRef, 'columnVisibilityModelChange', updateListColumnWidth);

  /*
   * EFFECTS
   */
  useEnhancedEffect(() => {
      throw new Error("STUB");
  }, [apiRef, props.listViewColumn]);

  React.useEffect(() => {
      throw new Error("STUB");
  }, [props.listView, props.listViewColumn]);
}

function getListColumnWidth(apiRef: RefObject<GridPrivateApiCommunity>) {
  return gridDimensionsSelector(apiRef).viewportInnerSize.width;
}
