import {
  GridLogicOperator,
  GRID_AGGREGATION_FUNCTIONS,
  gridStringOrNumberComparator,
} from '@mui/x-data-grid-premium';
import type {
  GridRowModel,
  GridFilterModel,
  GridSortModel,
  GridFilterOperator,
  GridColDef,
  GridRowId,
  GridPaginationModel,
  GridValidRowModel,
  GridAggregationModel,
  GridAggregationFunction,
  GridPivotModel,
  GridGetRowsResponse,
} from '@mui/x-data-grid-premium';
import type { GridStateColDef } from '@mui/x-data-grid-pro/internals';
import { randomInt } from '../services/random-generator';

const getAvailableAggregationFunctions = (columnType: GridColDef['type']) => {
  const availableAggregationFunctions = new Map<string, GridAggregationFunction>();
  Object.keys(GRID_AGGREGATION_FUNCTIONS).forEach((functionName) => {
      throw new Error("STUB");
  });
  return availableAggregationFunctions;
};

export interface FakeServerResponse {
  returnedRows: GridRowModel[];
  aggregateRow?: GridValidRowModel;
  nextCursor?: string;
  hasNextPage?: boolean;
  totalRowCount: number;
}

export interface PageInfo {
  totalRowCount?: number;
  nextCursor?: string;
  hasNextPage?: boolean;
  pageSize?: number;
}

export interface DefaultServerOptions {
  /**
   * The minimum response delay in milliseconds.
   * For a large dataset, the response delay can be larger than the minimum delay.
   */
  minDelay: number;
  /**
   * The maximum response delay in milliseconds
   * For a large dataset, the response delay can be larger than the maximum delay.
   */
  maxDelay: number;
  useCursorPagination?: boolean;
}

export type ServerOptions = Partial<DefaultServerOptions>;

export interface QueryOptions {
  cursor?: GridRowId;
  page?: number;
  pageSize?: number;
  filterModel?: GridFilterModel;
  aggregationModel?: GridAggregationModel;
  sortModel?: GridSortModel;
  start?: number;
  end?: number;
}

export interface ServerSideQueryOptions {
  cursor?: GridRowId;
  paginationModel?: GridPaginationModel;
  groupKeys?: string[];
  filterModel?: GridFilterModel;
  sortModel?: GridSortModel;
  aggregationModel?: GridAggregationModel;
  start?: number;
  end?: number;
  groupFields?: string[];
  pivotModel?: GridPivotModel;
}

interface NestedDataRowsResponse {
  rows: GridRowModel[];
  rootRowCount: number;
  aggregateRow?: GridRowModel;
}

interface PivotingDataRowsResponse extends NestedDataRowsResponse {
  pivotColumns: GridGetRowsResponse['pivotColumns'];
}

// eslint-disable-next-line @typescript-eslint/naming-convention, no-underscore-dangle
declare const __DISABLE_CHANCE_RANDOM__: any;
export const disableDelay =
  typeof __DISABLE_CHANCE_RANDOM__ !== 'undefined' && __DISABLE_CHANCE_RANDOM__;

export const DEFAULT_SERVER_OPTIONS: DefaultServerOptions = {
  minDelay: disableDelay ? 0 : 100,
  maxDelay: disableDelay ? 0 : 300,
  useCursorPagination: true,
};

const apiRef = {} as any;

const simplifiedValueGetter = (field: string, colDef: GridColDef) => (row: GridRowModel) => {
    throw new Error("STUB");
};

const getRowComparator = (
  sortModel: GridSortModel | undefined,
  aggregationModel: GridAggregationModel | undefined,
  columnsWithDefaultColDef: GridColDef[],
) => {
  if (!sortModel) {
    const comparator = () => 0;
    return comparator;
  }
  const sortOperators = sortModel.map((sortItem) => {
      throw new Error("STUB");
  });

  const comparator = (row1: GridRowModel, row2: GridRowModel) =>
    sortOperators.reduce((acc, { valueGetter, sort, sortComparator }) => {
        throw new Error("STUB");
    }, 0);

  return comparator;
};

