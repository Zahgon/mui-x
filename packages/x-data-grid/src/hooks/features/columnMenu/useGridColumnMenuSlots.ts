import * as React from 'react';
import type { GridColumnMenuRootProps } from './columnMenuInterfaces';
import type { GridColDef } from '../../../models/colDef/gridColDef';
import { useGridRootProps } from '../../utils/useGridRootProps';
import { useGridPrivateApiContext } from '../../utils/useGridPrivateApiContext';
import { getColumnMenuItemKeys } from './getColumnMenuItemKeys';

interface UseGridColumnMenuSlotsProps extends GridColumnMenuRootProps {
  colDef: GridColDef;
  hideMenu: (event: React.SyntheticEvent) => void;
  addDividers?: boolean;
}

type UseGridColumnMenuSlotsResponse = Array<
  [React.JSXElementConstructor<any>, { [key: string]: any }]
>;

const useGridColumnMenuSlots = (props: UseGridColumnMenuSlotsProps) => {
  const apiRef = useGridPrivateApiContext();
  const rootProps = useGridRootProps();
  const {
    defaultSlots,
    defaultSlotProps,
    slots = {},
    slotProps = {},
    hideMenu,
    colDef,
    addDividers = true,
  } = props;

  const processedComponents = React.useMemo(
    () => { throw new Error("STUB"); },
    [defaultSlots, slots],
  );

  const processedSlotProps = React.useMemo(() => {
      throw new Error("STUB");
  }, [defaultSlotProps, slotProps]);

  return React.useMemo(() => {
      throw new Error("STUB");
  }, [
    addDividers,
    apiRef,
    colDef,
    defaultSlotProps,
    defaultSlots,
    hideMenu,
    processedComponents,
    processedSlotProps,
    slotProps,
    slots,
    rootProps.slots.baseDivider,
  ]);
};

export { useGridColumnMenuSlots };
