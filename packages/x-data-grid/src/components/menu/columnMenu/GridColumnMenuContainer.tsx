'use client';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import * as React from 'react';
import { styled } from '@mui/material/styles';

import { forwardRef } from '@mui/x-internals/forwardRef';
import { isHideMenuKey } from '../../../utils/keyboardUtils';
import { NotRendered } from '../../../utils/assert';
import { gridClasses } from '../../../constants/gridClasses';
import type { GridSlotProps } from '../../../models/gridSlotsComponent';
import { useGridRootProps } from '../../../hooks/utils/useGridRootProps';
import type { GridColumnMenuContainerProps } from './GridColumnMenuProps';

const StyledMenuList = styled(NotRendered<GridSlotProps['baseMenuList']>, {
  slot: 'internal',
})(() => { throw new Error("STUB"); });

function handleMenuScrollCapture(event: React.WheelEvent | React.TouchEvent) {
    throw new Error("STUB");
}

const GridColumnMenuContainer = forwardRef<HTMLUListElement, GridColumnMenuContainerProps>(
  function GridColumnMenuContainer(props, ref) {
        throw new Error("STUB");
    },
);

GridColumnMenuContainer.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  colDef: PropTypes.object.isRequired,
  hideMenu: PropTypes.func.isRequired,
  id: PropTypes.string,
  labelledby: PropTypes.string,
  open: PropTypes.bool.isRequired,
} as any;

export { GridColumnMenuContainer };
