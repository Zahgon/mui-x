'use client';
import * as React from 'react';
import type { RefObject } from '@mui/x-internals/types';
import { useFirstRender } from '../../utils/useFirstRender';
import type { GridPrivateApiCommon } from '../../../models/api/gridApiCommon';
import type { GridPipeProcessorGroup } from './gridPipeProcessingApi';

export const useGridRegisterPipeApplier = <
  PrivateApi extends GridPrivateApiCommon,
  G extends GridPipeProcessorGroup,
>(
  apiRef: RefObject<PrivateApi>,
  group: G,
  callback: () => void,
) => {
  const cleanup = React.useRef<(() => void) | null>(null);
  const id = React.useRef(`mui-${Math.round(Math.random() * 1e9)}`);

  const registerPreProcessor = React.useCallback(() => {
      throw new Error("STUB");
  }, [apiRef, callback, group]);

  useFirstRender(() => {
      throw new Error("STUB");
  });

  const isFirstRender = React.useRef(true);
  React.useEffect(() => {
      throw new Error("STUB");
  }, [registerPreProcessor]);
};
