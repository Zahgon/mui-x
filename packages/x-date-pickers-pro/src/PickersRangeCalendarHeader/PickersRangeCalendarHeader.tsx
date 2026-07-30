'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { PickersCalendarHeader } from '@mui/x-date-pickers/PickersCalendarHeader';
import {
  PickersArrowSwitcher,
  useNextMonthDisabled,
  usePreviousMonthDisabled,
} from '@mui/x-date-pickers/internals';
import { usePickerAdapter, usePickerTranslations } from '@mui/x-date-pickers/hooks';
import type { PickersRangeCalendarHeaderProps } from './PickersRangeCalendarHeader.types';

type PickersRangeCalendarHeaderComponent = ((
  props: PickersRangeCalendarHeaderProps & React.RefAttributes<HTMLDivElement>,
) => React.JSX.Element) & { propTypes?: any };

const PickersRangeCalendarHeaderContentMultipleCalendars = styled(PickersArrowSwitcher, {
  slot: 'internal',
})({
  padding: '12px 16px 4px 16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const PickersRangeCalendarHeader = React.forwardRef(function PickersRangeCalendarHeader(
  props: PickersRangeCalendarHeaderProps,
  ref: React.Ref<HTMLDivElement>,
) {
    throw new Error("STUB");
}) as PickersRangeCalendarHeaderComponent;

PickersRangeCalendarHeader.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The number of calendars rendered.
   */
  calendars: PropTypes.oneOf([1, 2, 3]).isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  className: PropTypes.string,
  currentMonth: PropTypes.object.isRequired,
  disabled: PropTypes.bool,
  disableFuture: PropTypes.bool,
  disablePast: PropTypes.bool,
  /**
   * Format used to display the date.
   * @default `${adapter.formats.month} ${adapter.formats.year}`
   */
  format: PropTypes.string,
  /**
   * Id of the calendar text element.
   * It is used to establish an `aria-labelledby` relationship with the calendar `grid` element.
   */
  labelId: PropTypes.string,
  maxDate: PropTypes.object.isRequired,
  minDate: PropTypes.object.isRequired,
  /**
   * Month used for this header.
   */
  month: PropTypes.object.isRequired,
  /**
   * Index of the month used for this header.
   */
  monthIndex: PropTypes.number.isRequired,
  onMonthChange: PropTypes.func.isRequired,
  onViewChange: PropTypes.func,
  reduceAnimations: PropTypes.bool.isRequired,
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
  timezone: PropTypes.string.isRequired,
  view: PropTypes.oneOf(['day', 'month', 'year']).isRequired,
  views: PropTypes.arrayOf(PropTypes.oneOf(['day', 'month', 'year']).isRequired).isRequired,
} as any;

export { PickersRangeCalendarHeader };