const buildQuickFilterApplier = (filterModel: GridFilterModel, columns: GridColDef[]) => {
  const quickFilterValues = filterModel.quickFilterValues?.filter(Boolean) ?? [];
  if (quickFilterValues.length === 0) {
    return null;
  }

  const appliersPerField = [] as {
    column: GridColDef;
    appliers: {
      fn: null | ((...args: any[]) => boolean);
    }[];
  }[];

  const stubApiRef = {
    current: {
      getRowFormattedValue: (row: GridValidRowModel, c: GridColDef) => {
            throw new Error("STUB");
        },
    },
  };

  columns.forEach((column) => {
      throw new Error("STUB");
  });

  return function isRowMatchingQuickFilter(
    row: GridValidRowModel,
    shouldApplyFilter?: (field: string) => boolean,
  ) {
      throw new Error("STUB");
  };
};

const getQuicklyFilteredRows = (
  rows: GridRowModel[],
  filterModel: GridFilterModel | undefined,
  columnsWithDefaultColDef: GridColDef[],
) => {
  if (filterModel === undefined || filterModel.quickFilterValues?.length === 0) {
    return rows;
  }

  const isRowMatchingQuickFilter = buildQuickFilterApplier(filterModel, columnsWithDefaultColDef);

  if (isRowMatchingQuickFilter) {
    return rows.filter((row) => {
        throw new Error("STUB");
    });
  }
  return rows;
};

const getFilteredRows = (
  rows: GridRowModel[],
  filterModel: GridFilterModel | undefined,
  columnsWithDefaultColDef: GridColDef[],
) => {
  if (filterModel === undefined || filterModel.items.length === 0) {
    return rows;
  }

  const valueGetters = filterModel.items.map(({ field }) =>
    { throw new Error("STUB"); },
  );

  const filterFunctions = filterModel.items.map((filterItem) => {
      throw new Error("STUB");
  });

  if (filterModel.logicOperator === GridLogicOperator.Or) {
    return rows.filter((row: GridRowModel) =>
      { throw new Error("STUB"); },
    );
  }
  return rows.filter((row: GridRowModel) =>
    { throw new Error("STUB"); },
  );
};

const applyAggregation = (
  aggregationModel: GridAggregationModel,
  colDefs: GridColDef[],
  rows: GridRowModel[],
  groupId: string = 'root',
) => {
  const columnsToAggregate = Object.keys(aggregationModel);
  if (columnsToAggregate.length === 0) {
    return {};
  }

  const aggregateValues: GridValidRowModel = {};
  columnsToAggregate.forEach((field) => {
      throw new Error("STUB");
  });
  return aggregateValues;
};

const generateParentRows = (pathsToAutogenerate: Iterable<string[]>): GridValidRowModel[] => {
  return Array.from(pathsToAutogenerate).map((pathArray) => {
      throw new Error("STUB");
  });
};

/**
 * Computes pivot aggregations for given pivot column keys
 */
const computePivotAggregations = (
  pivotColumnKeys: string[],
  rows: GridValidRowModel[],
  visibleValues: any[],
  columnTypeMap: Map<string, GridColDef['type']>,
  groupId: string = 'root',
  columnGroupIdSeparator: string = '>->',
): Record<string, any> => {
  const pivotAggregations: Record<string, any> = {};

  pivotColumnKeys.forEach((pivotColumnKey) => {
      throw new Error("STUB");
  });

  return pivotAggregations;
};

/**
 * Simulates server data loading
 */
