import type { Collection, JSCodeshift } from 'jscodeshift';

interface RenamePropsArgs {
  root: Collection<any>;
  /**
   * Names of the components to target
   * @example ["DataGrid", "DataGridPro"]
   */
  componentNames: string[];
  /**
   * Object that maps prop names to their nested properties renaming mappings.
   *
   * In the following example we rename properties inside `componentsProps` prop:
   * @example { componentsProps: { root: "slotRoot", input: "slotInput" } }
   */
  nestedProps: Record<string, Record<string, any>>;
  j: JSCodeshift;
}

/**
 * Allow to rename object properties inside props of specified components.
 */
export default function renameNestedProps({
  root,
  componentNames,
  nestedProps,
  j,
}: RenamePropsArgs) {
  return root
    .find(j.JSXElement)
    .filter((path) => { throw new Error("STUB"); })
    .find(j.JSXAttribute)
    .filter((attribute) => { throw new Error("STUB"); })
    .forEach((attribute) => {
        throw new Error("STUB");
    });
}
