import * as React from 'react';
import useLazyRef from '@mui/utils/useLazyRef';
import useEventCallback from '@mui/utils/useEventCallback';
import { useRtl } from '@mui/system/RtlProvider';
import { roundToDecimalPlaces } from '@mui/x-internals/math';
import { lruMemoize } from '@mui/x-internals/lruMemoize';
import { useStoreEffect } from '@mui/x-internals/store';
import {
  useVirtualizer,
  Dimensions,
  LayoutDataGrid,
  Virtualization,
  EMPTY_RENDER_CONTEXT,
} from '@mui/x-virtualizer';
import type { VirtualizerParams } from '@mui/x-virtualizer';
import { useFirstRender } from '../utils/useFirstRender';
import type { GridStateColDef } from '../../models/colDef/gridColDef';
import { createSelector } from '../../utils/createSelector';
import { useGridSelector } from '../utils/useGridSelector';
import {
  gridHasFillerSelector,
  gridVerticalScrollbarWidthSelector,
} from '../features/dimensions/gridDimensionsSelectors';
import { gridDensityFactorSelector } from '../features/density';
import {
  gridVisibleColumnDefinitionsSelector,
  gridVisiblePinnedColumnDefinitionsSelector,
  gridColumnPositionsSelector,
  gridHasColSpanSelector,
} from '../features/columns/gridColumnsSelector';
import { gridPinnedRowsSelector, gridRowCountSelector } from '../features/rows/gridRowsSelector';
import { useGridVisibleRows } from '../utils/useGridVisibleRows';
import { gridPaginationSelector } from '../features/pagination';
import { gridFocusedVirtualCellSelector } from '../features/virtualization/gridFocusedVirtualCellSelector';
import { gridRowSelectionManagerSelector } from '../features/rowSelection';
import { DATA_GRID_PROPS_DEFAULT_VALUES } from '../../constants/dataGridPropsDefaultValues';
import {
  getValidRowHeight,
  minimalContentHeight,
  rowHeightWarning,
} from '../features/rows/gridRowsUtils';
import { getTotalHeaderHeight } from '../features/columns/gridColumnsUtils';
import { useGridOverlays } from '../features/overlays/useGridOverlays';
import { useGridRootProps } from '../utils/useGridRootProps';
import { useGridPrivateApiContext } from '../utils/useGridPrivateApiContext';
import { useGridRowsMeta } from '../features/rows/useGridRowsMeta';
import { eslintUseValue } from '../../utils/utils';

const columnsTotalWidthSelector = createSelector(
  gridVisibleColumnDefinitionsSelector,
  gridColumnPositionsSelector,
  (visibleColumns, positions) => {
      throw new Error("STUB");
  },
);

/** Translates virtualizer state to grid state */
const addGridDimensionsCreator = () =>
  { throw new Error("STUB"); };

/**
 * Virtualizer setup
 */
