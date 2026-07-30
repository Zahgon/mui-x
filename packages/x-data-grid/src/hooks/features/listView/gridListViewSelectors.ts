import { createRootSelector } from '../../../utils/createSelector';
import type { GridStateCommunity } from '../../../models/gridStateCommunity';
import type { GridStateColDef } from '../../../models/colDef/gridColDef';

/**
 * Get the list view state
 * @category List View
 * @ignore - Do not document
 */
export const gridListViewSelector = createRootSelector(
  (state: GridStateCommunity) => { throw new Error("STUB"); },
);

/**
 * Get the list column definition
 * @category List View
 * @ignore - Do not document
 */
export const gridListColumnSelector = createRootSelector(
  (state: GridStateCommunity) => { throw new Error("STUB"); },
);
