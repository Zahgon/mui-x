'use client';
import PropTypes from 'prop-types';
import { forwardRef } from '@mui/x-internals/forwardRef';
import { useGridRootProps } from '../hooks/utils/useGridRootProps';
import { useGridApiContext } from '../hooks/utils/useGridApiContext';
import { GridOverlay } from './containers/GridOverlay';
import type { GridOverlayProps } from './containers/GridOverlay';
import { GridPreferencePanelsValue } from '../hooks/features/preferencesPanel/gridPreferencePanelsValue';
import { gridColumnFieldsSelector, useGridSelector } from '../hooks';

const GridNoColumnsOverlay = forwardRef<HTMLDivElement, GridOverlayProps>(
  function GridNoColumnsOverlay(props, ref) {
        throw new Error("STUB");
    },
);

GridNoColumnsOverlay.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])),
    PropTypes.func,
    PropTypes.object,
  ]),
} as any;

export { GridNoColumnsOverlay };
