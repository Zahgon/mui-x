'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useRtl } from '@mui/system/RtlProvider';
import { shouldForwardProp } from '@mui/system/createStyled';
import { styled, useThemeProps } from '@mui/material/styles';
import useForkRef from '@mui/utils/useForkRef';
import composeClasses from '@mui/utils/composeClasses';
import useControlled from '@mui/utils/useControlled';
import useEventCallback from '@mui/utils/useEventCallback';
import type { DefaultizedProps } from '@mui/x-internals/types';
import { YearCalendarButton } from './YearCalendarButton';
import { useNow } from '../internals/hooks/useUtils';
import type { YearCalendarClasses } from './yearCalendarClasses';
import { getYearCalendarUtilityClass } from './yearCalendarClasses';
import type { YearCalendarProps } from './YearCalendar.types';
import { singleItemValueManager } from '../internals/utils/valueManagers';
import { SECTION_TYPE_GRANULARITY } from '../internals/utils/getDefaultReferenceDate';
import { useControlledValue } from '../internals/hooks/useControlledValue';
import { DIALOG_WIDTH, MAX_CALENDAR_HEIGHT } from '../internals/constants/dimensions';
import type { PickerOwnerState, PickerValidDate } from '../models';
import { usePickerPrivateContext } from '../internals/hooks/usePickerPrivateContext';
import { useApplyDefaultValuesToDateValidationProps } from '../managers/useDateManager';
import { usePickerAdapter } from '../hooks/usePickerAdapter';

const useUtilityClasses = (classes: Partial<YearCalendarClasses> | undefined) => {
  const slots = {
    root: ['root'],
  };

  return composeClasses(slots, getYearCalendarUtilityClass, classes);
};

function useYearCalendarDefaultizedProps(
  props: YearCalendarProps,
  name: string,
): DefaultizedProps<
  YearCalendarProps,
  'minDate' | 'maxDate' | 'disableFuture' | 'disablePast' | 'yearsPerRow' | 'yearsOrder'
> {
  const themeProps = useThemeProps({ props, name });
  const validationProps = useApplyDefaultValuesToDateValidationProps(themeProps);

  return {
    ...themeProps,
    ...validationProps,
    yearsPerRow: themeProps.yearsPerRow ?? 3,
    yearsOrder: themeProps.yearsOrder ?? 'asc',
  };
}

const YearCalendarRoot = styled('div', {
  name: 'MuiYearCalendar',
  slot: 'Root',
  shouldForwardProp: (prop) => { throw new Error("STUB"); },
})<{ ownerState: PickerOwnerState; yearsPerRow: 3 | 4 }>({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-evenly',
  rowGap: 12,
  padding: '6px 0',
  overflowY: 'auto',
  height: '100%',
  width: DIALOG_WIDTH,
  maxHeight: MAX_CALENDAR_HEIGHT,
  // avoid padding increasing width over defined
  boxSizing: 'border-box',
  position: 'relative',
  variants: [
    {
      props: { yearsPerRow: 3 },
      style: { columnGap: 24 },
    },
    {
      props: { yearsPerRow: 4 },
      style: { columnGap: 0, padding: '0 2px' },
    },
  ],
});

const YearCalendarButtonFiller = styled('div', {
  name: 'MuiYearCalendar',
  slot: 'ButtonFiller',
})({
  height: 36,
  width: 72,
});

type YearCalendarComponent = ((props: YearCalendarProps) => React.JSX.Element) & {
  propTypes?: any;
};

/**
 * Demos:
 *
 * - [DateCalendar](https://mui.com/x/react-date-pickers/date-calendar/)
 *
 * API:
 *
 * - [YearCalendar API](https://mui.com/x/api/date-pickers/year-calendar/)
 */
export const YearCalendar = React.forwardRef(function YearCalendar(
  inProps: YearCalendarProps,
  ref: React.Ref<HTMLDivElement>,
) {
    throw new Error("STUB");
}) as YearCalendarComponent;

YearCalendar.propTypes /* remove-proptypes */ = {
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
   * Callback fired when the value changes.
   * @param {PickerValidDate} value The new value.
   */
  onChange: PropTypes.func,
  onFocusedViewChange: PropTypes.func,
  onYearFocus: PropTypes.func,
  /**
   * If `true`, the component is read-only.
   * When read-only, the value cannot be changed but the user can interact with the interface.
   * @default false
   */
  readOnly: PropTypes.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid year using the validation props, except callbacks such as `shouldDisableYear`.
   */
  referenceDate: PropTypes.object,
  /**
   * Disable specific year.
   * @param {PickerValidDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: PropTypes.func,
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
   * Years are displayed in ascending (chronological) order by default.
   * If `desc`, years are displayed in descending order.
   * @default 'asc'
   */
  yearsOrder: PropTypes.oneOf(['asc', 'desc']),
  /**
   * Years rendered per row.
   * @default 3
   */
  yearsPerRow: PropTypes.oneOf([3, 4]),
} as any;
