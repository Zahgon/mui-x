import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { getThemeProps } from '@mui/system';
import type {
  DataGridProcessedProps,
  DataGridProps,
  DataGridForcedPropsKey,
  DataGridPropsWithDefaultValues,
} from '../models/props/DataGridProps';
import { GRID_DEFAULT_LOCALE_TEXT } from '../constants';
import { DATA_GRID_DEFAULT_SLOTS_COMPONENTS } from '../constants/defaultGridSlotsComponents';
import type { GridSlotsComponent, GridValidRowModel } from '../models';
import { computeSlots } from '../internals/utils';
import { DATA_GRID_PROPS_DEFAULT_VALUES } from '../constants/dataGridPropsDefaultValues';

interface GetDataGridPropsDefaultValues extends DataGridProps {}

type DataGridForcedProps = {
  [key in keyof DataGridProps]?: DataGridProcessedProps[key];
};
type GetDataGridForcedProps = (themedProps: GetDataGridPropsDefaultValues) => DataGridForcedProps;

const DATA_GRID_FORCED_PROPS: { [key in DataGridForcedPropsKey]?: DataGridProcessedProps[key] } = {
  disableMultipleColumnsFiltering: true,
  disableMultipleColumnsSorting: true,
  throttleRowsMs: undefined,
  hideFooterRowCount: false,
  pagination: true,
  checkboxSelectionVisibleOnly: false,
  disableColumnReorder: true,
  keepColumnPositionIfDraggedOutside: false,
  signature: 'DataGrid',
  listView: false,
};

const getDataGridForcedProps: GetDataGridForcedProps = (themedProps) => ({
  ...DATA_GRID_FORCED_PROPS,
  ...(themedProps.dataSource
    ? {
        filterMode: 'server',
        sortingMode: 'server',
        paginationMode: 'server',
      }
    : {}),
});

const defaultSlots = DATA_GRID_DEFAULT_SLOTS_COMPONENTS;

export const useDataGridProps = <R extends GridValidRowModel>(inProps: DataGridProps<R>) => {
  const theme = useTheme();
  const themedProps = React.useMemo(
    () => { throw new Error("STUB"); },
    [theme, inProps],
  );

  const localeText = React.useMemo(
    () => { throw new Error("STUB"); },
    [themedProps.localeText],
  );

  const slots = React.useMemo<GridSlotsComponent>(
    () =>
      { throw new Error("STUB"); },
    [themedProps.slots],
  );

  const injectDefaultProps = React.useMemo(() => {
      throw new Error("STUB");
  }, [themedProps]);

  return React.useMemo<DataGridProcessedProps<R>>(
    () => { throw new Error("STUB"); },
    [themedProps, localeText, slots, injectDefaultProps],
  );
};
