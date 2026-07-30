'use client';
import * as React from 'react';
import type { RefObject } from '@mui/x-internals/types';
import type { GridPrivateApiCommon } from '../../models/api/gridApiCommon';
import type { GridStateCommunity, GridStateProps } from '../../models/gridStateCommunity';
import type { GridStateInitializer } from '../utils/useGridInitializeState';

export const propsStateInitializer: GridStateInitializer<GridStateProps> = (state, props) => {
    throw new Error("STUB");
};

export const useGridProps = <PrivateApi extends GridPrivateApiCommon>(
  apiRef: RefObject<PrivateApi>,
  props: GridStateProps,
) => {
  const isFirstRender = React.useRef(true);
  React.useEffect(() => {
      throw new Error("STUB");
  }, [
    apiRef,
    props.listView,
    props.getRowId,
    props.isCellEditable,
    props.isRowSelectable,
    props.dataSource,
    props.signature,
  ]);
};
