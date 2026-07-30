'use client';
import * as React from 'react';
import type { RefObject } from '@mui/x-internals/types';
import useEventCallback from '@mui/utils/useEventCallback';
import ownerDocument from '@mui/utils/ownerDocument';
import useLazyRef from '@mui/utils/useLazyRef';
import { useRtl } from '@mui/system/RtlProvider';
import {
  findGridCellElementsFromCol,
  findGridElement,
  findLeftPinnedCellsAfterCol,
  findRightPinnedCellsBeforeCol,
  getFieldFromHeaderElem,
  findHeaderElementFromField,
  getFieldsFromGroupHeaderElem,
  findGroupHeaderElementsFromField,
  findGridHeader,
  findGridHeaderFilter,
  findGridCells,
  findParentElementFromClassName,
  findLeftPinnedHeadersAfterCol,
  findRightPinnedHeadersBeforeCol,
  escapeOperandAttributeSelector,
} from '../../../utils/domUtils';
import { DEFAULT_GRID_AUTOSIZE_OPTIONS } from './gridColumnResizeApi';
import type { GridAutosizeOptions, GridColumnResizeApi } from './gridColumnResizeApi';
import type { CursorCoordinates } from '../../../models/cursorCoordinates';
import type { GridColumnHeaderSeparatorSides } from '../../../components/columnHeaders/GridColumnHeaderSeparator';
import { gridClasses } from '../../../constants/gridClasses';
import {
  useGridEvent,
  useGridApiMethod,
  useGridEventPriority,
  useGridLogger,
  useGridNativeEventListener,
  useGridSelector,
  useOnMount,
} from '../../utils';
import {
  gridRenderContextSelector,
  gridVirtualizationColumnEnabledSelector,
} from '../virtualization';
import { createControllablePromise } from '../../../utils/createControllablePromise';
import type { ControllablePromise } from '../../../utils/createControllablePromise';
import type { GridStateInitializer } from '../../utils/useGridInitializeState';
import { clamp } from '../../../utils/utils';
import { useTimeout } from '../../utils/useTimeout';
import { GridPinnedColumnPosition } from '../columns/gridColumnsInterfaces';
import { gridColumnsStateSelector } from '../columns';
import { gridDimensionsSelector } from '../dimensions';
import { gridHeaderFilteringEnabledSelector } from '../headerFiltering';
import { gridVisibleRowsSelector } from '../pagination';
import type { DataGridProcessedProps } from '../../../models/props/DataGridProps';
import type { GridColumnResizeParams } from '../../../models/params/gridColumnResizeParams';
import type { GridStateColDef } from '../../../models/colDef/gridColDef';
import type { GridEventListener } from '../../../models/events/gridEventListener';
import type { GridPrivateApiCommunity } from '../../../models/api/gridApiCommunity';
import { gridResizingColumnFieldSelector } from './columnResizeSelector';

type AutosizeOptionsRequired = Required<GridAutosizeOptions>;

type ResizeDirection = keyof typeof GridColumnHeaderSeparatorSides;

function isRenderContextReadyForAutosizeOnMount(apiRef: RefObject<GridPrivateApiCommunity>) {
  const dimensions = gridDimensionsSelector(apiRef);
  if (!dimensions.isReady) {
    return false;
  }

  const { rows } = gridVisibleRowsSelector(apiRef);
  if (rows.length === 0) {
    return true;
  }

  const renderContext = gridRenderContextSelector(apiRef);
  if (renderContext.lastRowIndex <= renderContext.firstRowIndex) {
    return false;
  }

  // If all rows fit in the viewport, wait for them all; otherwise we can only measure the rendered rows.
  if (!dimensions.hasScrollY) {
    return renderContext.firstRowIndex === 0 && renderContext.lastRowIndex >= rows.length;
  }

  return true;
}

