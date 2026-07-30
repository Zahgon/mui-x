import type { Collection, JSCodeshift } from 'jscodeshift';

interface RenamePropsArgs {
  root: Collection<any>;
  /**
   * Names of the components to target
   * @example ["DataGrid", "DataGridPro"]
   */
  componentNames: string[];
  /**
   * Props renaming mapping
   * @example { disableSelectionOnClick: "disableRowSelectionOnClick" }
   */
  props: Record<string, any>;
  j: JSCodeshift;
}

export default function renameProps({ root, componentNames, props, j }: RenamePropsArgs) {
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
