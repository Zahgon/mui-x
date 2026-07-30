'use client';
import * as React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { styled, useThemeProps } from '@mui/material/styles';
import composeClasses from '@mui/utils/composeClasses';
import useEventCallback from '@mui/utils/useEventCallback';
import { TimeIcon, DateRangeIcon, ArrowLeftIcon, ArrowRightIcon } from '@mui/x-date-pickers/icons';
import type {
  DateOrTimeViewWithMeridiem,
  ExportedBaseTabsProps,
} from '@mui/x-date-pickers/internals';
import { isDatePickerView, usePickerPrivateContext } from '@mui/x-date-pickers/internals';
import type { PickerOwnerState } from '@mui/x-date-pickers/models';
import { usePickerContext, usePickerTranslations } from '@mui/x-date-pickers/hooks';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import type { DateTimeRangePickerTabsClasses } from './dateTimeRangePickerTabsClasses';
import { getDateTimeRangePickerTabsUtilityClass } from './dateTimeRangePickerTabsClasses';
import type { RangePosition } from '../models';
import { usePickerRangePositionContext } from '../hooks';

type TabValue = 'start-date' | 'start-time' | 'end-date' | 'end-time';

const viewToTab = (view: DateOrTimeViewWithMeridiem, rangePosition: RangePosition): TabValue => {
  if (isDatePickerView(view)) {
    return rangePosition === 'start' ? 'start-date' : 'end-date';
  }

  return rangePosition === 'start' ? 'start-time' : 'end-time';
};

const tabToView = (tab: TabValue): DateOrTimeViewWithMeridiem => {
  if (tab === 'start-date' || tab === 'end-date') {
    return 'day';
  }

  return 'hours';
};

export interface ExportedDateTimeRangePickerTabsProps extends ExportedBaseTabsProps {
  /**
   * Toggles visibility of the tabs allowing view switching.
   * @default `window.innerHeight < 667` for `DesktopDateTimeRangePicker` and `MobileDateTimeRangePicker`
   */
  hidden?: boolean;
  /**
   * Date tab icon.
   * @default DateRangeIcon
   */
  dateIcon?: React.ReactElement<any>;
  /**
   * Time tab icon.
   * @default TimeIcon
   */
  timeIcon?: React.ReactElement<any>;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<DateTimeRangePickerTabsClasses>;
}

export interface DateTimeRangePickerTabsProps extends ExportedDateTimeRangePickerTabsProps {}

const useUtilityClasses = (classes: Partial<DateTimeRangePickerTabsClasses> | undefined) => {
  const slots = {
    root: ['root'],
    tabButton: ['tabButton'],
    navigationButton: ['navigationButton'],
    filler: ['filler'],
  };

  return composeClasses(slots, getDateTimeRangePickerTabsUtilityClass, classes);
};

const DateTimeRangePickerTabsRoot = styled('div', {
  name: 'MuiDateTimeRangePickerTabs',
  slot: 'Root',
})<{ ownerState: PickerOwnerState }>(({ theme }) => { throw new Error("STUB"); });

const DateTimeRangePickerTab = styled(Button, {
  name: 'MuiDateTimeRangePickerTabs',
  slot: 'TabButton',
})({
  textTransform: 'none',
});

const DateTimeRangePickerTabFiller = styled('div', {
  name: 'MuiDateTimeRangePickerTabs',
  slot: 'Filler',
})({ width: 40 });

const tabOptions: TabValue[] = ['start-date', 'start-time', 'end-date', 'end-time'];

const DateTimeRangePickerTabs = function DateTimeRangePickerTabs(
  inProps: DateTimeRangePickerTabsProps,
) {
  const props = useThemeProps({ props: inProps, name: 'MuiDateTimeRangePickerTabs' });
  const {
    dateIcon = <DateRangeIcon />,
    timeIcon = <TimeIcon />,
    hidden = typeof window === 'undefined' || window.innerHeight < 667,
    className,
    classes: classesProp,
    sx,
    ...other
  } = props;

  const translations = usePickerTranslations();
  const { ownerState } = usePickerPrivateContext();
  const { view, setView } = usePickerContext();
  const classes = useUtilityClasses(classesProp);
  const { rangePosition, setRangePosition } = usePickerRangePositionContext();

  const value = React.useMemo(
    () => { throw new Error("STUB"); },
    [view, rangePosition],
  );
  const isPreviousHidden = value === 'start-date';
  const isNextHidden = value === 'end-time';
  const tabLabel = React.useMemo(() => {
      throw new Error("STUB");
  }, [
    translations.endDate,
    translations.endTime,
    translations.startDate,
    translations.startTime,
    value,
  ]);

  const handleRangePositionChange = useEventCallback((newTab: TabValue) => {
      throw new Error("STUB");
  });

  const changeToPreviousTab = useEventCallback(() => {
      throw new Error("STUB");
  });

  const changeToNextTab = useEventCallback(() => {
      throw new Error("STUB");
  });

  if (hidden) {
    return null;
  }

  let startIcon: React.ReactNode;
  if (view == null) {
    startIcon = null;
  } else if (isDatePickerView(view)) {
    startIcon = dateIcon;
  } else {
    startIcon = timeIcon;
  }

  return (
    <DateTimeRangePickerTabsRoot
      {...other}
      ownerState={ownerState}
      className={clsx(classes.root, className)}
      sx={sx}
    >
      {!isPreviousHidden ? (
        <IconButton
          onClick={changeToPreviousTab}
          className={classes.navigationButton}
          title={translations.openPreviousView}
        >
          <ArrowLeftIcon />
        </IconButton>
      ) : (
        <DateTimeRangePickerTabFiller className={classes.filler} />
      )}

      <DateTimeRangePickerTab startIcon={startIcon} className={classes.tabButton} size="large">
        {tabLabel}
      </DateTimeRangePickerTab>
      {!isNextHidden ? (
        <IconButton
          onClick={changeToNextTab}
          className={classes.navigationButton}
          title={translations.openNextView}
        >
          <ArrowRightIcon />
        </IconButton>
      ) : (
        <DateTimeRangePickerTabFiller className={classes.filler} />
      )}
    </DateTimeRangePickerTabsRoot>
  );
};

DateTimeRangePickerTabs.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  className: PropTypes.string,
  /**
   * Date tab icon.
   * @default DateRangeIcon
   */
  dateIcon: PropTypes.element,
  /**
   * Toggles visibility of the tabs allowing view switching.
   * @default `window.innerHeight < 667` for `DesktopDateTimeRangePicker` and `MobileDateTimeRangePicker`
   */
  hidden: PropTypes.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])),
    PropTypes.func,
    PropTypes.object,
  ]),
  /**
   * Time tab icon.
   * @default TimeIcon
   */
  timeIcon: PropTypes.element,
} as any;

export { DateTimeRangePickerTabs };
