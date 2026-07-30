'use client';
import * as React from 'react';
import type { RefObject } from '@mui/x-internals/types';
import { useGridEvent, useGridApiMethod, gridDataRowIdsSelector } from '@mui/x-data-grid';
import type { GridEventListener, GridRowId, GridCellParams } from '@mui/x-data-grid';
import { useGridRegisterPipeProcessor } from '@mui/x-data-grid/internals';
import type { GridPipeProcessor, GridStateInitializer } from '@mui/x-data-grid/internals';
import type { GridApiPro, GridPrivateApiPro } from '../../../models/gridApiPro';
import { GRID_DETAIL_PANEL_TOGGLE_FIELD } from './gridDetailPanelToggleColDef';
import {
  gridDetailPanelExpandedRowIdsSelector,
  gridDetailPanelExpandedRowsContentCacheSelector,
  gridDetailPanelRawHeightCacheSelector,
} from './gridDetailPanelSelector';
import type { DataGridProProcessedProps } from '../../../models/dataGridProProps';
import type {
  GridDetailPanelApi,
  GridDetailPanelPrivateApi,
  GridDetailPanelState,
} from './gridDetailPanelInterface';

const emptySet = new Set();

export const detailPanelStateInitializer: GridStateInitializer<
  Pick<DataGridProProcessedProps, 'initialState' | 'detailPanelExpandedRowIds'>
> = (state, props) => {
    throw new Error("STUB");
};

function cacheContentAndHeight(
  apiRef: RefObject<GridApiPro>,
  getDetailPanelContent: DataGridProProcessedProps['getDetailPanelContent'],
  getDetailPanelHeight: DataGridProProcessedProps['getDetailPanelHeight'],
  previousHeightCache: GridDetailPanelState['heightCache'],
) {
  if (typeof getDetailPanelContent !== 'function') {
    return {};
  }

  // TODO change to lazy approach using a Proxy
  // only call getDetailPanelContent when asked for an id
  const rowIds = gridDataRowIdsSelector(apiRef);

  const contentCache: Record<GridRowId, ReturnType<typeof getDetailPanelContent>> = {};
  const heightCache: GridDetailPanelState['heightCache'] = {};

  for (let i = 0; i < rowIds.length; i += 1) {
    const id = rowIds[i];
    const params = apiRef.current.getRowParams(id);
    const content = getDetailPanelContent(params);
    contentCache[id] = content;

    if (content == null) {
      continue;
    }
    const height = getDetailPanelHeight(params);
    const autoHeight = height === 'auto';
    heightCache[id] = { autoHeight, height: autoHeight ? previousHeightCache[id]?.height : height };
  }

  return { contentCache, heightCache };
}

export const useGridDetailPanel = (
  apiRef: RefObject<GridPrivateApiPro>,
  props: Pick<
    DataGridProProcessedProps,
    | 'getDetailPanelContent'
    | 'getDetailPanelHeight'
    | 'detailPanelExpandedRowIds'
    | 'onDetailPanelExpandedRowIdsChange'
  >,
): void => {
  const handleCellClick = React.useCallback<GridEventListener<'cellClick'>>(
    (params: GridCellParams, event: React.MouseEvent) => {
          throw new Error("STUB");
      },
    [apiRef, props.getDetailPanelContent],
  );

  const handleCellKeyDown = React.useCallback<GridEventListener<'cellKeyDown'>>(
    (params, event) => {
          throw new Error("STUB");
      },
    [apiRef, props.getDetailPanelContent],
  );

  useGridEvent(apiRef, 'cellClick', handleCellClick);
  useGridEvent(apiRef, 'cellKeyDown', handleCellKeyDown);

  apiRef.current.registerControlState({
    stateId: 'detailPanels',
    propModel: props.detailPanelExpandedRowIds,
    propOnChange: props.onDetailPanelExpandedRowIdsChange,
    stateSelector: gridDetailPanelExpandedRowIdsSelector,
    changeEvent: 'detailPanelsExpandedRowIdsChange',
  });

  const toggleDetailPanel = React.useCallback<GridDetailPanelApi['toggleDetailPanel']>(
    (id: GridRowId) => {
          throw new Error("STUB");
      },
    [apiRef, props.getDetailPanelContent],
  );

  const getExpandedDetailPanels = React.useCallback<GridDetailPanelApi['getExpandedDetailPanels']>(
    () => { throw new Error("STUB"); },
    [apiRef],
  );

  const setExpandedDetailPanels = React.useCallback<GridDetailPanelApi['setExpandedDetailPanels']>(
    (ids) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  const storeDetailPanelHeight = React.useCallback<
    GridDetailPanelPrivateApi['storeDetailPanelHeight']
  >(
    (id, height) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  const detailPanelPubicApi: GridDetailPanelApi = {
    toggleDetailPanel,
    getExpandedDetailPanels,
    setExpandedDetailPanels,
  };

  const detailPanelPrivateApi: GridDetailPanelPrivateApi = {
    storeDetailPanelHeight,
  };

  useGridApiMethod(apiRef, detailPanelPubicApi, 'public');
  useGridApiMethod(apiRef, detailPanelPrivateApi, 'private');

  React.useEffect(() => {
      throw new Error("STUB");
  }, [apiRef, props.detailPanelExpandedRowIds]);

  const updateCaches = React.useCallback(() => {
      throw new Error("STUB");
  }, [apiRef, props.getDetailPanelContent, props.getDetailPanelHeight]);

  useGridEvent(apiRef, 'sortedRowsSet', updateCaches);

  const previousGetDetailPanelContentProp =
    React.useRef<DataGridProProcessedProps['getDetailPanelContent']>(undefined);
  const previousGetDetailPanelHeightProp =
    React.useRef<DataGridProProcessedProps['getDetailPanelHeight']>(undefined);

  const updateCachesIfNeeded = React.useCallback(() => {
      throw new Error("STUB");
  }, [apiRef, props.getDetailPanelContent, props.getDetailPanelHeight]);

  const addDetailHeight = React.useCallback<GridPipeProcessor<'rowHeight'>>(
    (initialValue, row) => {
          throw new Error("STUB");
      },
    [apiRef, updateCachesIfNeeded],
  );

  const enabled = props.getDetailPanelContent !== undefined;
  useGridRegisterPipeProcessor(apiRef, 'rowHeight', addDetailHeight, enabled);

  const isFirstRender = React.useRef(true);
  if (isFirstRender.current) {
    updateCachesIfNeeded();
  }
  React.useEffect(() => {
      throw new Error("STUB");
  }, [apiRef, updateCachesIfNeeded]);
};
