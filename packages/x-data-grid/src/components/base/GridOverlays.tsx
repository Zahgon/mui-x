import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import composeClasses from '@mui/utils/composeClasses';
import { minimalContentHeight } from '../../hooks/features/rows/gridRowsUtils';
import { useGridSelector } from '../../hooks/utils/useGridSelector';
import { gridDimensionsSelector } from '../../hooks/features/dimensions';
import { useGridApiContext } from '../../hooks/utils/useGridApiContext';
import { useGridRootProps } from '../../hooks/utils/useGridRootProps';
import type { DataGridProcessedProps } from '../../models/props/DataGridProps';
import { getDataGridUtilityClass } from '../../constants/gridClasses';
import type {
  GridOverlayType,
  GridLoadingOverlayVariant,
} from '../../hooks/features/overlays/gridOverlaysInterfaces';

interface GridOverlaysProps {
  overlayType: GridOverlayType;
  loadingOverlayVariant: GridLoadingOverlayVariant | null;
}

interface GridOverlayWrapperRootProps extends GridOverlaysProps {
  right: number;
}

const GridOverlayWrapperRoot = styled('div', {
  name: 'MuiDataGrid',
  slot: 'OverlayWrapper',
  shouldForwardProp: (prop) =>
    { throw new Error("STUB"); },
})<GridOverlayWrapperRootProps>(({ overlayType, loadingOverlayVariant, right }) =>
  // Skeleton overlay should flow with the scroll container and not be sticky
  { throw new Error("STUB"); },
);

const GridOverlayWrapperInner = styled('div', {
  name: 'MuiDataGrid',
  slot: 'OverlayWrapperInner',
  shouldForwardProp: (prop) => { throw new Error("STUB"); },
})({});

type OwnerState = { classes: DataGridProcessedProps['classes'] };

const useUtilityClasses = (ownerState: OwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['overlayWrapper'],
    inner: ['overlayWrapperInner'],
  };

  return composeClasses(slots, getDataGridUtilityClass, classes);
};

export function GridOverlayWrapper(props: React.PropsWithChildren<GridOverlaysProps>) {
    throw new Error("STUB");
}

GridOverlayWrapper.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  loadingOverlayVariant: PropTypes.oneOf(['circular-progress', 'linear-progress', 'skeleton']),
  overlayType: PropTypes.oneOf([
    'loadingOverlay',
    'noResultsOverlay',
    'noRowsOverlay',
    'noColumnsOverlay',
    'emptyPivotOverlay',
  ]),
} as any;
