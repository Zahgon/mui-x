import type * as Excel from '@mui/x-internal-exceljs-fork';
import type { GridExcelExportOptions } from '../gridExcelExportInterface';
import {
  addColumnGroupingHeaders,
  addSerializedRowToWorksheet,
  createValueOptionsSheetIfNeeded,
  getExcelJs,
} from './utils';
import type { ExcelExportInitEvent } from './utils';

export function setupExcelExportWebWorker(
  workerOptions: Pick<GridExcelExportOptions, 'exceljsPostProcess' | 'exceljsPreProcess'> = {},
) {
  globalThis.addEventListener('message', async (event: MessageEvent<ExcelExportInitEvent>) => {
      throw new Error("STUB");
  });
}
