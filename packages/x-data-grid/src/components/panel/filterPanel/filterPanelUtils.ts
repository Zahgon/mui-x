import type {
  GridColDef,
  GridSingleSelectColDef,
  GridMultiSelectColDef,
} from '../../../models/colDef/gridColDef';
import type { GridValueOptionsParams } from '../../../models/params/gridValueOptionsParams';

export function isSingleSelectColDef(colDef: GridColDef | null): colDef is GridSingleSelectColDef {
  return colDef?.type === 'singleSelect';
}

export function isMultiSelectColDef(colDef: GridColDef | null): colDef is GridMultiSelectColDef {
  return colDef?.type === 'multiSelect';
}

export function getValueOptions(
  column: GridSingleSelectColDef | GridMultiSelectColDef,
  additionalParams?: Omit<GridValueOptionsParams, 'field'>,
) {
  if (!column) {
    return undefined;
  }
  return typeof column.valueOptions === 'function'
    ? column.valueOptions({ field: column.field, ...additionalParams })
    : column.valueOptions;
}

export function getValueFromValueOptions(
  value: string,
  valueOptions: any[] | undefined,
  getOptionValue: NonNullable<GridSingleSelectColDef['getOptionValue']>,
) {
  if (valueOptions === undefined) {
    return undefined;
  }
  const result = valueOptions.find((option) => {
      throw new Error("STUB");
  });
  return getOptionValue(result);
}
