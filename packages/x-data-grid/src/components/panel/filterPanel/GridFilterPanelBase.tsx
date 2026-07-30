'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import type { SxProps, Theme } from '@mui/material/styles';
import { forwardRef } from '@mui/x-internals/forwardRef';
import { GridLogicOperator } from '../../../models/gridFilterItem';
import type { GridFilterItem } from '../../../models/gridFilterItem';
import type { GridFilterModel } from '../../../models/gridFilterModel';
import type { GridControlledStateReasonLookup } from '../../../models/events';
import { useGridApiContext } from '../../../hooks/utils/useGridApiContext';
import { GridPanelContent } from '../GridPanelContent';
import { GridPanelFooter } from '../GridPanelFooter';
import { GridPanelWrapper } from '../GridPanelWrapper';
import { GridFilterFormBase } from './GridFilterFormBase';
import type { GridFilterFormProps } from './GridFilterFormBase';
import { useGridRootProps } from '../../../hooks/utils/useGridRootProps';
import { useGridSelector } from '../../../hooks/utils/useGridSelector';
import {
  gridFilterableColumnDefinitionsSelector,
  gridFilterableColumnLookupSelector,
} from '../../../hooks/features/columns/gridColumnsSelector';
import {
  upsertFilterItemInModel,
  upsertFilterItemsInModel,
  deleteFilterItemFromModel,
  setFilterLogicOperatorInModel,
} from '../../../hooks/features/filter/gridFilterUtils';
import type { GridColDef, GridStateColDef } from '../../../models/colDef/gridColDef';

export interface GetColumnForNewFilterArgs {
  currentFilters: GridFilterItem[];
  columns: GridStateColDef[];
}

export interface GridFilterPanelProps extends Pick<
  GridFilterFormProps,
  'logicOperators' | 'columnsSort'
> {
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>;
  /**
   * Function that returns the next filter item to be picked as default filter.
   * @param {GetColumnForNewFilterArgs} args Currently configured filters and columns.
   * @returns {GridColDef['field']} The field to be used for the next filter or `null` to prevent adding a filter.
   */
  getColumnForNewFilter?: (args: GetColumnForNewFilterArgs) => GridColDef['field'] | null;
  /**
   * Props passed to each filter form.
   */
  filterFormProps?: Pick<
    GridFilterFormProps,
    | 'columnsSort'
    | 'deleteIconProps'
    | 'logicOperatorInputProps'
    | 'operatorInputProps'
    | 'columnInputProps'
    | 'valueInputProps'
    | 'filterColumns'
  >;

  /**
   * If `true`, the `Add filter` button will not be displayed.
   * @default false
   */
  disableAddFilterButton?: boolean;
  /**
   * If `true`, the `Remove all` button will be disabled
   * @default false
   */
  disableRemoveAllButton?: boolean;
  /**
   * @ignore - do not document.
   */
  children?: React.ReactNode;
}

export interface GridFilterPanelBaseProps extends GridFilterPanelProps {
  /**
   * If `true`, filter value changes are applied immediately without debouncing.
   * @default true
   */
  disableDebounce?: boolean;
  /**
   * The filter model edited by the panel.
   */
  filterModel: GridFilterModel;
  /**
   * Callback fired when the filter model is changed through the panel.
   * @param {GridFilterModel} model The new filter model.
   * @param {GridControlledStateReasonLookup['filter']} reason The reason for the model to have changed.
   */
  onFilterModelChange: (
    model: GridFilterModel,
    reason?: GridControlledStateReasonLookup['filter'],
  ) => void;
  /**
   * Callback fired when the panel requests to be closed, e.g. after the last filter is removed.
   * In `GridFilterPanel` it hides the grid filter panel; for standalone usage it is a no-op
   * unless provided.
   */
  onClose?: () => void;
}

const getGridFilter = (col: GridStateColDef): GridFilterItem => ({
  field: col.field,
  operator: col.filterOperators![0].value,
  id: Math.round(Math.random() * 1e5),
});

const GridFilterPanelBase = forwardRef<HTMLDivElement, GridFilterPanelBaseProps>(
  function GridFilterPanelBase(props, ref) {
        throw new Error("STUB");
    },
);

GridFilterPanelBase.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * @ignore - do not document.
   */
  children: PropTypes.node,
  /**
   * Changes how the options in the columns selector should be ordered.
   * If not specified, the order is derived from the `columns` prop.
   */
  columnsSort: PropTypes.oneOf(['asc', 'desc']),
  /**
   * If `true`, the `Add filter` button will not be displayed.
   * @default false
   */
  disableAddFilterButton: PropTypes.bool,
  /**
   * If `true`, filter value changes are applied immediately without debouncing.
   * @default true
   */
  disableDebounce: PropTypes.bool,
  /**
   * If `true`, the `Remove all` button will be disabled
   * @default false
   */
  disableRemoveAllButton: PropTypes.bool,
  /**
   * Props passed to each filter form.
   */
  filterFormProps: PropTypes.shape({
    columnInputProps: PropTypes.any,
    columnsSort: PropTypes.oneOf(['asc', 'desc']),
    deleteIconProps: PropTypes.any,
    filterColumns: PropTypes.func,
    logicOperatorInputProps: PropTypes.any,
    operatorInputProps: PropTypes.any,
    valueInputProps: PropTypes.any,
  }),
  /**
   * The filter model edited by the panel.
   */
  filterModel: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        field: PropTypes.string.isRequired,
        id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        operator: PropTypes.string.isRequired,
        value: PropTypes.any,
      }),
    ).isRequired,
    logicOperator: PropTypes.oneOf(['and', 'or']),
    quickFilterExcludeHiddenColumns: PropTypes.bool,
    quickFilterLogicOperator: PropTypes.oneOf(['and', 'or']),
    quickFilterValues: PropTypes.array,
  }).isRequired,
  /**
   * Function that returns the next filter item to be picked as default filter.
   * @param {GetColumnForNewFilterArgs} args Currently configured filters and columns.
   * @returns {GridColDef['field']} The field to be used for the next filter or `null` to prevent adding a filter.
   */
  getColumnForNewFilter: PropTypes.func,
  /**
   * Sets the available logic operators.
   * @default [GridLogicOperator.And, GridLogicOperator.Or]
   */
  logicOperators: PropTypes.arrayOf(PropTypes.oneOf(['and', 'or']).isRequired),
  /**
   * Callback fired when the panel requests to be closed, e.g. after the last filter is removed.
   * In `GridFilterPanel` it hides the grid filter panel; for standalone usage it is a no-op
   * unless provided.
   */
  onClose: PropTypes.func,
  /**
   * Callback fired when the filter model is changed through the panel.
   * @param {GridFilterModel} model The new filter model.
   * @param {GridControlledStateReasonLookup['filter']} reason The reason for the model to have changed.
   */
  onFilterModelChange: PropTypes.func.isRequired,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])),
    PropTypes.func,
    PropTypes.object,
  ]),
} as any;

/**
 * The lower-level filter panel used by `GridFilterPanel`.
 * Unlike `GridFilterPanel`, it does not read or mutate the grid filter state — the model is
 * provided through the `filterModel` prop and edits are reported through `onFilterModelChange`,
 * which makes it usable with a controlled (draft) filter model.
 *
 * Demos:
 * - [Filtering - overview](https://mui.com/x/react-data-grid/filtering/)
 *
 * API:
 * - [GridFilterPanelBase API](https://mui.com/x/api/data-grid/grid-filter-panel-base/)
 */
export { GridFilterPanelBase, getGridFilter };
