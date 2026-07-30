'use client';
import * as React from 'react';
import { useStore } from '@mui/x-internals/store';
import type { EventHandlers } from '@mui/utils/types';
import extractEventHandlers from '@mui/utils/extractEventHandlers';
import { useMergedRefs } from '@base-ui/utils/useMergedRefs';
import type { TreeViewCancellableEvent, TreeViewItemId } from '../models';
import type {
  UseTreeItemParameters,
  UseTreeItemReturnValue,
  UseTreeItemRootSlotProps,
  UseTreeItemContentSlotProps,
  UseTreeItemGroupTransitionSlotProps,
  UseTreeItemLabelSlotProps,
  UseTreeItemIconContainerSlotProps,
  UseTreeItemCheckboxSlotProps,
  UseTreeItemLabelInputSlotProps,
  UseTreeItemDragAndDropOverlaySlotProps,
  UseTreeItemRootSlotPropsFromUseTreeItem,
  UseTreeItemContentSlotPropsFromUseTreeItem,
  UseTreeItemErrorContainerSlotProps,
  UseTreeItemLoadingContainerSlotProps,
} from './useTreeItem.types';
import { useTreeViewContext } from '../internals/TreeViewProvider';
import type {
  TreeViewItemPluginSlotPropsEnhancerParams,
  TreeViewAnyStore,
  TreeViewPublicAPI,
} from '../internals/models';
import { useTreeItemUtils } from '../hooks/useTreeItemUtils';
import { TreeViewItemDepthContext } from '../internals/TreeViewItemDepthContext';
import { isTargetInDescendants } from '../internals/utils/tree';
import { focusSelectors } from '../internals/plugins/focus';
import { itemsSelectors } from '../internals/plugins/items';
import { idSelectors } from '../internals/plugins/id';
import { expansionSelectors } from '../internals/plugins/expansion';
import { selectionSelectors } from '../internals/plugins/selection';
import type { RichTreeViewStore } from '../internals/RichTreeViewStore';
import type { MinimalTreeViewState } from '../internals/MinimalTreeViewStore';

// TODO v8: Remove the lazy loading plugin from the typing on the community useTreeItem and ask users to pass the TStore generic.
interface DefaultStore extends RichTreeViewStore<any, any> {
  buildPublicAPI: () => TreeViewPublicAPI<RichTreeViewStore<any, any>> & {
    /**
     * Method used for updating an item's children.
     * Only relevant for lazy-loaded tree views.
     *
     * @param {TreeViewItemId} itemId The The id of the item to update the children of.
     * @returns {Promise<void>} The promise resolved when the items are fetched.
     */
    updateItemChildren: (itemId: TreeViewItemId) => Promise<void>;
  };
}

const depthSelector = (
  state: MinimalTreeViewState<any, any>,
  itemId: string,
  depthContext: number | ((state: MinimalTreeViewState<any, any>, itemId: string) => number),
) => {
    throw new Error("STUB");
};

