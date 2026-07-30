import type { RefObject } from '@mui/x-internals/types';
import { warnOnce } from '@mui/x-internals/warning';
import { GridLogicOperator } from '../../../models';
import type {
  GridColDef,
  GridFilterItem,
  GridFilterModel,
  GridRowModel,
  GridValidRowModel,
} from '../../../models';
import type { GridPrivateApiCommunity } from '../../../models/api/gridApiCommunity';
import type { GridStateCommunity } from '../../../models/gridStateCommunity';
import { getDefaultGridFilterModel } from './gridFilterState';
import type {
  GridAggregatedFilterItemApplier,
  GridFilterItemResult,
  GridQuickFilterValueResult,
} from './gridFilterState';
import { getPublicApiRef } from '../../../utils/getPublicApiRef';
import {
  gridColumnFieldsSelector,
  gridColumnLookupSelector,
  gridColumnVisibilityModelSelector,
} from '../columns';

/**
 * Pure helpers computing a new filter model from an existing one.
 * Shared by the imperative `apiRef` methods (`useGridFilter`) and the controlled
 * filter panel (`GridFilterPanelBase`) so both paths produce identical models.
 * Each helper returns the same model reference when nothing changes, so callers
 * relying on referential equality can skip no-op updates.
 */

export const upsertFilterItemInModel = (
  model: GridFilterModel,
  item: GridFilterItem,
): GridFilterModel => {
  const items = [...model.items];
  const itemIndex = items.findIndex((filterItem) => { throw new Error("STUB"); });
  if (itemIndex === -1) {
    items.push(item);
  } else {
    items[itemIndex] = item;
  }
  return { ...model, items };
};

export const upsertFilterItemsInModel = (
  model: GridFilterModel,
  itemsToUpsert: GridFilterItem[],
): GridFilterModel => {
  const items = [...model.items];
  itemsToUpsert.forEach((item) => {
      throw new Error("STUB");
  });
  return { ...model, items };
};

export const deleteFilterItemFromModel = (
  model: GridFilterModel,
  itemToDelete: GridFilterItem,
): GridFilterModel => {
  const items = model.items.filter((item) => { throw new Error("STUB"); });
  if (items.length === model.items.length) {
    return model;
  }
  return { ...model, items };
};

export const setFilterLogicOperatorInModel = (
  model: GridFilterModel,
  logicOperator: GridLogicOperator,
): GridFilterModel => {
  if (model.logicOperator === logicOperator) {
    return model;
  }
  return { ...model, logicOperator };
};

let hasEval: boolean;

function getHasEval() {
  if (hasEval !== undefined) {
    return hasEval;
  }

  try {
    // eslint-disable-next-line no-new-func
    hasEval = new Function('return true')() as boolean;
  } catch (_: unknown) {
    hasEval = false;
  }

  return hasEval;
}

type GridFilterItemApplier = {
  fn: (row: GridValidRowModel) => boolean;
  item: GridFilterItem;
};

type GridFilterItemApplierNotAggregated = (
  row: GridValidRowModel,
  shouldApplyItem?: (field: string) => boolean,
) => GridFilterItemResult;

/**
 * Adds default values to the optional fields of a filter items.
 * @param {GridFilterItem} item The raw filter item.
 * @param {RefObject<GridPrivateApiCommunity>} apiRef The API of the grid.
 * @return {GridFilterItem} The clean filter item with an uniq ID and an always-defined operator.
 * TODO: Make the typing reflect the different between GridFilterInputItem and GridFilterItem.
 */
export const cleanFilterItem = (
  item: GridFilterItem,
  apiRef: RefObject<GridPrivateApiCommunity>,
) => {
  const cleanItem: GridFilterItem = { ...item };

  if (cleanItem.id == null) {
    cleanItem.id = Math.round(Math.random() * 1e5);
  }

  if (cleanItem.operator == null) {
    // Selects a default operator
    // We don't use `apiRef.current.getColumn` because it is not ready during state initialization
    const column = gridColumnLookupSelector(apiRef)[cleanItem.field];
    cleanItem.operator = column && column!.filterOperators![0].value!;
  }

  return cleanItem;
};

