'use client';
import * as React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import useSlotProps from '@mui/utils/useSlotProps';
import { styled, useThemeProps } from '@mui/material/styles';
import useEventCallback from '@mui/utils/useEventCallback';
import composeClasses from '@mui/utils/composeClasses';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import useForkRef from '@mui/utils/useForkRef';
import useEnhancedEffect from '@mui/utils/useEnhancedEffect';
import { usePickerAdapter, usePickerTranslations } from '../hooks';
import { useNow } from '../internals/hooks/useUtils';
import { createIsAfterIgnoreDatePart } from '../internals/utils/time-utils';
import { PickerViewRoot } from '../internals/components/PickerViewRoot';
import type { DigitalClockClasses } from './digitalClockClasses';
import { getDigitalClockUtilityClass } from './digitalClockClasses';
import type { DigitalClockOwnerState, DigitalClockProps } from './DigitalClock.types';
import { useViews } from '../internals/hooks/useViews';
import type { PickerValidDate } from '../models';
import { DIGITAL_CLOCK_VIEW_HEIGHT } from '../internals/constants/dimensions';
import { useControlledValue } from '../internals/hooks/useControlledValue';
import { singleItemValueManager } from '../internals/utils/valueManagers';
import { useClockReferenceDate } from '../internals/hooks/useClockReferenceDate';
import { getFocusedListItemIndex } from '../internals/utils/utils';
import { usePickerPrivateContext } from '../internals/hooks/usePickerPrivateContext';

const useUtilityClasses = (classes: Partial<DigitalClockClasses> | undefined) => {
  const slots = {
    root: ['root'],
    list: ['list'],
    item: ['item'],
  };

  return composeClasses(slots, getDigitalClockUtilityClass, classes);
};

const DigitalClockRoot = styled(PickerViewRoot, {
  name: 'MuiDigitalClock',
  slot: 'Root',
})<{ ownerState: DigitalClockOwnerState }>({
  overflowY: 'auto',
  width: '100%',
  scrollbarWidth: 'thin',
  '@media (prefers-reduced-motion: no-preference)': {
    scrollBehavior: 'auto',
  },
  maxHeight: DIGITAL_CLOCK_VIEW_HEIGHT,
  variants: [
    {
      props: { hasDigitalClockAlreadyBeenRendered: true },
      style: {
        '@media (prefers-reduced-motion: no-preference)': {
          scrollBehavior: 'smooth',
        },
      },
    },
  ],
});

const DigitalClockList = styled(MenuList, {
  name: 'MuiDigitalClock',
  slot: 'List',
})({
  padding: 0,
});

export const DigitalClockItem = styled(MenuItem, {
  name: 'MuiDigitalClock',
  slot: 'Item',
  shouldForwardProp: (prop) => { throw new Error("STUB"); },
})(({ theme }) => { throw new Error("STUB"); });

type DigitalClockComponent = ((
  props: DigitalClockProps & React.RefAttributes<HTMLDivElement>,
) => React.JSX.Element) & { propTypes?: any };

/**
 * Demos:
 *
 * - [TimePicker](https://mui.com/x/react-date-pickers/time-picker/)
 * - [DigitalClock](https://mui.com/x/react-date-pickers/digital-clock/)
 *
 * API:
 *
 * - [DigitalClock API](https://mui.com/x/api/date-pickers/digital-clock/)
 */
export const DigitalClock = React.forwardRef(function DigitalClock(
  inProps: DigitalClockProps,
  ref: React.Ref<HTMLDivElement>,
) {
    throw new Error("STUB");
}) as DigitalClockComponent;

DigitalClock.propTypes /* remove-proptypes */ = {
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
  focusedView: PropTypes.oneOf(['hours']),
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
  openTo: PropTypes.oneOf(['hours']),
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
  /**
   * If `true`, disabled digital clock items will not be rendered.
   * @default false
   */
  skipDisabled: PropTypes.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: PropTypes.object,
  /**
   * Overrideable component slots.
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
   * The time steps between two time options.
   * For example, if `timeStep = 45`, then the available time options will be `[00:00, 00:45, 01:30, 02:15, 03:00, etc.]`.
   * @default 30
   */
  timeStep: PropTypes.number,
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
  view: PropTypes.oneOf(['hours']),
  /**
   * Available views.
   * @default ['hours']
   */
  views: PropTypes.arrayOf(PropTypes.oneOf(['hours'])),
} as any;
