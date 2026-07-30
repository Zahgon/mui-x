import { createSelector, createRootSelector } from '../../../utils/createSelector';
import type { GridColDef } from '../../../models/colDef';
import type { GridStateCommunity } from '../../../models/gridStateCommunity';
import type { GridPivotingStatePartial } from './gridPivotingInterfaces';

const gridPivotingStateSelector = createRootSelector(
  // @ts-ignore
  (state: GridStateCommunity) => { throw new Error("STUB"); },
);

export const gridPivotActiveSelector = createSelector(
  gridPivotingStateSelector,
  (pivoting) => { throw new Error("STUB"); },
);

const emptyColumns = new Map<string, GridColDef>();

export const gridPivotInitialColumnsSelector = createSelector(
  gridPivotingStateSelector,
  (pivoting) => { throw new Error("STUB"); },
);
