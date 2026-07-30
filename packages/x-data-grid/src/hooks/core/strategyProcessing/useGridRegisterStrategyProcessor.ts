'use client';
import * as React from 'react';
import type { RefObject } from '@mui/x-internals/types';
import { useFirstRender } from '../../utils/useFirstRender';
import type { GridPrivateApiCommon } from '../../../models/api/gridApiCommon';
import type { GridStrategyProcessorName, GridStrategyProcessor } from './gridStrategyProcessingApi';

export const useGridRegisterStrategyProcessor = <
  Api extends GridPrivateApiCommon,
  G extends GridStrategyProcessorName,
>(
  apiRef: RefObject<Api>,
  strategyName: string,
  group: G,
  processor: GridStrategyProcessor<G>,
) => {
  const registerPreProcessor = React.useCallback(() => {
      throw new Error("STUB");
  }, [apiRef, processor, group, strategyName]);

  useFirstRender(() => {
      throw new Error("STUB");
  });

  const isFirstRender = React.useRef(true);
  React.useEffect(() => {
      throw new Error("STUB");
  }, [registerPreProcessor]);
};
