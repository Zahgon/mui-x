'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { styled } from '@mui/material/styles';
import useForkRef from '@mui/utils/useForkRef';
import composeClasses from '@mui/utils/composeClasses';
import capitalize from '@mui/utils/capitalize';
import { fastMemo } from '@mui/x-internals/fastMemo';
import {
  gridVisibleColumnFieldsSelector,
  getDataGridUtilityClass,
  useGridSelector,
  GridFilterInputValue,
  GridFilterInputDate,
  GridFilterInputBoolean,
  GridFilterInputSingleSelect,
  gridFilterModelSelector,
  gridFilterableColumnLookupSelector,
  gridClasses,
} from '@mui/x-data-grid';
import type {
  GridFilterItem,
  GridFilterOperator,
  GridHeaderFilterEventLookup,
  GridColDef,
  GridColType,
} from '@mui/x-data-grid';
import {
  PinnedColumnPosition,
  useGridPrivateApiContext,
  gridHeaderFilteringEditFieldSelector,
  gridHeaderFilteringMenuSelector,
  isNavigationKey,
  attachPinnedStyle,
  usePinnedScrollOffset,
  vars,
} from '@mui/x-data-grid/internals';
import type { GridStateColDef, GridFilterInputValueProps } from '@mui/x-data-grid/internals';
import { useRtl } from '@mui/system/RtlProvider';
import { forwardRef } from '@mui/x-internals/forwardRef';
import { inputBaseClasses } from '@mui/material/InputBase';
import { GridFilterInputMultipleMultiSelect } from '../panel/filterPanel/GridFilterInputMultipleMultiSelect';
import { useGridRootProps } from '../../hooks/utils/useGridRootProps';
import type { DataGridProProcessedProps } from '../../models/dataGridProProps';
import { GridHeaderFilterMenuContainer } from './GridHeaderFilterMenuContainer';
import { GridHeaderFilterClearButton } from './GridHeaderFilterClearButton';

export interface GridRenderHeaderFilterProps extends GridHeaderFilterCellProps {
  inputRef: React.RefObject<unknown>;
}

export interface GridHeaderFilterCellProps extends Pick<GridStateColDef, 'headerClassName'> {
  colIndex: number;
  height: number;
  sortIndex?: number;
  hasFocus?: boolean;
  tabIndex: 0 | -1;
  width: number;
  colDef: GridColDef;
  headerFilterMenuRef: React.RefObject<HTMLButtonElement | null>;
  item: GridFilterItem;
  showClearIcon?: boolean;
  InputComponentProps: GridFilterOperator['InputComponentProps'];
  pinnedPosition?: PinnedColumnPosition;
  pinnedOffset?: number;
  style?: React.CSSProperties;
  showLeftBorder: boolean;
  showRightBorder: boolean;
}

type OwnerState = DataGridProProcessedProps & {
  colDef: GridColDef;
  pinnedPosition?: PinnedColumnPosition;
  showRightBorder: boolean;
  showLeftBorder: boolean;
};

const StyledInputComponent = styled(GridFilterInputValue, {
  name: 'MuiDataGrid',
  slot: 'ColumnHeaderFilterInput',
})({
  flex: 1,
  marginRight: vars.spacing(0.5),
  marginBottom: vars.spacing(-0.25),
  '& input[type="date"], & input[type="datetime-local"]': {
    '&[value=""]:not(:focus)': {
      color: 'transparent',
    },
  },
  [`& .${inputBaseClasses.input}`]: {
    fontSize: '14px',
  },
  [`.${gridClasses['root--densityCompact']} & .${inputBaseClasses.input}`]: {
    paddingTop: vars.spacing(0.25),
    paddingBottom: vars.spacing(0.25),
    height: 20,
  },
});

const OperatorLabel = styled('span', {
  name: 'MuiDataGrid',
  slot: 'ColumnHeaderFilterOperatorLabel',
})({
  flex: 1,
  marginRight: vars.spacing(0.5),
  color: vars.colors.foreground.muted,
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
});

const useUtilityClasses = (ownerState: OwnerState) => {
  const { colDef, classes, showRightBorder, showLeftBorder, pinnedPosition } = ownerState;

  const slots = {
    root: [
      'columnHeader',
      'columnHeader--filter',
      colDef.headerAlign && `columnHeader--align${capitalize(colDef.headerAlign)}`,
      'withBorderColor',
      showRightBorder && 'columnHeader--withRightBorder',
      showLeftBorder && 'columnHeader--withLeftBorder',
      pinnedPosition === PinnedColumnPosition.LEFT && 'columnHeader--pinnedLeft',
      pinnedPosition === PinnedColumnPosition.RIGHT && 'columnHeader--pinnedRight',
    ],
    input: ['columnHeaderFilterInput'],
    operatorLabel: ['columnHeaderFilterOperatorLabel'],
  };

  return composeClasses(slots, getDataGridUtilityClass, classes);
};

const DEFAULT_INPUT_COMPONENTS: {
  [key in GridColType]: React.JSXElementConstructor<GridFilterInputValueProps> | null;
} = {
  string: GridFilterInputValue,
  number: GridFilterInputValue,
  date: GridFilterInputDate,
  dateTime: GridFilterInputDate,
  boolean: GridFilterInputBoolean,
  singleSelect: GridFilterInputSingleSelect,
  multiSelect: GridFilterInputMultipleMultiSelect,
  actions: null,
  custom: null,
  longText: GridFilterInputValue,
};

const GridHeaderFilterCell = forwardRef<HTMLDivElement, GridHeaderFilterCellProps>((props, ref) => {
    throw new Error("STUB");
});

GridHeaderFilterCell.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  colDef: PropTypes.object.isRequired,
  colIndex: PropTypes.number.isRequired,
  hasFocus: PropTypes.bool,
  /**
   * Class name added to the column header cell.
   */
  headerClassName: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  headerFilterMenuRef: PropTypes.shape({
    current: PropTypes.object,
  }).isRequired,
  height: PropTypes.number.isRequired,
  InputComponentProps: PropTypes.shape({
    apiRef: PropTypes.shape({
      current: PropTypes.object.isRequired,
    }),
    applyValue: PropTypes.func,
    className: PropTypes.string,
    clearButton: PropTypes.node,
    disabled: PropTypes.bool,
    disableDebounce: PropTypes.bool,
    focusElementRef: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.shape({
        current: PropTypes.any.isRequired,
      }),
    ]),
    headerFilterMenu: PropTypes.node,
    inputRef: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.shape({
        current: (props, propName) => {
              throw new Error("STUB");
          },
      }),
    ]),
    isFilterActive: PropTypes.bool,
    item: PropTypes.shape({
      field: PropTypes.string.isRequired,
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      operator: PropTypes.string.isRequired,
      value: PropTypes.any,
    }),
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    slotProps: PropTypes.object,
    tabIndex: PropTypes.number,
  }),
  item: PropTypes.shape({
    field: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    operator: PropTypes.string.isRequired,
    value: PropTypes.any,
  }).isRequired,
  pinnedOffset: PropTypes.number,
  pinnedPosition: PropTypes.oneOf([0, 1, 2, 3]),
  showClearIcon: PropTypes.bool,
  showLeftBorder: PropTypes.bool.isRequired,
  showRightBorder: PropTypes.bool.isRequired,
  sortIndex: PropTypes.number,
  style: PropTypes.object,
  tabIndex: PropTypes.oneOf([-1, 0]).isRequired,
  width: PropTypes.number.isRequired,
} as any;

const Memoized = fastMemo(GridHeaderFilterCell);

export { Memoized as GridHeaderFilterCell };