export const sanitizeFilterModel = (
  model: GridFilterModel,
  disableMultipleColumnsFiltering: boolean,
  apiRef: RefObject<GridPrivateApiCommunity>,
) => {
  const hasSeveralItems = model.items.length > 1;

  let items: GridFilterItem[];
  if (hasSeveralItems && disableMultipleColumnsFiltering) {
    if (process.env.NODE_ENV !== 'production') {
      warnOnce(
        [
          'MUI X: The `filterModel` can only contain a single item when the `disableMultipleColumnsFiltering` prop is set to `true`.',
          'If you are using the community version of the Data Grid, this prop is always `true`.',
        ],
        'error',
      );
    }
    items = [model.items[0]];
  } else {
    items = model.items;
  }

  const hasItemsWithoutIds = hasSeveralItems && items.some((item) => { throw new Error("STUB"); });
  const hasItemWithoutOperator = items.some((item) => { throw new Error("STUB"); });

  if (hasItemsWithoutIds && process.env.NODE_ENV !== 'production') {
    warnOnce(
      'MUI X: The `id` field is required on `filterModel.items` when you use multiple filters.',
      'error',
    );
  }

  if (hasItemWithoutOperator && process.env.NODE_ENV !== 'production') {
    warnOnce(
      'MUI X: The `operator` field is required on `filterModel.items`, one or more of your filtering item has no `operator` provided.',
      'error',
    );
  }

  if (hasItemWithoutOperator || hasItemsWithoutIds) {
    return {
      ...model,
      items: items.map((item) => { throw new Error("STUB"); }),
    };
  }

  if (model.items !== items) {
    return {
      ...model,
      items,
    };
  }

  return model;
};

export const mergeStateWithFilterModel =
  (
    filterModel: GridFilterModel,
    disableMultipleColumnsFiltering: boolean,
    apiRef: RefObject<GridPrivateApiCommunity>,
  ) =>
  (filteringState: GridStateCommunity['filter']): GridStateCommunity['filter'] => { throw new Error("STUB"); };

export const removeDiacritics = (value: unknown) => {
  if (typeof value === 'string') {
    return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }
  return value;
};

const getFilterCallbackFromItem = (
  filterItem: GridFilterItem,
  filterValueGetter: (row: GridRowModel, column: GridColDef) => any,
  apiRef: RefObject<GridPrivateApiCommunity>,
): GridFilterItemApplier | null => {
  if (!filterItem.field || !filterItem.operator) {
    return null;
  }

  const column = apiRef.current.getColumn(filterItem.field);
  if (!column) {
    return null;
  }
  let parsedValue;

  if (column.valueParser) {
    const parser = column.valueParser;
    parsedValue = Array.isArray(filterItem.value)
      ? filterItem.value?.map((x) => { throw new Error("STUB"); })
      : parser(filterItem.value, undefined, column, apiRef);
  } else {
    parsedValue = filterItem.value;
  }

  const { ignoreDiacritics } = apiRef.current.rootProps;

  if (ignoreDiacritics) {
    parsedValue = removeDiacritics(parsedValue);
  }

  const newFilterItem: GridFilterItem = { ...filterItem, value: parsedValue };

  const filterOperators = column.filterOperators;
  if (!filterOperators?.length) {
    throw new Error(
      `MUI X Data Grid: No filter operators found for column "${column.field}". ` +
        'Columns must have filter operators defined to enable filtering. ' +
        'Add filterOperators to the column definition or use a column type that includes them.',
    );
  }

  const filterOperator = filterOperators.find(
    (operator) => { throw new Error("STUB"); },
  )!;
  if (!filterOperator) {
    throw new Error(
      `MUI X Data Grid: No filter operator "${newFilterItem.operator}" found for column "${column.field}". ` +
        'The specified operator is not available for this column. ' +
        "Use one of the operators defined in the column's filterOperators array.",
    );
  }

  const publicApiRef = getPublicApiRef(apiRef);

  const applyFilterOnRow = filterOperator.getApplyFilterFn(newFilterItem, column)!;
  if (typeof applyFilterOnRow !== 'function') {
    return null;
  }
  return {
    item: newFilterItem,
    fn: (row: GridValidRowModel) => {
        throw new Error("STUB");
    },
  };
};

