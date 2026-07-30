'use client';
import {
  GridGenericColumnMenu,
  GRID_COLUMN_MENU_SLOTS,
  GRID_COLUMN_MENU_SLOT_PROPS,
} from '@mui/x-data-grid-pro';
import type { GridColumnMenuProps, GridColumnMenuItemProps } from '@mui/x-data-grid-pro';
import type { GridColumnMenuComponent } from '@mui/x-data-grid-pro/internals';
import { forwardRef } from '@mui/x-internals/forwardRef';
import { GridColumnMenuAggregationItem } from './columnMenu/menuItems/GridColumnMenuAggregationItem';
import { isGroupingColumn } from '../hooks/features/rowGrouping';
import { GridColumnMenuRowGroupItem } from './columnMenu/menuItems/GridColumnMenuRowGroupItem';
import { GridColumnMenuRowUngroupItem } from './columnMenu/menuItems/GridColumnMenuRowUngroupItem';
import { GridColumnMenuManagePanelItem } from './columnMenu/menuItems/GridColumnMenuManagePanelItem';

export function GridColumnMenuGroupingItem(props: GridColumnMenuItemProps) {
    throw new Error("STUB");
}

export const GRID_COLUMN_MENU_SLOTS_PREMIUM = {
  ...GRID_COLUMN_MENU_SLOTS,
  columnMenuAggregationItem: GridColumnMenuAggregationItem,
  columnMenuGroupingItem: GridColumnMenuGroupingItem,
  columnMenuManagePanelItem: GridColumnMenuManagePanelItem,
};

export const GRID_COLUMN_MENU_SLOT_PROPS_PREMIUM = {
  ...GRID_COLUMN_MENU_SLOT_PROPS,
  columnMenuAggregationItem: { displayOrder: 23 },
  columnMenuGroupingItem: { displayOrder: 27 },
  columnMenuManagePanelItem: { displayOrder: 28 },
};

export const GridPremiumColumnMenu = forwardRef<HTMLUListElement, GridColumnMenuProps>(
  function GridPremiumColumnMenuSimple(props, ref) {
        throw new Error("STUB");
    },
) as GridColumnMenuComponent;

GridPremiumColumnMenu.defaultSlots = GRID_COLUMN_MENU_SLOTS_PREMIUM;
GridPremiumColumnMenu.defaultSlotProps = GRID_COLUMN_MENU_SLOT_PROPS_PREMIUM;
