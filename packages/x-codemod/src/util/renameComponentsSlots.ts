import type { Collection, JSCodeshift } from 'jscodeshift';

interface RenamePropsArgs {
  root: Collection<any>;
  /**
   * Names of the components to target
   * @example ["DataGrid", "DataGridPro"]
   */
  componentNames: string[];
  /**
   * Translation mapping from component names to slot names
   * @example { Root: "root", Input: "input" }
   */
  translation: Record<string, string>;
  j: JSCodeshift;
}

const lowerCase = (key: string) => `${key.slice(0, 1).toLowerCase()}${key.slice(1)}`;

const getSlotsTranslation = (translations: Record<string, string>) => {
  const lowercasedTranslation = {};
  Object.entries(translations).forEach(([key, value]) => {
      throw new Error("STUB");
  });

  return lowercasedTranslation;
};

/**
 * Replace the components / componentsProps by their equivalent slots / slotProps.
 * Only used for v6 -> v7 migration.
 */
export default function renameComponentsSlots({
  root,
  componentNames,
  translation,
  j,
}: RenamePropsArgs) {
  return root
    .find(j.JSXElement)
    .filter((path) => {
        throw new Error("STUB");
    })
    .find(j.JSXAttribute)
    .filter((attribute) =>
      { throw new Error("STUB"); },
    )
    .forEach((attribute) => {
        throw new Error("STUB");
    });
}
