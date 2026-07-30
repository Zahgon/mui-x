'use client';
import * as React from 'react';
import type { RefObject } from '@mui/x-internals/types';
import type { GridPrivateApiCommon } from '../../../models/api/gridApiCommon';
import type {
  GridPipeProcessingApi,
  GridPipeProcessingPrivateApi,
  GridPipeProcessor,
  GridPipeProcessorGroup,
} from './gridPipeProcessingApi';
import { useGridApiMethod } from '../../utils/useGridApiMethod';

type Cache = {
  [G in GridPipeProcessorGroup]?: GroupCache;
};

type GroupCache = {
  processors: Map<string, GridPipeProcessor<any> | null>;
  processorsAsArray: GridPipeProcessor<any>[];
  appliers: {
    [applierId: string]: () => void;
  };
  processorsUpdated: boolean;
};

/**
 * Implement the Pipeline Pattern
 *
 * More information and detailed example in (TODO add link to technical doc when ready)
 *
 * Some plugins contains custom logic to enrich data provided by other plugins or components.
 * For instance, the row grouping plugin needs to add / remove the grouping columns when the grid columns are updated.
 *
 * =====================================================================================================================
 *
 * The plugin containing the custom logic must use:
 *
 * - `useGridRegisterPipeProcessor` to register their processor.
 *
 * - `apiRef.current.requestPipeProcessorsApplication` to imperatively re-apply a group.
 *   This method should be used in last resort.
 *   Most of the time, the application should be triggered by an update on the deps of the processor.
 *
 * =====================================================================================================================
 *
 * The plugin or component that needs to enrich its data must use:
 *
 * - `apiRef.current.unstable_applyPipeProcessors` to run in chain all the processors of a given group.
 *
 * - `useGridRegisterPipeApplier` to re-apply the whole pipe when requested.
 *   The applier will be called when:
 *   * a processor is registered.
 *   * `apiRef.current.requestPipeProcessorsApplication` is called for the given group.
 */
export const useGridPipeProcessing = (apiRef: RefObject<GridPrivateApiCommon>) => {
  const cache = React.useRef<Cache>({});

  const isRunning = React.useRef(false);
  const runAppliers = React.useCallback((groupCache: GroupCache | undefined) => {
      throw new Error("STUB");
  }, []);

  const registerPipeProcessor = React.useCallback<
    GridPipeProcessingPrivateApi['registerPipeProcessor']
  >((group, id, processor) => {
      throw new Error("STUB");
  }, []);

  const registerPipeApplier = React.useCallback<
    GridPipeProcessingPrivateApi['registerPipeApplier']
  >((group, id, applier) => {
      throw new Error("STUB");
  }, []);

  const requestPipeProcessorsApplication = React.useCallback<
    GridPipeProcessingPrivateApi['requestPipeProcessorsApplication']
  >(
    (group) => {
          throw new Error("STUB");
      },
    [runAppliers],
  );

  const runAppliersForPendingProcessors = React.useCallback(() => {
      throw new Error("STUB");
  }, [runAppliers]);

  const applyPipeProcessors = React.useCallback<
    GridPipeProcessingApi['unstable_applyPipeProcessors']
  >((...args) => {
      throw new Error("STUB");
  }, []);

  const preProcessingPrivateApi: GridPipeProcessingPrivateApi = {
    registerPipeProcessor,
    registerPipeApplier,
    requestPipeProcessorsApplication,
    runAppliersForPendingProcessors,
  };
  const preProcessingPublicApi: GridPipeProcessingApi = {
    unstable_applyPipeProcessors: applyPipeProcessors,
  };

  useGridApiMethod(apiRef, preProcessingPrivateApi, 'private');
  useGridApiMethod(apiRef, preProcessingPublicApi, 'public');
};
