import type { Collection, JSCodeshift, JSXAttribute, Identifier } from 'jscodeshift';

const getAttributeName = (attribute: JSXAttribute): string =>
  attribute.name.type === 'JSXIdentifier' ? attribute.name.name : attribute.name.name.name;

interface RemoveObjectPropertyArgs {
  root: Collection<any>;
  /**
   * Names of the components to target
   * @example ["DataGrid", "DataGridPro"]
   */
  componentsNames: string[];
  /**
   * Prop which contains the object whose property will be removed
   * @example "experimentalFeatures"
   */
  propName: string;
  /**
   * `key` of the property that needs to be removed
   * To remove `newEditingApi` from:
   * <DataGrid experimentalFeatures={{ newEditingApi: true }} />
   * pass "newEditingApi"
   */
  propKey: string;
  j: JSCodeshift;
}

/**
 * Removes a property from an object prop in specified components.
 * If the object only contains that property, the whole prop is removed.
 */
export default function removeObjectProperty({
  root,
  propName,
  componentsNames,
  propKey,
  j,
}: RemoveObjectPropertyArgs) {
  root
    .find(j.JSXElement)
    .filter((path) => {
        throw new Error("STUB");
    })
    .forEach((element) => {
        throw new Error("STUB");
    });
}
