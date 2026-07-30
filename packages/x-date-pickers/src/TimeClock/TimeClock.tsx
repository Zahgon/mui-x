'use client';
import * as React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { styled, useThemeProps } from '@mui/material/styles';
import composeClasses from '@mui/utils/composeClasses';
import useId from '@mui/utils/useId';
import { usePickerAdapter, usePickerTranslations } from '../hooks';
import { useNow } from '../internals/hooks/useUtils';
import { PickersArrowSwitcher } from '../internals/components/PickersArrowSwitcher';
import { convertValueToMeridiem, createIsAfterIgnoreDatePart } from '../internals/utils/time-utils';
import { useViews } from '../internals/hooks/useViews';
import type { PickerSelectionState } from '../internals/hooks/usePicker';
import { useMeridiemMode } from '../internals/hooks/date-helpers-hooks';
import type { PickerOwnerState, PickerValidDate, TimeView } from '../models';
import { PickerViewRoot } from '../internals/components/PickerViewRoot';
import type { TimeClockClasses } from './timeClockClasses';
import { getTimeClockUtilityClass } from './timeClockClasses';
import type { ClockProps } from './Clock';
import { Clock } from './Clock';
import type { TimeClockProps } from './TimeClock.types';
import { getHourNumbers, getMinutesNumbers } from './ClockNumbers';
import { useControlledValue } from '../internals/hooks/useControlledValue';
import { singleItemValueManager } from '../internals/utils/valueManagers';
import { useClockReferenceDate } from '../internals/hooks/useClockReferenceDate';
import { usePickerPrivateContext } from '../internals/hooks/usePickerPrivateContext';

const useUtilityClasses = (classes: Partial<TimeClockClasses> | undefined) => {
  const slots = {
    root: ['root'],
    arrowSwitcher: ['arrowSwitcher'],
  };

  return composeClasses(slots, getTimeClockUtilityClass, classes);
};

const TimeClockRoot = styled(PickerViewRoot, {
  name: 'MuiTimeClock',
  slot: 'Root',
})<{ ownerState: PickerOwnerState }>({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
});

const TimeClockArrowSwitcher = styled(PickersArrowSwitcher, {
  name: 'MuiTimeClock',
  slot: 'ArrowSwitcher',
})<{ ownerState: PickerOwnerState }>({
  position: 'absolute',
  right: 12,
  top: 15,
});

type TimeClockComponent = ((
  props: TimeClockProps & React.RefAttributes<HTMLDivElement>,
) => React.JSX.Element) & { propTypes?: any };

const TIME_CLOCK_DEFAULT_VIEWS: readonly TimeView[] = ['hours', 'minutes'];

/**
 * Demos:
 *
 * - [TimePicker](https://mui.com/x/react-date-pickers/time-picker/)
 * - [TimeClock](https://mui.com/x/react-date-pickers/time-clock/)
 *
 * API:
 *
 * - [TimeClock API](https://mui.com/x/api/date-pickers/time-clock/)
 */
export const TimeClock = React.forwardRef(function TimeClock(
  inProps: TimeClockProps<TimeView>,
  ref: React.Ref<HTMLDivElement>,
) {
    throw new Error("STUB");
}) as TimeClockComponent;

TimeClock.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * 12h/24h view for hour selection clock.
   * @default adapter.is12HourCycleInCurrentLocale()
   */
  ampm: PropTypes.bool,
  /**
   * Display ampm controls under the clock (instead of in the toolbar).
   * @default false
   */
  ampmInClock: PropTypes.bool,
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: PropTypes.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  className: PropTypes.string,
  /**
   * The default selected value.
   * Used when the component is not controlled.
   */
  defaultValue: PropTypes.object,
  /**
   * If `true`, the component is disabled.
   * When disabled, the value cannot be changed and no interaction is possible.
   * @default false
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: PropTypes.bool,
  /**
   * Do not ignore date part when validating min/max time.
   * @default false
   */
  disableIgnoringDatePartForTimeValidation: PropTypes.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: PropTypes.bool,
  /**
   * Controlled focused view.
   */
  focusedView: PropTypes.oneOf(['hours', 'minutes', 'seconds']),
  /**
   * Maximal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  maxTime: PropTypes.object,
  /**
   * Minimal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  minTime: PropTypes.object,
  /**
   * Step over minutes.
   * @default 1
   */
  minutesStep: PropTypes.number,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @template TView The view type. Will be one of date or time views.
   * @param {TValue} value The new value.
   * @param {PickerSelectionState | undefined} selectionState Indicates if the date selection is complete.
   * @param {TView | undefined} selectedView Indicates the view in which the selection has been made.
   */
  onChange: PropTypes.func,
  /**
   * Callback fired on focused view change.
   * @template TView Type of the view. It will vary based on the Picker type and the `views` it uses.
   * @param {TView} view The new view to focus or not.
   * @param {boolean} hasFocus `true` if the view should be focused.
   */
  onFocusedViewChange: PropTypes.func,
  /**
   * Callback fired on view change.
   * @template TView Type of the view. It will vary based on the Picker type and the `views` it uses.
   * @param {TView} view The new view.
   */
  onViewChange: PropTypes.func,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: PropTypes.oneOf(['hours', 'minutes', 'seconds']),
  /**
   * If `true`, the component is read-only.
   * When read-only, the value cannot be changed but the user can interact with the interface.
   * @default false
   */
  readOnly: PropTypes.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid time using the validation props, except callbacks such as `shouldDisableTime`.
   */
  referenceDate: PropTypes.object,
  /**
   * Disable specific time.
   * @param {PickerValidDate} value The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   */
  shouldDisableTime: PropTypes.func,
  showViewSwitcher: PropTypes.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: PropTypes.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: PropTypes.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])),
    PropTypes.func,
    PropTypes.object,
  ]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: PropTypes.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: PropTypes.object,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: PropTypes.oneOf(['hours', 'minutes', 'seconds']),
  /**
   * Available views.
   * @default ['hours', 'minutes']
   */
  views: PropTypes.arrayOf(PropTypes.oneOf(['hours', 'minutes', 'seconds']).isRequired),
} as any;
