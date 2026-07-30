import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { getThemeProps } from '@mui/system';
import {
  DATA_GRID_PRO_PROPS_DEFAULT_VALUES,
  GRID_DEFAULT_LOCALE_TEXT,
  GridSignature,
} from '@mui/x-data-grid-pro';
import type { DataGridProProps, GridEvents } from '@mui/x-data-grid-pro';
import { computeSlots } from '@mui/x-data-grid-pro/internals';
import type {
  DataGridPremiumProps,
  DataGridPremiumProcessedProps,
  DataGridPremiumPropsWithDefaultValue,
} from '../models/dataGridPremiumProps';
import type { GridPremiumSlotsComponent } from '../models';
import { GRID_AGGREGATION_FUNCTIONS } from '../hooks/features/aggregation';
import { DATA_GRID_PREMIUM_DEFAULT_SLOTS_COMPONENTS } from '../constants/dataGridPremiumDefaultSlotsComponents';
import { defaultGetPivotDerivedColumns } from '../hooks/features/pivoting/utils';
import { defaultGetAggregationPosition } from '../hooks/features/aggregation/gridAggregationUtils';
import { DEFAULT_HISTORY_VALIDATION_EVENTS } from '../hooks/features/history/constants';
import type { GridHistoryEventHandler } from '../hooks/features/history/gridHistoryInterfaces';

interface GetDataGridPremiumPropsDefaultValues extends DataGridPremiumProps {}

type DataGridProForcedProps = {
  [key in keyof DataGridProProps]?: DataGridPremiumProcessedProps[key];
};
type GetDataGridProForcedProps = (
  themedProps: GetDataGridPremiumPropsDefaultValues,
) => DataGridProForcedProps;

const getDataGridPremiumForcedProps: GetDataGridProForcedProps = (themedProps) => ({
  signature: GridSignature.DataGridPremium,
  ...(themedProps.dataSource
    ? {
        filterMode: 'server',
        sortingMode: 'server',
        paginationMode: 'server',
      }
    : {}),
});

/**
 * The default values of `DataGridPremiumPropsWithDefaultValue` to inject in the props of DataGridPremium.
 */
export const DATA_GRID_PREMIUM_PROPS_DEFAULT_VALUES: DataGridPremiumPropsWithDefaultValue = {
  ...DATA_GRID_PRO_PROPS_DEFAULT_VALUES,
  cellSelection: false,
  disableAggregation: false,
  disableRowGrouping: false,
  rowGroupingColumnMode: 'single',
  aggregationFunctions: GRID_AGGREGATION_FUNCTIONS,
  aggregationRowsScope: 'filtered',
  getAggregationPosition: defaultGetAggregationPosition,
  cellSelectionFillHandle: false,
  disableClipboardPaste: false,
  splitClipboardPastedText: (pastedText, delimiter = '\t') => {
      throw new Error("STUB");
  },
  disablePivoting: false,
  aiAssistant: false,
  chartsIntegration: false,
  historyStackSize: 30,
  historyEventHandlers: {} as Record<GridEvents, GridHistoryEventHandler<any>>,
  historyValidationEvents: DEFAULT_HISTORY_VALIDATION_EVENTS,
};

const defaultSlots = DATA_GRID_PREMIUM_DEFAULT_SLOTS_COMPONENTS;

export const useDataGridPremiumProps = (inProps: DataGridPremiumProps) => {
  const theme = useTheme();
  const themedProps = React.useMemo(
    () => { throw new Error("STUB"); },
    [theme, inProps],
  );

  const localeText = React.useMemo(
    () => { throw new Error("STUB"); },
    [themedProps.localeText],
  );

  const slots = React.useMemo<GridPremiumSlotsComponent>(
    () =>
      { throw new Error("STUB"); },
    [themedProps.slots],
  );

  return React.useMemo<DataGridPremiumProcessedProps>(
    () => { throw new Error("STUB"); },
    [themedProps, localeText, slots],
  );
};