export const useTreeItem = <TStore extends TreeViewAnyStore = DefaultStore>(
  parameters: UseTreeItemParameters,
): UseTreeItemReturnValue<TStore> => {
  const { runItemPlugins, publicAPI, store } = useTreeViewContext<TStore>();
  const depthContext = React.useContext(TreeViewItemDepthContext);

  const depth = useStore(store, depthSelector, parameters.itemId, depthContext);

  const { id, itemId, label, children, rootRef } = parameters;

  const { rootRef: pluginRootRef, contentRef, propsEnhancers } = runItemPlugins(parameters);
  const { interactions, status } = useTreeItemUtils({ itemId, children });
  const rootRefObject = React.useRef<HTMLLIElement>(null);
  const contentRefObject = React.useRef<HTMLDivElement>(null);
  const handleRootRef = useMergedRefs(rootRef, pluginRootRef, rootRefObject)!;
  const handleContentRef = useMergedRefs(contentRef, contentRefObject)!;
  const checkboxRef = React.useRef<HTMLButtonElement>(null);

  const isCheckboxSelectionEnabled = useStore(store, selectionSelectors.isCheckboxSelectionEnabled);
  const idAttribute = useStore(store, idSelectors.treeItemIdAttribute, itemId, id);
  const shouldBeAccessibleWithTab = useStore(
    store,
    focusSelectors.isItemTheDefaultFocusableItem,
    itemId,
  );
  const itemHeight = useStore(store, itemsSelectors.itemHeight);

  const sharedPropsEnhancerParams: Omit<
    TreeViewItemPluginSlotPropsEnhancerParams,
    'externalEventHandlers'
  > = { rootRefObject, contentRefObject, interactions };

  const createRootHandleFocus =
    (otherHandlers: EventHandlers) =>
    (event: React.FocusEvent<HTMLElement> & TreeViewCancellableEvent) => {
        throw new Error("STUB");
    };

  const createRootHandleBlur =
    (otherHandlers: EventHandlers) =>
    (event: React.FocusEvent<HTMLElement> & TreeViewCancellableEvent) => {
        throw new Error("STUB");
    };

  const createRootHandleKeyDown =
    (otherHandlers: EventHandlers) =>
    (event: React.KeyboardEvent<HTMLElement> & TreeViewCancellableEvent) => {
        throw new Error("STUB");
    };

  const createLabelHandleDoubleClick =
    (otherHandlers: EventHandlers) => (event: React.MouseEvent & TreeViewCancellableEvent) => {
        throw new Error("STUB");
    };

  const createContentHandleClick =
    (otherHandlers: EventHandlers) => (event: React.MouseEvent & TreeViewCancellableEvent) => {
        throw new Error("STUB");
    };

  const createContentHandleMouseDown =
    (otherHandlers: EventHandlers) => (event: React.MouseEvent & TreeViewCancellableEvent) => {
        throw new Error("STUB");
    };

  const createIconContainerHandleClick =
    (otherHandlers: EventHandlers) => (event: React.MouseEvent & TreeViewCancellableEvent) => {
        throw new Error("STUB");
    };

  const getContextProviderProps = () => ({ itemId, id });

  const getRootProps = <ExternalProps extends Record<string, any> = {}>(
    externalProps: ExternalProps = {} as ExternalProps,
  ): UseTreeItemRootSlotProps<ExternalProps> => {
    const externalEventHandlers = {
      ...extractEventHandlers(parameters),
      ...extractEventHandlers(externalProps),
    };

    const props: UseTreeItemRootSlotPropsFromUseTreeItem = {
      ...externalEventHandlers,
      ref: handleRootRef,
      role: 'treeitem',
      tabIndex: shouldBeAccessibleWithTab ? 0 : -1,
      id: idAttribute,
      'aria-expanded': status.expandable ? status.expanded : undefined,
      'aria-disabled': status.disabled || undefined,
      ...externalProps,
      style: {
        ...(externalProps.style ?? {}),
        '--TreeView-itemDepth': depth,
        ...(itemHeight == null ? {} : { '--TreeView-itemHeight': `${itemHeight}px` }),
      } as React.CSSProperties,
      onFocus: createRootHandleFocus(externalEventHandlers),
      onBlur: createRootHandleBlur(externalEventHandlers),
      onKeyDown: createRootHandleKeyDown(externalEventHandlers),
    };

    const enhancedRootProps =
      propsEnhancers.root?.({ ...sharedPropsEnhancerParams, externalEventHandlers }) ?? {};

    return {
      ...props,
      ...enhancedRootProps,
    } as UseTreeItemRootSlotProps<ExternalProps>;
  };

  const getContentProps = <ExternalProps extends Record<string, any> = {}>(
    externalProps: ExternalProps = {} as ExternalProps,
  ): UseTreeItemContentSlotProps<ExternalProps> => {
    const externalEventHandlers = extractEventHandlers(externalProps);

    const props: UseTreeItemContentSlotPropsFromUseTreeItem = {
      ...externalEventHandlers,
      ...externalProps,
      ref: handleContentRef,
      onClick: createContentHandleClick(externalEventHandlers),
      onMouseDown: createContentHandleMouseDown(externalEventHandlers),
    };

    (['expanded', 'selected', 'focused', 'disabled', 'editing', 'editable'] as const).forEach(
      (key) => {
            throw new Error("STUB");
        },
    );

    const enhancedContentProps =
      propsEnhancers.content?.({ ...sharedPropsEnhancerParams, externalEventHandlers }) ?? {};

    return {
      ...props,
      ...enhancedContentProps,
    } as UseTreeItemContentSlotProps<ExternalProps>;
  };

  const getCheckboxProps = <ExternalProps extends Record<string, any> = {}>(
    externalProps: ExternalProps = {} as ExternalProps,
  ): UseTreeItemCheckboxSlotProps<ExternalProps> => {
    const externalEventHandlers = extractEventHandlers(externalProps);

    const props = {
      ...externalEventHandlers,
      ref: checkboxRef,
      'aria-hidden': true,
      ...externalProps,
    };

    const enhancedCheckboxProps =
      propsEnhancers.checkbox?.({
        ...sharedPropsEnhancerParams,
        externalEventHandlers,
      }) ?? {};

    return {
      ...props,
      ...enhancedCheckboxProps,
    };
  };

  const getLabelProps = <ExternalProps extends Record<string, any> = {}>(
    externalProps: ExternalProps = {} as ExternalProps,
  ): UseTreeItemLabelSlotProps<ExternalProps> => {
    const externalEventHandlers = {
      ...extractEventHandlers(externalProps),
    };

    const props: UseTreeItemLabelSlotProps<ExternalProps> = {
      ...externalEventHandlers,
      children: label,
      ...externalProps,
      onDoubleClick: createLabelHandleDoubleClick(externalEventHandlers),
    };

    const enhancedLabelProps =
      propsEnhancers.label?.({
        ...sharedPropsEnhancerParams,
        externalEventHandlers,
      }) ?? {};

    return {
      ...enhancedLabelProps,
      ...props,
    };
  };

  const getLabelInputProps = <ExternalProps extends Record<string, any> = {}>(
    externalProps: ExternalProps = {} as ExternalProps,
  ): UseTreeItemLabelInputSlotProps<ExternalProps> => {
    const externalEventHandlers = extractEventHandlers(externalProps);

    const enhancedLabelInputProps =
      propsEnhancers.labelInput?.({
        ...sharedPropsEnhancerParams,
        externalEventHandlers,
      }) ?? {};

    return {
      ...externalProps,
      ...enhancedLabelInputProps,
    } as UseTreeItemLabelInputSlotProps<ExternalProps>;
  };

  const getIconContainerProps = <ExternalProps extends Record<string, any> = {}>(
    externalProps: ExternalProps = {} as ExternalProps,
  ): UseTreeItemIconContainerSlotProps<ExternalProps> => {
    const externalEventHandlers = extractEventHandlers(externalProps);

    return {
      ...externalEventHandlers,
      ...externalProps,
      onClick: createIconContainerHandleClick(externalEventHandlers),
    };
  };

  const getErrorContainerProps = <ExternalProps extends Record<string, any> = {}>(
    externalProps: ExternalProps = {} as ExternalProps,
  ): UseTreeItemErrorContainerSlotProps<ExternalProps> => {
      throw new Error("STUB");
  };
  const getLoadingContainerProps = <ExternalProps extends Record<string, any> = {}>(
    externalProps: ExternalProps = {} as ExternalProps,
  ): UseTreeItemLoadingContainerSlotProps<ExternalProps> => {
      throw new Error("STUB");
  };

  const getGroupTransitionProps = <ExternalProps extends Record<string, any> = {}>(
    externalProps: ExternalProps = {} as ExternalProps,
  ): UseTreeItemGroupTransitionSlotProps<ExternalProps> => {
    const externalEventHandlers = extractEventHandlers(externalProps);

    const response: UseTreeItemGroupTransitionSlotProps<ExternalProps> = {
      ...externalEventHandlers,
      unmountOnExit: true,
      component: 'ul',
      role: 'group',
      in: status.expanded,
      children,
      ...externalProps,
    };

    return response;
  };

  const getDragAndDropOverlayProps = <ExternalProps extends Record<string, any> = {}>(
    externalProps: ExternalProps = {} as ExternalProps,
  ): UseTreeItemDragAndDropOverlaySlotProps<ExternalProps> => {
    const externalEventHandlers = extractEventHandlers(externalProps);

    const enhancedDragAndDropOverlayProps =
      propsEnhancers.dragAndDropOverlay?.({
        ...sharedPropsEnhancerParams,
        externalEventHandlers,
      }) ?? {};

    return {
      ...externalProps,
      ...enhancedDragAndDropOverlayProps,
    } as UseTreeItemDragAndDropOverlaySlotProps<ExternalProps>;
  };

  return {
    getContextProviderProps,
    getRootProps,
    getContentProps,
    getGroupTransitionProps,
    getIconContainerProps,
    getCheckboxProps,
    getLabelProps,
    getLabelInputProps,
    getDragAndDropOverlayProps,
    getErrorContainerProps,
    getLoadingContainerProps,
    rootRef: handleRootRef,
    status,
    publicAPI,
  };
};
