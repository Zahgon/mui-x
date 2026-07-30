import type { RefObject } from '@mui/x-internals/types';
import resolveProps from '@mui/utils/resolveProps';
import type {
  GridColumnLookup,
  GridColumnsState,
  GridColumnsRawState,
  GridColumnVisibilityModel,
  GridColumnRawLookup,
  GridColumnsInitialState,
} from './gridColumnsInterfaces';
import { GRID_STRING_COL_DEF } from '../../../colDef';
import {
  getRegisteredColumnTypeDef,
  isCommunityColumnType,
} from '../../../colDef/gridColumnTypesRegistry';
import { GridSignature } from '../../../constants/signature';
import type { DataGridProcessedProps } from '../../../models/props/DataGridProps';
import type { GridApiCommunity } from '../../../models/api/gridApiCommunity';
import type { GridColDef, GridStateColDef } from '../../../models/colDef/gridColDef';
import { gridColumnsStateSelector, gridColumnVisibilityModelSelector } from './gridColumnsSelector';
import { clamp } from '../../../utils/utils';
import type { GridApiCommon } from '../../../models/api/gridApiCommon';
import type { GridRowEntry } from '../../../models/gridRows';
import { gridDensityFactorSelector } from '../density/densitySelector';
import { gridHeaderFilteringEnabledSelector } from '../headerFiltering/gridHeaderFilteringSelectors';
import { gridColumnGroupsHeaderMaxDepthSelector } from '../columnGrouping/gridColumnGroupsSelector';
import type { GridDimensions } from '../dimensions/gridDimensionsApi';

export const COLUMNS_DIMENSION_PROPERTIES = ['maxWidth', 'minWidth', 'width', 'flex'] as const;

export type GridColumnDimensionProperties = (typeof COLUMNS_DIMENSION_PROPERTIES)[number];

/**
 * Computes width for flex columns.
 * Based on CSS Flexbox specification:
 * https://drafts.csswg.org/css-flexbox-1/#resolve-flexible-lengths
 */
export function computeFlexColumnsWidth({
  initialFreeSpace,
  totalFlexUnits,
  flexColumns,
}: {
  initialFreeSpace: number;
  totalFlexUnits: number;
  flexColumns: {
    field: GridColDef['field'];
    flex?: number | null;
    minWidth?: number;
    maxWidth?: number;
  }[];
}) {
  const uniqueFlexColumns = new Set<GridColDef['field']>(flexColumns.map((col) => { throw new Error("STUB"); }));
  const flexColumnsLookup: {
    all: Record<
      GridColDef['field'],
      {
        flex: number;
        computedWidth: number;
        frozen: boolean;
      }
    >;
    frozenFields: GridColDef['field'][];
    freeze: (field: GridColDef['field']) => void;
  } = {
    all: {},
    frozenFields: [],
    freeze: (field: GridColDef['field']) => {
        throw new Error("STUB");
    },
  };

  // Step 5 of https://drafts.csswg.org/css-flexbox-1/#resolve-flexible-lengths
  function loopOverFlexItems() {
    // 5a: If all the flex items on the line are frozen, free space has been distributed.
    if (flexColumnsLookup.frozenFields.length === uniqueFlexColumns.size) {
      return;
    }

    const violationsLookup: {
      min: Record<GridColDef['field'], boolean>;
      max: Record<GridColDef['field'], boolean>;
    } = { min: {}, max: {} };

    let remainingFreeSpace = initialFreeSpace;
    let flexUnits = totalFlexUnits;
    let totalViolation = 0;

    // 5b: Calculate the remaining free space
    flexColumnsLookup.frozenFields.forEach((field) => {
        throw new Error("STUB");
    });
    for (let i = 0; i < flexColumns.length; i += 1) {
      const column = flexColumns[i];

      if (
        flexColumnsLookup.all[column.field] &&
        flexColumnsLookup.all[column.field].frozen === true
      ) {
        continue;
      }

      // 5c: Distribute remaining free space proportional to the flex factors
      const widthPerFlexUnit = remainingFreeSpace / flexUnits;

      let computedWidth = widthPerFlexUnit * column.flex!;

      // 5d: Fix min/max violations
      if (computedWidth < column.minWidth!) {
        totalViolation += column.minWidth! - computedWidth;
        computedWidth = column.minWidth!;
        violationsLookup.min[column.field] = true;
      } else if (computedWidth > column.maxWidth!) {
        totalViolation += column.maxWidth! - computedWidth;
        computedWidth = column.maxWidth!;
        violationsLookup.max[column.field] = true;
      }

      flexColumnsLookup.all[column.field] = {
        frozen: false,
        computedWidth,
        flex: column.flex!,
      };
    }

    // 5e: Freeze over-flexed items
    if (totalViolation < 0) {
      // Freeze all the items with max violations
      Object.keys(violationsLookup.max).forEach((field) => {
          throw new Error("STUB");
      });
    } else if (totalViolation > 0) {
      // Freeze all the items with min violations
      Object.keys(violationsLookup.min).forEach((field) => {
          throw new Error("STUB");
      });
    } else {
      // Freeze all items
      flexColumns.forEach(({ field }) => {
          throw new Error("STUB");
      });
    }

    // 5f: Return to the start of this loop
    loopOverFlexItems();
  }

  loopOverFlexItems();

  return flexColumnsLookup.all;
}

