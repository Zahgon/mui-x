'use client';
import * as React from 'react';
import useId from '@mui/utils/useId';
import { styled } from '@mui/material/styles';
import { getDataGridUtilityClass, GridMenu, useGridSelector } from '@mui/x-data-grid-pro';
import type { GridSlotProps } from '@mui/x-data-grid-pro';
import composeClasses from '@mui/utils/composeClasses';
import { gridPivotActiveSelector, NotRendered, vars } from '@mui/x-data-grid-pro/internals';
import { useGridApiContext } from '../../../hooks/utils/useGridApiContext';
import { useGridRootProps } from '../../../hooks/utils/useGridRootProps';
import { useGridPrivateApiContext } from '../../../hooks/utils/useGridPrivateApiContext';
import type { DataGridPremiumProcessedProps } from '../../../models/dataGridPremiumProps';
import type { FieldTransferObject, DropPosition } from './GridChartsPanelDataBody';
import { GridChartsPanelDataFieldMenu } from './GridChartsPanelDataFieldMenu';
import { gridAggregationModelSelector } from '../../../hooks/features/aggregation';
import { gridRowGroupingSanitizedModelSelector } from '../../../hooks/features/rowGrouping/gridRowGroupingSelector';
import {
  getAggregationFunctionLabel,
  getAvailableAggregationFunctions,
} from '../../../hooks/features/aggregation/gridAggregationUtils';
import type { GridChartsIntegrationSection } from '../../../hooks/features/chartsIntegration/gridChartsIntegrationInterfaces';
import { COLUMN_GROUP_ID_SEPARATOR } from '../../../constants/columnGroups';

const AGGREGATION_FUNCTION_NONE = 'none';

type GridChartsPanelDataFieldProps = {
  children: React.ReactNode;
  field: string;
  section: GridChartsIntegrationSection;
  blockedSections?: string[];
  dimensionsLabel: string;
  valuesLabel: string;
  disabled?: boolean;
  selected?: boolean;
  onChange?: (field: string, section: GridChartsIntegrationSection) => void;
  onDragStart: (field: string, section: GridChartsIntegrationSection) => void;
  onDragEnd: () => void;
};

type OwnerState = GridChartsPanelDataFieldProps &
  Pick<DataGridPremiumProcessedProps, 'classes'> & {
    dropPosition: DropPosition;
    section: GridChartsIntegrationSection;
  };

const useUtilityClasses = (ownerState: OwnerState) => {
  const { classes } = ownerState;
  const slots = {
    root: ['chartsPanelDataField'],
    name: ['chartsPanelDataFieldName'],
    actionContainer: ['chartsPanelDataFieldActionContainer'],
    dragIcon: ['chartsPanelDataFieldDragIcon'],
    checkbox: ['chartsPanelDataFieldCheckbox'],
  };

  return composeClasses(slots, getDataGridUtilityClass, classes);
};

const GridChartsPanelDataFieldRoot = styled('div', {
  name: 'MuiDataGrid',
  slot: 'ChartsPanelDataField',
})<{ ownerState: OwnerState; disabled: boolean }>(({ disabled }) => { throw new Error("STUB"); });

