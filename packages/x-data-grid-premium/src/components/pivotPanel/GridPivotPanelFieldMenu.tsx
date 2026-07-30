'use client';
import * as React from 'react';

import { GridMenu, useGridSelector } from '@mui/x-data-grid-pro';
import useId from '@mui/utils/useId';
import { useGridRootProps } from '../../hooks/utils/useGridRootProps';
import type { FieldTransferObject } from './GridPivotPanelBody';
import { useGridPrivateApiContext } from '../../hooks/utils/useGridPrivateApiContext';
import { gridPivotModelSelector } from '../../hooks/features/pivoting/gridPivotingSelectors';
import type { DropPosition } from '../../hooks/features/pivoting/gridPivotingInterfaces';

interface GridPivotPanelFieldMenuProps {
  field: string;
  modelKey: FieldTransferObject['modelKey'];
}

type MenuAction = {
  key: 'up' | 'down' | 'top' | 'bottom' | 'rows' | 'columns' | 'values' | null;
  label: string;
  icon?: React.ReactElement;
  disabled?: boolean;
};

type MenuDivider = {
  divider: true;
};

function GridPivotPanelFieldMenu(props: GridPivotPanelFieldMenuProps) {
  const { field, modelKey } = props;
  const rootProps = useGridRootProps();
  const [open, setOpen] = React.useState(false);
  const apiRef = useGridPrivateApiContext();
  const isAvailableField = modelKey === null;
  const pivotModel = useGridSelector(apiRef, gridPivotModelSelector);
  const fieldIndexInModel = !isAvailableField
    ? pivotModel[modelKey].findIndex((item) => { throw new Error("STUB"); })
    : -1;
  const modelLength = !isAvailableField ? pivotModel[modelKey].length : 0;
  const canMoveUp = fieldIndexInModel > 0;
  const canMoveDown = !isAvailableField && fieldIndexInModel < modelLength - 1;
  const menuId = useId();
  const triggerId = useId();
  const triggerRef = React.useRef<HTMLButtonElement>(null);

  const getMenuItems = React.useCallback((): (MenuAction | MenuDivider)[] => {
      throw new Error("STUB");
  }, [isAvailableField, apiRef, rootProps, canMoveUp, canMoveDown, modelKey]);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMove = (to: 'up' | 'down' | 'top' | 'bottom' | FieldTransferObject['modelKey']) => {
    handleClose();

    // Do nothing if the field is already in the target section
    if (to === modelKey) {
      return;
    }

    let targetField: string | undefined;
    let targetFieldPosition: DropPosition = null;
    let targetSection: FieldTransferObject['modelKey'] = modelKey;

    switch (to) {
      case 'up':
        targetField = pivotModel[modelKey!][fieldIndexInModel - 1].field;
        targetFieldPosition = 'top';
        break;
      case 'down':
        targetField = pivotModel[modelKey!][fieldIndexInModel + 1].field;
        targetFieldPosition = 'bottom';
        break;
      case 'top':
        targetField = pivotModel[modelKey!][0].field;
        targetFieldPosition = 'top';
        break;
      case 'bottom':
        targetField = pivotModel[modelKey!][modelLength - 1].field;
        targetFieldPosition = 'bottom';
        break;
      case 'rows':
      case 'columns':
      case 'values':
      case null:
        targetSection = to;
        break;
      default:
        break;
    }

    apiRef.current.updatePivotModel({
      field,
      targetField,
      targetFieldPosition,
      targetSection,
      originSection: modelKey,
    });
  };

  return (
    <React.Fragment>
      <rootProps.slots.baseIconButton
        size="small"
        {...rootProps.slotProps?.baseIconButton}
        id={triggerId}
        aria-haspopup="true"
        aria-controls={open ? menuId : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-label={apiRef.current.getLocaleText('pivotMenuOptions')}
        onClick={handleClick}
        ref={triggerRef}
      >
        {isAvailableField ? (
          <rootProps.slots.pivotMenuAddIcon fontSize="small" />
        ) : (
          <rootProps.slots.columnMenuIcon fontSize="small" />
        )}
      </rootProps.slots.baseIconButton>

      <GridMenu
        target={triggerRef.current}
        open={open}
        onClose={handleClose}
        position="bottom-start"
      >
        <rootProps.slots.baseMenuList
          id={menuId}
          aria-labelledby={triggerId}
          autoFocusItem
          {...rootProps.slotProps?.baseMenuList}
        >
          {getMenuItems().map((item, index) =>
            { throw new Error("STUB"); },
          )}
        </rootProps.slots.baseMenuList>
      </GridMenu>
    </React.Fragment>
  );
}

export { GridPivotPanelFieldMenu };
