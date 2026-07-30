import { createSelector, createSelectorMemoized } from '../../../utils/createSelector';
import { gridVisibleColumnDefinitionsSelector } from '../columns/gridColumnsSelector';
import { gridRenderContextSelector } from './gridVirtualizationSelectors';
import { gridFocusCellSelector } from '../focus';
import { gridVisibleRowsSelector } from '../pagination';

const gridIsFocusedCellOutOfContext = createSelector(
  gridFocusCellSelector,
  gridRenderContextSelector,
  gridVisibleRowsSelector,
  gridVisibleColumnDefinitionsSelector,
  (focusedCell, renderContext, currentPage, visibleColumns) => {
      throw new Error("STUB");
  },
);

export const gridFocusedVirtualCellSelector = createSelectorMemoized(
  gridIsFocusedCellOutOfContext,
  gridVisibleColumnDefinitionsSelector,
  gridVisibleRowsSelector,
  gridFocusCellSelector,
  (isFocusedCellOutOfRenderContext, visibleColumns, currentPage, focusedCell) => {
      throw new Error("STUB");
  },
);
