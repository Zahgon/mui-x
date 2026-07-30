'use client';
import PropTypes from 'prop-types';
import { forwardRef } from '@mui/x-internals/forwardRef';
import { useGridSelector } from '../hooks/utils/useGridSelector';
import { gridTopLevelRowCountSelector } from '../hooks/features/rows/gridRowsSelector';
import { gridRowSelectionCountSelector } from '../hooks/features/rowSelection/gridRowSelectionSelector';
import { gridFilteredTopLevelRowCountSelector } from '../hooks/features/filter/gridFilterSelector';
import { useGridApiContext } from '../hooks/utils/useGridApiContext';
import { GridSelectedRowCount } from './GridSelectedRowCount';
import { GridFooterContainer } from './containers/GridFooterContainer';
import type { GridFooterContainerProps } from './containers/GridFooterContainer';
import { useGridRootProps } from '../hooks/utils/useGridRootProps';

const GridFooter = forwardRef<HTMLDivElement, GridFooterContainerProps>(
  function GridFooter(props, ref) {
        throw new Error("STUB");
    },
);

GridFooter.propTypes /* remove-proptypes */ = {
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

export { GridFooter };
