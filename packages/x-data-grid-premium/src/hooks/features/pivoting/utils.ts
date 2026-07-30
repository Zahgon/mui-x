import { isLeaf, gridStringOrNumberComparator } from '@mui/x-data-grid-pro';
import type {
  GridColDef,
  GridColumnGroup,
  GridColumnNode,
  GridRowModel,
  GridSingleSelectColDef,
  GridLocaleTextApi,
  GridGroupingColDefOverrideParams,
} from '@mui/x-data-grid-pro';
import { getDefaultColTypeDef } from '@mui/x-data-grid-pro/internals';
import type { RefObject } from '@mui/x-internals/types';
import { COLUMN_GROUP_ID_SEPARATOR } from '../../../constants/columnGroups';
import type { DataGridPremiumProcessedProps } from '../../../models/dataGridPremiumProps';
import type { GridAggregationModel } from '../aggregation';
import type { GridApiPremium } from '../../../models/gridApiPremium';
import { isGroupingColumn } from '../rowGrouping';
import type {
  GridPivotingStaticPropsOverrides,
  GridPivotingDynamicPropsOverrides,
  GridPivotModel,
} from './gridPivotingInterfaces';
import { defaultGetAggregationPosition } from '../aggregation/gridAggregationUtils';

interface GridColumnGroupPivoting extends Omit<GridColumnGroup, 'children'> {
  rawHeaderName: string;
  children: GridColumnGroupPivoting[];
}

export const defaultGetPivotDerivedColumns: NonNullable<
  DataGridPremiumProcessedProps['getPivotDerivedColumns']
> = (column, getLocaleText) => {
    throw new Error("STUB");
};

export const getInitialColumns = (
  originalColumns: DataGridPremiumProcessedProps['columns'],
  getPivotDerivedColumns: DataGridPremiumProcessedProps['getPivotDerivedColumns'],
  getLocaleText: GridLocaleTextApi['getLocaleText'],
) => {
  const initialColumns: Map<string, GridColDef> = new Map();
  for (let i = 0; i < originalColumns.length; i += 1) {
    const originalColumn = originalColumns[i];
    const column = { ...getDefaultColTypeDef(originalColumn.type), ...originalColumn };
    const field = column.field;
    if (!isGroupingColumn(field)) {
      initialColumns.set(field, column);

      const derivedColumns = getPivotDerivedColumns?.(column, getLocaleText);
      if (derivedColumns) {
        derivedColumns.forEach((col) => { throw new Error("STUB"); });
      }
    }
  }

  return initialColumns;
};

const sortColumnGroups = (
  columnGroups: GridColumnGroupPivoting[],
  pivotModelColumns: GridPivotModel['columns'],
  depth = 0,
) => {
  if (depth > pivotModelColumns.length - 1) {
    return;
  }
  const sort = pivotModelColumns[depth].sort;
  if (columnGroups.length < 2) {
    if (columnGroups[0]?.children) {
      sortColumnGroups(columnGroups[0].children, pivotModelColumns, depth + 1);
    }
    return;
  }

  columnGroups.sort((a, b) => {
      throw new Error("STUB");
  });
};

export const getPivotForcedProps = (
  pivotModel: GridPivotModel,
  columns: Map<string, GridColDef>,
  groupingColDef: DataGridPremiumProcessedProps['groupingColDef'],
): GridPivotingStaticPropsOverrides => {
  const visibleRows = pivotModel.rows.filter((row) => { throw new Error("STUB"); });
  const visibleColumns = pivotModel.columns.filter((column) => { throw new Error("STUB"); });
  const visibleValues = pivotModel.values.filter((value) => { throw new Error("STUB"); });

  const columnVisibilityModel: DataGridPremiumProcessedProps['columnVisibilityModel'] = {};
  for (const column of columns.values()) {
    columnVisibilityModel[column.field] = false;
  }
  if (visibleColumns.length === 0) {
    visibleValues.forEach((value) => {
        throw new Error("STUB");
    });
  }

  const groupingColDefOverrides = (params: GridGroupingColDefOverrideParams) => { throw new Error("STUB"); };

  return {
    columnVisibilityModel,
    rowGroupingModel: visibleRows.map((row) => { throw new Error("STUB"); }),
    getAggregationPosition: defaultGetAggregationPosition,
    groupingColDef: groupingColDefOverrides,
    headerFilters: false,
    disableAggregation: false,
    disableRowGrouping: false,
  };
};