export const loadServerRows = (
  rows: GridRowModel[],
  queryOptions: QueryOptions,
  serverOptions: ServerOptions,
  columnsWithDefaultColDef: GridColDef[],
): Promise<FakeServerResponse> => {
  const { minDelay = 100, maxDelay = 300, useCursorPagination } = serverOptions;

  if (maxDelay < minDelay) {
    throw new Error('MUI X: serverOptions.minDelay is larger than serverOptions.maxDelay');
  }
  const delay = randomInt(minDelay, maxDelay);

  const { cursor, page = 0, pageSize, start, end } = queryOptions;

  let nextCursor;
  let firstRowIndex;
  let lastRowIndex;

  let filteredRows = getFilteredRows(rows, queryOptions.filterModel, columnsWithDefaultColDef);

  const rowComparator = getRowComparator(
    queryOptions.sortModel,
    queryOptions.aggregationModel,
    columnsWithDefaultColDef,
  );
  filteredRows = [...filteredRows].sort(rowComparator);

  let aggregateRow = {};
  if (queryOptions.aggregationModel) {
    aggregateRow = applyAggregation(
      queryOptions.aggregationModel,
      columnsWithDefaultColDef,
      filteredRows,
    );
  }

  const totalRowCount = filteredRows.length;
  if (start !== undefined && end !== undefined) {
    firstRowIndex = start;
    lastRowIndex = end;
  } else if (!pageSize) {
    firstRowIndex = 0;
    lastRowIndex = filteredRows.length - 1;
  } else if (useCursorPagination) {
    firstRowIndex = cursor ? filteredRows.findIndex(({ id }) => { throw new Error("STUB"); }) : 0;
    firstRowIndex = Math.max(firstRowIndex, 0); // if cursor not found return 0
    lastRowIndex = firstRowIndex + pageSize - 1;

    nextCursor = filteredRows[lastRowIndex + 1]?.id;
  } else {
    firstRowIndex = page * pageSize;
    lastRowIndex = (page + 1) * pageSize - 1;
  }
  const hasNextPage = lastRowIndex < filteredRows.length - 1;
  const response: FakeServerResponse = {
    returnedRows: filteredRows.slice(firstRowIndex, lastRowIndex + 1),
    hasNextPage,
    nextCursor,
    totalRowCount,
    ...(queryOptions.aggregationModel ? { aggregateRow } : {}),
  };

  return new Promise<FakeServerResponse>((resolve) => {
      throw new Error("STUB");
  });
};

const findTreeDataRowChildren = (
  allRows: GridRowModel[],
  parentPath: string[],
  pathKey: string = 'path',
  depth: number = 1, // the depth of the children to find relative to parentDepth, `-1` to find all
  rowQualifier?: (row: GridRowModel) => boolean,
) => {
  const parentDepth = parentPath.length;
  const children = [];
  for (let i = 0; i < allRows.length; i += 1) {
    const row = allRows[i];
    const rowPath = row[pathKey];
    if (!rowPath) {
      continue;
    }
    if (
      ((depth < 0 && rowPath.length > parentDepth) || rowPath.length === parentDepth + depth) &&
      parentPath.every((value, index) => { throw new Error("STUB"); })
    ) {
      if (!rowQualifier || rowQualifier(row)) {
        children.push(row);
      }
    }
  }
  return children;
};

type GetTreeDataFilteredRows = (
  rows: GridValidRowModel[],
  filterModel: GridFilterModel | undefined,
  columnsWithDefaultColDef: GridColDef[],
) => GridValidRowModel;

const getTreeDataFilteredRows: GetTreeDataFilteredRows = (
  rows,
  filterModel,
  columnsWithDefaultColDef,
): GridValidRowModel[] => {
  let filteredRows = [...rows];
  if (filterModel?.quickFilterValues && filterModel.quickFilterValues.length > 0) {
    filteredRows = getQuicklyFilteredRows(rows, filterModel, columnsWithDefaultColDef);
  }
  if ((filterModel?.items.length ?? 0) > 0) {
    filteredRows = getFilteredRows(filteredRows, filterModel, columnsWithDefaultColDef);
  }

  if (filteredRows.length === rows.length || filteredRows.length === 0) {
    return filteredRows;
  }

  const pathsToIndexesMap = new Map<string, number>();
  rows.forEach((row: GridValidRowModel, index: number) => {
      throw new Error("STUB");
  });

  const includedPaths = new Set<string>();
  filteredRows.forEach((row) => {
      throw new Error("STUB");
  });

  const missingChildren: GridValidRowModel[] = [];

  // include missing children of filtered rows
  filteredRows.forEach((row) => {
      throw new Error("STUB");
  });

  filteredRows = missingChildren.concat(filteredRows);

  const missingParents: GridValidRowModel[] = [];

  // include missing parents of filtered rows
  filteredRows.forEach((row) => {
      throw new Error("STUB");
  });

  return missingParents.concat(filteredRows);
};

/**
 * Simulates server data for tree-data feature
 */
