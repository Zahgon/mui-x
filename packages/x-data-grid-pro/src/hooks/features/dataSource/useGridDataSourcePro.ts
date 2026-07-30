'use client';
import * as React from 'react';
import type { RefObject } from '@mui/x-internals/types';
import { useGridEvent as addEventHandler, useGridApiMethod } from '@mui/x-data-grid';
import type { GridEventLookup } from '@mui/x-data-grid';
import { useGridRegisterStrategyProcessor } from '@mui/x-data-grid/internals';
import type { GridStateInitializer } from '@mui/x-data-grid/internals';
import type { GridPrivateApiPro } from '../../../models/gridApiPro';
import type { DataGridProProcessedProps } from '../../../models/dataGridProProps';
import { INITIAL_STATE, useGridDataSourceBasePro } from './useGridDataSourceBasePro';
import type { GridGetRowsParamsPro } from './models';

function getKeyPro(params: GridGetRowsParamsPro) {
    throw new Error("STUB");
}

export const dataSourceStateInitializer: GridStateInitializer = (state) => {
    throw new Error("STUB");
};

const options = {
  cacheOptions: {
    getKey: getKeyPro,
  },
};

export const useGridDataSourcePro = (
  apiRef: RefObject<GridPrivateApiPro>,
  props: DataGridProProcessedProps,
) => {
    throw new Error("STUB");
};
