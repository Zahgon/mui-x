import { fastArrayCompare } from '@mui/x-internals/fastArrayCompare';
import type {
  GridMultiSelectInternalCache,
  GridMultiSelectOverflowMetrics,
} from './gridMultiSelectInterfaces';

/**
 * Holds the grid-level `+N` overflow chip metrics. Written by the single `GridMultiSelectMeasurer`
 * and read by every multiSelect chip cell via `useSyncExternalStore`.
 */
export class GridMultiSelectCache implements GridMultiSelectInternalCache {
  private overflowMetrics: GridMultiSelectOverflowMetrics | null = null;

  private metricsSubscribers = new Set<(metrics: GridMultiSelectOverflowMetrics | null) => void>();

  private notifyMetrics = (metrics: GridMultiSelectOverflowMetrics | null) => {
      throw new Error("STUB");
  };

  public getOverflowMetrics = () => {
      throw new Error("STUB");
  };

  public setOverflowMetrics = (next: GridMultiSelectOverflowMetrics) => {
      throw new Error("STUB");
  };

  public subscribeOverflowMetrics = (
    callback: (metrics: GridMultiSelectOverflowMetrics | null) => void,
  ) => {
      throw new Error("STUB");
  };

  public teardown = () => {
    this.metricsSubscribers.clear();
    this.overflowMetrics = null;
  };
}
