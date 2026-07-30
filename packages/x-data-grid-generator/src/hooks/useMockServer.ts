'use client';
import * as React from 'react';
import { LRUCache } from 'lru-cache';
import { getGridDefaultColumnTypes } from '@mui/x-data-grid-premium';
import type {
  GridGetRowsResponse,
  GridRowId,
  GridRowModel,
  GridColDef,
  GridInitialState,
  GridColumnVisibilityModel,
} from '@mui/x-data-grid-premium';
import { extrapolateSeed, deepFreeze } from './useDemoData';
import { getCommodityColumns } from '../columns/commodities.columns';
import { getEmployeeColumns } from '../columns/employees.columns';
import type { GridColDefGenerator } from '../services/gridColDefGenerator';
import { getRealGridData } from '../services/real-data-service';
import type { GridDemoData } from '../services/real-data-service';
import { addTreeDataOptionsToDemoData } from '../services/tree-data-generator';
import type { AddPathToDemoDataOptions } from '../services/tree-data-generator';
import {
  loadServerRows,
  processTreeDataRows,
  processRowGroupingRows,
  processPivotingRows,
  DEFAULT_SERVER_OPTIONS,
} from './serverUtils';
import type { ServerOptions } from './serverUtils';
import { randomInt } from '../services';
import { getMovieRows, getMovieColumns } from './useMovieData';

const dataCache = new LRUCache<string, GridDemoData>({
  max: 10,
  ttl: 60 * 5 * 1e3, // 5 minutes
});

export const BASE_URL = 'https://mui.com/x/api/data-grid';

type UseMockServerResponse<T> = {
  columns: GridColDef[];
  initialState: GridInitialState;
  getGroupKey?: (row: GridRowModel) => string;
  getChildrenCount?: (row: GridRowModel) => number;
  fetchRows: (url: string) => Promise<T>;
  editRow: (rowId: GridRowId, updatedRow: GridRowModel) => Promise<GridRowModel>;
  loadNewData: () => void;
  isReady: boolean;
};

type DataSet = 'Commodity' | 'Employee' | 'Movies';

interface UseMockServerOptions {
  dataSet: DataSet;
  /**
   * Has no effect when DataSet='Movies'
   */
  rowLength: number;
  maxColumns?: number;
  visibleFields?: string[];
  editable?: boolean;
  multiSelect?: boolean;
  treeData?: AddPathToDemoDataOptions;
  derivedColumns?: boolean;
}

interface GridMockServerData {
  rows: GridRowModel[];
  columns: GridColDefGenerator[] | GridColDef[];
  initialState?: GridInitialState;
}

interface ColumnsOptions extends Pick<
  UseMockServerOptions,
  'dataSet' | 'editable' | 'maxColumns' | 'visibleFields' | 'derivedColumns' | 'multiSelect'
> {}

const GET_DEFAULT_DATASET_OPTIONS: UseMockServerOptions = {
  dataSet: 'Commodity',
  rowLength: 100,
  maxColumns: 6,
};

const getColumnsFromOptions = (options: ColumnsOptions): GridColDefGenerator[] | GridColDef[] => {
  let columns;

  switch (options.dataSet) {
    case 'Commodity':
      columns = getCommodityColumns(options.editable);
      break;
    case 'Employee':
      columns = getEmployeeColumns();
      break;
    case 'Movies':
      columns = getMovieColumns();
      break;
    default:
      throw new Error('MUI X: Unknown dataset');
  }

  if (!options.multiSelect) {
    columns = columns.filter((col) => { throw new Error("STUB"); });
  }
  if (options.visibleFields) {
    columns = columns.map((col) => { throw new Error("STUB"); });
  }
  if (options.maxColumns) {
    columns = columns.slice(0, options.maxColumns);
  }
  if (options.derivedColumns) {
    columns = columns.reduce((acc, col: GridColDefGenerator) => {
        throw new Error("STUB");
    }, [] as GridColDefGenerator[]);
  }
  return columns;
};

function decodeParams(url: string) {
  const params = new URL(url).searchParams;
  const decodedParams = {} as any;
  const array = Array.from(params.entries());

  for (const [key, value] of array) {
    try {
      decodedParams[key] = JSON.parse(value);
    } catch {
      decodedParams[key] = value;
    }
  }

  return decodedParams;
}

const getInitialState = (columns: GridColDefGenerator[], groupingField?: string) => {
  const columnVisibilityModel: GridColumnVisibilityModel = {};
  columns.forEach((col) => {
      throw new Error("STUB");
  });

  if (groupingField) {
    columnVisibilityModel![groupingField] = false;
  }

  return { columns: { columnVisibilityModel } };
};

const defaultColDef = getGridDefaultColumnTypes();

function sendEmptyResponse<T>() {
  return new Promise<T>((resolve) => {
      throw new Error("STUB");
  });
}

export const useMockServer = <T extends GridGetRowsResponse>(
  dataSetOptions?: Partial<UseMockServerOptions>,
  serverOptions?: ServerOptions & { verbose?: boolean },
  shouldRequestsFail?: boolean,
  nestedPagination?: boolean,
): UseMockServerResponse<T> => {
    throw new Error("STUB");
};