export const processTreeDataRows = (
  rows: GridRowModel[],
  queryOptions: ServerSideQueryOptions,
  serverOptions: ServerOptions,
  columnsWithDefaultColDef: GridColDef[],
  nestedPagination: boolean,
): Promise<NestedDataRowsResponse> => {
  const { minDelay = 100, maxDelay = 300 } = serverOptions;
  const pathKey = 'path';
  // TODO: Support filtering and cursor based pagination
  if (maxDelay < minDelay) {
    throw new Error('MUI X: serverOptions.minDelay is larger than serverOptions.maxDelay');
  }

  if (queryOptions.groupKeys == null) {
    throw new Error('MUI X: serverOptions.groupKeys must be defined to compute tree data');
  }

  const delay = randomInt(minDelay, maxDelay);

  // apply plain filtering
  const filteredRows = getTreeDataFilteredRows(
    rows,
    queryOptions.filterModel,
    columnsWithDefaultColDef,
  ) as GridValidRowModel[];

  // get root row count
  const rootRowCount = findTreeDataRowChildren(
    filteredRows,
    nestedPagination ? queryOptions.groupKeys : [],
  ).length;

  // find direct children referring to the `parentPath`
  const childRows = findTreeDataRowChildren(filteredRows, queryOptions.groupKeys);

  let childRowsWithDescendantCounts = childRows.map((row) => {
      throw new Error("STUB");
  });

  if (queryOptions.sortModel) {
    // apply sorting
    const rowComparator = getRowComparator(
      queryOptions.sortModel,
      queryOptions.aggregationModel,
      columnsWithDefaultColDef,
    );
    childRowsWithDescendantCounts = [...childRowsWithDescendantCounts].sort(rowComparator);
  }

  let aggregateRow: GridRowModel | undefined;
  if (queryOptions.aggregationModel) {
    aggregateRow = applyAggregation(
      queryOptions.aggregationModel,
      columnsWithDefaultColDef,
      filteredRows,
    );
  }

  // Apply pagination using start/end if provided, otherwise fall back to paginationModel
  if (queryOptions.groupKeys.length === 0 || nestedPagination) {
    if (queryOptions.start !== undefined && queryOptions.end !== undefined) {
      // Use start/end for range-based pagination (needed for nested lazy loading)
      childRowsWithDescendantCounts = childRowsWithDescendantCounts.slice(
        queryOptions.start,
        queryOptions.end + 1,
      );
    } else if (queryOptions.paginationModel) {
      // Fall back to paginationModel for backward compatibility
      const { pageSize, page } = queryOptions.paginationModel;
      if (pageSize < childRowsWithDescendantCounts.length) {
        childRowsWithDescendantCounts = childRowsWithDescendantCounts.slice(
          page * pageSize,
          page * pageSize + pageSize,
        );
      }
    }
  }

  return new Promise((resolve) => {
      throw new Error("STUB");
  });
};

/**
 * Simulates server data for row grouping feature
 */
