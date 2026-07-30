'use client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import { vars } from '@mui/x-data-grid-pro/internals';
import composeClasses from '@mui/utils/composeClasses';
import { getDataGridUtilityClass, gridClasses } from '@mui/x-data-grid-pro';
import clsx from 'clsx';
import { useResize } from '../../hooks/utils/useResize';
import { useResizablePanelContext } from './ResizablePanelContext';
import { useGridRootProps } from '../../hooks/utils/useGridRootProps';
import type { DataGridPremiumProcessedProps } from '../../models/dataGridPremiumProps';

export type ResizablePanelHandleProps = React.HTMLAttributes<HTMLDivElement>;

type OwnerState = { direction: 'horizontal' | 'vertical' } & Pick<
  DataGridPremiumProcessedProps,
  'classes'
>;

const useUtilityClasses = (ownerState: OwnerState) => {
  const { classes, direction } = ownerState;

  const slots = {
    root: ['resizablePanelHandle', `resizablePanelHandle--${direction}`],
  };

  return composeClasses(slots, getDataGridUtilityClass, classes);
};

const ResizablePanelHandleRoot = styled('div', {
  name: 'MuiDataGrid',
  slot: 'ResizablePanelHandle',
  overridesResolver: ({ ownerState }: { ownerState: OwnerState }, styles) => { throw new Error("STUB"); },
})<{ ownerState: OwnerState; direction: 'horizontal' | 'vertical' }>({
  position: 'absolute',
  zIndex: 3,
  top: 0,
  left: 0,
  userSelect: 'none',
  transition: vars.transition(['border-color'], {
    duration: vars.transitions.duration.short,
    easing: vars.transitions.easing.easeInOut,
  }),
  '&:hover': {
    borderWidth: 2,
    borderColor: vars.colors.interactive.selected,
  },
  variants: [
    {
      props: { direction: 'horizontal' },
      style: {
        height: '100%',
        width: 8,
        cursor: 'ew-resize',
        borderLeft: `1px solid ${vars.colors.border.base}`,
        touchAction: 'pan-x',
      },
    },
    {
      props: { direction: 'vertical' },
      style: {
        width: '100%',
        height: 8,
        cursor: 'ns-resize',
        borderTop: `1px solid ${vars.colors.border.base}`,
        touchAction: 'pan-y',
      },
    },
  ],
});

function ResizablePanelHandle(props: ResizablePanelHandleProps) {
  const { className, children, ...other } = props;
  const { rootRef, direction } = useResizablePanelContext();
  const rootProps = useGridRootProps();
  const ownerState = {
    classes: rootProps.classes,
    direction,
  };
  const classes = useUtilityClasses(ownerState);
  const { ref } = useResize({
    direction,
    getInitialSize: () => {
        throw new Error("STUB");
    },
    onSizeChange: (newSize) => {
        throw new Error("STUB");
    },
  });

  return (
    <ResizablePanelHandleRoot
      className={clsx(classes.root, className)}
      ownerState={ownerState}
      direction={direction}
      {...other}
      ref={ref}
    />
  );
}

export { ResizablePanelHandle };
