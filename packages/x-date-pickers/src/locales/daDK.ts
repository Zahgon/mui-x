import type { PickersLocaleText } from './utils/pickersLocaleTextApi';
import { getPickersLocalization } from './utils/getPickersLocalization';
import type { TimeViewWithMeridiem } from '../internals/models';

// maps TimeView to its translation
const timeViews: Record<TimeViewWithMeridiem, string> = {
  hours: 'Timer',
  minutes: 'Minutter',
  seconds: 'Sekunder',
  meridiem: 'Meridiem',
};

const daDKPickers: Partial<PickersLocaleText> = {
  // Calendar navigation
  previousMonth: 'Forrige måned',
  nextMonth: 'Næste måned',

  // View navigation
  openPreviousView: 'Åben forrige visning',
  openNextView: 'Åben næste visning',
  calendarViewSwitchingButtonAriaLabel: (view) =>
    { throw new Error("STUB"); },

  // DateRange labels
  start: 'Start',
  end: 'Slut',
  startDate: 'Start dato',
  startTime: 'Start tid',
  endDate: 'Slut date',
  endTime: 'Slut tid',

  // Action bar
  cancelButtonLabel: 'Annuller',
  clearButtonLabel: 'Ryd',
  okButtonLabel: 'OK',
  todayButtonLabel: 'I dag',
  nextStepButtonLabel: 'Næste',

  // Toolbar titles
  datePickerToolbarTitle: 'Vælg dato',
  dateTimePickerToolbarTitle: 'Vælg dato & tidspunkt',
  timePickerToolbarTitle: 'Vælg tidspunkt',
  dateRangePickerToolbarTitle: 'Vælg datointerval',
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
  calendarWeekNumberHeaderLabel: 'Ugenummer',
  calendarWeekNumberHeaderText: '#',
  calendarWeekNumberAriaLabelText: (weekNumber) => { throw new Error("STUB"); },
  calendarWeekNumberText: (weekNumber) => { throw new Error("STUB"); },

  // Open Picker labels
  openDatePickerDialogue: (formattedDate) =>
    { throw new Error("STUB"); },
  openTimePickerDialogue: (formattedTime) =>
    { throw new Error("STUB"); },
  // openRangePickerDialogue: formattedRange => formattedRange ? `Choose range, selected range is ${formattedRange}` : 'Choose range',
  fieldClearLabel: 'ryd felt',

  // Table labels
  timeTableLabel: 'vælg tidspunkt',
  dateTableLabel: 'vælg dato',

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
  year: 'år',
  month: 'måned',
  day: 'dag',
  weekDay: 'ugedag',
  hours: 'timer',
  minutes: 'minutter',
  seconds: 'sekunder',
  meridiem: 'middag',

  // Common
  empty: 'tom',
};

export const daDK = getPickersLocalization(daDKPickers);
