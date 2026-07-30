import { createSelector, createRootSelector } from '@mui/x-data-grid-pro/internals';
import type { GridAggregationPosition } from '@mui/x-data-grid-pro/internals';
import { gridRowTreeSelector } from '@mui/x-data-grid-pro';
import type { GridRowId } from '@mui/x-data-grid-pro';
import type { GridStatePremium } from '../../../models/gridStatePremium';

export const gridAggregationStateSelector = createRootSelector(
  (state: GridStatePremium) => { throw new Error("STUB"); },
);

/**
 * Get the aggregation model, containing the aggregation function of each column.
 * If a column is not in the model, it is not aggregated.
 * @category Aggregation
 */
export const gridAggregationModelSelector = createSelector(
  gridAggregationStateSelector,
  (aggregationState) => { throw new Error("STUB"); },
);

/**
 * Get the aggregation results as a lookup.
 * @category Aggregation
 */
export const gridAggregationLookupSelector = createSelector(
  gridAggregationStateSelector,
  (aggregationState) => { throw new Error("STUB"); },
);

export const gridCellAggregationResultSelector = createSelector(
  gridRowTreeSelector,
  gridAggregationLookupSelector,
  (rowTree, aggregationLookup, { id, field }: { id: GridRowId; field: string | undefined }) => {
      throw new Error("STUB");
  },
);
