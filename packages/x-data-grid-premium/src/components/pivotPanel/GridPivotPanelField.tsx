'use client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import {
  getDataGridUtilityClass,
  gridClasses,
  GridMenu,
  useGridSelector,
} from '@mui/x-data-grid-pro';
import type { GridColDef, GridSlotProps, GridSortDirection } from '@mui/x-data-grid-pro';
import composeClasses from '@mui/utils/composeClasses';
import { GridColumnSortButton, NotRendered, vars } from '@mui/x-data-grid-pro/internals';
import useId from '@mui/utils/useId';
import type { DataGridPremiumProcessedProps } from '../../models/dataGridPremiumProps';
import type {
  GridPivotModel,
  DropPosition,
} from '../../hooks/features/pivoting/gridPivotingInterfaces';
import { useGridRootProps } from '../../hooks/utils/useGridRootProps';
import {
  getAggregationFunctionLabel,
  getAvailableAggregationFunctions,
} from '../../hooks/features/aggregation/gridAggregationUtils';
import { GridPivotPanelFieldMenu } from './GridPivotPanelFieldMenu';
import type { FieldTransferObject } from './GridPivotPanelBody';
import { useGridApiContext } from '../../hooks/utils/useGridApiContext';
import { gridPivotInitialColumnsSelector } from '../../hooks/features/pivoting/gridPivotingSelectors';
import { useGridPrivateApiContext } from '../../hooks/utils/useGridPrivateApiContext';

type GridPivotPanelFieldProps = {
  children: React.ReactNode;
  field: FieldTransferObject['field'];
  onDragStart: (modelKey: FieldTransferObject['modelKey']) => void;
  onDragEnd: () => void;
} & (
  | { modelKey: 'columns'; modelValue: GridPivotModel['columns'][number] }
  | { modelKey: 'rows'; modelValue: GridPivotModel['rows'][number] }
  | { modelKey: 'values'; modelValue: GridPivotModel['values'][number] }
  | { modelKey: null }
);

type OwnerState = GridPivotPanelFieldProps &
  Pick<DataGridPremiumProcessedProps, 'classes'> & {
    dropPosition: DropPosition;
    section: FieldTransferObject['modelKey'];
  };

const useUtilityClasses = (ownerState: OwnerState) => {
  const { classes, modelKey } = ownerState;
  const sorted = modelKey === 'columns' && ownerState.modelValue.sort;
  const slots = {
    root: ['pivotPanelField', sorted && 'pivotPanelField--sorted'],
    name: ['pivotPanelFieldName'],
    actionContainer: ['pivotPanelFieldActionContainer'],
    dragIcon: ['pivotPanelFieldDragIcon'],
    checkbox: ['pivotPanelFieldCheckbox'],
  };

  return composeClasses(slots, getDataGridUtilityClass, classes);
};

const GridPivotPanelFieldRoot = styled('div', {
  name: 'MuiDataGrid',
  slot: 'PivotPanelField',
  overridesResolver: (props, styles) => { throw new Error("STUB"); },
})<{ ownerState: OwnerState }>({
  flexShrink: 0,
  position: 'relative',
  padding: vars.spacing(0, 1, 0, 2),
  height: 32,
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing(0.5),
  borderWidth: 0,
  borderTopWidth: 2,
  borderBottomWidth: 2,
  borderStyle: 'solid',
  borderColor: 'transparent',
  margin: '-1px 0', // collapse vertical borders
  cursor: 'grab',
  variants: [
    { props: { dropPosition: 'top' }, style: { borderTopColor: vars.colors.interactive.selected } },
    {
      props: { dropPosition: 'bottom' },
      style: { borderBottomColor: vars.colors.interactive.selected },
    },
    {
      props: { section: null },
      style: { borderTopColor: 'transparent', borderBottomColor: 'transparent' },
    },
  ],
  '&:hover': {
    backgroundColor: vars.colors.interactive.hover,
  },
});

const GridPivotPanelFieldName = styled('span', {
  name: 'MuiDataGrid',
  slot: 'PivotPanelFieldName',
})<{ ownerState: OwnerState }>({
  flex: 1,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

const GridPivotPanelFieldActionContainer = styled('div', {
  name: 'MuiDataGrid',
  slot: 'PivotPanelFieldActionContainer',
})<{ ownerState: OwnerState }>({
  display: 'flex',
  alignItems: 'center',
});

const GridPivotPanelFieldDragIcon = styled('div', {
  name: 'MuiDataGrid',
  slot: 'PivotPanelFieldDragIcon',
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

const GridPivotPanelFieldCheckbox = styled(NotRendered<GridSlotProps['baseCheckbox']>, {
  name: 'MuiDataGrid',
  slot: 'PivotPanelFieldCheckbox',
})<{ ownerState: OwnerState }>({
  flex: 1,
  position: 'relative',
  margin: vars.spacing(0, 0, 0, -1),
  cursor: 'grab',
});

function AggregationSelect({
  aggFunc,
  field,
}: {
  aggFunc: GridPivotModel['values'][number]['aggFunc'];
  field: FieldTransferObject['field'];
}) {
    throw new Error("STUB");
}

function GridPivotPanelField(props: GridPivotPanelFieldProps) {
  const { children, field, onDragStart, onDragEnd } = props;
  const rootProps = useGridRootProps();
  const [dropPosition, setDropPosition] = React.useState<DropPosition>(null);
  const section = props.modelKey;
  const ownerState = { ...props, classes: rootProps.classes, dropPosition, section };
  const classes = useUtilityClasses(ownerState);
  const apiRef = useGridPrivateApiContext();

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
    [getDropPosition],
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

  const handleSort = () => {
      throw new Error("STUB");
  };

  const handleVisibilityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      throw new Error("STUB");
  };

  const hideable = section !== null;

  return (
    <GridPivotPanelFieldRoot
      ownerState={ownerState}
      className={classes.root}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onDragStart={handleDragStart}
      onDragEnd={onDragEnd}
      draggable="true"
    >
      <GridPivotPanelFieldDragIcon ownerState={ownerState} className={classes.dragIcon}>
        <rootProps.slots.columnReorderIcon fontSize="small" />
      </GridPivotPanelFieldDragIcon>

      {hideable ? (
        <GridPivotPanelFieldCheckbox
          ownerState={ownerState}
          className={classes.checkbox}
          as={rootProps.slots.baseCheckbox}
          size="small"
          density="compact"
          {...rootProps.slotProps?.baseCheckbox}
          checked={!props.modelValue.hidden || false}
          onChange={handleVisibilityChange}
          label={children}
        />
      ) : (
        <GridPivotPanelFieldName ownerState={ownerState} className={classes.name}>
          {children}
        </GridPivotPanelFieldName>
      )}

      <GridPivotPanelFieldActionContainer
        ownerState={ownerState}
        className={classes.actionContainer}
      >
        {section === 'columns' && (
          <GridColumnSortButton
            field={field}
            direction={props.modelValue.sort}
            sortingOrder={rootProps.sortingOrder}
            onClick={handleSort}
          />
        )}
        {section === 'values' && (
          <AggregationSelect aggFunc={props.modelValue.aggFunc} field={field} />
        )}
        <GridPivotPanelFieldMenu field={field} modelKey={section} />
      </GridPivotPanelFieldActionContainer>
    </GridPivotPanelFieldRoot>
  );
}

export { GridPivotPanelField };