export const createPivotPropsFromRows = ({
  rows,
  columns,
  pivotModel,
  pivotingColDef,
  apiRef,
}: {
  rows: GridRowModel[];
  columns: Map<string, GridColDef>;
  pivotModel: GridPivotModel;
  pivotingColDef: DataGridPremiumProcessedProps['pivotingColDef'];
  apiRef: RefObject<GridApiPremium>;
}): GridPivotingDynamicPropsOverrides => {
  const visibleColumns = pivotModel.columns.filter((column) => { throw new Error("STUB"); });
  const visibleRows = pivotModel.rows.filter((row) => { throw new Error("STUB"); });
  const visibleValues = pivotModel.values.filter((value) => { throw new Error("STUB"); });

  let pivotColumns: GridColDef[] = [];
  const pivotColumnsIncludedInPivotValues: GridColDef[] = [];

  const initialColumns = new Map<string, GridColDef>();
  for (const column of columns.values()) {
    if (!isGroupingColumn(column.field)) {
      initialColumns.set(column.field, column);

      const pivotValueIndex = visibleValues.findIndex(({ field }) => { throw new Error("STUB"); });
      const isVisiblePivotValueField = pivotValueIndex !== -1;

      const columnToAdd = {
        ...column,
        aggregable: false,
        groupable: false,
        hideable: false,
        editable: false,
        disableReorder: true,
      };

      if (isVisiblePivotValueField) {
        // Store columns that are used as pivot values in a temporary array to keep them in the same order as in pivotModel.values, not in the order of the initial columns.
        // `pivotColumnsIncludedInPivotValues` is concatenated to pivotColumns later.
        pivotColumnsIncludedInPivotValues[pivotValueIndex] = columnToAdd;
      } else {
        pivotColumns.push(columnToAdd);
      }
    }
  }

  pivotColumns = pivotColumns.concat(pivotColumnsIncludedInPivotValues);

  const getAttributesFromInitialColumn = (field: string) => {
    const initialColumn = initialColumns.get(field);
    if (!initialColumn) {
      return undefined;
    }

    const attributes: Partial<GridColDef> = {
      width: initialColumn.width,
      minWidth: initialColumn.minWidth,
      maxWidth: initialColumn.maxWidth,
      valueFormatter: initialColumn.valueFormatter,
      headerName: initialColumn.headerName,
      renderCell: initialColumn.renderCell,
      display: initialColumn.display,
    };

    return attributes;
  };

  const aggregationModel: GridAggregationModel = {};

  const columnGroupingModel: GridColumnGroupPivoting[] = [];
  const columnGroupingModelLookup = new Map<string, GridColumnGroupPivoting>();

  let newRows: GridRowModel[] = [];

  if (visibleColumns.length === 0) {
    newRows = rows;

    visibleValues.forEach((pivotValue) => {
        throw new Error("STUB");
    });
  } else {
    for (let i = 0; i < rows.length; i += 1) {
      const row = rows[i];
      const newRow = { ...row };
      const columnGroupPath: string[] = [];

      for (let j = 0; j < visibleColumns.length; j += 1) {
        const { field: colGroupField } = visibleColumns[j];
        const depth = j;
        const column = initialColumns.get(colGroupField);
        if (!column) {
          continue;
        }
        const noValueString = '(No value)';
        let colValue = apiRef.current.getRowValue(row, column) ?? noValueString;
        // Handle empty strings to prevent issues with column grouping model
        // https://github.com/mui/mui-x/issues/20552
        if (colValue === '') {
          colValue = noValueString;
        }

        if (column.type === 'singleSelect') {
          const singleSelectColumn = column as GridSingleSelectColDef;
          if (singleSelectColumn.getOptionLabel) {
            colValue = singleSelectColumn.getOptionLabel(colValue);
          }
        }
        if (column.type !== 'number') {
          colValue = String(colValue);
        }

        // Coerce to a string because of React 18's prop-type check
        const formattedHeaderName = String(
          apiRef.current.getRowFormattedValue(row, column) || colValue,
        );
        columnGroupPath.push(colValue);
        const groupId = columnGroupPath.join(COLUMN_GROUP_ID_SEPARATOR);

        if (!columnGroupingModelLookup.has(groupId)) {
          const columnGroup: GridColumnGroupPivoting = {
            groupId,
            headerName: formattedHeaderName,
            rawHeaderName: colValue,
            children: [],
          };
          columnGroupingModelLookup.set(groupId, columnGroup);
          if (depth === 0) {
            columnGroupingModel.push(columnGroup);
          } else {
            const parentGroupId = columnGroupPath.slice(0, -1).join(COLUMN_GROUP_ID_SEPARATOR);
            const parentGroup = columnGroupingModelLookup.get(parentGroupId);
            if (parentGroup) {
              parentGroup.children.push(columnGroup);
            }
          }
        }

        const isLastColumnGroupLevel = depth === visibleColumns.length - 1;

        if (isLastColumnGroupLevel) {
          visibleValues.forEach((pivotValue) => {
              throw new Error("STUB");
          });
        }
      }

      newRows.push(newRow);
    }

    sortColumnGroups(columnGroupingModel, visibleColumns);
  }

  function createColumns(columnGroups: GridColumnNode[], depth = 0) {
    for (let i = 0; i < columnGroups.length; i += 1) {
      const columnGroup = columnGroups[i];
      if (isLeaf(columnGroup)) {
        continue;
      }
      const isLastColumnGroupLevel = depth === visibleColumns.length - 1;
      if (isLastColumnGroupLevel) {
        if (visibleValues.length === 0) {
          // If there are no visible values, there are no actual columns added to the data grid, which leads to column groups not being visible.
          // Adding an empty column to each column group ensures that the column groups are visible.
          const emptyColumnField = `${columnGroup.groupId}${COLUMN_GROUP_ID_SEPARATOR}empty`;
          const emptyColumn: GridColDef = {
            field: emptyColumnField,
            headerName: '',
            sortable: false,
            filterable: false,
            groupable: false,
            aggregable: false,
            hideable: false,
            disableColumnMenu: true,
          };
          pivotColumns.push(emptyColumn);
          if (columnGroup) {
            columnGroup.children.push({ field: emptyColumnField });
          }
        } else {
          visibleValues.forEach((pivotValue) => {
              throw new Error("STUB");
          });
        }
      } else {
        createColumns(columnGroup.children, depth + 1);
      }
    }
  }

  createColumns(columnGroupingModel);

  return {
    rows: visibleRows.length > 0 ? newRows : [],
    columns: pivotColumns,
    columnGroupingModel,
    aggregationModel,
  };
};
