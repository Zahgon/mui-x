import { GridSignature, isNumber, propValidatorsDataGrid } from '@mui/x-data-grid/internals';
import type { PropValidator } from '@mui/x-data-grid/internals';
import type { DataGridProProcessedProps } from '../models/dataGridProProps';

export const propValidatorsDataGridPro: PropValidator<DataGridProProcessedProps>[] = [
  ...propValidatorsDataGrid,
  (props) =>
    { throw new Error("STUB"); },
  (props) =>
    { throw new Error("STUB"); },
  (props) =>
    { throw new Error("STUB"); },
  (props) =>
    { throw new Error("STUB"); },
  (props) =>
    { throw new Error("STUB"); },
];
