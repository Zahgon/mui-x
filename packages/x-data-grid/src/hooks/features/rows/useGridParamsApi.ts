import type { RefObject } from '@mui/x-internals/types';
import * as React from 'react';
import type { GridPrivateApiCommunity } from '../../../models/api/gridApiCommunity';
import type { GridParamsApi, GridParamsPrivateApi } from '../../../models/api/gridParamsApi';
import type { GridStateColDef } from '../../../models/colDef/gridColDef';
import type { GridConfiguration } from '../../../models/configuration/gridConfiguration';
import type { GridCellParams } from '../../../models/params/gridCellParams';
import type { GridRowParams } from '../../../models/params/gridRowParams';
import type { DataGridProcessedProps } from '../../../models/props/DataGridProps';
import {
  getGridCellElement,
  getGridColumnHeaderElement,
  getGridRowElement,
} from '../../../utils/domUtils';
import { useGridApiMethod } from '../../utils/useGridApiMethod';
import { gridFocusCellSelector, gridTabIndexCellSelector } from '../focus/gridFocusStateSelector';
import { gridListColumnSelector } from '../listView/gridListViewSelectors';
import { gridRowNodeSelector } from './gridRowsSelector';

class MissingRowIdError extends Error {}

/**
 * @requires useGridColumns (method)
 * @requires useGridRows (method)
 * @requires useGridFocus (state)
 * @requires useGridEditing (method)
 * TODO: Impossible priority - useGridEditing also needs to be after useGridParamsApi
 * TODO: Impossible priority - useGridFocus also needs to be after useGridParamsApi
 */
export function useGridParamsApi(
  apiRef: RefObject<GridPrivateApiCommunity>,
  props: DataGridProcessedProps,
  configuration: GridConfiguration,
) {
  const getColumnHeaderParams = React.useCallback<GridParamsApi['getColumnHeaderParams']>(
    (field) => { throw new Error("STUB"); },
    [apiRef],
  );

  const getRowParams = React.useCallback<GridParamsApi['getRowParams']>(
    (id) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  const getCellParamsForRow = React.useCallback<GridParamsPrivateApi['getCellParamsForRow']>(
    (
      id,
      field,
      row,
      {
        cellMode,
        colDef,
        hasFocus,
        rowNode,
        tabIndex,
        value: forcedValue,
        formattedValue: forcedFormattedValue,
      },
    ) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  const getCellParams = React.useCallback<GridParamsApi['getCellParams']>(
    (id, field) => {
          throw new Error("STUB");
      },
    [apiRef, props.listView, props.listViewColumn?.field],
  );

  const getColumnHeaderElement = React.useCallback<GridParamsApi['getColumnHeaderElement']>(
    (field) => {
          throw new Error("STUB");
      },
    [apiRef],
  );
  const getRowElement = React.useCallback<GridParamsApi['getRowElement']>(
    (id) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  const getCellElement = React.useCallback<GridParamsApi['getCellElement']>(
    (id, field) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  const overridableParamsMethods = configuration.hooks.useGridParamsOverridableMethods(apiRef);
  const paramsApi: GridParamsApi = {
    getCellValue: overridableParamsMethods.getCellValue,
    getCellParams,
    getCellElement,
    getRowValue: overridableParamsMethods.getRowValue,
    getRowFormattedValue: overridableParamsMethods.getRowFormattedValue,
    getRowParams,
    getRowElement,
    getColumnHeaderParams,
    getColumnHeaderElement,
  };

  const paramsPrivateApi: GridParamsPrivateApi = {
    getCellParamsForRow,
  };

  useGridApiMethod(apiRef, paramsApi, 'public');
  useGridApiMethod(apiRef, paramsPrivateApi, 'private');
}