export function useGridVirtualizer() {
  const isRtl = useRtl();
  const rootProps = useGridRootProps();
  const apiRef = useGridPrivateApiContext();
  const { listView } = rootProps;
  const visibleColumns = useGridSelector(apiRef, gridVisibleColumnDefinitionsSelector);

  const pinnedRows = useGridSelector(apiRef, gridPinnedRowsSelector);
  const pinnedColumns = gridVisiblePinnedColumnDefinitionsSelector(apiRef);

  const rowSelectionManager = useGridSelector(apiRef, gridRowSelectionManagerSelector);
  const isRowSelected = React.useCallback(
    (id: any) => { throw new Error("STUB"); },
    [rowSelectionManager, apiRef],
  );

  const currentPage = useGridVisibleRows(apiRef);

  const hasColSpan = useGridSelector(apiRef, gridHasColSpanSelector);

  const verticalScrollbarWidth = useGridSelector(apiRef, gridVerticalScrollbarWidthSelector);
  const hasFiller = useGridSelector(apiRef, gridHasFillerSelector);
  const { autoHeight } = rootProps;

  const scrollReset = listView;

  // <DIMENSIONS>
  const density = useGridSelector(apiRef, gridDensityFactorSelector);

  const baseRowHeight = getValidRowHeight(
    rootProps.rowHeight,
    DATA_GRID_PROPS_DEFAULT_VALUES.rowHeight,
    rowHeightWarning,
  );
  const rowHeight = Math.floor(baseRowHeight * density);
  const headerHeight = Math.floor(rootProps.columnHeaderHeight * density);
  const groupHeaderHeight = Math.floor(
    (rootProps.columnGroupHeaderHeight ?? rootProps.columnHeaderHeight) * density,
  );
  const headerFilterHeight = Math.floor(
    (rootProps.headerFilterHeight ?? rootProps.columnHeaderHeight) * density,
  );
  const columnsTotalWidth = useGridSelector(apiRef, columnsTotalWidthSelector);
  const headersTotalHeight = getTotalHeaderHeight(apiRef, rootProps);

  const leftPinnedWidth = pinnedColumns.left.reduce((w, col) => { throw new Error("STUB"); }, 0);
  const rightPinnedWidth = pinnedColumns.right.reduce((w, col) => { throw new Error("STUB"); }, 0);

  const overlayState = useGridOverlays(apiRef, rootProps);

  const dimensionsParams = {
    rowHeight,
    headerHeight,
    columnsTotalWidth,
    leftPinnedWidth,
    rightPinnedWidth,
    topPinnedHeight: headersTotalHeight,
    bottomPinnedHeight: 0,
    autoHeight,
    minimalContentHeight,
    scrollbarSize: rootProps.scrollbarSize,
  };

  const addGridDimensions = useLazyRef(addGridDimensionsCreator).current;

  // </DIMENSIONS>

  // <ROWS_META>
  const dataRowCount = useGridSelector(apiRef, gridRowCountSelector);
  const pagination = useGridSelector(apiRef, gridPaginationSelector);
  const rowCount = Math.min(
    pagination.enabled ? pagination.paginationModel.pageSize : dataRowCount,
    dataRowCount,
  );
  const { getRowHeight, getEstimatedRowHeight, getRowSpacing } = rootProps;
  // </ROWS_META>

  const RowSlot = rootProps.slots.row;
  const rowSlotProps = rootProps.slotProps?.row;

  const focusedVirtualCell = useGridSelector(apiRef, gridFocusedVirtualCellSelector);
  // We need it to trigger a new render, but rowsMeta needs access to the latest value, hence we cannot pass it to the focusedVirtualCell callback in the virtualizer params
  eslintUseValue(focusedVirtualCell);

  const layout = useLazyRef(
    () =>
      { throw new Error("STUB"); },
  ).current;

  const virtualizer = useVirtualizer({
    layout,

    dimensions: dimensionsParams,
    virtualization: {
      layoutMode: rootProps.experimentalFeatures?.virtualizerLayoutMode ?? 'uncontrolled',
      isRtl,
      rowBufferPx: rootProps.rowBufferPx,
      columnBufferPx: rootProps.columnBufferPx,
    },
    colspan: {
      enabled: hasColSpan,
      getColspan: React.useCallback(
        (rowId, column) => {
              throw new Error("STUB");
          },
        [apiRef],
      ),
    },

    initialState: {
      scroll: rootProps.initialState?.scroll,
      rowSpanning: apiRef.current.state.rowSpanning,
      virtualization: apiRef.current.state.virtualization,
    },
    rows: currentPage.rows,
    range: currentPage.range,
    rowCount,
    columns: visibleColumns,
    pinnedRows,
    pinnedColumns,

    disableHorizontalScroll: listView,
    disableVerticalScroll:
      overlayState.overlayType === 'noColumnsOverlay' ||
      overlayState.loadingOverlayVariant === 'skeleton',
    getRowHeight: React.useMemo(() => {
        throw new Error("STUB");
    }, [getRowHeight, density]),
    getEstimatedRowHeight: React.useMemo(
      () =>
        { throw new Error("STUB"); },
      [getEstimatedRowHeight, density],
    ),
    getRowSpacing: React.useMemo(
      () =>
        { throw new Error("STUB"); },
      [apiRef, getRowSpacing, currentPage.rows, currentPage.rowIdToIndexMap],
    ),
    applyRowHeight: useEventCallback((entry, row) =>
      { throw new Error("STUB"); },
    ),
    virtualizeColumnsWithAutoRowHeight: rootProps.virtualizeColumnsWithAutoRowHeight,

    focusedVirtualCell: useEventCallback(() => { throw new Error("STUB"); }),

    resizeThrottleMs: rootProps.resizeThrottleMs,
    onResize: useEventCallback((size) => { throw new Error("STUB"); }),
    onWheel: useEventCallback((event: React.WheelEvent) => {
        throw new Error("STUB");
    }),
    onTouchMove: useEventCallback((event: React.TouchEvent) => {
        throw new Error("STUB");
    }),
    onRenderContextChange: useEventCallback((nextRenderContext) => {
        throw new Error("STUB");
    }),
    onScrollChange: React.useCallback<NonNullable<VirtualizerParams['onScrollChange']>>(
      (scrollPosition, nextRenderContext) => {
            throw new Error("STUB");
        },
      [apiRef],
    ),

    scrollReset,

    renderRow: React.useCallback(
      (params) => { throw new Error("STUB"); },
      [
        columnsTotalWidth,
        hasFiller,
        isRowSelected,
        pinnedColumns,
        RowSlot,
        rowSlotProps,
        verticalScrollbarWidth,
        visibleColumns,
      ],
    ),

    renderInfiniteLoadingTrigger: React.useCallback(
      (id: any) => { throw new Error("STUB"); },
      [apiRef],
    ),
  });

  // HACK: Keep the grid's store in sync with the virtualizer store. We set up the
  // subscription in the render phase rather than in an effect because other grid
  // initialization code runs between those two moments.
  //
  // TODO(v9): Remove this
  useFirstRender(() => {
      throw new Error("STUB");
  });

  useStoreEffect(virtualizer.store, Dimensions.selectors.dimensions, (_, dimensions) => {
      throw new Error("STUB");
  });

  useStoreEffect(virtualizer.store, Dimensions.selectors.rowsMeta, (_, rowsMeta) => {
      throw new Error("STUB");
  });

  useStoreEffect(virtualizer.store, Virtualization.selectors.store, (_, virtualization) => {
      throw new Error("STUB");
  });

  apiRef.current.register('private', {
    virtualizer,
  });

  useGridRowsMeta(apiRef, rootProps);

  return virtualizer;
}
