'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import composeClasses from '@mui/utils/composeClasses';
import useId from '@mui/utils/useId';
import capitalize from '@mui/utils/capitalize';
import { styled } from '@mui/material/styles';
import { forwardRef } from '@mui/x-internals/forwardRef';
import { vars } from '../../../constants/cssVariables';
import {
  gridFilterableColumnDefinitionsSelector,
  gridColumnLookupSelector,
} from '../../../hooks/features/columns/gridColumnsSelector';
import { useGridSelector } from '../../../hooks/utils/useGridSelector';
import { GridLogicOperator } from '../../../models/gridFilterItem';
import type { GridFilterItem } from '../../../models/gridFilterItem';
import type { GridFilterModel } from '../../../models/gridFilterModel';
import { useGridApiContext } from '../../../hooks/utils/useGridApiContext';
import { useGridRootProps } from '../../../hooks/utils/useGridRootProps';
import type { DataGridProcessedProps } from '../../../models/props/DataGridProps';
import { getDataGridUtilityClass } from '../../../constants/gridClasses';
import type {
  GridColDef,
  GridSingleSelectColDef,
  GridStateColDef,
} from '../../../models/colDef/gridColDef';
import { getValueFromValueOptions, getValueOptions } from './filterPanelUtils';
import {
  gridPivotActiveSelector,
  gridPivotInitialColumnsSelector,
} from '../../../hooks/features/pivoting';

export interface FilterColumnsArgs {
  field: GridColDef['field'];
  columns: GridStateColDef[];
  currentFilters: GridFilterItem[];
}

export interface GridFilterFormProps {
  /**
   * The [[GridFilterItem]] representing this form.
   */
  item: GridFilterItem;
  /**
   * If `true`, the logic operator field is rendered.
   * The field will be invisible if `showMultiFilterOperators` is also `true`.
   */
  hasMultipleFilters: boolean;
  /**
   * If `true`, the logic operator field is visible.
   */
  showMultiFilterOperators?: boolean;
  /**
   * If `true`, disables the logic operator field but still renders it.
   */
  disableMultiFilterOperator?: boolean;
  /**
   * A ref allowing to set imperative focus.
   * It can be passed to the el
   */
  focusElementRef?: React.Ref<any>;
  /**
   * Callback called when the operator, column field or value is changed.
   * @param {GridFilterItem} item The updated [[GridFilterItem]].
   */
  applyFilterChanges: (item: GridFilterItem) => void;
  /**
   * Callback called when the logic operator is changed.
   * @param {GridLogicOperator} operator The new logic operator.
   */
  applyMultiFilterOperatorChanges: (operator: GridLogicOperator) => void;
  /**
   * Callback called when the delete button is clicked.
   * @param {GridFilterItem} item The deleted [[GridFilterItem]].
   */
  deleteFilter: (item: GridFilterItem) => void;
  /**
   * Allows to filter the columns displayed in the filter form.
   * @param {FilterColumnsArgs} args The columns of the grid and name of field.
   * @returns {GridColDef['field'][]} The filtered fields array.
   */
  filterColumns?: (args: FilterColumnsArgs) => GridColDef['field'][];
  /**
   * Sets the available logic operators.
   * @default [GridLogicOperator.And, GridLogicOperator.Or]
   */
  logicOperators?: GridLogicOperator[];
  /**
   * Changes how the options in the columns selector should be ordered.
   * If not specified, the order is derived from the `columns` prop.
   */
  columnsSort?: 'asc' | 'desc';
  /**
   * Props passed to the delete icon.
   * @default {}
   */
  deleteIconProps?: any;
  /**
   * Props passed to the logic operator input component.
   * @default {}
   */
  logicOperatorInputProps?: any;
  /**
   * Props passed to the operator input component.
   * @default {}
   */
  operatorInputProps?: any;
  /**
   * Props passed to the column input component.
   * @default {}
   */
  columnInputProps?: any;
  /**
   * `true` if the filter is disabled/read only.
   * i.e. `colDef.fiterable = false` but passed in `filterModel`
   * @default false
   */
  readOnly?: boolean;
  /**
   * Props passed to the value input component.
   * @default {}
   */
  valueInputProps?: any;
  /**
   * @ignore - do not document.
   */
  children?: React.ReactNode;
}

export interface GridFilterFormBaseProps extends GridFilterFormProps {
  /**
   * @default false
   */
  disableDebounce?: boolean;
  /**
   * The filter model that populates the form.
   * Its `logicOperator` drives the logic operator field and its `items` are used to compute the
   * columns available in the column selector (e.g. via the `filterColumns` callback).
   */
  filterModel: GridFilterModel;
}

type OwnerState = DataGridProcessedProps;

const useUtilityClasses = (ownerState: OwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['filterForm'],
    deleteIcon: ['filterFormDeleteIcon'],
    logicOperatorInput: ['filterFormLogicOperatorInput'],
    columnInput: ['filterFormColumnInput'],
    operatorInput: ['filterFormOperatorInput'],
    valueInput: ['filterFormValueInput'],
  };

  return composeClasses(slots, getDataGridUtilityClass, classes);
};

const GridFilterFormRoot = styled('div', {
  name: 'MuiDataGrid',
  slot: 'FilterForm',
})<{ ownerState: OwnerState }>({
  display: 'flex',
  gap: vars.spacing(1.5),
});