function trackFinger(event: any, currentTouchId: number | undefined): CursorCoordinates | boolean {
  if (currentTouchId !== undefined && event.changedTouches) {
    for (let i = 0; i < event.changedTouches.length; i += 1) {
      const touch = event.changedTouches[i];
      if (touch.identifier === currentTouchId) {
        return {
          x: touch.clientX,
          y: touch.clientY,
        };
      }
    }

    return false;
  }

  return {
    x: event.clientX,
    y: event.clientY,
  };
}

function computeNewWidth(
  initialOffsetToSeparator: number,
  clickX: number,
  columnBounds: DOMRect,
  resizeDirection: ResizeDirection,
) {
  let newWidth = initialOffsetToSeparator;
  if (resizeDirection === 'Right') {
    newWidth += clickX - columnBounds.left;
  } else {
    newWidth += columnBounds.right - clickX;
  }
  return Math.round(newWidth);
}

function computeOffsetToSeparator(
  clickX: number,
  columnBounds: DOMRect,
  resizeDirection: ResizeDirection,
) {
  if (resizeDirection === 'Left') {
    return clickX - columnBounds.left;
  }
  return columnBounds.right - clickX;
}

function flipResizeDirection(side: ResizeDirection) {
  if (side === 'Right') {
    return 'Left';
  }
  return 'Right';
}

function getResizeDirection(separator: HTMLElement, isRtl: boolean) {
  const side = separator.classList.contains(gridClasses['columnSeparator--sideRight'])
    ? 'Right'
    : 'Left';
  if (isRtl) {
    // Resizing logic should be mirrored in the RTL case
    return flipResizeDirection(side);
  }
  return side;
}

function getPinnedWidthProperty(isRtl: boolean, pinnedPosition: GridPinnedColumnPosition) {
  if (pinnedPosition === GridPinnedColumnPosition.LEFT) {
    return isRtl ? '--DataGrid-rightPinnedWidth' : '--DataGrid-leftPinnedWidth';
  }
  return isRtl ? '--DataGrid-leftPinnedWidth' : '--DataGrid-rightPinnedWidth';
}

function getPinnedWidth(dimensions: any, isRtl: boolean, pinnedPosition: GridPinnedColumnPosition) {
  if (pinnedPosition === GridPinnedColumnPosition.LEFT) {
    return isRtl ? dimensions.rightPinnedWidth : dimensions.leftPinnedWidth;
  }
  return isRtl ? dimensions.leftPinnedWidth : dimensions.rightPinnedWidth;
}

function preventClick(event: MouseEvent) {
    throw new Error("STUB");
}

/**
 * Checker that returns a promise that resolves when the column virtualization
 * is disabled.
 */
function useColumnVirtualizationDisabled(apiRef: RefObject<GridPrivateApiCommunity>) {
  const promise = React.useRef<ControllablePromise>(undefined);
  const selector = () => gridVirtualizationColumnEnabledSelector(apiRef);
  const value = useGridSelector(apiRef, selector);

  React.useEffect(() => {
      throw new Error("STUB");
  });

  const asyncCheck = () => {
      throw new Error("STUB");
  };

  return asyncCheck;
}

/**
 * Basic statistical outlier detection, checks if the value is `F * IQR` away from
 * the Q1 and Q3 boundaries. IQR: interquartile range.
 */
function excludeOutliers(inputValues: number[], factor: number) {
  if (inputValues.length < 4) {
    return inputValues;
  }

  const values = inputValues.slice();
  values.sort((a, b) => { throw new Error("STUB"); });

  const q1 = values[Math.floor(values.length * 0.25)];
  const q3 = values[Math.floor(values.length * 0.75) - 1];
  const iqr = q3 - q1;

  // We make a small adjustment if `iqr < 5` for the cases where the IQR is
  // very small (for example zero) due to very close by values in the input data.
  // Otherwise, with an IQR of `0`, anything outside that would be considered
  // an outlier, but it makes more sense visually to allow for this 5px variance
  // rather than showing a cropped cell.
  const deviation = iqr < 5 ? 5 : iqr * factor;

  return values.filter((v) => { throw new Error("STUB"); });
}

