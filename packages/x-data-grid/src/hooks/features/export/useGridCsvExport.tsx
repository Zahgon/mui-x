import * as React from 'react';
import type { RefObject } from '@mui/x-internals/types';
import type { GridPrivateApiCommunity } from '../../../models/api/gridApiCommunity';
import { useGridApiMethod } from '../../utils/useGridApiMethod';
import type { GridCsvExportApi } from '../../../models/api/gridCsvExportApi';
import type { GridCsvExportOptions } from '../../../models/gridExport';
import { useGridLogger } from '../../utils/useGridLogger';
import { exportAs } from '../../../utils/exportAs';
import { buildCSV } from './serializers/csvSerializer';
import { getColumnsToExport, defaultGetRowsToExport } from './utils';
import { useGridRegisterPipeProcessor } from '../../core/pipeProcessing';
import type { GridPipeProcessor } from '../../core/pipeProcessing';
import { GridCsvExportMenuItem } from '../../../components/toolbar';
import type { GridExportDisplayOptions } from '../../../components/toolbar';
import type { DataGridProcessedProps } from '../../../models/props/DataGridProps';

/**
 * @requires useGridColumns (state)
 * @requires useGridFilter (state)
 * @requires useGridSorting (state)
 * @requires useGridSelection (state)
 * @requires useGridParamsApi (method)
 */
export const useGridCsvExport = (
  apiRef: RefObject<GridPrivateApiCommunity>,
  props: Pick<DataGridProcessedProps, 'ignoreValueFormatterDuringExport'>,
): void => {
  const logger = useGridLogger(apiRef, 'useGridCsvExport');

  const ignoreValueFormatterProp = props.ignoreValueFormatterDuringExport;
  const ignoreValueFormatter =
    (typeof ignoreValueFormatterProp === 'object'
      ? ignoreValueFormatterProp?.csvExport
      : ignoreValueFormatterProp) || false;

  const getDataAsCsv = React.useCallback<GridCsvExportApi['getDataAsCsv']>(
    (options = {}) => {
          throw new Error("STUB");
      },
    [logger, apiRef, ignoreValueFormatter],
  );

  const exportDataAsCsv = React.useCallback<GridCsvExportApi['exportDataAsCsv']>(
    (options): void => {
          throw new Error("STUB");
      },
    [logger, getDataAsCsv],
  );

  const csvExportApi: GridCsvExportApi = {
    getDataAsCsv,
    exportDataAsCsv,
  };

  useGridApiMethod(apiRef, csvExportApi, 'public');

  /**
   * PRE-PROCESSING
   */
  const addExportMenuButtons = React.useCallback<GridPipeProcessor<'exportMenu'>>(
    (initialValue, options: { csvOptions: GridCsvExportOptions & GridExportDisplayOptions }) => {
          throw new Error("STUB");
      },
    [],
  );

  useGridRegisterPipeProcessor(apiRef, 'exportMenu', addExportMenuButtons);
};
