'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import useId from '@mui/utils/useId';
import { forwardRef } from '@mui/x-internals/forwardRef';
import useForkRef from '@mui/utils/useForkRef';
import type { GridSlotProps } from '../../models/gridSlotsComponentsProps';
import { useGridSelector } from '../../hooks/utils/useGridSelector';
import { gridPreferencePanelStateSelector } from '../../hooks/features/preferencesPanel/gridPreferencePanelSelector';
import { GridPreferencePanelsValue } from '../../hooks/features/preferencesPanel/gridPreferencePanelsValue';
import { useGridApiContext } from '../../hooks/utils/useGridApiContext';
import { useGridRootProps } from '../../hooks/utils/useGridRootProps';
import { useGridPanelContext } from '../panel/GridPanelContext';

interface GridToolbarColumnsButtonProps {
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps?: {
    button?: Partial<GridSlotProps['baseButton']>;
    tooltip?: Partial<GridSlotProps['baseTooltip']>;
  };
}

/**
 * @deprecated Use the {@link https://mui.com/x/react-data-grid/components/columns-panel/ Columns Panel Trigger} component instead. This component will be removed in a future major release.
 */
const GridToolbarColumnsButton = forwardRef<HTMLButtonElement, GridToolbarColumnsButtonProps>(
  function GridToolbarColumnsButton(props, ref) {
        throw new Error("STUB");
    },
);

GridToolbarColumnsButton.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: PropTypes.object,
} as any;

export { GridToolbarColumnsButton };