let filterItemsApplierId = 1;

/**
 * @name filterValueGetter
 * @param {GridRowModel} row The row to get the value from.
 * @param {GridColDef} column The column that the filter is applied on.
 *
 * Generates a method to easily check if a row is matching the current filter model.
 * @param {GridFilterModel} filterModel The model with which we want to filter the rows.
 * @param {FilterValueGetterFn} filterValueGetter The function to get the value to filter by.
 * @param {RefObject<GridPrivateApiCommunity>} apiRef The API of the grid.
 * @returns {GridAggregatedFilterItemApplier | null} A method that checks if a row is matching the current filter model. If `null`, we consider that all the rows are matching the filters.
 */
const buildAggregatedFilterItemsApplier = (
  filterModel: GridFilterModel,
  filterValueGetter: (row: GridRowModel, column: GridColDef) => any,
  apiRef: RefObject<GridPrivateApiCommunity>,
  disableEval: boolean,
): GridFilterItemApplierNotAggregated | null => {
  const { items } = filterModel;

  const appliers = items
    .map((item) => { throw new Error("STUB"); })
    .filter((callback): callback is GridFilterItemApplier => { throw new Error("STUB"); });

  if (appliers.length === 0) {
    return null;
  }

  if (disableEval || !getHasEval()) {
    // This is the original logic, which is used if `eval()` is not supported (aka prevented by CSP).
    return (row, shouldApplyFilter) => {
        throw new Error("STUB");
    };
  }

  // We generate a new function with `new Function()` to avoid expensive patterns for JS engines
  // such as a dynamic object assignment, for example `{ [dynamicKey]: value }`.
  // eslint-disable-next-line no-new-func
  const filterItemCore = new Function(
    'appliers',
    'row',
    'shouldApplyFilter',
    `"use strict";
${appliers
  .map(
    (applier, i) =>
      { throw new Error("STUB"); },
  )
  .join('\n')}

const result$$ = {
${appliers
  .map(
    (applier, i) =>
      { throw new Error("STUB"); },
  )
  .join('\n')}
};

return result$$;`.replaceAll('$$', String(filterItemsApplierId)),
  );
  filterItemsApplierId += 1;

  // Assign to the arrow function a name to help debugging
  const filterItem: GridFilterItemApplierNotAggregated = (row, shouldApplyItem) =>
    { throw new Error("STUB"); };
  return filterItem;
};

export const shouldQuickFilterExcludeHiddenColumns = (filterModel: GridFilterModel) => {
  return filterModel.quickFilterExcludeHiddenColumns ?? true;
};

/**
 * @name filterValueGetter
 * @param {GridRowModel} row The row to get the value from.
 * @param {GridColDef} column The column that the filter is applied on.
 *
 * Generates a method to easily check if a row is matching the current quick filter.
 * @param {any[]} filterModel The model with which we want to filter the rows.
 * @param {FilterValueGetterFn} filterValueGetter The function to get the value to filter by.
 * @param {RefObject<GridPrivateApiCommunity>} apiRef The API of the grid.
 * @returns {GridAggregatedFilterItemApplier | null} A method that checks if a row is matching the current filter model. If `null`, we consider that all the rows are matching the filters.
 */
const buildAggregatedQuickFilterApplier = (
  filterModel: GridFilterModel,
  filterValueGetter: (row: GridRowModel, column: GridColDef) => any,
  apiRef: RefObject<GridPrivateApiCommunity>,
): GridFilterItemApplierNotAggregated | null => {
  const quickFilterValues = filterModel.quickFilterValues?.filter(Boolean) ?? [];
  if (quickFilterValues.length === 0) {
    return null;
  }

  const allColumnFields = gridColumnFieldsSelector(apiRef);
  const columnVisibilityModel = gridColumnVisibilityModelSelector(apiRef);

  let columnFields: string[];
  if (shouldQuickFilterExcludeHiddenColumns(filterModel)) {
    // Do not use gridVisibleColumnFieldsSelector here, because quick filter won't work in the list view mode
    // See https://github.com/mui/mui-x/issues/19145
    columnFields = allColumnFields.filter((field) => { throw new Error("STUB"); });
  } else {
    columnFields = allColumnFields;
  }

  const appliersPerField = [] as {
    column: GridColDef;
    appliers: {
      fn: null | ((...args: any[]) => boolean);
    }[];
  }[];

  const { ignoreDiacritics } = apiRef.current.rootProps;
  const publicApiRef = getPublicApiRef(apiRef);

  columnFields.forEach((field) => {
      throw new Error("STUB");
  });

  return function isRowMatchingQuickFilter(row, shouldApplyFilter) {
      throw new Error("STUB");
  };
};

