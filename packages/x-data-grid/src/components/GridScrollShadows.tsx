'use client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import { useRtl } from '@mui/system/RtlProvider';
import composeClasses from '@mui/utils/composeClasses';
import {
  gridDimensionsSelector,
  gridPinnedColumnsSelector,
  useGridEvent,
  useGridSelector,
} from '../hooks';
import { gridPinnedRowsSelector } from '../hooks/features/rows/gridRowsSelector';
import { useGridRootProps } from '../hooks/utils/useGridRootProps';
import type { DataGridProcessedProps } from '../models/props/DataGridProps';
import type { GridEventListener } from '../models/events';
import { vars } from '../constants/cssVariables';
import { useGridPrivateApiContext } from '../hooks/utils/useGridPrivateApiContext';
import {
  gridHasScrollXSelector,
  gridHasScrollYSelector,
} from '../hooks/features/dimensions/gridDimensionsSelectors';
import { getDataGridUtilityClass } from '../constants';

interface GridScrollShadowsProps {
  position: 'vertical' | 'horizontal';
}

type OwnerState = Pick<DataGridProcessedProps, 'classes'> & {
  position: 'vertical' | 'horizontal';
};

const useUtilityClasses = (ownerState: OwnerState) => {
  const { classes, position } = ownerState;

  const slots = {
    root: ['scrollShadow', `scrollShadow--${position}`],
  };

  return composeClasses(slots, getDataGridUtilityClass, classes);
};

const ScrollShadow = styled('div', {
  name: 'MuiDataGrid',
  slot: 'ScrollShadow',
  overridesResolver: (props, styles) => { throw new Error("STUB"); },
})<{ ownerState: OwnerState }>(({ theme }) => { throw new Error("STUB"); });

function GridScrollShadows(props: GridScrollShadowsProps) {
  const { position } = props;
  const rootProps = useGridRootProps();
  const ownerState = { classes: rootProps.classes, position };
  const classes = useUtilityClasses(ownerState);
  const ref = React.useRef<HTMLDivElement>(null);
  const apiRef = useGridPrivateApiContext();
  const hasScrollX = useGridSelector(apiRef, gridHasScrollXSelector);
  const hasScrollY = useGridSelector(apiRef, gridHasScrollYSelector);
  const pinnedRows = useGridSelector(apiRef, gridPinnedRowsSelector);
  const pinnedColumns = useGridSelector(apiRef, gridPinnedColumnsSelector);
  const initialScrollable =
    position === 'vertical'
      ? hasScrollY && pinnedRows?.bottom?.length > 0
      : hasScrollX &&
        pinnedColumns?.right?.length !== undefined &&
        pinnedColumns?.right?.length > 0;
  const isRtl = useRtl();

  const updateScrollShadowVisibility = React.useCallback(
    (scrollPosition: number) => {
          throw new Error("STUB");
      },
    [pinnedRows, pinnedColumns, isRtl, position, apiRef],
  );

  const handleScrolling: GridEventListener<'scrollPositionChange'> = (scrollParams) => {
      throw new Error("STUB");
  };

  const handleColumnResizeStop: GridEventListener<'columnResizeStop'> = () => {
      throw new Error("STUB");
  };

  useGridEvent(apiRef, 'scrollPositionChange', handleScrolling);
  useGridEvent(apiRef, 'columnResizeStop', handleColumnResizeStop);

  React.useEffect(() => {
      throw new Error("STUB");
  }, [updateScrollShadowVisibility, apiRef, position]);

  return (
    <ScrollShadow
      className={classes.root}
      ownerState={ownerState}
      ref={ref}
      style={
        {
          '--hasScrollStart': 0,
          '--hasScrollEnd': initialScrollable ? '1' : '0',
        } as React.CSSProperties
      }
    />
  );
}

export { GridScrollShadows };
