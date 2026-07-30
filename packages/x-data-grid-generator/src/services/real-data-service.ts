import type {
  GridRowModel,
  GridColumnVisibilityModel,
  GridInitialState,
} from '@mui/x-data-grid-premium';
import asyncWorker from './asyncWorker';
import type { GridColDefGenerator, GridDataGeneratorContext } from './gridColDefGenerator';

export interface GridDemoData {
  rows: GridRowModel[];
  columns: GridColDefGenerator[];
  initialState?: GridInitialState;
}

export function getRealGridData(
  rowLength: number,
  columns: GridColDefGenerator[],
): Promise<GridDemoData> {
  return new Promise<GridDemoData>((resolve) => {
      throw new Error("STUB");
  });
}
