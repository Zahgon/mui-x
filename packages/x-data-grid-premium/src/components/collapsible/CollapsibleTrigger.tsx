import * as React from 'react';
import { styled } from '@mui/material/styles';
import { vars } from '@mui/x-data-grid-pro/internals';
import composeClasses from '@mui/utils/composeClasses';
import { getDataGridUtilityClass } from '@mui/x-data-grid-pro';
import clsx from 'clsx';
import { useGridRootProps } from '../../hooks/utils/useGridRootProps';
import type { DataGridPremiumProcessedProps } from '../../models/dataGridPremiumProps';
import { useCollapsibleContext } from './CollapsibleContext';

export type CollapsibleTriggerProps = React.HTMLAttributes<HTMLButtonElement>;

type OwnerState = Pick<DataGridPremiumProcessedProps, 'classes'> & { open: boolean };

const useUtilityClasses = (ownerState: OwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['collapsibleTrigger'],
    icon: ['collapsibleIcon'],
  };

  return composeClasses(slots, getDataGridUtilityClass, classes);
};

const CollapsibleTriggerRoot = styled('button', {
  name: 'MuiDataGrid',
  slot: 'CollapsibleTrigger',
})<{ ownerState: OwnerState }>(({ ownerState }) => { throw new Error("STUB"); });

const CollapsibleIcon = styled('div', {
  name: 'MuiDataGrid',
  slot: 'CollapsibleIcon',
})<{ ownerState: OwnerState }>(({ ownerState }) => { throw new Error("STUB"); });

function CollapsibleTrigger(props: CollapsibleTriggerProps) {
  const { children, className, ...other } = props;
  const rootProps = useGridRootProps();
  const { open, onOpenChange, panelId } = useCollapsibleContext();
  const ownerState = { classes: rootProps.classes, open };
  const classes = useUtilityClasses(ownerState);

  return (
    <CollapsibleTriggerRoot
      ownerState={ownerState}
      className={clsx(classes.root, className)}
      tabIndex={0}
      aria-controls={open ? panelId : undefined}
      aria-expanded={!open}
      onClick={() => { throw new Error("STUB"); }}
      {...other}
    >
      {children}
      <CollapsibleIcon ownerState={ownerState} className={classes.icon}>
        <rootProps.slots.collapsibleIcon />
      </CollapsibleIcon>
    </CollapsibleTriggerRoot>
  );
}

export { CollapsibleTrigger };
