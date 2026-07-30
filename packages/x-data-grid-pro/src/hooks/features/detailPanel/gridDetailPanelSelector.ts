import {
  createSelector,
  createRootSelector,
  createSelectorMemoized,
} from '@mui/x-data-grid/internals';
import type { GridStatePro } from '../../../models/gridStatePro';

export const gridDetailPanelStateSelector = createRootSelector(
  (state: GridStatePro) => { throw new Error("STUB"); },
);

export const gridDetailPanelExpandedRowIdsSelector = createSelector(
  gridDetailPanelStateSelector,
  (detailPanelState) => { throw new Error("STUB"); },
);

export const gridDetailPanelExpandedRowsContentCacheSelector = createSelector(
  gridDetailPanelStateSelector,
  (detailPanelState) => { throw new Error("STUB"); },
);

export const gridDetailPanelRawHeightCacheSelector = createSelectorMemoized(
  gridDetailPanelStateSelector,
  (detailPanelState) => { throw new Error("STUB"); },
);
