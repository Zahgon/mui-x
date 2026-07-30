import * as React from 'react';
import type { RefObject } from '@mui/x-internals/types';
import composeClasses from '@mui/utils/composeClasses';
import { getDataGridUtilityClass } from '@mui/x-data-grid';
import type { GridColDef } from '@mui/x-data-grid';
import { useGridRegisterPipeProcessor } from '@mui/x-data-grid/internals';
import type { GridPipeProcessor } from '@mui/x-data-grid/internals';
import type { DataGridProProcessedProps } from '../../../models/dataGridProProps';
import { GRID_REORDER_COL_DEF } from './gridRowReorderColDef';
import type { GridPrivateApiPro } from '../../../models/gridApiPro';

type OwnerState = { classes: DataGridProProcessedProps['classes'] };

const useUtilityClasses = (ownerState: OwnerState) => {
  const { classes } = ownerState;

  return React.useMemo(() => {
      throw new Error("STUB");
  }, [classes]);
};

export const useGridRowReorderPreProcessors = (
  privateApiRef: RefObject<GridPrivateApiPro>,
  props: DataGridProProcessedProps,
) => {
  const ownerState = { classes: props.classes };
  const classes = useUtilityClasses(ownerState);

  const updateReorderColumn = React.useCallback<GridPipeProcessor<'hydrateColumns'>>(
    (columnsState) => {
          throw new Error("STUB");
      },
    [privateApiRef, classes, props.columns, props.rowReordering],
  );

  useGridRegisterPipeProcessor(privateApiRef, 'hydrateColumns', updateReorderColumn);
};