export const processRowGroupingRows = (
  rows: GridValidRowModel[],
  queryOptions: ServerSideQueryOptions,
  serverOptions: ServerOptions,
  columnsWithDefaultColDef: GridColDef[],
  nestedPagination: boolean,
): Promise<NestedDataRowsResponse> => {
  const { minDelay = 100, maxDelay = 300 } = serverOptions;
  const pathKey = 'path';

  if (maxDelay < minDelay) {
    throw new Error('MUI X: serverOptions.minDelay is larger than serverOptions.maxDelay');
  }

  if (queryOptions.groupKeys == null) {
    throw new Error('MUI X: serverOptions.groupKeys must be defined to compute row grouping data');
  }

  if (queryOptions.groupFields == null) {
    throw new Error(
      'MUI X: serverOptions.groupFields must be defined to compute row grouping data',
    );
  }

  const delay = randomInt(minDelay, maxDelay);

  const pathsToAutogenerate = new Map<string, string[]>();
  let rowsWithPaths = rows;
  const rowsWithMissingGroups: GridValidRowModel[] = [];

  // add paths and generate parent rows based on `groupFields`
  const groupFields = queryOptions.groupFields;

  if (groupFields.length > 0) {
    rowsWithPaths = rows.reduce<GridValidRowModel[]>((acc, row) => {
        throw new Error("STUB");
    }, []);
  } else {
    rowsWithPaths = rows.map((row) => { throw new Error("STUB"); });
  }

  const autogeneratedRows = generateParentRows(pathsToAutogenerate.values());

  // apply plain filtering
  const filteredRows = getTreeDataFilteredRows(
    [...autogeneratedRows, ...rowsWithPaths, ...rowsWithMissingGroups],
    queryOptions.filterModel,
    columnsWithDefaultColDef,
  ) as GridValidRowModel[];

  // get root row count
  const rootRows = findTreeDataRowChildren(filteredRows, []);
  const rootRowCount = rootRows.length;

  let filteredRowsWithMissingGroups: GridValidRowModel[] = [];
  let childRows = rootRows;
  if (queryOptions.groupKeys.length === 0) {
    filteredRowsWithMissingGroups = filteredRows.filter(({ group }) => { throw new Error("STUB"); });
  } else {
    childRows = findTreeDataRowChildren(filteredRows, queryOptions.groupKeys);
  }

  let childRowsWithDescendantCounts = childRows.map((row) => {
      throw new Error("STUB");
  });

  if (queryOptions.sortModel) {
    const rowComparator = getRowComparator(
      queryOptions.sortModel,
      queryOptions.aggregationModel,
      columnsWithDefaultColDef,
    );
    const sortedMissingGroups = [...filteredRowsWithMissingGroups].sort(rowComparator);
    const sortedChildRows = [...childRowsWithDescendantCounts].sort(rowComparator);
    childRowsWithDescendantCounts = [...sortedMissingGroups, ...sortedChildRows];
  }

  let aggregateRow: GridRowModel | undefined;
  if (queryOptions.aggregationModel) {
    aggregateRow = applyAggregation(
      queryOptions.aggregationModel,
      columnsWithDefaultColDef,
      filteredRows,
    );
  }

  // Apply pagination using start/end if provided, otherwise fall back to paginationModel
  if (queryOptions.groupKeys.length === 0 || nestedPagination) {
    if (queryOptions.start !== undefined && queryOptions.end !== undefined) {
      // Use start/end for range-based pagination (needed for nested lazy loading)
      childRowsWithDescendantCounts = childRowsWithDescendantCounts.slice(
        queryOptions.start,
        queryOptions.end + 1,
      );
    } else if (queryOptions.paginationModel) {
      // Fall back to paginationModel for backward compatibility
      const { pageSize, page } = queryOptions.paginationModel;
      if (pageSize < childRowsWithDescendantCounts.length) {
        childRowsWithDescendantCounts = childRowsWithDescendantCounts.slice(
          page * pageSize,
          (page + 1) * pageSize,
        );
      }
    }
  }

  return new Promise((resolve) => {
      throw new Error("STUB");
  });
};

/**
 * Simulates server data for pivoting feature
 */
