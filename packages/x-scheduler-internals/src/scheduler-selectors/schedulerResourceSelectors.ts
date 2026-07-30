import { createSelector, createSelectorMemoized } from '@base-ui/utils/store';
import { EMPTY_ARRAY } from '@base-ui/utils/empty';
import type { SchedulerState as State } from '../internals/utils/SchedulerStore/SchedulerStore.types';
import type { SchedulerResource, SchedulerResourceId } from '../models';

const resourceParentIdLookupSelector = createSelectorMemoized(
  (state: State) => { throw new Error("STUB"); },
  (resourceChildrenIdLookup) => {
      throw new Error("STUB");
  },
);

/**
 * Walks the resource hierarchy (child → parent → …) and returns the first
 * defined value found by `getValue`, or `fallback` if none is found.
 */
export function resolveResourceProperty<T>(
  state: State,
  resourceId: string | null | undefined,
  getValue: (resource: SchedulerResource) => T | undefined,
  fallback: T,
): T {
  const parentLookup = resourceParentIdLookupSelector(state);
  let currentId = resourceId ?? null;
  while (currentId != null) {
    const resource = state.processedResourceLookup.get(currentId);
    if (resource != null) {
      const value = getValue(resource);
      if (value !== undefined) {
        return value;
      }
    }
    currentId = parentLookup.get(currentId) ?? null;
  }
  return fallback;
}

const resourceDepthLookupSelector = createSelectorMemoized(
  resourceParentIdLookupSelector,
  (state: State) => { throw new Error("STUB"); },
  (parentLookup, processedResourceLookup) => {
      throw new Error("STUB");
  },
);

// Memoized so the O(children) scan runs only when the structure or visibility
// changes, not on every store notification. Read per resource in O(1) below.
const resourceHasVisibleChildrenLookupSelector = createSelectorMemoized(
  (state: State) => { throw new Error("STUB"); },
  (state: State) => { throw new Error("STUB"); },
  (childrenIdLookup, visibleResources) => {
      throw new Error("STUB");
  },
);

export const schedulerResourceSelectors = {
  processedResource: createSelector(
    (state: State) => { throw new Error("STUB"); },
    (processedResourceLookup, resourceId: string | null | undefined) =>
      { throw new Error("STUB"); },
  ),
  processedResourceList: createSelectorMemoized(
    (state: State) => { throw new Error("STUB"); },
    (state: State) => { throw new Error("STUB"); },
    (resourceIds, processedResourceLookup) =>
      { throw new Error("STUB"); },
  ),
  processedResourceFlatList: createSelectorMemoized(
    (state: State) => { throw new Error("STUB"); },
    (state: State) => { throw new Error("STUB"); },
    (state: State) => { throw new Error("STUB"); },
    (resourceIds, processedResourceLookup, resourceChildrenIdLookup) => {
        throw new Error("STUB");
    },
  ),
  processedResourceChildrenLookup: createSelectorMemoized(
    (state: State) => { throw new Error("STUB"); },
    (state: State) => { throw new Error("STUB"); },
    (processedResourceLookup, resourceChildrenIdLookup) => {
        throw new Error("STUB");
    },
  ),
  childrenIdLookup: (state: State) => { throw new Error("STUB"); },
  // Single-function createSelector is unmemoized; keep the body returning a
  // stable ref (a Map value or EMPTY_ARRAY), never a freshly-built array.
  resourceChildrenIds: createSelector(
    (state: State, resourceId: SchedulerResourceId) =>
      { throw new Error("STUB"); },
  ),
  // O(1) read from the memoized lookup; a resource with no entry (a leaf) has no
  // visible children.
  resourceHasVisibleChildren: createSelector(
    resourceHasVisibleChildrenLookupSelector,
    (lookup, resourceId: SchedulerResourceId) => { throw new Error("STUB"); },
  ),
  hasNestedResources: createSelector(
    resourceParentIdLookupSelector,
    (parentLookup) => { throw new Error("STUB"); },
  ),
  // Unmemoized (returns a primitive); don't change the body to build an object.
  isResourceCollapsed: createSelector(
    (state: State, resourceId: SchedulerResourceId) =>
      { throw new Error("STUB"); },
  ),
  collapsedResources: (state: State) => { throw new Error("STUB"); },
  resourceParentIdLookup: resourceParentIdLookupSelector,
  resourceDepthLookup: resourceDepthLookupSelector,
  resourceDepth: createSelector(
    resourceDepthLookupSelector,
    (resourceDepthLookup, resourceId: SchedulerResourceId) =>
      { throw new Error("STUB"); },
  ),
  idList: createSelector((state: State) => { throw new Error("STUB"); }),
  visibleMap: createSelectorMemoized(
    (state: State) => { throw new Error("STUB"); },
    resourceParentIdLookupSelector,
    (state: State) => { throw new Error("STUB"); },
    (visibleResources, parentLookup, processedResourceLookup) => {
        throw new Error("STUB");
    },
  ),
  /**
   * Gets the default event color used when no color is specified on the event.
   * Walks the resource hierarchy (child → parent → …) until a color is found,
   * falling back to the component-level default.
   */
  defaultEventColor: createSelector(
    (state: State, resourceId: SchedulerResourceId | null | undefined) => {
          throw new Error("STUB");
      },
  ),
};
