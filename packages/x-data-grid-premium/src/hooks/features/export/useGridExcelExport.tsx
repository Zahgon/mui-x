import * as React from 'react';
import type { RefObject } from '@mui/x-internals/types';
import { useGridApiMethod, useGridLogger, useGridEventPriority } from '@mui/x-data-grid';
import type { GridExportDisplayOptions } from '@mui/x-data-grid';
import {
  useGridRegisterPipeProcessor,
  exportAs,
  getColumnsToExport,
  defaultGetRowsToExport,
} from '@mui/x-data-grid/internals';
import type { GridPipeProcessor } from '@mui/x-data-grid/internals';
import type { GridPrivateApiPremium } from '../../../models/gridApiPremium';
import type { DataGridPremiumProps } from '../../../models/dataGridPremiumProps';
import type {
  GridExcelExportApi,
  GridExportExtension,
  GridExcelExportOptions,
} from './gridExcelExportInterface';
import {
  buildExcel,
  getDataForValueOptionsSheet,
  serializeColumns,
  serializeRowUnsafe,
} from './serializer/excelSerializer';
import type { ExcelExportInitEvent } from './serializer/excelSerializer';
import { GridExcelExportMenuItem } from '../../../components';
import type { SerializedRow } from './serializer/utils';

/**
 * @requires useGridColumns (state)
 * @requires useGridFilter (state)
 * @requires useGridSorting (state)
 * @requires useGridSelection (state)
 * @requires useGridParamsApi (method)
 */
export const useGridExcelExport = (
  apiRef: RefObject<GridPrivateApiPremium>,
  props: DataGridPremiumProps,
): void => {
  const logger = useGridLogger(apiRef, 'useGridExcelExport');

  const getDataAsExcel = React.useCallback<GridExcelExportApi['getDataAsExcel']>(
    (options = {}) => {
          throw new Error("STUB");
      },
    [logger, apiRef],
  );

  const exportDataAsExcel = React.useCallback<GridExcelExportApi['exportDataAsExcel']>(
    async (options = {}) => {
          throw new Error("STUB");
      },
    [apiRef, getDataAsExcel],
  );

  const excelExportApi: GridExcelExportApi = {
    getDataAsExcel,
    exportDataAsExcel,
  };

  useGridApiMethod(apiRef, excelExportApi, 'public');

  /**
   * PRE-PROCESSING
   */
  const addExportMenuButtons = React.useCallback<GridPipeProcessor<'exportMenu'>>(
    (
      initialValue,
      options: { excelOptions: GridExcelExportOptions & GridExportDisplayOptions },
    ) => {
          throw new Error("STUB");
      },
    [],
  );

  useGridRegisterPipeProcessor(apiRef, 'exportMenu', addExportMenuButtons);

  useGridEventPriority(apiRef, 'excelExportStateChange', props.onExcelExportStateChange);
};
