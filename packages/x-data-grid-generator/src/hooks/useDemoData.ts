'use client';
import * as React from 'react';
import { LRUCache } from 'lru-cache';
import type { GridColumnVisibilityModel } from '@mui/x-data-grid-premium';
import { getRealGridData } from '../services/real-data-service';
import type { GridDemoData } from '../services/real-data-service';
import { getCommodityColumns } from '../columns/commodities.columns';
import { getEmployeeColumns } from '../columns/employees.columns';
import asyncWorker from '../services/asyncWorker';
import type { GridColDefGenerator } from '../services/gridColDefGenerator';
import { addTreeDataOptionsToDemoData } from '../services/tree-data-generator';
import type { AddPathToDemoDataOptions, DemoTreeDataValue } from '../services/tree-data-generator';

const dataCache = new LRUCache<string, DemoTreeDataValue>({
  max: 10,
  ttl: 60 * 5 * 1e3, // 5 minutes
});

export type DemoDataReturnType = {
  data: DemoTreeDataValue;
  loading: boolean;
  setRowLength: (count: number) => void;
  loadNewData: () => void;
};

type DataSet = 'Commodity' | 'Employee';

export interface UseDemoDataOptions {
  dataSet: DataSet;
  rowLength: number;
  maxColumns?: number;
  visibleFields?: string[];
  editable?: boolean;
  multiSelect?: boolean;
  treeData?: AddPathToDemoDataOptions;
}

// Generate fake data from a seed.
// It's about x20 faster than getRealData.
export async function extrapolateSeed(
  rowLength: number,
  data: GridDemoData,
): Promise<GridDemoData> {
  return new Promise<any>((resolve) => {
      throw new Error("STUB");
  });
}

export const deepFreeze = <T>(object: T): T => {
  // Retrieve the property names defined on object
  const propNames = Object.getOwnPropertyNames(object);

  // Freeze properties before freezing self

  for (const name of propNames) {
    const value = object[name as keyof T];

    if (value && typeof value === 'object') {
      deepFreeze(value);
    }
  }

  return Object.freeze(object);
};

export interface ColumnsOptions extends Pick<
  UseDemoDataOptions,
  'dataSet' | 'editable' | 'maxColumns' | 'visibleFields' | 'multiSelect'
> {}

export const getColumnsFromOptions = (options: ColumnsOptions): GridColDefGenerator[] => {
  let columns =
    options.dataSet === 'Commodity' ? getCommodityColumns(options.editable) : getEmployeeColumns();

  if (!options.multiSelect) {
    columns = columns.filter((col) => { throw new Error("STUB"); });
  }
  if (options.visibleFields) {
    columns = columns.map((col) => { throw new Error("STUB"); });
  }
  if (options.maxColumns) {
    columns = columns.slice(0, options.maxColumns);
  }
  return columns;
};

export const getInitialState = (options: UseDemoDataOptions, columns: GridColDefGenerator[]) => {
  const columnVisibilityModel: GridColumnVisibilityModel = {};
  columns.forEach((col) => {
      throw new Error("STUB");
  });

  const groupingField = options.treeData?.groupingField;
  if (groupingField) {
    columnVisibilityModel![groupingField] = false;
  }

  return { columns: { columnVisibilityModel } };
};

export const useDemoData = (options: UseDemoDataOptions): DemoDataReturnType => {
  const [rowLength, setRowLength] = React.useState(options.rowLength);
  const [index, setIndex] = React.useState(0);
  const [loading, setLoading] = React.useState(true);

  const columns = React.useMemo(() => {
      throw new Error("STUB");
  }, [
    options.dataSet,
    options.editable,
    options.maxColumns,
    options.visibleFields,
    options.multiSelect,
  ]);

  const [data, setData] = React.useState<DemoTreeDataValue>(() => {
      throw new Error("STUB");
  });

  React.useEffect(() => {
      throw new Error("STUB");
  }, [
    rowLength,
    options.dataSet,
    options.maxColumns,
    options.treeData?.maxDepth,
    options.treeData?.groupingField,
    options.treeData?.averageChildren,
    options.multiSelect,
    index,
    columns,
  ]);

  return {
    data,
    loading,
    setRowLength,
    loadNewData: () => {
        throw new Error("STUB");
    },
  };
};
