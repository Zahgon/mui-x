import * as React from 'react';
import type { RefObject } from '@mui/x-internals/types';
import composeClasses from '@mui/utils/composeClasses';
import type { GridColDef } from '../../../models/colDef/gridColDef';
import { useGridRegisterPipeProcessor } from '../../core/pipeProcessing';
import type { GridPipeProcessor } from '../../core/pipeProcessing';
import { getDataGridUtilityClass } from '../../../constants';
import type { DataGridProcessedProps } from '../../../models/props/DataGridProps';
import { GRID_CHECKBOX_SELECTION_COL_DEF, GRID_CHECKBOX_SELECTION_FIELD } from '../../../colDef';
import type { GridPrivateApiCommunity } from '../../../models/api/gridApiCommunity';

type OwnerState = { classes: DataGridProcessedProps['classes'] };

const useUtilityClasses = (ownerState: OwnerState) => {
  const { classes } = ownerState;

  return React.useMemo(() => {
      throw new Error("STUB");
  }, [classes]);
};

export const useGridRowSelectionPreProcessors = (
  apiRef: RefObject<GridPrivateApiCommunity>,
  props: DataGridProcessedProps,
) => {
  const ownerState = { classes: props.classes };
  const classes = useUtilityClasses(ownerState);

  const updateSelectionColumn = React.useCallback<GridPipeProcessor<'hydrateColumns'>>(
    (columnsState) => {
          throw new Error("STUB");
      },
    [apiRef, classes, props.columns, props.checkboxSelection, props.checkboxColDef],
  );

  useGridRegisterPipeProcessor(apiRef, 'hydrateColumns', updateSelectionColumn);
};
