'use client';
import * as React from 'react';
import type { RefObject } from '@mui/x-internals/types';
import type { GridPrivateApiCommunity } from '../../../models/api/gridApiCommunity';
import { useGridLogger, useGridApiMethod, useGridEvent } from '../../utils';
import { gridColumnMenuSelector } from './columnMenuSelector';
import type { GridColumnMenuApi } from '../../../models';
import type { GridStateInitializer } from '../../utils/useGridInitializeState';
import {
  gridColumnLookupSelector,
  gridColumnVisibilityModelSelector,
  gridColumnFieldsSelector,
} from '../columns/gridColumnsSelector';

export const columnMenuStateInitializer: GridStateInitializer = (state) => { throw new Error("STUB"); };

/**
 * @requires useGridColumnResize (event)
 * @requires useGridInfiniteLoader (event)
 */
export const useGridColumnMenu = (apiRef: RefObject<GridPrivateApiCommunity>): void => {
  const logger = useGridLogger(apiRef, 'useGridColumnMenu');

  const subscriptionRefs = React.useRef<{
    wheel?: () => void;
    touchMove?: () => void;
  }>({});

  const unsubscribeFromScrollChange = React.useCallback(() => {
      throw new Error("STUB");
  }, []);

  const subscribeToScrollChange = React.useCallback(() => {
      throw new Error("STUB");
  }, [apiRef, unsubscribeFromScrollChange]);

  /**
   * API METHODS
   */
  const showColumnMenu = React.useCallback<GridColumnMenuApi['showColumnMenu']>(
    (field) => {
          throw new Error("STUB");
      },
    [apiRef, logger, subscribeToScrollChange],
  );

  const hideColumnMenu = React.useCallback<GridColumnMenuApi['hideColumnMenu']>(() => {
      throw new Error("STUB");
  }, [apiRef, logger, unsubscribeFromScrollChange]);

  const toggleColumnMenu = React.useCallback<GridColumnMenuApi['toggleColumnMenu']>(
    (field) => {
          throw new Error("STUB");
      },
    [apiRef, logger, showColumnMenu, hideColumnMenu],
  );

  const columnMenuApi: GridColumnMenuApi = {
    showColumnMenu,
    hideColumnMenu,
    toggleColumnMenu,
  };

  useGridApiMethod(apiRef, columnMenuApi, 'public');
  useGridEvent(apiRef, 'columnResizeStart', hideColumnMenu);
};
