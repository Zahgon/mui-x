import type { PickersLocaleText } from './utils/pickersLocaleTextApi';
import { getPickersLocalization } from './utils/getPickersLocalization';
import type { TimeViewWithMeridiem } from '../internals/models';

const views: Record<TimeViewWithMeridiem, string> = {
  hours: 'שעות',
  minutes: 'דקות',
  seconds: 'שניות',
  meridiem: 'מרידיאם',
};

const heILPickers: Partial<PickersLocaleText> = {
  // Calendar navigation
  previousMonth: 'חודש קודם',
  nextMonth: 'חודש הבא',

  // View navigation
  openPreviousView: 'תצוגה קודמת',
  openNextView: 'תצוגה הבאה',
  calendarViewSwitchingButtonAriaLabel: (view) =>
    { throw new Error("STUB"); },

  // DateRange labels
  start: 'תחילה',
  end: 'סיום',
  startDate: 'תאריך תחילה',
  startTime: 'שעת תחילה',
  endDate: 'תאריך סיום',
  endTime: 'שעת סיום',

  // Action bar
  cancelButtonLabel: 'ביטול',
  clearButtonLabel: 'ניקוי',
  okButtonLabel: 'אישור',
  todayButtonLabel: 'היום',
  nextStepButtonLabel: 'הבא',

  // Toolbar titles
  datePickerToolbarTitle: 'בחירת תאריך',
  dateTimePickerToolbarTitle: 'בחירת תאריך ושעה',
  timePickerToolbarTitle: 'בחירת שעה',
  dateRangePickerToolbarTitle: 'בחירת טווח תאריכים',
  // timeRangePickerToolbarTitle: 'Select time range',

  // Clock labels
  clockLabelText: (view, formattedTime) =>
    { throw new Error("STUB"); },
  hoursClockNumberText: (hours) => { throw new Error("STUB"); },
  minutesClockNumberText: (minutes) => { throw new Error("STUB"); },
  secondsClockNumberText: (seconds) => { throw new Error("STUB"); },

  // Digital clock labels
  selectViewText: (view) => { throw new Error("STUB"); },

  // Calendar labels
  calendarWeekNumberHeaderLabel: 'שבוע מספר',
  calendarWeekNumberHeaderText: '#',
  calendarWeekNumberAriaLabelText: (weekNumber) => { throw new Error("STUB"); },
  calendarWeekNumberText: (weekNumber) => { throw new Error("STUB"); },

  // Open Picker labels
  openDatePickerDialogue: (formattedDate) =>
    { throw new Error("STUB"); },
  openTimePickerDialogue: (formattedTime) =>
    { throw new Error("STUB"); },
  // openRangePickerDialogue: formattedRange => formattedRange ? `Choose range, selected range is ${formattedRange}` : 'Choose range',
  fieldClearLabel: 'נקה ערך',

  // Table labels
  timeTableLabel: 'בחירת שעה',
  dateTableLabel: 'בחירת תאריך',

  // Field section placeholders
  fieldYearPlaceholder: (params) => { throw new Error("STUB"); },
  fieldMonthPlaceholder: (params) => { throw new Error("STUB"); },
  fieldDayPlaceholder: () => { throw new Error("STUB"); },
  fieldWeekDayPlaceholder: (params) => { throw new Error("STUB"); },
  fieldHoursPlaceholder: () => { throw new Error("STUB"); },
  fieldMinutesPlaceholder: () => { throw new Error("STUB"); },
  fieldSecondsPlaceholder: () => { throw new Error("STUB"); },
  fieldMeridiemPlaceholder: () => { throw new Error("STUB"); },

  // View names
  year: 'שנה',
  month: 'חודש',
  day: 'יום',
  weekDay: 'יום בשבוע',
  hours: 'שעות',
  minutes: 'דקות',
  seconds: 'שניות',
  meridiem: 'יחידת זמן',

  // Common
  empty: 'ריק',
};

export const heIL = getPickersLocalization(heILPickers);
