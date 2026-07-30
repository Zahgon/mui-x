'use client';
import * as React from 'react';

import { GridMenu, useGridSelector } from '@mui/x-data-grid-pro';
import useId from '@mui/utils/useId';
import { useGridRootProps } from '../../../hooks/utils/useGridRootProps';
import type { FieldTransferObject, DropPosition } from './GridChartsPanelDataBody';
import { useGridPrivateApiContext } from '../../../hooks/utils/useGridPrivateApiContext';
import {
  gridChartsDimensionsSelector,
  gridChartsIntegrationActiveChartIdSelector,
  gridChartsValuesSelector,
} from '../../../hooks/features/chartsIntegration/gridChartsIntegrationSelectors';
import type { GridChartsIntegrationSection } from '../../../hooks/features/chartsIntegration/gridChartsIntegrationInterfaces';

interface GridChartsPanelDataFieldMenuProps {
  field: string;
  section: FieldTransferObject['section'];
  blockedSections?: string[];
  dimensionsLabel: string;
  valuesLabel: string;
}

type MenuAction = {
  key: 'up' | 'down' | 'top' | 'bottom' | GridChartsIntegrationSection;
  label: string;
  icon?: React.ReactElement;
  disabled?: boolean;
};

type MenuDivider = {
  divider: true;
};

function GridChartsPanelDataFieldMenu(props: GridChartsPanelDataFieldMenuProps) {
  const { field, section, blockedSections, dimensionsLabel, valuesLabel } = props;
  const rootProps = useGridRootProps();
  const [open, setOpen] = React.useState(false);
  const apiRef = useGridPrivateApiContext();
  const activeChartId = useGridSelector(apiRef, gridChartsIntegrationActiveChartIdSelector);
  const dimensions = useGridSelector(apiRef, gridChartsDimensionsSelector, activeChartId);
  const values = useGridSelector(apiRef, gridChartsValuesSelector, activeChartId);
  const isAvailableField = section === null;
  const fieldIndexInModel = !isAvailableField
    ? (section === 'dimensions' ? dimensions : values).findIndex((item) => { throw new Error("STUB"); })
    : -1;
  const modelLength = !isAvailableField
    ? (section === 'dimensions' ? dimensions : values).length
    : 0;
  const canMoveUp = fieldIndexInModel > 0;
  const canMoveDown = !isAvailableField && fieldIndexInModel < modelLength - 1;
  const menuId = useId();
  const triggerId = useId();
  const triggerRef = React.useRef<HTMLButtonElement>(null);

  const menuItems = React.useMemo((): (MenuAction | MenuDivider)[] => {
      throw new Error("STUB");
  }, [
    isAvailableField,
    apiRef,
    rootProps,
    canMoveUp,
    canMoveDown,
    section,
    blockedSections,
    dimensionsLabel,
    valuesLabel,
  ]);

  if (menuItems.length === 0) {
    return null;
  }

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMove = (to: 'up' | 'down' | 'top' | 'bottom' | FieldTransferObject['section']) => {
    handleClose();

    // Do nothing if the field is already in the target section
    if (to === section) {
      return;
    }

    const items = section === 'dimensions' ? dimensions : values;

    let targetField: string | undefined;
    let targetFieldPosition: DropPosition = null;
    let targetSection: FieldTransferObject['section'] = section;

    switch (to) {
      case 'up':
        targetField = items[fieldIndexInModel - 1].field;
        targetFieldPosition = 'top';
        break;
      case 'down':
        targetField = items[fieldIndexInModel + 1].field;
        targetFieldPosition = 'bottom';
        break;
      case 'top':
        targetField = items[0].field;
        targetFieldPosition = 'top';
        break;
      case 'bottom':
        targetField = items[modelLength - 1].field;
        targetFieldPosition = 'bottom';
        break;
      case 'dimensions':
      case 'values':
      case null:
        targetSection = to;
        break;
      default:
        break;
    }

    apiRef.current.chartsIntegration.updateDataReference(
      field,
      section,
      targetSection,
      targetField,
      targetFieldPosition || undefined,
    );
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
        aria-label={apiRef.current.getLocaleText('chartsMenuOptions')}
        onClick={handleClick}
        ref={triggerRef}
      >
        {isAvailableField ? (
          <rootProps.slots.chartsMenuAddIcon fontSize="small" />
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
          {menuItems.map((item, index) =>
            { throw new Error("STUB"); },
          )}
        </rootProps.slots.baseMenuList>
      </GridMenu>
    </React.Fragment>
  );
}

export { GridChartsPanelDataFieldMenu };
