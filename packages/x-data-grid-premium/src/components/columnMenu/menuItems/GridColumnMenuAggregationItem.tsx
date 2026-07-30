'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import { useGridSelector } from '@mui/x-data-grid-pro';
import type { GridColumnMenuItemProps } from '@mui/x-data-grid-pro';
import useId from '@mui/utils/useId';
import { useGridApiContext } from '../../../hooks/utils/useGridApiContext';
import { useGridRootProps } from '../../../hooks/utils/useGridRootProps';
import {
  canColumnHaveAggregationFunction,
  getAggregationFunctionLabel,
  getAvailableAggregationFunctions,
} from '../../../hooks/features/aggregation/gridAggregationUtils';
import { gridAggregationModelSelector } from '../../../hooks/features/aggregation/gridAggregationSelectors';
import type { GridAggregationModel } from '../../../hooks/features/aggregation/gridAggregationInterfaces';

function GridColumnMenuAggregationItem(props: GridColumnMenuItemProps) {
  const { colDef } = props;
  const apiRef = useGridApiContext();
  const inputRef = React.useRef<any>(null);
  const rootProps = useGridRootProps();
  const id = useId();
  const aggregationModel = useGridSelector(apiRef, gridAggregationModelSelector);
  const availableAggregationFunctions = React.useMemo(
    () =>
      { throw new Error("STUB"); },
    [colDef, rootProps.aggregationFunctions, rootProps.dataSource],
  );
  const { native: isBaseSelectNative = false, ...baseSelectProps } =
    rootProps.slotProps?.baseSelect || {};

  const baseSelectOptionProps = rootProps.slotProps?.baseSelectOption || {};

  const selectedAggregationRule = React.useMemo(() => {
      throw new Error("STUB");
  }, [rootProps.aggregationFunctions, rootProps.dataSource, aggregationModel, colDef]);

  const handleAggregationItemChange = (event: React.ChangeEvent<unknown>) => {
      throw new Error("STUB");
  };

  const label = apiRef.current.getLocaleText('aggregationMenuItemHeader');

  const handleMenuItemKeyDown = React.useCallback((event: React.KeyboardEvent) => {
      throw new Error("STUB");
  }, []);

  const handleSelectKeyDown = React.useCallback((event: React.KeyboardEvent) => {
      throw new Error("STUB");
  }, []);

  return (
    <rootProps.slots.baseMenuItem
      inert
      iconStart={<rootProps.slots.columnMenuAggregationIcon fontSize="small" />}
      onKeyDown={handleMenuItemKeyDown}
    >
      <rootProps.slots.baseSelect
        labelId={`${id}-label`}
        id={`${id}-input`}
        value={selectedAggregationRule}
        label={label}
        onChange={handleAggregationItemChange}
        onKeyDown={handleSelectKeyDown}
        onBlur={(event) => { throw new Error("STUB"); }}
        native={isBaseSelectNative}
        fullWidth
        size="small"
        style={{ minWidth: 150 }}
        slotProps={{
          htmlInput: {
            ref: inputRef,
          },
        }}
        {...baseSelectProps}
      >
        <rootProps.slots.baseSelectOption
          {...baseSelectOptionProps}
          native={isBaseSelectNative}
          value=""
        >
          ...
        </rootProps.slots.baseSelectOption>
        {availableAggregationFunctions.map((aggFunc) => { throw new Error("STUB"); })}
      </rootProps.slots.baseSelect>
    </rootProps.slots.baseMenuItem>
  );
}

GridColumnMenuAggregationItem.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  colDef: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
} as any;

export { GridColumnMenuAggregationItem };
