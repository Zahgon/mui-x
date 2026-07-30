'use client';
import * as React from 'react';
import type { RefObject } from '@mui/x-internals/types';
import { gridColumnVisibilityModelSelector } from '@mui/x-data-grid-pro';
import type { GridApi, GridColumnVisibilityModel } from '@mui/x-data-grid-pro';
import type { GridRowGroupingModel } from '../features/rowGrouping';
import type { GridInitialStatePremium } from '../../models/gridStatePremium';
import type { DataGridPremiumProps } from '../../models/dataGridPremiumProps';

const updateColumnVisibilityModel = (
  columnVisibilityModel: GridColumnVisibilityModel | undefined,
  rowGroupingModel: GridRowGroupingModel | undefined,
  prevRowGroupingModel: GridRowGroupingModel | undefined,
) => {
  const newColumnVisibilityModel: GridColumnVisibilityModel = { ...columnVisibilityModel };

  rowGroupingModel?.forEach((field) => {
      throw new Error("STUB");
  });
  prevRowGroupingModel?.forEach((field) => {
      throw new Error("STUB");
  });

  return newColumnVisibilityModel;
};

/**
 * Automatically hide columns when added to the row grouping model and stop hiding them when they are removed.
 * Handles both the `props.initialState.rowGrouping.model` and `props.rowGroupingModel`
 * Does not work when used with the `hide` property of `GridColDef`
 */
export const useKeepGroupedColumnsHidden = (
  props: {
    apiRef: RefObject<GridApi | null>;
  } & Pick<DataGridPremiumProps, 'initialState' | 'rowGroupingModel'>,
) => {
    throw new Error("STUB");
};
