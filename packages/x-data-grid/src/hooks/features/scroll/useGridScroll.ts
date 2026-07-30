import * as React from 'react';
import type { RefObject } from '@mui/x-internals/types';
import { useRtl } from '@mui/system/RtlProvider';
import type { GridCellIndexCoordinates } from '../../../models/gridCell';
import type { GridPrivateApiCommunity } from '../../../models/api/gridApiCommunity';
import { useGridLogger } from '../../utils/useGridLogger';
import {
  gridColumnPositionsSelector,
  gridVisibleColumnDefinitionsSelector,
} from '../columns/gridColumnsSelector';
import type { DataGridProcessedProps } from '../../../models/props/DataGridProps';
import { gridPageSelector, gridPageSizeSelector } from '../pagination/gridPaginationSelector';
import { gridRowCountSelector } from '../rows/gridRowsSelector';
import { gridRowsMetaSelector } from '../rows/gridRowsMetaSelector';
import type { GridScrollParams } from '../../../models/params/gridScrollParams';
import type { GridScrollApi } from '../../../models/api/gridScrollApi';
import { useGridApiMethod } from '../../utils/useGridApiMethod';
import { gridExpandedSortedRowEntriesSelector } from '../filter/gridFilterSelector';
import { gridDimensionsSelector } from '../dimensions';

// Logic copied from https://www.w3.org/TR/wai-aria-practices/examples/listbox/js/listbox.js
// Similar to https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
function scrollIntoView(dimensions: {
  containerSize: number;
  scrollPosition: number;
  elementSize: number;
  elementOffset: number;
}) {
  const { containerSize, scrollPosition, elementSize, elementOffset } = dimensions;

  const elementEnd = elementOffset + elementSize;
  // Always scroll to top when cell is higher than viewport to avoid scroll jump
  // See https://github.com/mui/mui-x/issues/4513 and https://github.com/mui/mui-x/issues/4514
  if (elementSize > containerSize) {
    return elementOffset;
  }
  if (elementEnd - containerSize > scrollPosition) {
    return elementEnd - containerSize;
  }
  if (elementOffset < scrollPosition) {
    return elementOffset;
  }
  return undefined;
}

/**
 * @requires useGridPagination (state) - can be after, async only
 * @requires useGridColumns (state) - can be after, async only
 * @requires useGridRows (state) - can be after, async only
 * @requires useGridRowsMeta (state) - can be after, async only
 * @requires useGridFilter (state)
 * @requires useGridColumnSpanning (method)
 */
export const useGridScroll = (
  apiRef: RefObject<GridPrivateApiCommunity>,
  props: Pick<DataGridProcessedProps, 'pagination'>,
): void => {
  const isRtl = useRtl();
  const logger = useGridLogger(apiRef, 'useGridScroll');
  const colRef = apiRef.current.columnHeadersContainerRef;
  const virtualScrollerRef = apiRef.current.virtualScrollerRef;

  const scrollToIndexes = React.useCallback<GridScrollApi['scrollToIndexes']>(
    (params: Partial<GridCellIndexCoordinates>) => {
          throw new Error("STUB");
      },
    [logger, apiRef, virtualScrollerRef, props.pagination],
  );

  const scroll = React.useCallback<GridScrollApi['scroll']>(
    (params: Partial<GridScrollParams>) => {
          throw new Error("STUB");
      },
    [virtualScrollerRef, isRtl, colRef, logger],
  );

  const getScrollPosition = React.useCallback<GridScrollApi['getScrollPosition']>(() => {
      throw new Error("STUB");
  }, [virtualScrollerRef]);

  const scrollApi: GridScrollApi = {
    scroll,
    scrollToIndexes,
    getScrollPosition,
  };
  useGridApiMethod(apiRef, scrollApi, 'public');
};
