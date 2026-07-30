'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useRtl } from '@mui/system/RtlProvider';
import { shouldForwardProp } from '@mui/system/createStyled';
import { styled, useThemeProps } from '@mui/material/styles';
import useControlled from '@mui/utils/useControlled';
import composeClasses from '@mui/utils/composeClasses';
import useEventCallback from '@mui/utils/useEventCallback';
import type { DefaultizedProps } from '@mui/x-internals/types';
import { MonthCalendarButton } from './MonthCalendarButton';
import { useNow } from '../internals/hooks/useUtils';
import type { MonthCalendarClasses } from './monthCalendarClasses';
import { getMonthCalendarUtilityClass } from './monthCalendarClasses';
import { getMonthsInYear } from '../internals/utils/date-utils';
import type { MonthCalendarProps } from './MonthCalendar.types';
import { singleItemValueManager } from '../internals/utils/valueManagers';
import { SECTION_TYPE_GRANULARITY } from '../internals/utils/getDefaultReferenceDate';
import { useControlledValue } from '../internals/hooks/useControlledValue';
import { DIALOG_WIDTH } from '../internals/constants/dimensions';
import type { MuiPickersAdapter, PickerOwnerState, PickerValidDate } from '../models';
import { usePickerPrivateContext } from '../internals/hooks/usePickerPrivateContext';
import { useApplyDefaultValuesToDateValidationProps } from '../managers/useDateManager';
import { usePickerAdapter } from '../hooks/usePickerAdapter';

const useUtilityClasses = (classes: Partial<MonthCalendarClasses> | undefined) => {
  const slots = {
    root: ['root'],
  };

  return composeClasses(slots, getMonthCalendarUtilityClass, classes);
};

export function useMonthCalendarDefaultizedProps(
  props: MonthCalendarProps,
  name: string,
): DefaultizedProps<
  MonthCalendarProps,
  'minDate' | 'maxDate' | 'disableFuture' | 'disablePast' | 'monthsPerRow'
> {
  const themeProps = useThemeProps({ props, name });
  const validationProps = useApplyDefaultValuesToDateValidationProps(themeProps);

  return {
    ...themeProps,
    ...validationProps,
    monthsPerRow: themeProps.monthsPerRow ?? 3,
  };
}

const isSameMonth = (
  monthA: number,
  monthB: number | null,
  yearA: PickerValidDate,
  yearB: PickerValidDate | null,
  adapter: MuiPickersAdapter,
) => Boolean(monthA === monthB && yearB && adapter.isSameYear(yearA, yearB));

const MonthCalendarRoot = styled('div', {
  name: 'MuiMonthCalendar',
  slot: 'Root',
  shouldForwardProp: (prop) => { throw new Error("STUB"); },
})<{ ownerState: PickerOwnerState; monthsPerRow: 3 | 4 }>({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-evenly',
  rowGap: 16,
  padding: '8px 0',
  width: DIALOG_WIDTH,
  // avoid padding increasing width over defined
  boxSizing: 'border-box',
  variants: [
    {
      props: { monthsPerRow: 3 },
      style: { columnGap: 24 },
    },
    {
      props: { monthsPerRow: 4 },
      style: { columnGap: 0 },
    },
  ],
});

type MonthCalendarComponent = ((
  props: MonthCalendarProps & React.RefAttributes<HTMLDivElement>,
) => React.JSX.Element) & { propTypes?: any };

/**
 * Demos:
 *
 * - [DateCalendar](https://mui.com/x/react-date-pickers/date-calendar/)
 *
 * API:
 *
 * - [MonthCalendar API](https://mui.com/x/api/date-pickers/month-calendar/)
 */
export const MonthCalendar = React.forwardRef(function MonthCalendar(
  inProps: MonthCalendarProps,
  ref: React.Ref<HTMLDivElement>,
) {
    throw new Error("STUB");
}) as MonthCalendarComponent;

MonthCalendar.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  autoFocus: PropTypes.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  className: PropTypes.string,
  currentMonth: PropTypes.object,
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
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: PropTypes.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: PropTypes.bool,
  gridLabelId: PropTypes.string,
  hasFocus: PropTypes.bool,
  /**
   * Maximal selectable date.
   * @default 2099-12-31
   */
  maxDate: PropTypes.object,
  /**
   * Minimal selectable date.
   * @default 1900-01-01
   */
  minDate: PropTypes.object,
  /**
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: PropTypes.oneOf([3, 4]),
  /**
   * Callback fired when the value changes.
   * @param {PickerValidDate} value The new value.
   */
  onChange: PropTypes.func,
  onFocusedViewChange: PropTypes.func,
  onMonthFocus: PropTypes.func,
  /**
   * If `true`, the component is read-only.
   * When read-only, the value cannot be changed but the user can interact with the interface.
   * @default false
   */
  readOnly: PropTypes.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid month using the validation props, except callbacks such as `shouldDisableMonth`.
   */
  referenceDate: PropTypes.object,
  /**
   * Disable specific month.
   * @param {PickerValidDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: PropTypes.func,
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
} as any;
