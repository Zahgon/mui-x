'use client';
import * as React from 'react';
import { warnOnce } from '@mui/x-internals/warning';
import useEventCallback from '@mui/utils/useEventCallback';
import type {
  DateOrTimeViewWithMeridiem,
  PickerValidValue,
  PickerValueManager,
} from '../../../models';
import type { PickerSelectionState, UsePickerProps, UsePickerState } from '../usePicker.types';
import { useControlledValue } from '../../useControlledValue';
import { usePickerAdapter } from '../../../../hooks/usePickerAdapter';
import type { InferError, PickerChangeHandlerContext } from '../../../../models';
import type { SetValueActionOptions } from '../../../components/PickerProvider';
import type { Validator } from '../../../../validation';
import { useValidation } from '../../../../validation';

export function useValueAndOpenStates<
  TValue extends PickerValidValue,
  TView extends DateOrTimeViewWithMeridiem,
  TExternalProps extends UsePickerProps<TValue, TView, any, any>,
>(parameters: UsePickerDateStateParameters<TValue, TView, TExternalProps>) {
  type TError = InferError<TExternalProps>;

  const { props, valueManager, validator } = parameters;
  const {
    value: valueProp,
    defaultValue: defaultValueProp,
    onChange,
    referenceDate,
    timezone: timezoneProp,
    onAccept,
    closeOnSelect,
    open: openProp,
    onOpen,
    onClose,
  } = props;

  const { current: defaultValue } = React.useRef(defaultValueProp);
  const { current: isValueControlled } = React.useRef(valueProp !== undefined);
  const { current: isOpenControlled } = React.useRef(openProp !== undefined);
  const adapter = usePickerAdapter();

  if (process.env.NODE_ENV !== 'production') {
    if ((props as any).renderInput != null) {
      warnOnce([
        'MUI X: The `renderInput` prop has been removed in version 6.0 of the Date and Time Pickers.',
        'You can replace it with the `textField` component slot in most cases.',
        'For more information, please have a look at the migration guide (https://mui.com/x/migration/migration-pickers-v5/#input-renderer-required-in-v5).',
      ]);
    }
  }

  /* eslint-disable react-hooks/rules-of-hooks, react-hooks/exhaustive-deps */
  if (process.env.NODE_ENV !== 'production') {
    React.useEffect(() => {
        throw new Error("STUB");
    }, [valueProp]);

    React.useEffect(() => {
        throw new Error("STUB");
    }, [JSON.stringify(defaultValue)]);
  }
  /* eslint-enable react-hooks/rules-of-hooks, react-hooks/exhaustive-deps */

  const { timezone, value, handleValueChange } = useControlledValue({
    name: 'a picker component',
    timezone: timezoneProp,
    value: valueProp,
    defaultValue,
    referenceDate,
    onChange,
    valueManager,
  });

  const [state, setState] = React.useState<UsePickerState<TValue>>(() => { throw new Error("STUB"); });

  const { getValidationErrorForNewValue } = useValidation({
    props,
    validator,
    timezone,
    value,
    onError: props.onError,
  });

  const setOpen = useEventCallback((action: React.SetStateAction<boolean>) => {
      throw new Error("STUB");
  });

  const setValue = useEventCallback((newValue: TValue, options?: SetValueActionOptions<TError>) => {
      throw new Error("STUB");
  });

  // If `prop.value` changes, we update the state to reflect the new value
  if (value !== state.lastExternalValue) {
    setState((prevState) => { throw new Error("STUB"); });
  }

  const setValueFromView = useEventCallback(
    (newValue: TValue, selectionState: PickerSelectionState = 'partial') => {
          throw new Error("STUB");
      },
  );

  // It is required to update inner state in useEffect in order to avoid situation when
  // Our component is not mounted yet, but `open` state is set to `true` (for example initially opened)
  React.useEffect(() => {
      throw new Error("STUB");
  }, [isOpenControlled, openProp]);

  const viewValue = React.useMemo(
    () =>
      { throw new Error("STUB"); },
    [adapter, valueManager, state.clockShallowValue, value],
  );

  return { timezone, state, setValue, setValueFromView, setOpen, value, viewValue };
}

interface UsePickerDateStateParameters<
  TValue extends PickerValidValue,
  TView extends DateOrTimeViewWithMeridiem,
  TExternalProps extends UsePickerProps<TValue, TView, any, any>,
> {
  props: TExternalProps;
  valueManager: PickerValueManager<TValue, InferError<TExternalProps>>;
  validator: Validator<TValue, InferError<TExternalProps>, TExternalProps>;
}
