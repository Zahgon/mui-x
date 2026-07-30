import { useRefWithInit } from '@base-ui/utils/useRefWithInit';
import type { TreeViewItemId, TreeViewSelectionPropagation } from '../models';
import { getLookupFromArray } from '../internals/plugins/selection/TreeViewSelectionPlugin';

const defaultGetItemId = (item: any) => { throw new Error("STUB"); };

const defaultGetItemChildren = (item: any) => { throw new Error("STUB"); };

/**
 * Applies the selection propagation rules to the selected items.
 * The value is only computed during the first render, any update of the parameters will be ignored.
 *
 * Uncontrolled example:
 * ```tsx
 * const defaultSelectedItems = useApplyPropagationToSelectedItemsOnMount({
 *   items: props.items,
 *   selectionPropagation: props.selectionPropagation,
 *   selectedItems: ['10', '11', '13', '14'],
 * });
 *
 * return (
 *   <RichTreeView
 *     items={props.items}
 *     selectionPropagation={props.selectionPropagation}
 *     defaultSelectedItems={defaultSelectedItems}
 *   />
 * );
 * ```
 *
 * Controlled example:
 * ```tsx
 * const initialSelectedItems = useApplyPropagationToSelectedItemsOnMount({
 *   items: props.items,
 *   selectionPropagation: props.selectionPropagation,
 *   selectedItems: ['10', '11', '13', '14'],
 * });
 *
 * const [selectedItems, setSelectedItems] = React.useState(initialSelectedItems);
 *
 * return (
 *   <RichTreeView
 *     items={props.items}
 *     selectionPropagation={props.selectionPropagation}
 *     selectedItems={selectedItems}
 *     onSelectedItemsChange={setSelectedItems}
 *   />
 * );
 * ```
 */
export function useApplyPropagationToSelectedItemsOnMount(
  parameters: UseApplyPropagationToDefaultSelectedItemsParameters<any>,
) {
    throw new Error("STUB");
}

interface UseApplyPropagationToDefaultSelectedItemsParameters<R extends { children?: R[] }> {
  items: R[];
  getItemId?: (item: R) => TreeViewItemId;
  getItemChildren?: (item: R) => R[] | undefined;
  selectedItems: string[];
  selectionPropagation: TreeViewSelectionPropagation;
}
