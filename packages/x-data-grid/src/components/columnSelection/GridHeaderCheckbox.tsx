'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import composeClasses from '@mui/utils/composeClasses';
import useEnhancedEffect from '@mui/utils/useEnhancedEffect';
import { forwardRef } from '@mui/x-internals/forwardRef';
import { isMultipleRowSelectionEnabled } from '../../hooks/features/rowSelection/utils';
import { useGridSelector } from '../../hooks/utils/useGridSelector';
import { gridTabIndexColumnHeaderSelector } from '../../hooks/features/focus/gridFocusStateSelector';
import { gridRowSelectionStateSelector } from '../../hooks/features/rowSelection/gridRowSelectionSelector';
import type { GridColumnHeaderParams } from '../../models/params/gridColumnHeaderParams';
import { useGridApiContext } from '../../hooks/utils/useGridApiContext';
import { getDataGridUtilityClass } from '../../constants/gridClasses';
import { useGridRootProps } from '../../hooks/utils/useGridRootProps';
import type { DataGridProcessedProps } from '../../models/props/DataGridProps';
import type { GridHeaderSelectionCheckboxParams } from '../../models/params/gridHeaderSelectionCheckboxParams';
import { gridExpandedSortedRowIdsSelector } from '../../hooks/features/filter/gridFilterSelector';
import { gridPaginatedVisibleSortedGridRowIdsSelector } from '../../hooks/features/pagination/gridPaginationSelector';
import type { GridRowId } from '../../models/gridRows';
import type { GridRowSelectionModel } from '../../models/gridRowSelectionModel';
import { createRowSelectionManager } from '../../models/gridRowSelectionManager';

type OwnerState = { classes: DataGridProcessedProps['classes'] };

const useUtilityClasses = (ownerState: OwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['checkboxInput'],
  };

  return composeClasses(slots, getDataGridUtilityClass, classes);
};

const GridHeaderCheckbox = forwardRef<HTMLButtonElement, GridColumnHeaderParams>(
  function GridHeaderCheckbox(props, ref) {
        throw new Error("STUB");
    },
);

GridHeaderCheckbox.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The column of the current header component.
   */
  colDef: PropTypes.object.isRequired,
  /**
   * The column field of the column that triggered the event
   */
  field: PropTypes.string.isRequired,
} as any;

export { GridHeaderCheckbox };