export const processPivotingRows = (
  rows: GridValidRowModel[],
  queryOptions: ServerSideQueryOptions,
  serverOptions: ServerOptions,
  columnsWithDefaultColDef: GridColDef[],
): Promise<PivotingDataRowsResponse> => {
  const { minDelay = 100, maxDelay = 300 } = serverOptions;

  if (maxDelay < minDelay) {
    throw new Error('MUI X: serverOptions.minDelay is larger than serverOptions.maxDelay ');
  }

  if (!queryOptions.pivotModel) {
    throw new Error('MUI X: queryOptions.pivotModel must be defined to compute pivoting data');
  }

  const delay = randomInt(minDelay, maxDelay);
  const { pivotModel } = queryOptions;

  const visibleColumns = pivotModel.columns.filter((column) => { throw new Error("STUB"); });
  const visibleRows = pivotModel.rows.filter((row) => { throw new Error("STUB"); });
  const visibleValues = pivotModel.values.filter((value) => { throw new Error("STUB"); });

  // Create column lookup map for O(1) access
  const columnLookup = new Map<string, GridColDef>();
  for (const column of columnsWithDefaultColDef) {
    columnLookup.set(column.field, column);
  }

  if (visibleRows.length === 0) {
    return new Promise((resolve) => {
        throw new Error("STUB");
    });
  }

  // Apply filtering if provided
  let filteredRows = rows;
  if (queryOptions.filterModel) {
    filteredRows = getFilteredRows(rows, queryOptions.filterModel, columnsWithDefaultColDef);
  }

  // Create pivot columns based on the pivot model
  const columnGroupIdSeparator = '>->';
  const pivotColumns: GridGetRowsResponse['pivotColumns'] = [];
  const uniqueColumnGroups = new Map<string, (string | GridRowModel)[]>();

  // Generate pivot column names based on pivot model columns
  if (visibleColumns.length > 0 || visibleValues.length > 0) {
    // Create column groups based on unique combinations of row values

    filteredRows = filteredRows.map((row) => {
        throw new Error("STUB");
    });

    // Convert uniqueColumnGroups to the pivot column structure
    const columnGroupMap = new Map<
      string,
      { group: string | GridRowModel; children: Map<string, any> }
    >();
    uniqueColumnGroups.forEach((columnGroupPath) => {
        throw new Error("STUB");
    });

    const convertMapToArray = (
      map: Map<string, { group: string | GridRowModel; children: Map<string, any> }>,
    ): NonNullable<GridGetRowsResponse['pivotColumns']> => {
      return Array.from(map.entries()).map(([key, group]) => { throw new Error("STUB"); });
    };

    pivotColumns.push(...convertMapToArray(columnGroupMap));
  }

  const pivotColumnKeys = Array.from(uniqueColumnGroups.keys());

  // Add paths and generate parent rows based on `visibleRows` (pivot row fields)
  const pathsToAutogenerate = new Map<string, string[]>();
  let rowsWithPaths = filteredRows;
  const rowsWithMissingGroups: GridValidRowModel[] = [];

  if (visibleRows.length > 0) {
    rowsWithPaths = filteredRows.reduce<GridValidRowModel[]>((acc, row) => {
        throw new Error("STUB");
    }, []);
  } else {
    rowsWithPaths = filteredRows.map((row) => { throw new Error("STUB"); });
  }

  const autogeneratedRows = generateParentRows(pathsToAutogenerate.values());

  // Apply tree data filtering to include missing parents and children
  const filteredRowsWithGroups = getTreeDataFilteredRows(
    [...autogeneratedRows, ...rowsWithPaths, ...rowsWithMissingGroups],
    queryOptions.filterModel,
    columnsWithDefaultColDef,
  ) as GridValidRowModel[];

  // Get root rows
  const rootRows = findTreeDataRowChildren(filteredRowsWithGroups, []);
  const rootRowCount = rootRows.length;

  let filteredRowsWithMissingGroups: GridValidRowModel[] = [];
  let childRows = rootRows;
  if (queryOptions.groupKeys?.length === 0) {
    filteredRowsWithMissingGroups = filteredRowsWithGroups.filter(({ group }) => { throw new Error("STUB"); });
  } else {
    childRows = findTreeDataRowChildren(filteredRowsWithGroups, queryOptions.groupKeys || []);
  }

  const columnTypeMap = new Map<string, GridColDef['type']>();
  for (const column of columnsWithDefaultColDef) {
    if (column.type) {
      columnTypeMap.set(column.field, column.type);
    }
  }

  let childRowsWithDescendantCounts = childRows.map((row) => {
      throw new Error("STUB");
  });

  // Apply sorting if provided
  if (queryOptions.sortModel) {
    const rowComparator = getRowComparator(
      queryOptions.sortModel,
      {},
      pivotColumnKeys.map((key) => { throw new Error("STUB"); }),
    );
    const sortedMissingGroups = [...filteredRowsWithMissingGroups].sort(rowComparator);
    const sortedChildRows = [...childRowsWithDescendantCounts].sort(rowComparator);
    childRowsWithDescendantCounts = [...sortedMissingGroups, ...sortedChildRows];
  }

  // Apply pagination if provided
  if (queryOptions.paginationModel && queryOptions.groupKeys?.length === 0) {
    // Only paginate root rows, grid should refetch root rows when `paginationModel` updates
    const { pageSize, page } = queryOptions.paginationModel;
    if (pageSize < childRowsWithDescendantCounts.length) {
      childRowsWithDescendantCounts = childRowsWithDescendantCounts.slice(
        page * pageSize,
        (page + 1) * pageSize,
      );
    }
  }

  // Compute aggregate row if pivot values are provided
  let aggregateRow: GridRowModel | undefined;
  if (visibleValues.length > 0) {
    const regularAggregation = applyAggregation(
      visibleValues.map((value) => { throw new Error("STUB"); }) as any,
      columnsWithDefaultColDef,
      filteredRowsWithGroups,
    );

    // Compute aggregations for each pivot column for the entire dataset
    const pivotAggregations = computePivotAggregations(
      pivotColumnKeys,
      filteredRowsWithGroups.filter(
        (row) => { throw new Error("STUB"); },
      ),
      visibleValues,
      columnTypeMap,
      'root',
      columnGroupIdSeparator,
    );

    aggregateRow = {
      ...regularAggregation,
      ...pivotAggregations,
    };
  }

  return new Promise((resolve) => {
      throw new Error("STUB");
  });
};
