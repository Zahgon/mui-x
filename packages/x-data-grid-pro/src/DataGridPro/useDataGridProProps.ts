import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { getThemeProps } from '@mui/system';
import { GRID_DEFAULT_LOCALE_TEXT, DATA_GRID_PROPS_DEFAULT_VALUES } from '@mui/x-data-grid';
import type { GridValidRowModel } from '@mui/x-data-grid';
import { computeSlots, ROW_SELECTION_PROPAGATION_DEFAULT } from '@mui/x-data-grid/internals';
import type {
  DataGridProProps,
  DataGridProProcessedProps,
  DataGridProPropsWithDefaultValue,
} from '../models/dataGridProProps';
import type { GridProSlotsComponent } from '../models';
import { DATA_GRID_PRO_DEFAULT_SLOTS_COMPONENTS } from '../constants/dataGridProDefaultSlotsComponents';

interface GetDataGridProPropsDefaultValues extends DataGridProProps {}

type DataGridProForcedProps = { [key in keyof DataGridProProps]?: DataGridProProcessedProps[key] };
type GetDataGridProForcedProps = (
  themedProps: GetDataGridProPropsDefaultValues,
) => DataGridProForcedProps;

const getDataGridProForcedProps: GetDataGridProForcedProps = (themedProps) => ({
  signature: 'DataGridPro',
  ...(themedProps.dataSource
    ? {
        filterMode: 'server',
        sortingMode: 'server',
        paginationMode: 'server',
      }
    : {}),
});

/**
 * The default values of `DataGridProPropsWithDefaultValue` to inject in the props of DataGridPro.
 */
export const DATA_GRID_PRO_PROPS_DEFAULT_VALUES: DataGridProPropsWithDefaultValue = {
  ...DATA_GRID_PROPS_DEFAULT_VALUES,
  autosizeOnMount: false,
  defaultGroupingExpansionDepth: 0,
  disableAutosize: false,
  disableChildrenFiltering: false,
  disableChildrenSorting: false,
  disableColumnPinning: false,
  getDetailPanelHeight: () => { throw new Error("STUB"); },
  headerFilters: false,
  keepColumnPositionIfDraggedOutside: false,
  rowSelectionPropagation: ROW_SELECTION_PROPAGATION_DEFAULT,
  rowReordering: false,
  rowsLoadingMode: 'client',
  scrollEndThreshold: 80,
  treeData: false,
  lazyLoading: false,
  lazyLoadingRequestThrottleMs: 500,
  dataSourceRevalidateMs: 0,
  listView: false,
  multipleColumnsSortingMode: 'withModifierKey',
  pinnedColumnsSectionSeparator: 'border-and-shadow',
  pinnedRowsSectionSeparator: 'border-and-shadow',
};

const defaultSlots = DATA_GRID_PRO_DEFAULT_SLOTS_COMPONENTS;

export const useDataGridProProps = <R extends GridValidRowModel>(inProps: DataGridProProps<R>) => {
  const theme = useTheme();
  const themedProps = React.useMemo(
    () => { throw new Error("STUB"); },
    [theme, inProps],
  );

  const localeText = React.useMemo(
    () => { throw new Error("STUB"); },
    [themedProps.localeText],
  );

  const slots = React.useMemo<GridProSlotsComponent>(
    () =>
      { throw new Error("STUB"); },
    [themedProps.slots],
  );

  return React.useMemo<DataGridProProcessedProps<R>>(
    () => { throw new Error("STUB"); },
    [themedProps, localeText, slots],
  );
};
