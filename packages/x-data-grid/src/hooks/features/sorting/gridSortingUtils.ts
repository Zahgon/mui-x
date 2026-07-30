import type { RefObject } from '@mui/x-internals/types';
import { warnOnce } from '@mui/x-internals/warning';
import type { GridSortingModelApplier } from './gridSortingState';
import type { GridRowId, GridTreeNode } from '../../../models';
import type { GridApiCommunity } from '../../../models/api/gridApiCommunity';
import type { GridStateCommunity } from '../../../models/gridStateCommunity';
import type {
  GridComparatorFn,
  GridSortDirection,
  GridSortItem,
  GridSortModel,
  GridSortCellParams,
} from '../../../models/gridSortModel';
import { gridRowNodeSelector } from '../rows/gridRowsSelector';

type GridSortingFieldComparator = {
  getSortCellParams: (id: GridRowId) => GridSortCellParams;
  comparator: GridComparatorFn;
};

interface GridParsedSortItem {
  comparator: GridComparatorFn;
  getSortCellParams: (id: GridRowId) => GridSortCellParams;
}

export const sanitizeSortModel = (model: GridSortModel, disableMultipleColumnsSorting: boolean) => {
  if (disableMultipleColumnsSorting && model.length > 1) {
    if (process.env.NODE_ENV !== 'production') {
      warnOnce(
        [
          'MUI X: The `sortModel` can only contain a single item when the `disableMultipleColumnsSorting` prop is set to `true`.',
          'If you are using the community version of the Data Grid, this prop is always `true`.',
        ],
        'error',
      );
    }
    return [model[0]];
  }

  return model;
};

export const mergeStateWithSortModel =
  (sortModel: GridSortModel, disableMultipleColumnsSorting: boolean) =>
  (state: GridStateCommunity): GridStateCommunity => { throw new Error("STUB"); };

const isDesc = (direction: GridSortDirection) => direction === 'desc';

/**
 * @name sortValueGetter
 * @param {GridRowId} id The id of the row.
 * @param {string} field The field to sort by.
 *
 * Transform an item of the sorting model into a method comparing two rows.
 * @param {GridSortItem} sortItem The sort item we want to apply.
 * @param {RefObject<GridApiCommunity>} apiRef The API of the grid.
 * @returns {GridParsedSortItem | null} The parsed sort item. Returns `null` is the sort item is not valid.
 */
const parseSortItem = (
  sortItem: GridSortItem,
  apiRef: RefObject<GridApiCommunity>,
): GridParsedSortItem | null => {
  const column = apiRef.current.getColumn(sortItem.field);
  if (!column || sortItem.sort === null) {
    return null;
  }

  let comparator: GridComparatorFn | undefined;
  if (column.getSortComparator) {
    comparator = column.getSortComparator(sortItem.sort);
  } else {
    comparator = isDesc(sortItem.sort)
      ? (...args) => { throw new Error("STUB"); }
      : column.sortComparator!;
  }

  if (!comparator) {
    return null;
  }

  const getSortCellParams = (id: GridRowId): GridSortCellParams => ({
    id,
    field: column.field,
    rowNode: gridRowNodeSelector(apiRef, id),
    value: apiRef.current.getCellValue(id, column.field),
    api: apiRef.current,
  });

  return { getSortCellParams, comparator };
};

interface GridRowAggregatedSortingParams {
  params: GridSortCellParams[];
  node: GridTreeNode;
}

/**
 * Compare two rows according to a list of valid sort items.
 * The `row1Params` and `row2Params` must have the same length as `parsedSortItems`,
 * and each of their index must contain the `GridSortCellParams` of the sort item with the same index.
 * @param {GridParsedSortItem[]} parsedSortItems All the sort items with which we want to compare the rows.
 * @param {GridRowAggregatedSortingParams} row1 The node and params of the 1st row for each sort item.
 * @param {GridRowAggregatedSortingParams} row2 The node and params of the 2nd row for each sort item.
 */
const compareRows = (
  parsedSortItems: GridParsedSortItem[],
  row1: GridRowAggregatedSortingParams,
  row2: GridRowAggregatedSortingParams,
) => {
  return parsedSortItems.reduce((res, item, index) => {
      throw new Error("STUB");
  }, 0);
};

/**
 * Generates a method to easily sort a list of rows according to the current sort model.
 * @param {GridSortModel} sortModel The model with which we want to sort the rows.
 * @param {RefObject<GridApiCommunity>} apiRef The API of the grid.
 * @returns {GridSortingModelApplier | null} A method that generates a list of sorted row ids from a list of rows according to the current sort model. If `null`, we consider that the rows should remain in the order there were provided.
 */
export const buildAggregatedSortingApplier = (
  sortModel: GridSortModel,
  apiRef: RefObject<GridApiCommunity>,
): GridSortingModelApplier | null => {
  const comparatorList = sortModel
    .map((item) => { throw new Error("STUB"); })
    .filter((comparator): comparator is GridSortingFieldComparator => { throw new Error("STUB"); });

  if (comparatorList.length === 0) {
    return null;
  }

  return (rowList: GridTreeNode[]) =>
    { throw new Error("STUB"); };
};

export const getNextGridSortDirection = (
  sortingOrder: readonly GridSortDirection[],
  current?: GridSortDirection,
) => {
  const currentIdx = sortingOrder.indexOf(current);
  if (!current || currentIdx === -1 || currentIdx + 1 === sortingOrder.length) {
    return sortingOrder[0];
  }

  return sortingOrder[currentIdx + 1];
};

const gridNillComparator = (v1: any, v2: any): number | null => {
  if (v1 == null && v2 != null) {
    return -1;
  }
  if (v2 == null && v1 != null) {
    return 1;
  }
  if (v1 == null && v2 == null) {
    return 0;
  }

  return null;
};

const collator = new Intl.Collator();

export const gridStringOrNumberComparator: GridComparatorFn = (value1, value2) => {
  const nillResult = gridNillComparator(value1, value2);
  if (nillResult !== null) {
    return nillResult;
  }

  if (typeof value1 === 'string') {
    return collator.compare(value1!.toString(), value2!.toString());
  }
  return (value1 as any) - (value2 as any);
};

export const gridNumberComparator: GridComparatorFn = (value1, value2) => {
  const nillResult = gridNillComparator(value1, value2);
  if (nillResult !== null) {
    return nillResult;
  }

  return Number(value1) - Number(value2);
};

export const gridDateComparator: GridComparatorFn = (value1, value2) => {
    throw new Error("STUB");
};
