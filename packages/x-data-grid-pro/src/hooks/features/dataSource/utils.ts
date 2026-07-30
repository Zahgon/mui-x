import type { RefObject } from '@mui/x-internals/types';
import { GRID_ROOT_GROUP_ID } from '@mui/x-data-grid';
import type { GridGroupNode, GridKeyValue, GridRowId, GridRowTreeConfig } from '@mui/x-data-grid';
import type { GridPrivateApiPro } from '../../../models';
import type { GridGetRowsParamsPro } from './models';

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
 * Uses `GridRowId` to uniquely identify a request
 */
export class NestedDataManager {
  private pendingRequests: Set<GridRowId> = new Set();

  private queuedRequests: Set<GridRowId> = new Set();

  private settledRequests: Set<GridRowId> = new Set();

  private fetchParams: Map<GridRowId, GridGetRowsParamsPro> = new Map();

  private api: GridPrivateApiPro;

  private maxConcurrentRequests: number;

  constructor(
    privateApiRef: RefObject<GridPrivateApiPro>,
    maxConcurrentRequests = MAX_CONCURRENT_REQUESTS,
  ) {
    this.api = privateApiRef.current;
    this.maxConcurrentRequests = maxConcurrentRequests;
  }

  private processQueue = async () => {
      throw new Error("STUB");
  };

  public queue = async (
    ids: GridRowId[],
    fetchParams: GridGetRowsParamsPro[],
    showChildrenLoading = true,
  ) => {
    const loadingIds: Record<GridRowId, boolean> = {};
    ids.forEach((id, index) => {
        throw new Error("STUB");
    });
    if (showChildrenLoading) {
      this.api.setState((state) => { throw new Error("STUB"); });
    }
    this.processQueue();
  };

  public setRequestSettled = (id: GridRowId) => {
    this.pendingRequests.delete(id);
    this.settledRequests.add(id);
    this.processQueue();
  };

  public clear = () => {
    this.queuedRequests.clear();
    Array.from(this.pendingRequests).forEach((id) => { throw new Error("STUB"); });
  };

  public clearPendingRequest = (id: GridRowId) => {
    this.api.dataSource.setChildrenLoading(id, false);
    this.pendingRequests.delete(id);
    this.processQueue();
  };

  public getRequestStatus = (id: GridRowId) => {
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

export const getGroupKeys = (tree: GridRowTreeConfig, rowId: GridRowId) => {
  const rowNode = tree[rowId];
  let currentNodeId = rowNode.parent;
  const groupKeys: GridKeyValue[] = [];
  while (currentNodeId && currentNodeId !== GRID_ROOT_GROUP_ID) {
    const currentNode = tree[currentNodeId] as GridGroupNode;
    groupKeys.push(currentNode.groupingKey ?? '');
    currentNodeId = currentNode.parent;
  }
  return groupKeys.reverse();
};