const GridChartsPanelDataFieldName = styled('span', {
  name: 'MuiDataGrid',
  slot: 'ChartsPanelDataFieldName',
})<{ ownerState: OwnerState }>({
  flex: 1,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

const GridChartsPanelDataFieldActionContainer = styled('div', {
  name: 'MuiDataGrid',
  slot: 'ChartsPanelDataFieldActionContainer',
})<{ ownerState: OwnerState }>({
  display: 'flex',
  alignItems: 'center',
});

const GridChartsPanelDataFieldDragIcon = styled('div', {
  name: 'MuiDataGrid',
  slot: 'ChartsPanelDataFieldDragIcon',
})<{ ownerState: OwnerState }>({
  position: 'absolute',
  left: -1,
  width: 16,
  display: 'flex',
  justifyContent: 'center',
  color: vars.colors.foreground.base,
  opacity: 0,
  '[draggable="true"]:hover > &': {
    opacity: 0.3,
  },
});

const GridChartsPanelDataFieldCheckbox = styled(NotRendered<GridSlotProps['baseCheckbox']>, {
  name: 'MuiDataGrid',
  slot: 'ChartsPanelDataFieldCheckbox',
})<{ ownerState: OwnerState }>({
  flex: 1,
  position: 'relative',
  margin: vars.spacing(0, 0, 0, -1),
  cursor: 'grab',
});

export function AggregationSelect({
  aggFunc,
  field,
}: {
  aggFunc: string;
  field: FieldTransferObject['field'];
}) {
    throw new Error("STUB");
}

function GridChartsPanelDataField(props: GridChartsPanelDataFieldProps) {
  const {
    children,
    field,
    section,
    blockedSections,
    dimensionsLabel,
    valuesLabel,
    selected,
    disabled,
    onChange,
    onDragStart,
    onDragEnd,
  } = props;
  const rootProps = useGridRootProps();
  const [dropPosition, setDropPosition] = React.useState<DropPosition>(null);
  const ownerState = { ...props, classes: rootProps.classes, dropPosition, section };
  const classes = useUtilityClasses(ownerState);
  const apiRef = useGridPrivateApiContext();
  const aggregationModel = useGridSelector(apiRef, gridAggregationModelSelector);
  const rowGroupingModel = useGridSelector(apiRef, gridRowGroupingSanitizedModelSelector);
  const isRowGroupingEnabled = React.useMemo(() => { throw new Error("STUB"); }, [rowGroupingModel]);

  const handleDragStart = React.useCallback(
    (event: React.DragEvent) => {
          throw new Error("STUB");
      },
    [field, onDragStart, section],
  );

  const getDropPosition = React.useCallback((event: React.DragEvent): DropPosition => {
      throw new Error("STUB");
  }, []);

  const handleDragOver = React.useCallback(
    (event: React.DragEvent) => {
          throw new Error("STUB");
      },
    [disabled, getDropPosition],
  );

  const handleDragLeave = React.useCallback((event: React.DragEvent) => {
      throw new Error("STUB");
  }, []);

  const handleDrop = React.useCallback(
    (event: React.DragEvent) => {
          throw new Error("STUB");
      },
    [getDropPosition, apiRef, field, section],
  );

  const hideable = section !== null;

  return (
    <rootProps.slots.baseTooltip
      title={disabled ? apiRef.current.getLocaleText('chartsFieldBlocked') : undefined}
      enterDelay={1000}
      {...rootProps.slotProps?.baseTooltip}
    >
      <GridChartsPanelDataFieldRoot
        ownerState={ownerState}
        className={classes.root}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onDragStart={handleDragStart}
        onDragEnd={onDragEnd}
        draggable={!disabled}
        disabled={!!disabled}
      >
        <GridChartsPanelDataFieldDragIcon ownerState={ownerState} className={classes.dragIcon}>
          <rootProps.slots.columnReorderIcon fontSize="small" />
        </GridChartsPanelDataFieldDragIcon>

        {hideable ? (
          <GridChartsPanelDataFieldCheckbox
            ownerState={ownerState}
            className={classes.checkbox}
            as={rootProps.slots.baseCheckbox}
            size="small"
            density="compact"
            {...rootProps.slotProps?.baseCheckbox}
            checked={selected || false}
            onChange={() => { throw new Error("STUB"); }}
            label={children}
          />
        ) : (
          <GridChartsPanelDataFieldName ownerState={ownerState} className={classes.name}>
            {children}
          </GridChartsPanelDataFieldName>
        )}

        <GridChartsPanelDataFieldActionContainer
          ownerState={ownerState}
          className={classes.actionContainer}
        >
          {isRowGroupingEnabled && section === 'values' && (
            <AggregationSelect
              aggFunc={aggregationModel[field] ?? AGGREGATION_FUNCTION_NONE}
              field={field}
            />
          )}
          <GridChartsPanelDataFieldMenu
            field={field}
            section={section}
            blockedSections={blockedSections}
            dimensionsLabel={dimensionsLabel}
            valuesLabel={valuesLabel}
          />
        </GridChartsPanelDataFieldActionContainer>
      </GridChartsPanelDataFieldRoot>
    </rootProps.slots.baseTooltip>
  );
}

export { GridChartsPanelDataField };
