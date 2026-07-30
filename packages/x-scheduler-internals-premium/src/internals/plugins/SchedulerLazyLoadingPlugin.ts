import { DisposableStack, disposeSymbol } from '@mui/x-internals/disposable';
import type { TemporalSupportedObject } from '@mui/x-scheduler-internals/models';
import type {
  SchedulerState,
  SchedulerParameters,
  SchedulerStore,
  SchedulerEventParameters,
  SchedulerPersistEventsResult,
} from '@mui/x-scheduler-internals/internals';
import { buildEventsState } from '@mui/x-scheduler-internals/internals';
import { SchedulerDataSourceCacheDefault } from '../utils/cache';
import { SchedulerDataManager } from '../utils/queue';

export class SchedulerLazyLoadingPlugin<
  TEvent extends object,
  State extends SchedulerState,
  Parameters extends SchedulerParameters<TEvent, any>,
> {
  protected store: SchedulerStore<TEvent, any, State, Parameters>;

  private dataManager: SchedulerDataManager | null = null;
  private cache: SchedulerDataSourceCacheDefault<TEvent> | null = null;

  private isFetchScheduled = false;
  private pendingIsInstantLoad = false;
  private pendingComputeRange:
    (() => { start: TemporalSupportedObject; end: TemporalSupportedObject }) | null = null;

  /**
   * Range key of the most recently requested fetch. Used to skip stale fetches:
   * if a request resolves while a different range has been requested since, its
   * cache write + state update are dropped so the latest range's data isn't
   * polluted by stale, possibly-deleted events.
   */
  private latestRequestedRangeKey: string | null = null;

  protected readonly disposables = new DisposableStack();

  /**
   * Coalesces multiple calls within the same tick into one microtask. The latest
   * `computeRange` wins; `isInstantLoad=true` is sticky across coalesced calls.
   */
  protected scheduleFetch = (
    computeRange: () => { start: TemporalSupportedObject; end: TemporalSupportedObject },
    isInstantLoad: boolean,
  ) => {
      throw new Error("STUB");
  };

  constructor(store: SchedulerStore<TEvent, any, State, Parameters>) {
      throw new Error("STUB");
  }

  [disposeSymbol](): void {
      throw new Error("STUB");
  }

  public queueDataFetchForRange = async (
    range: {
      start: TemporalSupportedObject;
      end: TemporalSupportedObject;
    },
    immediate = false,
  ) => {
      throw new Error("STUB");
  };

  /**
   * Loads events from the data source.
   */
  private loadEventsFromDataSource = async (range: {
    start: TemporalSupportedObject;
    end: TemporalSupportedObject;
  }) => {
      throw new Error("STUB");
  };

  private handleEventsUpdated = async (
    params: SchedulerEventParameters<TEvent, 'eventsUpdated'>,
  ) => {
      throw new Error("STUB");
  };
}