function extractColumnWidths(
  apiRef: RefObject<GridPrivateApiCommunity>,
  options: AutosizeOptionsRequired,
  columns: GridStateColDef[],
) {
  const widthByField = {} as Record<string, number>;

  const root = apiRef.current.rootElementRef!.current!;
  root.classList.add(gridClasses.autosizing);

  const includeHeaderFilters =
    options.includeHeaderFilters && gridHeaderFilteringEnabledSelector(apiRef);

  columns.forEach((column) => {
      throw new Error("STUB");
  });

  root.classList.remove(gridClasses.autosizing);

  return widthByField;
}

export const columnResizeStateInitializer: GridStateInitializer = (state) => { throw new Error("STUB"); };

function createResizeRefs() {
    throw new Error("STUB");
}

/**
 * @requires useGridColumns (method, event)
 * TODO: improve experience for last column
 */
export const useGridColumnResize = (
  apiRef: RefObject<GridPrivateApiCommunity>,
  props: Pick<
    DataGridProcessedProps,
    | 'autosizeOptions'
    | 'autosizeOnMount'
    | 'disableAutosize'
    | 'onColumnResize'
    | 'onColumnWidthChange'
    | 'disableVirtualization'
  >,
) => {
  const isRtl = useRtl();
  const logger = useGridLogger(apiRef, 'useGridColumnResize');

  const refs = useLazyRef(createResizeRefs).current;

  // To improve accessibility, the separator has padding on both sides.
  // Clicking inside the padding area should be treated as a click in the separator.
  // This ref stores the offset between the click and the separator.
  const initialOffsetToSeparator = React.useRef<number>(null);
  const resizeDirection = React.useRef<ResizeDirection>(null);

  const stopResizeEventTimeout = useTimeout();
  const touchId = React.useRef<number>(undefined);

  const updateWidth = (newWidth: number) => {
    logger.debug(`Updating width to ${newWidth} for col ${refs.colDef!.field}`);

    const prevWidth = refs.columnHeaderElement!.offsetWidth;
    const widthDiff = newWidth - prevWidth;
    const columnWidthDiff = newWidth - refs.initialColWidth;

    if (columnWidthDiff > 0) {
      const newTotalWidth = refs.initialTotalWidth + columnWidthDiff;
      apiRef.current.rootElementRef?.current?.style.setProperty(
        '--DataGrid-rowWidth',
        `${newTotalWidth}px`,
      );
    }

    refs.colDef!.computedWidth = newWidth;
    refs.colDef!.width = newWidth;
    refs.colDef!.flex = 0;

    refs.columnHeaderElement!.style.width = `${newWidth}px`;

    const headerFilterElement = refs.headerFilterElement;
    if (headerFilterElement) {
      headerFilterElement.style.width = `${newWidth}px`;
    }

    refs.groupHeaderElements!.forEach((element) => {
        throw new Error("STUB");
    });

    refs.cellElements!.forEach((element) => {
        throw new Error("STUB");
    });

    const dimensions = gridDimensionsSelector(apiRef);
    const pinnedPosition = apiRef.current.unstable_applyPipeProcessors(
      'isColumnPinned',
      false,
      refs.colDef!.field,
    );

    if (pinnedPosition === GridPinnedColumnPosition.LEFT) {
      updateProperty(refs.fillerLeft, 'width', widthDiff);

      refs.leftPinnedCellsAfter.forEach((cell) => {
          throw new Error("STUB");
      });
      refs.leftPinnedHeadersAfter.forEach((header) => {
          throw new Error("STUB");
      });

      apiRef.current.rootElementRef?.current?.style.setProperty(
        getPinnedWidthProperty(isRtl, pinnedPosition),
        `${getPinnedWidth(dimensions, isRtl, pinnedPosition) + columnWidthDiff}px`,
      );
    }

    if (pinnedPosition === GridPinnedColumnPosition.RIGHT) {
      updateProperty(refs.fillerRight, 'width', widthDiff);

      refs.rightPinnedCellsBefore.forEach((cell) => {
          throw new Error("STUB");
      });
      refs.rightPinnedHeadersBefore.forEach((header) => {
          throw new Error("STUB");
      });

      apiRef.current.rootElementRef?.current?.style.setProperty(
        getPinnedWidthProperty(isRtl, pinnedPosition),
        `${getPinnedWidth(dimensions, isRtl, pinnedPosition) + columnWidthDiff}px`,
      );
    }
  };

  const finishResize = (nativeEvent: MouseEvent) => {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    stopListening();

    // Prevent double-clicks from being interpreted as two separate clicks
    if (refs.previousMouseClickEvent) {
      const prevEvent = refs.previousMouseClickEvent;
      const prevTimeStamp = prevEvent.timeStamp;
      const prevClientX = prevEvent.clientX;
      const prevClientY = prevEvent.clientY;

      // Check if the current event is part of a double-click
      if (
        nativeEvent.timeStamp - prevTimeStamp < 300 &&
        nativeEvent.clientX === prevClientX &&
        nativeEvent.clientY === prevClientY
      ) {
        refs.previousMouseClickEvent = undefined;
        apiRef.current.publishEvent('columnResizeStop', null, nativeEvent);
        return;
      }
    }

    if (refs.colDef) {
      apiRef.current.setColumnWidth(refs.colDef.field, refs.colDef.width!);
      logger.debug(`Updating col ${refs.colDef.field} with new width: ${refs.colDef.width}`);

      // Since during resizing we update the columns width outside of React, React is unable to
      // reapply the right style properties. We need to sync the state manually.
      // So we reapply the same logic as in https://github.com/mui/mui-x/blob/0511bf65543ca05d2602a5a3e0a6156f2fc8e759/packages/x-data-grid/src/hooks/features/columnHeaders/useGridColumnHeaders.tsx#L405
      const columnsState = gridColumnsStateSelector(apiRef);
      refs.groupHeaderElements!.forEach((element) => {
          throw new Error("STUB");
      });
    }

    stopResizeEventTimeout.start(0, () => {
        throw new Error("STUB");
    });
  };

  const setCellElementsRef = () => {
    if (refs.columnHeaderElement) {
      refs.cellElements = findGridCellElementsFromCol(refs.columnHeaderElement, apiRef.current);
    }
  };

  const storeReferences = (colDef: GridStateColDef, separator: HTMLElement, xStart: number) => {
    const root = apiRef.current.rootElementRef.current!;

    refs.initialColWidth = colDef.computedWidth;
    refs.initialTotalWidth = apiRef.current.getRootDimensions().rowWidth;

    refs.colDef = colDef as GridStateColDef;

    refs.columnHeaderElement = findHeaderElementFromField(
      apiRef.current.columnHeadersContainerRef!.current!,
      colDef.field,
    );

    const headerFilterElement = root.querySelector(
      `.${gridClasses.headerFilterRow} [data-field="${escapeOperandAttributeSelector(colDef.field)}"]`,
    );
    if (headerFilterElement) {
      refs.headerFilterElement = headerFilterElement as HTMLDivElement;
    }

    refs.groupHeaderElements = findGroupHeaderElementsFromField(
      apiRef.current.columnHeadersContainerRef?.current as Element,
      colDef.field,
    );

    setCellElementsRef();

    refs.fillerLeft = findGridElement(
      apiRef.current,
      isRtl ? 'filler--pinnedRight' : 'filler--pinnedLeft',
    );
    refs.fillerRight = findGridElement(
      apiRef.current,
      isRtl ? 'filler--pinnedLeft' : 'filler--pinnedRight',
    );

    const pinnedPosition = apiRef.current.unstable_applyPipeProcessors(
      'isColumnPinned',
      false,
      refs.colDef!.field,
    );

    refs.leftPinnedCellsAfter =
      pinnedPosition !== GridPinnedColumnPosition.LEFT
        ? []
        : findLeftPinnedCellsAfterCol(apiRef.current, refs.columnHeaderElement, isRtl);
    refs.rightPinnedCellsBefore =
      pinnedPosition !== GridPinnedColumnPosition.RIGHT
        ? []
        : findRightPinnedCellsBeforeCol(apiRef.current, refs.columnHeaderElement, isRtl);

    refs.leftPinnedHeadersAfter =
      pinnedPosition !== GridPinnedColumnPosition.LEFT
        ? []
        : findLeftPinnedHeadersAfterCol(apiRef.current, refs.columnHeaderElement, isRtl);
    refs.rightPinnedHeadersBefore =
      pinnedPosition !== GridPinnedColumnPosition.RIGHT
        ? []
        : findRightPinnedHeadersBeforeCol(apiRef.current, refs.columnHeaderElement, isRtl);

    resizeDirection.current = getResizeDirection(separator, isRtl);

    initialOffsetToSeparator.current = computeOffsetToSeparator(
      xStart,
      refs.columnHeaderElement!.getBoundingClientRect(),
      resizeDirection.current,
    );
  };

  const handleResizeMouseUp = useEventCallback(finishResize);

  const handleResizeMouseMove = useEventCallback((nativeEvent: MouseEvent) => {
      throw new Error("STUB");
  });

  const handleTouchEnd = useEventCallback((nativeEvent: any) => {
      throw new Error("STUB");
  });

  const handleTouchMove = useEventCallback((nativeEvent: any) => {
      throw new Error("STUB");
  });

  const handleTouchStart = useEventCallback((event: any) => {
      throw new Error("STUB");
  });

  const stopListening = React.useCallback(() => {
      throw new Error("STUB");
  }, [apiRef, refs, handleResizeMouseMove, handleResizeMouseUp, handleTouchMove, handleTouchEnd]);

  const handleResizeStart = React.useCallback<GridEventListener<'columnResizeStart'>>(
    ({ field }) => {
          throw new Error("STUB");
      },
    [apiRef],
  );

  const handleResizeStop = React.useCallback<GridEventListener<'columnResizeStop'>>(() => {
      throw new Error("STUB");
  }, [apiRef]);

  const handleColumnResizeMouseDown: GridEventListener<'columnSeparatorMouseDown'> =
    useEventCallback(({ colDef }, event) => {
        throw new Error("STUB");
    });

  const handleColumnSeparatorDoubleClick: GridEventListener<'columnSeparatorDoubleClick'> =
    useEventCallback((params, event) => {
        throw new Error("STUB");
    });

  /**
   * API METHODS
   */

  const columnVirtualizationDisabled = useColumnVirtualizationDisabled(apiRef);
  const isAutosizingRef = React.useRef(false);
  const autosizeColumns = React.useCallback<GridColumnResizeApi['autosizeColumns']>(
    async (userOptions) => {
          throw new Error("STUB");
      },
    [apiRef, columnVirtualizationDisabled, props.disableVirtualization],
  );

  /**
   * EFFECTS
   */

  React.useEffect(() => { throw new Error("STUB"); }, [stopListening]);

  useOnMount(() => {
      throw new Error("STUB");
  });

  useGridNativeEventListener(
    apiRef,
    () => { throw new Error("STUB"); },
    'touchstart',
    handleTouchStart,
    { passive: true },
  );

  useGridApiMethod(
    apiRef,
    {
      autosizeColumns,
    },
    'public',
  );

  useGridEvent(apiRef, 'columnResizeStop', handleResizeStop);
  useGridEvent(apiRef, 'columnResizeStart', handleResizeStart);
  useGridEvent(apiRef, 'columnSeparatorMouseDown', handleColumnResizeMouseDown);
  useGridEvent(apiRef, 'columnSeparatorDoubleClick', handleColumnSeparatorDoubleClick);

  useGridEvent(apiRef, 'rowsSet', () => {
      throw new Error("STUB");
  });

  useGridEventPriority(apiRef, 'columnResize', props.onColumnResize);
  useGridEventPriority(apiRef, 'columnWidthChange', props.onColumnWidthChange);
};

function updateProperty(
  element: HTMLElement | undefined,
  property: 'right' | 'left' | 'width',
  delta: number,
) {
  if (!element) {
    return;
  }
  element.style[property] = `${Math.round(parseFloat(element.style[property])) + delta}px`;
}