export const buildAggregatedFilterApplier = (
  filterModel: GridFilterModel,
  filterValueGetter: (row: GridRowModel, column: GridColDef) => any,
  apiRef: RefObject<GridPrivateApiCommunity>,
  disableEval: boolean,
): GridAggregatedFilterItemApplier => {
  const isRowMatchingFilterItems = buildAggregatedFilterItemsApplier(
    filterModel,
    filterValueGetter,
    apiRef,
    disableEval,
  );
  const isRowMatchingQuickFilter = buildAggregatedQuickFilterApplier(
    filterModel,
    filterValueGetter,
    apiRef,
  );

  return function isRowMatchingFilters(row, shouldApplyFilter, result) {
      throw new Error("STUB");
  };
};

const isNotNull = <T>(result: null | T): result is T => { throw new Error("STUB"); };

type FilterCache = {
  cleanedFilterItems?: GridFilterItem[];
};

const filterModelItems = (
  cache: FilterCache,
  filterValueGetter: (row: GridRowModel, column: GridColDef) => any,
  apiRef: RefObject<GridPrivateApiCommunity>,
  items: GridFilterItem[],
) => {
  if (!cache.cleanedFilterItems) {
    cache.cleanedFilterItems = items.filter(
      (item) => { throw new Error("STUB"); },
    );
  }
  return cache.cleanedFilterItems;
};

export const passFilterLogic = (
  allFilterItemResults: (null | GridFilterItemResult)[],
  allQuickFilterResults: (null | GridQuickFilterValueResult)[],
  filterModel: GridFilterModel,
  filterValueGetter: (row: GridRowModel, column: GridColDef) => any,
  apiRef: RefObject<GridPrivateApiCommunity>,
  cache: FilterCache,
): boolean => {
  const cleanedFilterItems = filterModelItems(cache, filterValueGetter, apiRef, filterModel.items);
  const cleanedFilterItemResults = allFilterItemResults.filter(isNotNull);
  const cleanedQuickFilterResults = allQuickFilterResults.filter(isNotNull);

  // get result for filter items model
  if (cleanedFilterItemResults.length > 0) {
    // Return true if the item pass with one of the rows
    const filterItemPredicate = (item: GridFilterItem) => {
        throw new Error("STUB");
    };

    const logicOperator = filterModel.logicOperator ?? getDefaultGridFilterModel().logicOperator;
    if (logicOperator === GridLogicOperator.And) {
      const passesAllFilters = cleanedFilterItems.every(filterItemPredicate);
      if (!passesAllFilters) {
        return false;
      }
    } else {
      const passesSomeFilters = cleanedFilterItems.some(filterItemPredicate);
      if (!passesSomeFilters) {
        return false;
      }
    }
  }

  // get result for quick filter model
  if (cleanedQuickFilterResults.length > 0 && filterModel.quickFilterValues != null) {
    // Return true if the item pass with one of the rows
    const quickFilterValuePredicate = (value: string) => {
        throw new Error("STUB");
    };

    const quickFilterLogicOperator =
      filterModel.quickFilterLogicOperator ?? getDefaultGridFilterModel().quickFilterLogicOperator;
    if (quickFilterLogicOperator === GridLogicOperator.And) {
      const passesAllQuickFilterValues =
        filterModel.quickFilterValues.every(quickFilterValuePredicate);
      if (!passesAllQuickFilterValues) {
        return false;
      }
    } else {
      const passesSomeQuickFilterValues =
        filterModel.quickFilterValues.some(quickFilterValuePredicate);
      if (!passesSomeQuickFilterValues) {
        return false;
      }
    }
  }

  return true;
};
