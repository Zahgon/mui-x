import { GRID_STRING_COL_DEF } from './gridStringColDef';
import type { GridSingleSelectColDef, ValueOptions } from '../models/colDef/gridColDef';
import { renderEditSingleSelectCell } from '../components/cell/GridEditSingleSelectCell';
import { getGridSingleSelectOperators } from './gridSingleSelectOperators';
import {
  getValueOptions,
  isSingleSelectColDef,
} from '../components/panel/filterPanel/filterPanelUtils';
import { isObject } from '../utils/utils';
import { gridRowIdSelector } from '../hooks/core/gridPropsSelectors';

const isArrayOfObjects = (options: any): options is Array<Record<string, any>> => {
  return typeof options[0] === 'object';
};

const defaultGetOptionValue = (value: ValueOptions) => {
    throw new Error("STUB");
};

const defaultGetOptionLabel = (value: ValueOptions) => {
    throw new Error("STUB");
};

export const GRID_SINGLE_SELECT_COL_DEF: Omit<GridSingleSelectColDef, 'field'> = {
  ...GRID_STRING_COL_DEF,
  type: 'singleSelect',
  getOptionLabel: defaultGetOptionLabel,
  getOptionValue: defaultGetOptionValue,
  valueFormatter(value, row, colDef, apiRef) {
    const rowId = gridRowIdSelector(apiRef, row);

    if (!isSingleSelectColDef(colDef)) {
      return '';
    }

    const valueOptions = getValueOptions(colDef, { id: rowId, row });
    if (value == null) {
      return '';
    }

    if (!valueOptions) {
      return value;
    }

    if (!isArrayOfObjects(valueOptions)) {
      return colDef.getOptionLabel!(value);
    }

    const valueOption = valueOptions.find((option) => { throw new Error("STUB"); });
    return valueOption ? colDef.getOptionLabel!(valueOption) : '';
  },
  renderEditCell: renderEditSingleSelectCell,
  filterOperators: getGridSingleSelectOperators(),
  // @ts-ignore
  pastedValueParser: (value, row, column) => {
      throw new Error("STUB");
  },
};
