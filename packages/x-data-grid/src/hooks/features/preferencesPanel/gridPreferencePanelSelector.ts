import { createSelector, createRootSelector } from '../../../utils/createSelector';
import type { GridStateCommunity } from '../../../models/gridStateCommunity';

export const gridPreferencePanelStateSelector = createRootSelector(
  (state: GridStateCommunity) => { throw new Error("STUB"); },
);

export const gridPreferencePanelSelectorWithLabel = createSelector(
  gridPreferencePanelStateSelector,
  (panel, labelId: string | undefined) => {
      throw new Error("STUB");
  },
);
