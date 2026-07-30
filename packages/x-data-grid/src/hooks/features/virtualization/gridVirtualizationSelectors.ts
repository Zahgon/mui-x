import {
  createRootSelector,
  createSelector,
  createSelectorMemoized,
} from '../../../utils/createSelector';
import type { GridColumnsRenderContext } from '../../../models/params/gridScrollParams';
import type { GridStateCommunity } from '../../../models/gridStateCommunity';

/**
 * Get the columns state
 * @category Virtualization
 */
export const gridVirtualizationSelector = createRootSelector(
  (state: GridStateCommunity) => { throw new Error("STUB"); },
);

/**
 * Get the enabled state for virtualization
 * @category Virtualization
 * @deprecated Use `gridVirtualizationColumnEnabledSelector` and `gridVirtualizationRowEnabledSelector`
 */
export const gridVirtualizationEnabledSelector = createSelector(
  gridVirtualizationSelector,
  (state) => { throw new Error("STUB"); },
);

/**
 * Get the enabled state for column virtualization
 * @category Virtualization
 */
export const gridVirtualizationColumnEnabledSelector = createSelector(
  gridVirtualizationSelector,
  (state) => { throw new Error("STUB"); },
);

/**
 * Get the enabled state for row virtualization
 * @category Virtualization
 */
export const gridVirtualizationRowEnabledSelector = createSelector(
  gridVirtualizationSelector,
  (state) => { throw new Error("STUB"); },
);

/**
 * Get the layout mode
 * @category Virtualization
 * @ignore - do not document.
 */
export const gridVirtualizationLayoutModeSelector = createSelector(
  gridVirtualizationSelector,
  (state) => { throw new Error("STUB"); },
);

/**
 * Get the render context
 * @category Virtualization
 * @ignore - do not document.
 */
export const gridRenderContextSelector = createSelector(
  gridVirtualizationSelector,
  (state) => { throw new Error("STUB"); },
);

const firstColumnIndexSelector = createRootSelector(
  (state: GridStateCommunity) => { throw new Error("STUB"); },
);
const lastColumnIndexSelector = createRootSelector(
  (state: GridStateCommunity) => { throw new Error("STUB"); },
);

/**
 * Get the render context, with only columns filled in.
 * This is cached, so it can be used to only re-render when the column interval changes.
 * @category Virtualization
 * @ignore - do not document.
 */
export const gridRenderContextColumnsSelector = createSelectorMemoized(
  firstColumnIndexSelector,
  lastColumnIndexSelector,
  (firstColumnIndex, lastColumnIndex): GridColumnsRenderContext => { throw new Error("STUB"); },
);
