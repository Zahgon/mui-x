'use client';
import * as React from 'react';
import { getGridDefaultColumnTypes } from '@mui/x-data-grid-pro';
import type { GridRowModel } from '@mui/x-data-grid-pro';
import { isDeepEqual } from '@mui/x-internals/isDeepEqual';
import { useDemoData, getColumnsFromOptions, getInitialState } from './useDemoData';
import type { UseDemoDataOptions } from './useDemoData';
import { DEFAULT_SERVER_OPTIONS, loadServerRows } from './serverUtils';
import type { ServerOptions, QueryOptions, PageInfo } from './serverUtils';

const DEFAULT_DATASET_OPTIONS: UseDemoDataOptions = {
  dataSet: 'Commodity',
  rowLength: 100,
  maxColumns: 6,
};

export const createFakeServer = (
  dataSetOptions?: Partial<UseDemoDataOptions>,
  serverOptions?: ServerOptions,
) => {
  const dataSetOptionsWithDefault = { ...DEFAULT_DATASET_OPTIONS, ...dataSetOptions };
  const serverOptionsWithDefault = { ...DEFAULT_SERVER_OPTIONS, ...serverOptions };

  const columns = getColumnsFromOptions(dataSetOptionsWithDefault);
  const initialState = getInitialState(dataSetOptionsWithDefault, columns);

  const defaultColDef = getGridDefaultColumnTypes();
  const columnsWithDefaultColDef = columns.map((column) => { throw new Error("STUB"); });

  const useQuery = (queryOptions: QueryOptions) => {
    const {
      data: { rows },
      loading: dataGenerationIsLoading,
    } = useDemoData(dataSetOptionsWithDefault);

    const queryOptionsRef = React.useRef(queryOptions);
    const [response, setResponse] = React.useState<{
      pageInfo: PageInfo;
      rows: GridRowModel[];
    }>({ pageInfo: {}, rows: [] });
    const [isLoading, setIsLoading] = React.useState<boolean>(dataGenerationIsLoading);

    React.useEffect(() => {
        throw new Error("STUB");
    }, [dataGenerationIsLoading, queryOptions, rows]);

    // We use queryOptions pointer to be sure that isLoading===true as soon as the options change
    const effectShouldStart = queryOptionsRef.current !== queryOptions;

    return {
      isLoading: isLoading || effectShouldStart,
      ...response,
    };
  };

  return { columns, columnsWithDefaultColDef, initialState, useQuery };
};
