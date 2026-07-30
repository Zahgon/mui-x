import type { RefObject } from '@mui/x-internals/types';
import { gridRowNodeSelector } from '@mui/x-data-grid-pro';
import type { GridColDef, GridRowId } from '@mui/x-data-grid-pro';
import { GridFooterCell } from '@mui/x-data-grid-pro/internals';
import type {
  GridBaseColDef,
  GridAggregationCellMeta,
  GridAggregationPosition,
} from '@mui/x-data-grid-pro/internals';
import type { GridApiPremium } from '../../../models/gridApiPremium';
import type { GridAggregationLookup, GridAggregationRule } from './gridAggregationInterfaces';
import { gridAggregationLookupSelector } from './gridAggregationSelectors';
import { GridAggregationHeader } from '../../../components/GridAggregationHeader';
import { gridPivotActiveSelector } from '../pivoting/gridPivotingSelectors';

type WrappableColumnProperty = 'renderCell' | 'renderHeader';

interface GridColDefWithAggregationWrappers extends GridBaseColDef {
  aggregationWrappedProperties: {
    name: WrappableColumnProperty;
    originalValue: GridBaseColDef[WrappableColumnProperty];
    wrappedValue: GridBaseColDef[WrappableColumnProperty];
  }[];
}

type ColumnPropertyWrapper<P extends WrappableColumnProperty> = (params: {
  apiRef: RefObject<GridApiPremium>;
  value: GridBaseColDef[P];
  colDef: GridBaseColDef;
  aggregationRule: GridAggregationRule;
  getCellAggregationResult: (
    id: GridRowId,
    field: string,
  ) => GridAggregationLookup[GridRowId][string] | null;
}) => GridBaseColDef[P];

const getAggregationValueWrappedRenderCell: ColumnPropertyWrapper<'renderCell'> = ({
  value: renderCell,
  aggregationRule,
  getCellAggregationResult,
  apiRef,
}) => {
    throw new Error("STUB");
};

/**
 * Add the aggregation method around the header name
 */
const getWrappedRenderHeader: ColumnPropertyWrapper<'renderHeader'> = ({
  value: renderHeader,
  aggregationRule,
}) => {
    throw new Error("STUB");
};

/**
 * Add a wrapper around each wrappable property of the column to customize the behavior of the aggregation cells.
 */
export const wrapColumnWithAggregationValue = (
  column: GridBaseColDef,
  aggregationRule: GridAggregationRule,
  apiRef: RefObject<GridApiPremium>,
): GridBaseColDef => {
  const getCellAggregationResult = (
    id: GridRowId,
    field: string,
  ): GridAggregationLookup[GridRowId][string] | null => {
    let cellAggregationPosition: GridAggregationPosition | null = null;
    const rowNode = gridRowNodeSelector(apiRef, id);

    if (!rowNode) {
      return null;
    }

    if (rowNode.type === 'group') {
      cellAggregationPosition = 'inline';
    } else if (id.toString().startsWith('auto-generated-group-footer-')) {
      cellAggregationPosition = 'footer';
    }

    if (cellAggregationPosition == null) {
      return null;
    }

    // TODO: Add custom root id
    const groupId = cellAggregationPosition === 'inline' ? id : (rowNode.parent ?? '');

    const aggregationResult = gridAggregationLookupSelector(apiRef)?.[groupId]?.[field];
    if (!aggregationResult || aggregationResult.position !== cellAggregationPosition) {
      return null;
    }

    return aggregationResult;
  };

  let didWrapSomeProperty = false;
  const wrappedColumn: GridColDefWithAggregationWrappers = {
    ...column,
    aggregationWrappedProperties: [],
  };

  const wrapColumnProperty = <P extends WrappableColumnProperty>(
    property: P,
    wrapper: ColumnPropertyWrapper<P>,
  ) => {
    const originalValue = column[property];
    const wrappedProperty = wrapper({
      apiRef,
      value: originalValue,
      colDef: column,
      aggregationRule,
      getCellAggregationResult,
    });

    if (wrappedProperty !== originalValue) {
      didWrapSomeProperty = true;
      wrappedColumn[property] = wrappedProperty as any;
      wrappedColumn.aggregationWrappedProperties.push({
        name: property,
        originalValue,
        wrappedValue: wrappedProperty,
      });
    }
  };

  wrapColumnProperty('renderCell', getAggregationValueWrappedRenderCell);
  wrapColumnProperty('renderHeader', getWrappedRenderHeader);

  if (!didWrapSomeProperty) {
    return column;
  }

  return wrappedColumn;
};

const isColumnWrappedWithAggregation = (
  column: GridColDef,
): column is GridColDefWithAggregationWrappers => {
  return (
    typeof (column as GridColDefWithAggregationWrappers).aggregationWrappedProperties !==
    'undefined'
  );
};

/**
 * Remove the aggregation wrappers around the wrappable properties of the column.
 */
export const unwrapColumnFromAggregation = (column: GridColDef) => {
  if (!isColumnWrappedWithAggregation(column)) {
    return column;
  }
  const { aggregationWrappedProperties, ...unwrappedColumn } =
    column as GridColDefWithAggregationWrappers;

  aggregationWrappedProperties.forEach(({ name, originalValue, wrappedValue }) => {
      throw new Error("STUB");
  });

  return unwrappedColumn;
};
