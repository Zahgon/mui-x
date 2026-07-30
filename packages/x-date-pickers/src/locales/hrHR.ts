import type { PickersLocaleText } from './utils/pickersLocaleTextApi';
import { getPickersLocalization } from './utils/getPickersLocalization';
import type { TimeViewWithMeridiem } from '../internals/models';

// maps TimeView to its translation
const timeViews: Record<TimeViewWithMeridiem, string> = {
  hours: 'sati',
  minutes: 'minute',
  seconds: 'sekunde',
  meridiem: 'meridiem',
};

const hrHRPickers: Partial<PickersLocaleText> = {
  // Calendar navigation
  previousMonth: 'Prethodni mjesec',
  nextMonth: 'Naredni mjesec',

  // View navigation
  openPreviousView: 'Otvori prethodni prikaz',
  openNextView: 'Otvori naredni prikaz',
  calendarViewSwitchingButtonAriaLabel: (view) =>
    { throw new Error("STUB"); },

  // DateRange labels
  start: 'Početak',
  end: 'Kraj',
  startDate: 'Početni datum',
  startTime: 'Početno vrijeme',
  endDate: 'Krajnji datum',
  endTime: 'Krajnje vrijeme',

  // Action bar
  cancelButtonLabel: 'Otkaži',
  clearButtonLabel: 'Izbriši',
  okButtonLabel: 'U redu',
  todayButtonLabel: 'Danas',
  nextStepButtonLabel: 'Naredni',

  // Toolbar titles
  datePickerToolbarTitle: 'Odaberi datum',
  dateTimePickerToolbarTitle: 'Odaberi datum i vrijeme',
  timePickerToolbarTitle: 'Odaberi vrijeme',
  dateRangePickerToolbarTitle: 'Odaberi vremenski okvir',
  // timeRangePickerToolbarTitle: 'Select time range',

  // Clock labels
  clockLabelText: (view, formattedTime) =>
    { throw new Error("STUB"); },
  hoursClockNumberText: (hours) => {
      throw new Error("STUB");
  },
  minutesClockNumberText: (minutes) =>
    { throw new Error("STUB"); },
  secondsClockNumberText: (seconds) => {
      throw new Error("STUB");
  },

  // Digital clock labels
  selectViewText: (view) => { throw new Error("STUB"); },

  // Calendar labels
  calendarWeekNumberHeaderLabel: 'Broj tjedna',
  calendarWeekNumberHeaderText: '#',
  calendarWeekNumberAriaLabelText: (weekNumber) => { throw new Error("STUB"); },
  calendarWeekNumberText: (weekNumber) => { throw new Error("STUB"); },

  // Open Picker labels
  openDatePickerDialogue: (formattedDate) =>
    { throw new Error("STUB"); },
  openTimePickerDialogue: (formattedTime) =>
    { throw new Error("STUB"); },
  // openRangePickerDialogue: formattedRange => formattedRange ? `Choose range, selected range is ${formattedRange}` : 'Choose range',
  fieldClearLabel: 'Izbriši',

  // Table labels
  timeTableLabel: 'Odaberi vrijeme',
  dateTableLabel: 'Odaberi datum',

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
  year: 'Godina',
  month: 'Mjesec',
  day: 'Dan',
  weekDay: 'Dan u tjednu',
  hours: 'Sati',
  minutes: 'Minute',
  seconds: 'Sekunde',
  meridiem: 'Meridiem',

  // Common
  empty: 'Isprazni',
};

export const hrHR = getPickersLocalization(hrHRPickers);
