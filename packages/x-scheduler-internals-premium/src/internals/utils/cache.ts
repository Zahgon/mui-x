import type { SchedulerEventId } from '@mui/x-scheduler-internals/models';
import { checkSchedulerEventIdIsValid } from '@mui/x-scheduler-internals/internals';

type SchedulerDataSourceCacheConfig<TEvent extends object> = {
  /**
   * Time To Live for each cache entry in milliseconds.
   * After this time the cache entry will become stale and the next query will result in cache miss.
   * @default 300_000 (5 minutes)
   */
  ttl?: number;
  /**
   * Resolves the id of an event. Required for consumers using a custom
   * `eventModelStructure` whose events don't have a literal `id` field.
   * @default (event) => (event as any).id
   */
  getId?: (event: TEvent) => SchedulerEventId;
};

export interface SchedulerDataSourceCache<TEvent extends object> {
  /**
   * Checks if the requested time range is fully covered by cached data.
   */
  hasCoverage: (start: number, end: number) => boolean;
  /**
   * Saves the events and marks the specific range as "loaded".
   */
  setRange: (start: number, end: number, events: TEvent[]) => void;
  /**
   * Updates or adds a single event to the cache.
   */
  upsert: (event: TEvent) => void;
  /**
   * Removes an event from the cache.
   */
  remove: (id: string) => void;
  /**
   * Returns all currently valid (non-expired) events in the cache.
   * We return *all* because we cannot safely filter recurring events
   * by date without complex logic here.
   */
  getAll: () => TEvent[];
  /**
   * Clear the cache.
   */
  clear: () => void;
}

type CachedRange = {
  start: number;
  end: number;
  expiry: number;
};

type CachedEvent<T> = {
  value: T;
  expiry: number;
  /**
   * Key of the range this event was loaded by (`${start}:${end}`), or `null` for
   * events upserted outside of `setRange` (e.g. from `eventsUpdated` mutations).
   * Used by `setRange` to evict events that previously belonged to a fully-replaced
   * range but are missing from the new fetch — i.e. server-side deletes.
   */
  sourceRangeKey: string | null;
};

const getRangeKey = (start: number, end: number) => { throw new Error("STUB"); };

export class SchedulerDataSourceCacheDefault<
  TEvent extends object,
> implements SchedulerDataSourceCache<TEvent> {
  // The Registry of Truth: Which time intervals do we have?
  private loadedRanges: CachedRange[] = [];

  private cache: Record<string, CachedEvent<TEvent>>;

  private ttl: number;

  private getId: (event: TEvent) => SchedulerEventId;

  constructor({ ttl = 300000, getId }: SchedulerDataSourceCacheConfig<TEvent> = {}) {
    this.cache = {};
    this.ttl = ttl;
    this.getId = getId ?? ((event: TEvent) => { throw new Error("STUB"); });
  }

  hasCoverage(start: number, end: number): boolean {
      throw new Error("STUB");
  }

  setRange(start: number, end: number, newEvents: TEvent[]) {
      throw new Error("STUB");
  }

  upsert(event: TEvent, sourceRangeKey: string | null = null) {
      throw new Error("STUB");
  }

  remove(id: string) {
    delete this.cache[id];
  }

  getAll(): TEvent[] {
    const now = Date.now();
    const result: TEvent[] = [];

    for (const id of Object.keys(this.cache)) {
      const entry = this.cache[id];
      // Only return data that hasn't expired.
      if (entry.expiry > now) {
        result.push(entry.value);
      } else {
        delete this.cache[id];
      }
    }

    return result;
  }

  clear() {
    this.loadedRanges = [];
    this.cache = {};
  }
}
