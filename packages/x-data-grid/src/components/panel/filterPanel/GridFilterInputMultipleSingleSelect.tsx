import * as React from 'react';
import PropTypes from 'prop-types';
import useId from '@mui/utils/useId';
import type { AutocompleteProps } from '../../../models/gridBaseSlots';
import { useGridRootProps } from '../../../hooks/utils/useGridRootProps';
import type { GridFilterInputValueProps } from '../../../models/gridFilterInputComponent';
import type { GridSingleSelectColDef, ValueOptions } from '../../../models/colDef/gridColDef';
import { getValueOptions, isSingleSelectColDef } from './filterPanelUtils';

export type GridFilterInputMultipleSingleSelectProps = GridFilterInputValueProps<
  Omit<AutocompleteProps<ValueOptions, true, false, true>, 'options'>
> & {
  type?: 'singleSelect';
};

function GridFilterInputMultipleSingleSelect(props: GridFilterInputMultipleSingleSelectProps) {
  const { item, applyValue, type, apiRef, focusElementRef, slotProps, disableDebounce, ...other } =
    props;

  const id = useId();
  const rootProps = useGridRootProps();

  const resolvedColumn = apiRef.current.getColumn(item.field) as GridSingleSelectColDef | undefined;

  const getOptionValue = resolvedColumn!.getOptionValue;
  const getOptionLabel = resolvedColumn!.getOptionLabel;

  const isOptionEqualToValue = React.useCallback(
    (option: ValueOptions, value: ValueOptions) => { throw new Error("STUB"); },
    [getOptionValue],
  );

  const resolvedValueOptions = React.useMemo(() => {
      throw new Error("STUB");
  }, [resolvedColumn]);

  // The value is computed from the item.value and used directly
  // If it was done by a useEffect/useState, the Autocomplete could receive incoherent value and options
  const filteredValues = React.useMemo(() => {
      throw new Error("STUB");
  }, [getOptionValue, item.value, resolvedValueOptions]);

  const handleChange = React.useCallback<
    NonNullable<AutocompleteProps<ValueOptions, true, false, true>['onChange']>
  >(
    (event, value) => {
          throw new Error("STUB");
      },
    [applyValue, item, getOptionValue],
  );

  if (!resolvedColumn || !isSingleSelectColDef(resolvedColumn)) {
    return null;
  }

  const BaseAutocomplete = rootProps.slots.baseAutocomplete as React.JSXElementConstructor<
    AutocompleteProps<ValueOptions, true, false, true>
  >;

  return (
    <BaseAutocomplete
      multiple
      options={resolvedValueOptions}
      isOptionEqualToValue={isOptionEqualToValue}
      id={id}
      value={filteredValues}
      onChange={handleChange}
      getOptionLabel={getOptionLabel}
      label={apiRef.current.getLocaleText('filterPanelInputLabel')}
      placeholder={apiRef.current.getLocaleText('filterPanelInputPlaceholder')}
      slotProps={{
        textField: {
          type: type || 'text',
          inputRef: focusElementRef,
        },
      }}
      {...other}
      {...slotProps?.root}
    />
  );
}

GridFilterInputMultipleSingleSelect.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  apiRef: PropTypes.shape({
    current: PropTypes.object.isRequired,
  }).isRequired,
  applyValue: PropTypes.func.isRequired,
  className: PropTypes.string,
  clearButton: PropTypes.node,
  disabled: PropTypes.bool,
  /**
   * If `true`, filter value changes are applied immediately without debouncing.
   * @default false
   */
  disableDebounce: PropTypes.bool,
  focusElementRef: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([
    PropTypes.func,
    PropTypes.object,
  ]),
  headerFilterMenu: PropTypes.node,
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({
      current: (props, propName) => {
            throw new Error("STUB");
        },
    }),
  ]),
  /**
   * It is `true` if the filter either has a value or an operator with no value
   * required is selected (for example `isEmpty`)
   */
  isFilterActive: PropTypes.bool,
  item: PropTypes.shape({
    field: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    operator: PropTypes.string.isRequired,
    value: PropTypes.any,
  }).isRequired,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  slotProps: PropTypes.object,
  tabIndex: PropTypes.number,
  type: PropTypes.oneOf(['singleSelect']),
} as any;

export { GridFilterInputMultipleSingleSelect };
