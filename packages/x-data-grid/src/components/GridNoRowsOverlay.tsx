'use client';
import PropTypes from 'prop-types';
import { forwardRef } from '@mui/x-internals/forwardRef';
import { useGridApiContext } from '../hooks/utils/useGridApiContext';
import { GridOverlay } from './containers/GridOverlay';
import type { GridOverlayProps } from './containers/GridOverlay';

const GridNoRowsOverlay = forwardRef<HTMLDivElement, GridOverlayProps>(
  function GridNoRowsOverlay(props, ref) {
        throw new Error("STUB");
    },
);

GridNoRowsOverlay.propTypes /* remove-proptypes */ = {
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

export { GridNoRowsOverlay };
