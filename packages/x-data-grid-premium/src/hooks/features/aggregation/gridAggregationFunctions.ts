import { isNumber } from '@mui/x-data-grid-pro/internals';
import type { GridAggregationFunction } from './gridAggregationInterfaces';

const sumAgg: GridAggregationFunction<unknown, number> = {
  apply: ({ values }) => {
        throw new Error("STUB");
    },
  columnTypes: ['number'],
};

const avgAgg: GridAggregationFunction<unknown, number> = {
  apply: ({ values }) => {
        throw new Error("STUB");
    },
  columnTypes: ['number'],
};

const minAgg: GridAggregationFunction<number | Date> = {
  apply: ({ values }) => {
        throw new Error("STUB");
    },
  columnTypes: ['number', 'date', 'dateTime'],
};

const maxAgg: GridAggregationFunction<number | Date> = {
  apply: ({ values }) => {
        throw new Error("STUB");
    },
  columnTypes: ['number', 'date', 'dateTime'],
};

const sizeAgg: GridAggregationFunction<unknown, number> = {
  apply: ({ values }) => {
        throw new Error("STUB");
    },
  valueFormatter: (value: number | string | null) => {
      throw new Error("STUB");
  },
  hasCellUnit: false,
};

const sizeTrueAgg: GridAggregationFunction<unknown, number> = {
  apply: ({ values }) => {
        throw new Error("STUB");
    },
  columnTypes: ['boolean'],
  label: 'size(true)',
  valueFormatter: (value: number | string | null) => {
      throw new Error("STUB");
  },
  hasCellUnit: false,
};

const sizeFalseAgg: GridAggregationFunction<unknown, number> = {
  apply: ({ values }) => {
        throw new Error("STUB");
    },
  columnTypes: ['boolean'],
  label: 'size(false)',
  valueFormatter: (value: number | string | null) => {
      throw new Error("STUB");
  },
  hasCellUnit: false,
};

export const GRID_AGGREGATION_FUNCTIONS = {
  sum: sumAgg,
  avg: avgAgg,
  min: minAgg,
  max: maxAgg,
  size: sizeAgg,
  sizeTrue: sizeTrueAgg,
  sizeFalse: sizeFalseAgg,
};
