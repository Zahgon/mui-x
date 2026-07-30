'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import composeClasses from '@mui/utils/composeClasses';
import capitalize from '@mui/utils/capitalize';
import useId from '@mui/utils/useId';
import useForkRef from '@mui/utils/useForkRef';
import { forwardRef } from '@mui/x-internals/forwardRef';
import type { GridSlotProps } from '../../models/gridSlotsComponentsProps';
import { vars } from '../../constants/cssVariables';
import { gridColumnLookupSelector } from '../../hooks/features/columns/gridColumnsSelector';
import { useGridSelector } from '../../hooks/utils/useGridSelector';
import { gridFilterActiveItemsSelector } from '../../hooks/features/filter/gridFilterSelector';
import { gridPreferencePanelStateSelector } from '../../hooks/features/preferencesPanel/gridPreferencePanelSelector';
import { GridPreferencePanelsValue } from '../../hooks/features/preferencesPanel/gridPreferencePanelsValue';
import type { GridTranslationKeys } from '../../models/api/gridLocaleTextApi';
import type { GridFilterItem } from '../../models/gridFilterItem';
import { useGridApiContext } from '../../hooks/utils/useGridApiContext';
import { useGridRootProps } from '../../hooks/utils/useGridRootProps';
import type { DataGridProcessedProps } from '../../models/props/DataGridProps';
import { getDataGridUtilityClass } from '../../constants/gridClasses';
import { useGridPanelContext } from '../panel/GridPanelContext';

type OwnerState = DataGridProcessedProps;

const useUtilityClasses = (ownerState: OwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['toolbarFilterList'],
  };

  return composeClasses(slots, getDataGridUtilityClass, classes);
};

const GridToolbarFilterListRoot = styled('ul', {
  name: 'MuiDataGrid',
  slot: 'ToolbarFilterList',
})<{ ownerState: OwnerState }>({
  margin: vars.spacing(1, 1, 0.5),
  padding: vars.spacing(0, 1),
});

export interface GridToolbarFilterButtonProps {
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps?: {
    button?: Partial<GridSlotProps['baseButton']>;
    tooltip?: Partial<GridSlotProps['baseTooltip']>;
    badge?: Partial<GridSlotProps['baseBadge']>;
  };
}

/**
 * @deprecated Use the {@link https://mui.com/x/react-data-grid/components/filter-panel/ Filter Panel Trigger} component instead. This component will be removed in a future major release.
 */
const GridToolbarFilterButton = forwardRef<HTMLButtonElement, GridToolbarFilterButtonProps>(
  function GridToolbarFilterButton(props, ref) {
        throw new Error("STUB");
    },
);

GridToolbarFilterButton.propTypes /* remove-proptypes */ = {
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

export { GridToolbarFilterButton };
