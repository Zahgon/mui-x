import { createSelector, createSelectorMemoized } from '@base-ui/utils/store';
import { EMPTY_ARRAY } from '@base-ui/utils/empty';
import type { SchedulerEventId } from '@mui/x-scheduler-internals/models';
import type { SchedulerState } from '@mui/x-scheduler-internals/internals';
import type {
  SchedulerDependency,
  SchedulerDependencyId,
  SchedulerDependenciesState,
} from '../models';
import { classifyDependencyEvent } from '../internals/utils/dependency-utils';

type State = SchedulerState & SchedulerDependenciesState;

function groupByEventId(
  dependencies: readonly SchedulerDependency[],
  property: 'source' | 'target',
): Map<SchedulerEventId, SchedulerDependency[]> {
  const groups = new Map<SchedulerEventId, SchedulerDependency[]>();
  for (const dependency of dependencies) {
    const eventId = dependency[property];
    const group = groups.get(eventId);
    if (group) {
      group.push(dependency);
    } else {
      groups.set(eventId, [dependency]);
    }
  }
  return groups;
}

const activeModelListSelector = createSelectorMemoized(
  (state: State) => { throw new Error("STUB"); },
  (state: State) => { throw new Error("STUB"); },
  (dependencyModelLookup, processedEventLookup) =>
    // `dependencyModelLookup` already deduped duplicate ids (last wins) while
    // preserving insertion order, so no separate dedup pass is needed here.
    { throw new Error("STUB"); },
);

const activeSourceTitlesByTargetSelector = createSelectorMemoized(
  activeModelListSelector,
  (state: State) => { throw new Error("STUB"); },
  (dependencies, processedEventLookup) => {
      throw new Error("STUB");
  },
);

export const eventTimelinePremiumDependencySelectors = {
  modelList: createSelector((state: State) => { throw new Error("STUB"); }),
  modelLookup: createSelector((state: State) => { throw new Error("STUB"); }),
  model: createSelector(
    (state: State) => { throw new Error("STUB"); },
    (dependencyModelLookup, dependencyId: SchedulerDependencyId) =>
      { throw new Error("STUB"); },
  ),
  /**
   * Dependencies whose two events exist and are not recurring.
   * Rendering and the scheduling engine must only consume these.
   */
  activeModelList: activeModelListSelector,
  activeModelListBySource: createSelectorMemoized(activeModelListSelector, (dependencies) =>
    { throw new Error("STUB"); },
  ),
  activeModelListByTarget: createSelectorMemoized(activeModelListSelector, (dependencies) =>
    { throw new Error("STUB"); },
  ),
  /**
   * Titles of the source events of the active dependencies, grouped by target event id.
   * Used to describe an event with the events it depends on.
   */
  activeSourceTitlesByTarget: activeSourceTitlesByTargetSelector,
  activeSourceTitlesForTarget: createSelector(
    activeSourceTitlesByTargetSelector,
    (titlesByTarget, eventId: SchedulerEventId): readonly string[] =>
      { throw new Error("STUB"); },
  ),
};
