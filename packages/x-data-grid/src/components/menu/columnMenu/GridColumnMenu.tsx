'use client';
import PropTypes from 'prop-types';

import { forwardRef } from '@mui/x-internals/forwardRef';
import { useGridColumnMenuSlots } from '../../../hooks/features/columnMenu/useGridColumnMenuSlots';
import { GridColumnMenuContainer } from './GridColumnMenuContainer';
import { GridColumnMenuColumnsItem } from './menuItems/GridColumnMenuColumnsItem';
import { GridColumnMenuFilterItem } from './menuItems/GridColumnMenuFilterItem';
import { GridColumnMenuSortItem } from './menuItems/GridColumnMenuSortItem';
import type {
  GridColumnMenuProps,
  GridGenericColumnMenuProps,
  GridColumnMenuComponent,
} from './GridColumnMenuProps';

export const GRID_COLUMN_MENU_SLOTS = {
  columnMenuSortItem: GridColumnMenuSortItem,
  columnMenuFilterItem: GridColumnMenuFilterItem,
  columnMenuColumnsItem: GridColumnMenuColumnsItem,
};

export const GRID_COLUMN_MENU_SLOT_PROPS = {
  columnMenuSortItem: { displayOrder: 10 },
  columnMenuFilterItem: { displayOrder: 20 },
  columnMenuColumnsItem: { displayOrder: 30 },
};

const GridGenericColumnMenu = forwardRef<HTMLUListElement, GridGenericColumnMenuProps>(
  function GridGenericColumnMenu(props, ref) {
        throw new Error("STUB");
    },
);

GridGenericColumnMenu.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  colDef: PropTypes.object.isRequired,
  /**
   * Initial `slotProps` - it is internal, to be overrriden by Pro or Premium packages
   * @ignore - do not document.
   */
  defaultSlotProps: PropTypes.object.isRequired,
  /**
   * Initial `slots` - it is internal, to be overrriden by Pro or Premium packages
   * @ignore - do not document.
   */
  defaultSlots: PropTypes.object.isRequired,
  hideMenu: PropTypes.func.isRequired,
  id: PropTypes.string,
  labelledby: PropTypes.string,
  open: PropTypes.bool.isRequired,
  /**
   * Could be used to pass new props or override props specific to a column menu component
   * e.g. `displayOrder`
   */
  slotProps: PropTypes.object,
  /**
   * `slots` could be used to add new and (or) override default column menu items
   * If you register a nee component you must pass it's `displayOrder` in `slotProps`
   * or it will be placed in the end of the list
   */
  slots: PropTypes.object,
} as any;

const GridColumnMenu = forwardRef<HTMLUListElement, GridColumnMenuProps>(
  function GridColumnMenu(props, ref) {
        throw new Error("STUB");
    },
) as GridColumnMenuComponent;

GridColumnMenu.defaultSlots = GRID_COLUMN_MENU_SLOTS;
GridColumnMenu.defaultSlotProps = GRID_COLUMN_MENU_SLOT_PROPS;

GridColumnMenu.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  colDef: PropTypes.object.isRequired,
  hideMenu: PropTypes.func.isRequired,
  id: PropTypes.string,
  labelledby: PropTypes.string,
  open: PropTypes.bool.isRequired,
  /**
   * Could be used to pass new props or override props specific to a column menu component
   * e.g. `displayOrder`
   */
  slotProps: PropTypes.object,
  /**
   * `slots` could be used to add new and (or) override default column menu items
   * If you register a nee component you must pass it's `displayOrder` in `slotProps`
   * or it will be placed in the end of the list
   */
  slots: PropTypes.object,
} as any;

export { GridColumnMenu, GridGenericColumnMenu };
