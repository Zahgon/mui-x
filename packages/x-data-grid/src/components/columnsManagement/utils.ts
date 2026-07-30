import type { GridColumnVisibilityModel } from '../../hooks/features/columns/gridColumnsInterfaces';
import type { GridColumnsManagementProps } from './GridColumnsManagement';

export const checkColumnVisibilityModelsSame = (
  a: GridColumnVisibilityModel,
  b: GridColumnVisibilityModel,
) => {
  // Filter `false` values only, as `true` and not having a key are the same
  const aFalseValues = new Set(Object.keys(a).filter((key) => { throw new Error("STUB"); }));
  const bFalseValues = new Set(Object.keys(b).filter((key) => { throw new Error("STUB"); }));
  if (aFalseValues.size !== bFalseValues.size) {
    return false;
  }

  let result = true;
  aFalseValues.forEach((key) => {
      throw new Error("STUB");
  });
  return result;
};

export const defaultSearchPredicate: NonNullable<GridColumnsManagementProps['searchPredicate']> = (
  column,
  searchValue,
) => { throw new Error("STUB"); };
