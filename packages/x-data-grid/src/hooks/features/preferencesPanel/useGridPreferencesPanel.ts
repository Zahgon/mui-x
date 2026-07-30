import * as React from 'react';
import type { RefObject } from '@mui/x-internals/types';
import type { GridPrivateApiCommunity } from '../../../models/api/gridApiCommunity';
import { useGridApiMethod } from '../../utils/useGridApiMethod';
import { useGridLogger } from '../../utils/useGridLogger';
import type { DataGridProcessedProps } from '../../../models/props/DataGridProps';
import { useGridRegisterPipeProcessor } from '../../core/pipeProcessing';
import type { GridPipeProcessor } from '../../core/pipeProcessing';
import { gridPreferencePanelStateSelector } from './gridPreferencePanelSelector';
import type { GridPreferencesPanelApi } from '../../../models/api/gridPreferencesPanelApi';
import type { GridStateInitializer } from '../../utils/useGridInitializeState';

export const preferencePanelStateInitializer: GridStateInitializer<
  Pick<DataGridProcessedProps, 'initialState'>
> = (state, props) => { throw new Error("STUB"); };

/**
 * TODO: Add a single `setPreferencePanel` method to avoid multiple `setState`
 */
export const useGridPreferencesPanel = (
  apiRef: RefObject<GridPrivateApiCommunity>,
  props: Pick<DataGridProcessedProps, 'initialState'>,
): void => {
  const logger = useGridLogger(apiRef, 'useGridPreferencesPanel');

  /**
   * API METHODS
   */
  const hidePreferences = React.useCallback(() => {
      throw new Error("STUB");
  }, [apiRef, logger]);

  const showPreferences = React.useCallback<GridPreferencesPanelApi['showPreferences']>(
    (newValue, panelId, labelId) => {
          throw new Error("STUB");
      },
    [logger, apiRef],
  );

  useGridApiMethod(
    apiRef,
    {
      showPreferences,
      hidePreferences,
    },
    'public',
  );

  /**
   * PRE-PROCESSING
   */
  const stateExportPreProcessing = React.useCallback<GridPipeProcessor<'exportState'>>(
    (prevState, context) => {
          throw new Error("STUB");
      },
    [apiRef, props.initialState?.preferencePanel],
  );

  const stateRestorePreProcessing = React.useCallback<GridPipeProcessor<'restoreState'>>(
    (params, context) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  useGridRegisterPipeProcessor(apiRef, 'exportState', stateExportPreProcessing);
  useGridRegisterPipeProcessor(apiRef, 'restoreState', stateRestorePreProcessing);
};
