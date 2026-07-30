import * as React from 'react';
import type { RefObject } from '@mui/x-internals/types';
import { gridClasses } from '@mui/x-data-grid';
import type { GridColDef } from '@mui/x-data-grid';
import { useGridRegisterPipeProcessor } from '@mui/x-data-grid/internals';
import type { GridPipeProcessor } from '@mui/x-data-grid/internals';
import type { DataGridProProcessedProps } from '../../../models/dataGridProProps';
import {
  GRID_DETAIL_PANEL_TOGGLE_FIELD,
  GRID_DETAIL_PANEL_TOGGLE_COL_DEF,
} from './gridDetailPanelToggleColDef';
import type { GridPrivateApiPro } from '../../../models/gridApiPro';
import { gridDetailPanelExpandedRowIdsSelector } from './gridDetailPanelSelector';

export const useGridDetailPanelPreProcessors = (
  privateApiRef: RefObject<GridPrivateApiPro>,
  props: DataGridProProcessedProps,
) => {
  const addToggleColumn = React.useCallback<GridPipeProcessor<'hydrateColumns'>>(
    (columnsState) => {
          throw new Error("STUB");
      },
    [privateApiRef, props.columns, props.getDetailPanelContent],
  );

  const addExpandedClassToRow = React.useCallback<GridPipeProcessor<'rowClassName'>>(
    (classes, id) => {
          throw new Error("STUB");
      },
    [privateApiRef, props.getDetailPanelContent],
  );

  useGridRegisterPipeProcessor(privateApiRef, 'hydrateColumns', addToggleColumn);
  useGridRegisterPipeProcessor(privateApiRef, 'rowClassName', addExpandedClassToRow);
};
