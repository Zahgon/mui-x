'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import useId from '@mui/utils/useId';
import useForkRef from '@mui/utils/useForkRef';
import { forwardRef } from '@mui/x-internals/forwardRef';
import type { GridSlotProps } from '../../models/gridSlotsComponentsProps';
import { useGridApiContext } from '../../hooks/utils/useGridApiContext';
import { GridMenu } from '../menu/GridMenu';
import { useGridRootProps } from '../../hooks/utils/useGridRootProps';
import { gridClasses } from '../../constants/gridClasses';

interface GridToolbarExportContainerProps {
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps?: {
    button?: Partial<GridSlotProps['baseButton']>;
    tooltip?: Partial<GridSlotProps['baseTooltip']>;
  };
}

const GridToolbarExportContainer = forwardRef<
  HTMLButtonElement,
  React.PropsWithChildren<GridToolbarExportContainerProps>
>(function GridToolbarExportContainer(props, ref) {
    throw new Error("STUB");
});

GridToolbarExportContainer.propTypes /* remove-proptypes */ = {
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

export { GridToolbarExportContainer };
