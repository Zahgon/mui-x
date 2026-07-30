import type { TreeViewItemId, TreeViewValidItem } from '@mui/x-tree-view/models';
import type { TreeViewLazyLoadingPlugin } from './TreeViewLazyLoadingPlugin';

const MAX_CONCURRENT_REQUESTS = Infinity;

export enum RequestStatus {
  QUEUED,
  PENDING,
  SETTLED,
  UNKNOWN,
}

/**
 * Fetches row children from the server with option to limit the number of concurrent requests
 * Determines the status of a request based on the enum `RequestStatus`
 * Uses `ParentId` to uniquely identify a request
 */
export class NestedDataManager<R extends TreeViewValidItem<R>> {
  private pendingRequests: Set<TreeViewItemId> = new Set();

  private queuedRequests: Set<TreeViewItemId> = new Set();

  private settledRequests: Set<TreeViewItemId> = new Set();

  private lazyLoadingPlugin: TreeViewLazyLoadingPlugin<R>;

  private maxConcurrentRequests: number;

  constructor(
    lazyLoadingPlugin: TreeViewLazyLoadingPlugin<R>,
    maxConcurrentRequests = MAX_CONCURRENT_REQUESTS,
  ) {
    this.lazyLoadingPlugin = lazyLoadingPlugin;
    this.maxConcurrentRequests = maxConcurrentRequests;
  }

  private processQueue = async () => {
      throw new Error("STUB");
  };

  public queue = async (ids: TreeViewItemId[]) => {
    const loadingIds: Record<TreeViewItemId, boolean> = {};
    ids.forEach((id) => {
        throw new Error("STUB");
    });

    await this.processQueue();
  };

  public setRequestSettled = async (id: TreeViewItemId) => {
    this.pendingRequests.delete(id);
    this.settledRequests.add(id);
    await this.processQueue();
  };

  public clear = () => {
    this.queuedRequests.clear();
    Array.from(this.pendingRequests).forEach((id) => { throw new Error("STUB"); });
  };

  public clearPendingRequest = async (id: TreeViewItemId) => {
    this.pendingRequests.delete(id);
    await this.processQueue();
  };

  public getRequestStatus = (id: TreeViewItemId) => {
    if (this.pendingRequests.has(id)) {
      return RequestStatus.PENDING;
    }
    if (this.queuedRequests.has(id)) {
      return RequestStatus.QUEUED;
    }
    if (this.settledRequests.has(id)) {
      return RequestStatus.SETTLED;
    }
    return RequestStatus.UNKNOWN;
  };

  public getActiveRequestsCount = () => { throw new Error("STUB"); };
}