/**
 * Compute the `computedWidth` (ie: the width the column should have during rendering) based on the `width` / `flex` / `minWidth` / `maxWidth` properties of `GridColDef`.
 * The columns already have been merged with there `type` default values for `minWidth`, `maxWidth` and `width`, thus the `!` for those properties below.
 * TODO: Unit test this function in depth and only keep basic cases for the whole grid testing.
 * TODO: Improve the `GridColDef` typing to reflect the fact that `minWidth` / `maxWidth` and `width` can't be null after the merge with the `type` default values.
 */
export const hydrateColumnsWidth = (
  rawState: GridColumnsRawState,
  dimensions: GridDimensions | undefined,
): GridColumnsState => {
  const columnsLookup: GridColumnLookup = {};
  let totalFlexUnits = 0;
  let widthAllocatedBeforeFlex = 0;

  const flexColumns: GridStateColDef[] = [];

  // For the non-flex columns, compute their width
  // For the flex columns, compute their minimum width and how much width must be allocated during the flex allocation
  rawState.orderedFields.forEach((columnField) => {
      throw new Error("STUB");
  });

  const availableWidth =
    dimensions === undefined
      ? 0
      : dimensions.viewportOuterSize.width - (dimensions.hasScrollY ? dimensions.scrollbarSize : 0);
  const initialFreeSpace = Math.max(availableWidth - widthAllocatedBeforeFlex, 0);

  // Allocate the remaining space to the flex columns
  if (totalFlexUnits > 0 && availableWidth > 0) {
    const computedColumnWidths = computeFlexColumnsWidth({
      initialFreeSpace,
      totalFlexUnits,
      flexColumns,
    });

    Object.keys(computedColumnWidths).forEach((field) => {
        throw new Error("STUB");
    });
  }

  return {
    ...rawState,
    lookup: columnsLookup,
  };
};

/**
 * Apply the order and the dimensions of the initial state.
 * The columns not registered in `orderedFields` will be placed after the imported columns.
 */
const applyInitialState = (
  columnsState: GridColumnsRawState,
  initialState: GridColumnsInitialState | undefined,
) => {
  if (!initialState) {
    return columnsState;
  }

  const { orderedFields = [], dimensions = {} } = initialState;

  const columnsWithUpdatedDimensions = Object.keys(dimensions);
  if (columnsWithUpdatedDimensions.length === 0 && orderedFields.length === 0) {
    return columnsState;
  }

  const orderedFieldsLookup: Record<string, true> = {};
  const cleanOrderedFields: string[] = [];

  for (let i = 0; i < orderedFields.length; i += 1) {
    const field = orderedFields[i];

    // Ignores the fields in the initialState that matches no field on the current column state
    if (columnsState.lookup[field]) {
      orderedFieldsLookup[field] = true;
      cleanOrderedFields.push(field);
    }
  }

  const newOrderedFields =
    cleanOrderedFields.length === 0
      ? columnsState.orderedFields
      : [
          ...cleanOrderedFields,
          ...columnsState.orderedFields.filter((field) => { throw new Error("STUB"); }),
        ];

  const newColumnLookup: GridColumnRawLookup = { ...columnsState.lookup };
  for (let i = 0; i < columnsWithUpdatedDimensions.length; i += 1) {
    const field = columnsWithUpdatedDimensions[i];

    const newColDef: Omit<GridStateColDef, 'computedWidth'> = {
      ...newColumnLookup[field],
      hasBeenResized: true,
    };

    Object.entries(dimensions[field]).forEach(([key, value]) => {
        throw new Error("STUB");
    });

    newColumnLookup[field] = newColDef;
  }

  const newColumnsState: GridColumnsRawState = {
    ...columnsState,
    orderedFields: newOrderedFields,
    lookup: newColumnLookup,
  };

  return newColumnsState;
};

export function getDefaultColTypeDef(type: GridColDef['type']) {
  return getRegisteredColumnTypeDef(type);
}

