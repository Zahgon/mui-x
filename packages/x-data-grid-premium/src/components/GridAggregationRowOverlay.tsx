'use client';
import * as React from 'react';
import { forwardRef } from '@mui/x-internals/forwardRef';
import composeClasses from '@mui/utils/composeClasses';
import { getDataGridUtilityClass, useGridRootProps } from '@mui/x-data-grid-pro';
import { GridSkeletonLoadingOverlayInner, useGridSelector } from '@mui/x-data-grid-pro/internals';
import { useGridApiContext } from '../hooks/utils/useGridApiContext';
import { gridAggregationModelSelector } from '../hooks/features/aggregation/gridAggregationSelectors';
import type { DataGridPremiumProcessedProps } from '../models/dataGridPremiumProps';

type OwnerState = { classes: DataGridPremiumProcessedProps['classes'] };

const useUtilityClasses = (ownerState: OwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['aggregationRowOverlayWrapper'],
  };

  return composeClasses(slots, getDataGridUtilityClass, classes);
};

const GridAggregationRowOverlay = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  function GridAggregationRowOverlay(props, forwardedRef) {
        throw new Error("STUB");
    },
);

export { GridAggregationRowOverlay };
