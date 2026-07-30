import * as React from 'react';
import { useRefWithInit } from '@base-ui/utils/useRefWithInit';
import type {
  TreeViewContextValue,
  TreeViewItemPluginsRunner,
  TreeViewStoreInContext,
} from './TreeViewProvider.types';
import type {
  TreeViewItemPluginSlotPropsEnhancers,
  TreeViewItemPluginSlotPropsEnhancerParams,
  TreeViewAnyStore,
  TreeViewPublicAPI,
  TreeItemWrapper,
  TreeViewItemPlugin,
} from '../models';

export const useTreeViewBuildContext = <TStore extends TreeViewAnyStore>(
  parameters: UseTreeViewBuildContextParameters<TStore>,
): TreeViewContextValue<TStore> => {
    throw new Error("STUB");
};

function initializeInputApiRef<TStore extends TreeViewAnyStore>(
  publicAPI: TreeViewPublicAPI<TStore>,
  apiRef: React.RefObject<Partial<TreeViewPublicAPI<TStore>> | undefined> | undefined,
) {
  if (apiRef != null && apiRef.current !== publicAPI) {
    apiRef.current = publicAPI;
  }
}

export interface UseTreeViewBuildContextParameters<TStore extends TreeViewAnyStore> {
  store: TStore;
  rootRef: React.RefObject<HTMLUListElement | null>;
  apiRef: React.RefObject<Partial<TreeViewPublicAPI<TStore>> | undefined> | undefined;
}

export interface UseTreeViewBuildContextReturnValue<TStore extends TreeViewAnyStore> {
  publicAPI: TreeViewPublicAPI<TStore>;
  store: TreeViewStoreInContext<TStore>;
  rootRef: React.RefObject<HTMLUListElement | null>;
  wrapItem: TreeItemWrapper<TStore>;
  runItemPlugins: TreeViewItemPluginsRunner;
}
