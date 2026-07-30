import { DisposableStack, disposeSymbol } from '@mui/x-internals/disposable';
import { generateId } from '@base-ui/utils/generateId';
import { warnOnce } from '@mui/x-internals/warning';
import type {
  SchedulerSchedulingPluginInterface,
  SchedulerState,
  SchedulerParameters,
  UpdateEventsParameters,
  SchedulerStore,
} from '@mui/x-scheduler-internals/internals';
import { createChangeEventDetails } from '@mui/x-scheduler-internals/base-ui-copy';
import type {
  SchedulerAddDependencyResult,
  SchedulerDependency,
  SchedulerDependencyCreationProperties,
  SchedulerDependencyId,
  SchedulerDependenciesParameters,
  SchedulerDependenciesState,
} from '../../models';
import { classifyDependencyEvent } from '../utils/dependency-utils';

/**
 * Plugin that provides event-scheduling support (dependencies).
 * Composed by the timeline premium store and injected into `SchedulerStore` through
 * `SchedulerSchedulingPluginInterface`.
 */
export class SchedulerSchedulingPlugin<
  TEvent extends object,
  State extends SchedulerState & SchedulerDependenciesState,
  Parameters extends SchedulerParameters<TEvent, any> & SchedulerDependenciesParameters,
> implements SchedulerSchedulingPluginInterface {
  protected store: SchedulerStore<TEvent, any, State, Parameters>;

  protected readonly disposables = new DisposableStack();

  public constructor(store: SchedulerStore<TEvent, any, State, Parameters>) {
      throw new Error("STUB");
  }

  [disposeSymbol]() {
      throw new Error("STUB");
  }

  private updateDependencies(newDependencies: SchedulerDependency[]) {
      throw new Error("STUB");
  }

  /**
   * Emits `onDependenciesChange` with `remaining` only if it actually dropped entries from
   * `current`, so unaffected updates don't trigger a no-op emission.
   */
  private updateDependenciesIfChanged(
    current: readonly SchedulerDependency[],
    remaining: SchedulerDependency[],
  ) {
      throw new Error("STUB");
  }

  /**
   * Removes the dependencies referencing deleted events, in the same update.
   *
   * With a `dataSource`, event deletions are persisted asynchronously after this hook has
   * already emitted `onDependenciesChange`. If that persistence fails, the event survives but
   * its dependencies were already removed — a known v1 limitation, there is no rollback.
   */
  public handleEventsUpdate = (parameters: UpdateEventsParameters) => {
      throw new Error("STUB");
  };

  /**
   * Adds a dependency between two events.
   * Rejects dependencies referencing an unknown or recurring event, or duplicating an
   * existing dependency.
   * Implementation of the store's `addDependency()` — call it through the store.
   */
  public addDependency = (
    properties: SchedulerDependencyCreationProperties,
  ): SchedulerAddDependencyResult => {
      throw new Error("STUB");
  };

  /**
   * Deletes a dependency.
   * Implementation of the store's `deleteDependency()` — call it through the store.
   */
  public deleteDependency = (dependencyId: SchedulerDependencyId) => {
      throw new Error("STUB");
  };

  private warnOnInvalidDependencies() {
      throw new Error("STUB");
  }
}
