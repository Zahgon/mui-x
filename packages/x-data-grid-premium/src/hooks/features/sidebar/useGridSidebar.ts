import * as React from 'react';
import type { RefObject } from '@mui/x-internals/types';
import {
  useGridApiMethod,
  useGridRegisterPipeProcessor,
  useGridEventPriority,
} from '@mui/x-data-grid-pro/internals';
import type {
  GridStateInitializer,
  GridPipeProcessor,
  GridRestoreStatePreProcessingContext,
} from '@mui/x-data-grid-pro/internals';
import type { DataGridPremiumProcessedProps } from '../../../models/dataGridPremiumProps';
import type { GridPrivateApiPremium } from '../../../models/gridApiPremium';
import { gridSidebarStateSelector } from './gridSidebarSelector';
import type { GridInitialStatePremium } from '../../../models/gridStatePremium';
import type { GridSidebarApi } from './gridSidebarInterfaces';

export const sidebarStateInitializer: GridStateInitializer<
  Pick<DataGridPremiumProcessedProps, 'initialState'>
> = (state, props) => { throw new Error("STUB"); };

export const useGridSidebar = (
  apiRef: RefObject<GridPrivateApiPremium>,
  props: Pick<DataGridPremiumProcessedProps, 'initialState' | 'onSidebarClose' | 'onSidebarOpen'>,
): void => {
  const hideSidebar = React.useCallback(() => {
      throw new Error("STUB");
  }, [apiRef]);

  const showSidebar = React.useCallback<GridSidebarApi['showSidebar']>(
    (newValue, sidebarId, labelId) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  useGridApiMethod(
    apiRef,
    {
      showSidebar,
      hideSidebar,
    },
    'public',
  );

  const stateExportPreProcessing = React.useCallback<GridPipeProcessor<'exportState'>>(
    (prevState, context) => {
          throw new Error("STUB");
      },
    [apiRef, props.initialState?.sidebar],
  );

  const stateRestorePreProcessing = React.useCallback<GridPipeProcessor<'restoreState'>>(
    (params, context: GridRestoreStatePreProcessingContext<GridInitialStatePremium>) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  useGridRegisterPipeProcessor(apiRef, 'exportState', stateExportPreProcessing);
  useGridRegisterPipeProcessor(apiRef, 'restoreState', stateRestorePreProcessing);
  useGridEventPriority(apiRef, 'sidebarClose', props.onSidebarClose);
  useGridEventPriority(apiRef, 'sidebarOpen', props.onSidebarOpen);
};
