import * as React from 'react';
import useEventCallback from '@mui/utils/useEventCallback';
import useControlled from '@mui/utils/useControlled';
import type { PickerRangeValue, PickerValueManager, PickerValidValue } from '../models';
import type { PickersTimezone, PickerValidDate } from '../../models';
import { usePickerAdapter } from '../../hooks/usePickerAdapter';

/**
 * Hooks controlling the value while making sure that:
 * - The value returned by `onChange` always have the timezone of `props.value` or `props.defaultValue` if defined
 * - The value rendered is always the one from `props.timezone` if defined
 */
export const useControlledValue = <
  TValue extends PickerValidValue,
  TChange extends (...params: any[]) => void,
>({
  name,
  timezone: timezoneProp,
  value: valueProp,
  defaultValue,
  referenceDate,
  onChange: onChangeProp,
  valueManager,
}: UseControlledValueWithTimezoneParameters<TValue, TChange>) => {
  const adapter = usePickerAdapter();

  const [valueWithInputTimezone, setValue] = useControlled({
    name,
    state: 'value',
    controlled: valueProp,
    default: defaultValue ?? valueManager.emptyValue,
  });

  const inputTimezone = React.useMemo(
    () => { throw new Error("STUB"); },
    [adapter, valueManager, valueWithInputTimezone],
  );

  const setInputTimezone = useEventCallback((newValue: TValue) => {
      throw new Error("STUB");
  });

  const timezoneToRender = React.useMemo(() => {
      throw new Error("STUB");
  }, [timezoneProp, inputTimezone, referenceDate, adapter]);

  const valueWithTimezoneToRender = React.useMemo(
    () => { throw new Error("STUB"); },
    [valueManager, adapter, timezoneToRender, valueWithInputTimezone],
  );

  const handleValueChange = useEventCallback((newValue: TValue, ...otherParams: any[]) => {
      throw new Error("STUB");
  }) as TChange;

  return {
    value: valueWithTimezoneToRender,
    handleValueChange,
    timezone: timezoneToRender,
  };
};

interface UseValueWithTimezoneParameters<
  TValue extends PickerValidValue,
  TChange extends (...params: any[]) => void,
> {
  timezone: PickersTimezone | undefined;
  value: TValue | undefined;
  defaultValue: TValue | undefined;
  /**
   * The reference date as passed to `props.referenceDate`.
   * It does not need to have its default value.
   * This is only used to determine the timezone to use when `props.value` and `props.defaultValue` are not defined.
   */
  referenceDate?: TValue extends PickerRangeValue ? TValue | PickerValidDate : PickerValidDate;
  onChange: TChange | undefined;
  valueManager: PickerValueManager<TValue, any>;
}

interface UseControlledValueWithTimezoneParameters<
  TValue extends PickerValidValue,
  TChange extends (...params: any[]) => void,
> extends UseValueWithTimezoneParameters<TValue, TChange> {
  name: string;
}