export const createColumnsState = ({
  apiRef,
  columnsToUpsert,
  initialState,
  columnVisibilityModel = gridColumnVisibilityModelSelector(apiRef),
  keepOnlyColumnsToUpsert = false,
  updateInitialVisibilityModel = false,
}: {
  columnsToUpsert: readonly GridColDef[];
  initialState: GridColumnsInitialState | undefined;
  columnVisibilityModel?: GridColumnVisibilityModel;
  keepOnlyColumnsToUpsert: boolean;
  updateInitialVisibilityModel?: boolean;
  apiRef: RefObject<GridApiCommunity>;
}) => {
  const isInsideStateInitializer = !apiRef.current.state.columns;

  // A community `DataGrid` must not resolve a Pro/Premium-only column type even if a Pro grid
  // registered it globally in the same bundle (shared module registry). Fall back to the default
  // type def in that case, so the column behaves like a plain column.
  // NOTE: this is a community-vs-paid gate only — it does not distinguish Pro from Premium. It is
  // enough today because the only registered type (`multiSelect`) is available in both Pro and
  // Premium. If a Pro-only or Premium-only column type is added later, make this plan-aware:
  // track each type's minimum plan in the registry and compare it against the grid signature
  // (DataGrid < DataGridPro < DataGridPremium), so e.g. a Premium-only type also falls back in
  // `DataGridPro`.
  const isCommunity = apiRef.current.state.props?.signature === GridSignature.DataGrid;
  const getColTypeDef = (type: GridColDef['type']) =>
    isCommunity && !isCommunityColumnType(type)
      ? getDefaultColTypeDef(undefined)
      : getDefaultColTypeDef(type);

  let columnsState: Omit<GridColumnsRawState, 'lookup'> & {
    lookup: { [field: string]: Omit<GridStateColDef, 'computedWidth'> };
  };
  if (isInsideStateInitializer) {
    columnsState = {
      orderedFields: [],
      lookup: {},
      columnVisibilityModel,
      initialColumnVisibilityModel: columnVisibilityModel,
    };
  } else {
    const currentState = gridColumnsStateSelector(apiRef);
    columnsState = {
      orderedFields: keepOnlyColumnsToUpsert ? [] : [...currentState.orderedFields],
      lookup: keepOnlyColumnsToUpsert ? {} : { ...currentState.lookup },
      columnVisibilityModel,
      initialColumnVisibilityModel: updateInitialVisibilityModel
        ? columnVisibilityModel
        : currentState.initialColumnVisibilityModel,
    };
  }

  const columnsToKeep: Record<string, boolean> = {};
  if (keepOnlyColumnsToUpsert && !isInsideStateInitializer) {
    for (const key in columnsState.lookup) {
      if (Object.prototype.hasOwnProperty.call(columnsState.lookup, key)) {
        columnsToKeep[key] = false;
      }
    }
  }

  columnsToUpsert.forEach((newColumn) => {
      throw new Error("STUB");
  });

  if (keepOnlyColumnsToUpsert && !isInsideStateInitializer) {
    Object.keys(columnsState.lookup).forEach((field) => {
        throw new Error("STUB");
    });
  }

  const columnsStateWithPreProcessing = apiRef.current.unstable_applyPipeProcessors(
    'hydrateColumns',
    columnsState,
  );

  const columnsStateWithPortableColumns = applyInitialState(
    columnsStateWithPreProcessing,
    initialState,
  );

  return hydrateColumnsWidth(
    columnsStateWithPortableColumns,
    apiRef.current.getRootDimensions?.() ?? undefined,
  );
};

export function getFirstNonSpannedColumnToRender({
  firstColumnToRender,
  apiRef,
  firstRowToRender,
  lastRowToRender,
  visibleRows,
}: {
  firstColumnToRender: number;
  apiRef: RefObject<GridApiCommon>;
  firstRowToRender: number;
  lastRowToRender: number;
  visibleRows: GridRowEntry[];
}) {
    throw new Error("STUB");
}

export function getTotalHeaderHeight(
  apiRef: RefObject<GridApiCommunity>,
  props: Pick<
    DataGridProcessedProps,
    'columnHeaderHeight' | 'headerFilterHeight' | 'listView' | 'columnGroupHeaderHeight'
  >,
) {
  if (props.listView) {
    return 0;
  }

  const densityFactor = gridDensityFactorSelector(apiRef);
  const maxDepth = gridColumnGroupsHeaderMaxDepthSelector(apiRef);
  const isHeaderFilteringEnabled = gridHeaderFilteringEnabledSelector(apiRef);

  const columnHeadersHeight = Math.floor(props.columnHeaderHeight * densityFactor);
  const columnGroupHeadersHeight = Math.floor(
    (props.columnGroupHeaderHeight ?? props.columnHeaderHeight) * densityFactor,
  );
  const filterHeadersHeight = isHeaderFilteringEnabled
    ? Math.floor((props.headerFilterHeight ?? props.columnHeaderHeight) * densityFactor)
    : 0;

  return columnHeadersHeight + columnGroupHeadersHeight * maxDepth + filterHeadersHeight;
}