const FilterFormDeleteIcon = styled('div', {
  name: 'MuiDataGrid',
  slot: 'FilterFormDeleteIcon',
})<{ ownerState: OwnerState }>({
  flexShrink: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const FilterFormLogicOperatorInput = styled('div', {
  name: 'MuiDataGrid',
  slot: 'FilterFormLogicOperatorInput',
})<{ ownerState: OwnerState }>({
  minWidth: 75,
  justifyContent: 'end',
});

const FilterFormColumnInput = styled('div', {
  name: 'MuiDataGrid',
  slot: 'FilterFormColumnInput',
})<{ ownerState: OwnerState }>({ width: 150 });

const FilterFormOperatorInput = styled('div', {
  name: 'MuiDataGrid',
  slot: 'FilterFormOperatorInput',
})<{ ownerState: OwnerState }>({ width: 150 });

const FilterFormValueInput = styled('div', {
  name: 'MuiDataGrid',
  slot: 'FilterFormValueInput',
})<{ ownerState: OwnerState }>({ width: 190 });

const getLogicOperatorLocaleKey = (logicOperator: GridLogicOperator) => {
  switch (logicOperator) {
    case GridLogicOperator.And:
      return 'filterPanelOperatorAnd';
    case GridLogicOperator.Or:
      return 'filterPanelOperatorOr';
    default:
      throw new Error('MUI X: Invalid `logicOperator` property in the `GridFilterPanel`.');
  }
};

const getColumnLabel = (col: GridColDef) => col.headerName || col.field;

const collator = new Intl.Collator();

const GridFilterFormBase = forwardRef<HTMLDivElement, GridFilterFormBaseProps>(
  function GridFilterFormBase(props, ref) {
        throw new Error("STUB");
    },
);

GridFilterFormBase.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Callback called when the operator, column field or value is changed.
   * @param {GridFilterItem} item The updated [[GridFilterItem]].
   */
  applyFilterChanges: PropTypes.func.isRequired,
  /**
   * Callback called when the logic operator is changed.
   * @param {GridLogicOperator} operator The new logic operator.
   */
  applyMultiFilterOperatorChanges: PropTypes.func.isRequired,
  /**
   * @ignore - do not document.
   */
  children: PropTypes.node,
  /**
   * Props passed to the column input component.
   * @default {}
   */
  columnInputProps: PropTypes.any,
  /**
   * Changes how the options in the columns selector should be ordered.
   * If not specified, the order is derived from the `columns` prop.
   */
  columnsSort: PropTypes.oneOf(['asc', 'desc']),
  /**
   * Callback called when the delete button is clicked.
   * @param {GridFilterItem} item The deleted [[GridFilterItem]].
   */
  deleteFilter: PropTypes.func.isRequired,
  /**
   * Props passed to the delete icon.
   * @default {}
   */
  deleteIconProps: PropTypes.any,
  /**
   * If `true`, disables the logic operator field but still renders it.
   */
  disableMultiFilterOperator: PropTypes.bool,
  /**
   * Allows to filter the columns displayed in the filter form.
   * @param {FilterColumnsArgs} args The columns of the grid and name of field.
   * @returns {GridColDef['field'][]} The filtered fields array.
   */
  filterColumns: PropTypes.func,
  /**
   * The filter model that populates the form.
   * Its `logicOperator` drives the logic operator field and its `items` are used to compute the
   * columns available in the column selector (e.g. via the `filterColumns` callback).
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
   * A ref allowing to set imperative focus.
   * It can be passed to the el
   */
  focusElementRef: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([
    PropTypes.func,
    PropTypes.object,
  ]),
  /**
   * If `true`, the logic operator field is rendered.
   * The field will be invisible if `showMultiFilterOperators` is also `true`.
   */
  hasMultipleFilters: PropTypes.bool.isRequired,
  /**
   * The [[GridFilterItem]] representing this form.
   */
  item: PropTypes.shape({
    field: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    operator: PropTypes.string.isRequired,
    value: PropTypes.any,
  }).isRequired,
  /**
   * Props passed to the logic operator input component.
   * @default {}
   */
  logicOperatorInputProps: PropTypes.any,
  /**
   * Sets the available logic operators.
   * @default [GridLogicOperator.And, GridLogicOperator.Or]
   */
  logicOperators: PropTypes.arrayOf(PropTypes.oneOf(['and', 'or']).isRequired),
  /**
   * Props passed to the operator input component.
   * @default {}
   */
  operatorInputProps: PropTypes.any,
  /**
   * `true` if the filter is disabled/read only.
   * i.e. `colDef.fiterable = false` but passed in `filterModel`
   * @default false
   */
  readOnly: PropTypes.bool,
  /**
   * If `true`, the logic operator field is visible.
   */
  showMultiFilterOperators: PropTypes.bool,
  /**
   * Props passed to the value input component.
   * @default {}
   */
  valueInputProps: PropTypes.any,
} as any;

/**
 * The lower-level filter form rendered by `GridFilterForm` and `GridFilterPanelBase`.
 * It is controlled through the `filterModel` prop instead of reading the grid filter state.
 * This is an internal component that is not part of the public API.
 */
export { GridFilterFormBase };
