import type { Collection, JSCodeshift, JSXAttribute } from 'jscodeshift';

interface RemovePropsArgs {
  root: Collection<any>;
  /**
   * Names of the components to target
   * @example ["DataGrid", "DataGridPro"]
   */
  componentNames: string[];
  /**
   * The list of props to remove
   * @example ["disableSelectionOnClick", "hideFooterSelectedRowCount"]
   */
  props: string[];
  /**
   * Optional predicate to filter which props to remove based on their value.
   * Return `true` to remove the prop, `false` to keep it.
   * @param {JSXAttribute} attribute The JSXAttribute node to evaluate.
   * @returns {boolean} Whether to remove the prop or not.
   */
  shouldRemove?: (attribute: JSXAttribute) => boolean;
  j: JSCodeshift;
}

/**
 * Removes specified props from given components.
 */
export default function removeProps({
  root,
  componentNames,
  props,
  shouldRemove,
  j,
}: RemovePropsArgs) {
  return root
    .find(j.JSXElement)
    .filter((path) => {
        throw new Error("STUB");
    })
    .find(j.JSXAttribute)
    .filter((attribute) => { throw new Error("STUB"); })
    .forEach((attribute) => {
        throw new Error("STUB");
    });
}
