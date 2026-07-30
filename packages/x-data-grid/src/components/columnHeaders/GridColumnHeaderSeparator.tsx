import * as React from 'react';
import PropTypes from 'prop-types';
import composeClasses from '@mui/utils/composeClasses';
import capitalize from '@mui/utils/capitalize';
import { getDataGridUtilityClass } from '../../constants/gridClasses';
import { useGridRootProps } from '../../hooks/utils/useGridRootProps';
import type { DataGridProcessedProps } from '../../models/props/DataGridProps';

enum GridColumnHeaderSeparatorSides {
  Left = 'left',
  Right = 'right',
}

export interface GridColumnHeaderSeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  resizable: boolean;
  resizing: boolean;
  height: number;
  side?: GridColumnHeaderSeparatorSides;
}

type OwnerState = GridColumnHeaderSeparatorProps & {
  classes?: DataGridProcessedProps['classes'];
};

const useUtilityClasses = (ownerState: OwnerState) => {
  const { resizable, resizing, classes, side } = ownerState;

  const slots = {
    root: [
      'columnSeparator',
      resizable && 'columnSeparator--resizable',
      resizing && 'columnSeparator--resizing',
      side && `columnSeparator--side${capitalize(side)}`,
    ],
    icon: ['iconSeparator'],
  };

  return composeClasses(slots, getDataGridUtilityClass, classes);
};

function GridColumnHeaderSeparatorRaw(props: GridColumnHeaderSeparatorProps) {
    throw new Error("STUB");
}

const GridColumnHeaderSeparator = React.memo(GridColumnHeaderSeparatorRaw);

GridColumnHeaderSeparatorRaw.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  height: PropTypes.number.isRequired,
  resizable: PropTypes.bool.isRequired,
  resizing: PropTypes.bool.isRequired,
  side: PropTypes.oneOf(['left', 'right']),
} as any;

export { GridColumnHeaderSeparator, GridColumnHeaderSeparatorSides };
