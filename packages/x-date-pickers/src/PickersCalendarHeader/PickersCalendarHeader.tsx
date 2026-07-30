'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Fade from '@mui/material/Fade';
import { styled, useThemeProps } from '@mui/material/styles';
import useSlotProps from '@mui/utils/useSlotProps';
import composeClasses from '@mui/utils/composeClasses';
import IconButton from '@mui/material/IconButton';
import { usePickerAdapter, usePickerTranslations } from '../hooks';
import { PickersFadeTransitionGroup } from '../DateCalendar/PickersFadeTransitionGroup';
import { ArrowDropDownIcon } from '../icons';
import { PickersArrowSwitcher } from '../internals/components/PickersArrowSwitcher';
import {
  usePreviousMonthDisabled,
  useNextMonthDisabled,
} from '../internals/hooks/date-helpers-hooks';
import type { PickersCalendarHeaderClasses } from './pickersCalendarHeaderClasses';
import {
  getPickersCalendarHeaderUtilityClass,
  pickersCalendarHeaderClasses,
} from './pickersCalendarHeaderClasses';
import type { PickersCalendarHeaderProps } from './PickersCalendarHeader.types';
import type { PickerOwnerState } from '../models/pickers';
import { usePickerPrivateContext } from '../internals/hooks/usePickerPrivateContext';
import type { DateView } from '../models/views';

const useUtilityClasses = (classes: Partial<PickersCalendarHeaderClasses> | undefined) => {
  const slots = {
    root: ['root'],
    labelContainer: ['labelContainer'],
    label: ['label'],
    switchViewButton: ['switchViewButton'],
    switchViewIcon: ['switchViewIcon'],
  };

  return composeClasses(slots, getPickersCalendarHeaderUtilityClass, classes);
};

const PickersCalendarHeaderRoot = styled('div', {
  name: 'MuiPickersCalendarHeader',
  slot: 'Root',
})<{
  ownerState: PickerOwnerState;
}>({
  display: 'flex',
  alignItems: 'center',
  marginTop: 12,
  marginBottom: 4,
  paddingLeft: 24,
  paddingRight: 12,
  // prevent jumping in safari
  maxHeight: 40,
  minHeight: 40,
});

const PickersCalendarHeaderLabelContainer = styled('div', {
  name: 'MuiPickersCalendarHeader',
  slot: 'LabelContainer',
})<{
  ownerState: PickerOwnerState;
}>(({ theme }) => { throw new Error("STUB"); });

const PickersCalendarHeaderLabel = styled('div', {
  name: 'MuiPickersCalendarHeader',
  slot: 'Label',
})<{
  ownerState: PickerOwnerState;
}>({
  marginRight: 6,
});

const PickersCalendarHeaderSwitchViewButton = styled(IconButton, {
  name: 'MuiPickersCalendarHeader',
  slot: 'SwitchViewButton',
})<{
  ownerState: PickerOwnerState & { view: DateView };
}>({
  marginRight: 'auto',
  variants: [
    {
      props: { view: 'year' },
      style: {
        [`.${pickersCalendarHeaderClasses.switchViewIcon}`]: {
          transform: 'rotate(180deg)',
        },
      },
    },
  ],
});

const PickersCalendarHeaderSwitchViewIcon = styled(ArrowDropDownIcon, {
  name: 'MuiPickersCalendarHeader',
  slot: 'SwitchViewIcon',
})<{
  ownerState: PickerOwnerState;
}>(({ theme }) => { throw new Error("STUB"); });

type PickersCalendarHeaderComponent = ((
  props: PickersCalendarHeaderProps & React.RefAttributes<HTMLDivElement>,
) => React.JSX.Element) & { propTypes?: any };

/**
 * Demos:
 *
 * - [DateCalendar](https://mui.com/x/react-date-pickers/date-calendar/)
 * - [DateRangeCalendar](https://mui.com/x/react-date-pickers/date-range-calendar/)
 * - [Custom slots and subcomponents](https://mui.com/x/react-date-pickers/custom-components/)
 *
 * API:
 *
 * - [PickersCalendarHeader API](https://mui.com/x/api/date-pickers/pickers-calendar-header/)
 */
const PickersCalendarHeader = React.forwardRef(function PickersCalendarHeader(
  inProps: PickersCalendarHeaderProps,
  ref: React.Ref<HTMLDivElement>,
) {
    throw new Error("STUB");
}) as PickersCalendarHeaderComponent;

PickersCalendarHeader.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
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

export { PickersCalendarHeader };
