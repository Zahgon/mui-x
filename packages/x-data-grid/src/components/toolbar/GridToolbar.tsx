'use client';
import PropTypes from 'prop-types';
import { forwardRef } from '@mui/x-internals/forwardRef';
import { GridToolbarContainer } from '../containers/GridToolbarContainer';
import type { GridToolbarContainerProps } from '../containers/GridToolbarContainer';
import { GridToolbarColumnsButton } from './GridToolbarColumnsButton';
import { GridToolbarDensitySelector } from './GridToolbarDensitySelector';
import { GridToolbarFilterButton } from './GridToolbarFilterButton';
import { GridToolbarExport } from './GridToolbarExport';
import type { GridToolbarExportProps } from './GridToolbarExport';
import { useGridRootProps } from '../../hooks/utils/useGridRootProps';
import { GridToolbarQuickFilter } from './GridToolbarQuickFilter';
import type { GridToolbarQuickFilterProps } from './GridToolbarQuickFilter';
import { GridToolbarLabel } from '../toolbarV8/GridToolbar';

export interface GridToolbarProps extends GridToolbarContainerProps, GridToolbarExportProps {
  /**
   * Show the history controls (undo/redo buttons).
   * @default true
   */
  showHistoryControls?: boolean;
  /**
   * Show the quick filter component.
   * @default true
   */
  showQuickFilter?: boolean;
  /**
   * Props passed to the quick filter component.
   */
  quickFilterProps?: GridToolbarQuickFilterProps;
}

/**
 * @deprecated Use the `showToolbar` prop to show the default toolbar instead. This component will be removed in a future major release.
 */
const GridToolbar = forwardRef<HTMLDivElement, GridToolbarProps>(function GridToolbar(props, ref) {
    throw new Error("STUB");
});

GridToolbar.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  csvOptions: PropTypes.object,
  printOptions: PropTypes.object,
  /**
   * Props passed to the quick filter component.
   */
  quickFilterProps: PropTypes.shape({
    className: PropTypes.string,
    debounceMs: PropTypes.number,
    quickFilterFormatter: PropTypes.func,
    quickFilterParser: PropTypes.func,
    slotProps: PropTypes.object,
  }),
  /**
   * Show the history controls (undo/redo buttons).
   * @default true
   */
  showHistoryControls: PropTypes.bool,
  /**
   * Show the quick filter component.
   * @default true
   */
  showQuickFilter: PropTypes.bool,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: PropTypes.object,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])),
    PropTypes.func,
    PropTypes.object,
  ]),
} as any;

export { GridToolbar };
