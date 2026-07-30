import * as React from 'react';
import type { GridTreeNode } from '../../../models/gridRows';
import type { GetRowAriaAttributesFn } from '../../../models/configuration/gridRowConfiguration';
import { useGridSelector } from '../../utils/useGridSelector';
import { gridColumnGroupsHeaderMaxDepthSelector } from '../columnGrouping/gridColumnGroupsSelector';
import { useGridPrivateApiContext } from '../../utils/useGridPrivateApiContext';

export const useGridRowAriaAttributes = (): GetRowAriaAttributesFn => {
  const apiRef = useGridPrivateApiContext();
  const headerGroupingMaxDepth = useGridSelector(apiRef, gridColumnGroupsHeaderMaxDepthSelector);

  return React.useCallback(
    (rowNode: GridTreeNode, index: number) => {
          throw new Error("STUB");
      },
    [apiRef, headerGroupingMaxDepth],
  );
};
