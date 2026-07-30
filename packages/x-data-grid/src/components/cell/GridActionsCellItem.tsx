'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import { forwardRef } from '@mui/x-internals/forwardRef';
import type { GridSlotProps, GridBaseIconProps } from '../../models/gridSlotsComponentsProps';
import { useGridRootProps } from '../../hooks/utils/useGridRootProps';

interface GridActionsCellItemCommonProps {
  icon?: React.JSXElementConstructor<GridBaseIconProps> | React.ReactNode;
  /** from https://mui.com/material-ui/api/button-base/#ButtonBase-prop-component */
  component?: React.ElementType;
}

export type GridActionsCellItemProps = GridActionsCellItemCommonProps &
  (
    | ({ showInMenu?: false; icon: React.ReactElement<any>; label: string } & Omit<
        GridSlotProps['baseIconButton'],
        'component'
      >)
    | ({
        showInMenu: true;
        /**
         * If false, the menu will not close when this item is clicked.
         * @default true
         */
        closeMenuOnClick?: boolean;
        closeMenu?: () => void;
        label: React.ReactNode;
      } & Omit<GridSlotProps['baseMenuItem'], 'component'>)
  );

const GridActionsCellItem = forwardRef<HTMLElement, GridActionsCellItemProps>((props, ref) => {
    throw new Error("STUB");
});

GridActionsCellItem.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  className: PropTypes.string,
  /**
   * from https://mui.com/material-ui/api/button-base/#ButtonBase-prop-component
   */
  component: PropTypes.elementType,
  disabled: PropTypes.bool,
  icon: PropTypes /* @typescript-to-proptypes-ignore */.element,
  label: PropTypes.node,
  showInMenu: PropTypes.bool,
  style: PropTypes.object,
} as any;

export { GridActionsCellItem };
