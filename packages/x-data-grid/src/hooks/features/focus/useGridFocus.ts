'use client';
import * as React from 'react';
import debounce from '@mui/utils/debounce';
import type { RefObject } from '@mui/x-internals/types';
import useEventCallback from '@mui/utils/useEventCallback';
import ownerDocument from '@mui/utils/ownerDocument';
import { gridClasses } from '../../../constants/gridClasses';
import type { GridEventListener, GridEventLookup } from '../../../models/events';
import type { GridPrivateApiCommunity } from '../../../models/api/gridApiCommunity';
import type { GridFocusApi, GridFocusPrivateApi } from '../../../models/api/gridFocusApi';
import type { GridCellParams } from '../../../models/params/gridCellParams';
import { useGridApiMethod } from '../../utils/useGridApiMethod';
import { useGridLogger } from '../../utils/useGridLogger';
import { useGridEvent } from '../../utils/useGridEvent';
import type { DataGridProcessedProps } from '../../../models/props/DataGridProps';
import { isNavigationKey, isPasteShortcut } from '../../../utils/keyboardUtils';
import {
  gridFocusCellSelector,
  gridFocusColumnGroupHeaderSelector,
} from './gridFocusStateSelector';
import { focusElement } from '../../../utils/focusElement';
import type { GridStateInitializer } from '../../utils/useGridInitializeState';
import { gridVisibleColumnDefinitionsSelector } from '../columns/gridColumnsSelector';
import { getVisibleRows } from '../../utils/useGridVisibleRows';
import { clamp } from '../../../utils/utils';
import type { GridCellCoordinates } from '../../../models/gridCell';
import type { GridRowEntry, GridRowId } from '../../../models/gridRows';
import { gridPinnedRowsSelector } from '../rows/gridRowsSelector';

export const focusStateInitializer: GridStateInitializer = (state) => { throw new Error("STUB"); };

/**
 * @requires useGridParamsApi (method)
 * @requires useGridRows (method)
 * @requires useGridEditing (event)
 */
export const useGridFocus = (
  apiRef: RefObject<GridPrivateApiCommunity>,
  props: Pick<DataGridProcessedProps, 'pagination' | 'paginationMode'>,
): void => {
  const logger = useGridLogger(apiRef, 'useGridFocus');

  const lastClickedCell = React.useRef<GridCellParams | null>(null);
  const hasRootReference = apiRef.current.rootElementRef.current !== null;

  const publishCellFocusOut = React.useCallback(
    (cell: GridCellCoordinates | null, event: GridEventLookup['cellFocusOut']['event']) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  const setCellFocus = React.useCallback<GridFocusApi['setCellFocus']>(
    (id, field) => {
          throw new Error("STUB");
      },
    [apiRef, logger, publishCellFocusOut],
  );

  const setColumnHeaderFocus = React.useCallback<GridFocusApi['setColumnHeaderFocus']>(
    (field, event = {}) => {
          throw new Error("STUB");
      },
    [apiRef, logger, publishCellFocusOut],
  );

  const setColumnHeaderFilterFocus = React.useCallback<GridFocusApi['setColumnHeaderFilterFocus']>(
    (field, event = {}) => {
          throw new Error("STUB");
      },
    [apiRef, logger, publishCellFocusOut],
  );

  const setColumnGroupHeaderFocus = React.useCallback<
    GridFocusPrivateApi['setColumnGroupHeaderFocus']
  >(
    (field, depth, event = {}) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  const getColumnGroupHeaderFocus = React.useCallback<
    GridFocusPrivateApi['getColumnGroupHeaderFocus']
  >(() => { throw new Error("STUB"); }, [apiRef]);

  const moveFocusToRelativeCell = React.useCallback<GridFocusPrivateApi['moveFocusToRelativeCell']>(
    (id, field, direction) => {
          throw new Error("STUB");
      },
    [apiRef, props.pagination, props.paginationMode],
  );

  const handleCellDoubleClick = React.useCallback<GridEventListener<'cellDoubleClick'>>(
    ({ id, field }) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  const handleCellKeyDown = React.useCallback<GridEventListener<'cellKeyDown'>>(
    (params, event) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  const handleColumnHeaderFocus = React.useCallback<GridEventListener<'columnHeaderFocus'>>(
    ({ field }, event) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  const handleColumnGroupHeaderFocus = React.useCallback<
    GridEventListener<'columnGroupHeaderFocus'>
  >(
    ({ fields, depth }, event) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  const handleBlur = React.useCallback<GridEventListener<'columnHeaderBlur'>>(
    (_, event) => {
          throw new Error("STUB");
      },
    [logger, apiRef],
  );

  const handleCellMouseDown = React.useCallback<GridEventListener<'cellMouseDown'>>((params) => {
      throw new Error("STUB");
  }, []);

  const handleDocumentClick = React.useCallback(
    (event: MouseEvent) => {
          throw new Error("STUB");
      },
    [apiRef, publishCellFocusOut],
  );

  const handleCellModeChange = React.useCallback<GridEventListener<'cellModeChange'>>(
    (params) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  const handleRowsSet = React.useCallback<GridEventListener<'rowsSet'>>(() => {
      throw new Error("STUB");
  }, [apiRef, props.pagination, props.paginationMode]);

  const debouncedHandleRowsSet = React.useMemo(() => { throw new Error("STUB"); }, [handleRowsSet]);

  const handlePaginationModelChange = useEventCallback(() => {
      throw new Error("STUB");
  });

  const focusApi: GridFocusApi = {
    setCellFocus,
    setColumnHeaderFocus,
    setColumnHeaderFilterFocus,
  };

  const focusPrivateApi: GridFocusPrivateApi = {
    moveFocusToRelativeCell,
    setColumnGroupHeaderFocus,
    getColumnGroupHeaderFocus,
  };

  useGridApiMethod(apiRef, focusApi, 'public');
  useGridApiMethod(apiRef, focusPrivateApi, 'private');

  React.useEffect(() => {
      throw new Error("STUB");
  }, [apiRef, hasRootReference, handleDocumentClick]);

  useGridEvent(apiRef, 'columnHeaderBlur', handleBlur);
  useGridEvent(apiRef, 'cellDoubleClick', handleCellDoubleClick);
  useGridEvent(apiRef, 'cellMouseDown', handleCellMouseDown);
  useGridEvent(apiRef, 'cellKeyDown', handleCellKeyDown);
  useGridEvent(apiRef, 'cellModeChange', handleCellModeChange);
  useGridEvent(apiRef, 'columnHeaderFocus', handleColumnHeaderFocus);
  useGridEvent(apiRef, 'columnGroupHeaderFocus', handleColumnGroupHeaderFocus);
  useGridEvent(apiRef, 'rowsSet', debouncedHandleRowsSet);
  useGridEvent(apiRef, 'paginationModelChange', handlePaginationModelChange);
};
