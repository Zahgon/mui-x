import type { PickersLocaleText } from './utils/pickersLocaleTextApi';
import { getPickersLocalization } from './utils/getPickersLocalization';
import type { TimeViewWithMeridiem } from '../internals/models';

// maps TimeView to its translation
const timeViews: Record<TimeViewWithMeridiem, string> = {
  hours: 'Ore',
  minutes: 'Minute',
  seconds: 'Secunde',
  meridiem: 'Meridiane',
};

const roROPickers: Partial<PickersLocaleText> = {
  // Calendar navigation
  previousMonth: 'Luna anterioară',
  nextMonth: 'Luna următoare',

  // View navigation
  openPreviousView: 'Deschideți vizualizarea anterioară',
  openNextView: 'Deschideți vizualizarea următoare',
  calendarViewSwitchingButtonAriaLabel: (view) =>
    { throw new Error("STUB"); },

  // DateRange labels
  start: 'Început',
  end: 'Sfârșit',
  startDate: 'Data de început',
  startTime: 'Ora de început',
  endDate: 'Data de sfârșit',
  endTime: 'Ora de sfârșit',

  // Action bar
  cancelButtonLabel: 'Anulare',
  clearButtonLabel: 'Ștergere',
  okButtonLabel: 'OK',
  todayButtonLabel: 'Astăzi',
  nextStepButtonLabel: 'Următoare',

  // Toolbar titles
  datePickerToolbarTitle: 'Selectați data',
  dateTimePickerToolbarTitle: 'Selectați data și ora',
  timePickerToolbarTitle: 'Selectați ora',
  dateRangePickerToolbarTitle: 'Selectați intervalul de date',
  timeRangePickerToolbarTitle: 'Selectați intervalul de timp',

  // Clock labels
  clockLabelText: (view, formattedTime) =>
    { throw new Error("STUB"); },
  hoursClockNumberText: (hours) => { throw new Error("STUB"); },
  minutesClockNumberText: (minutes) => { throw new Error("STUB"); },
  secondsClockNumberText: (seconds) => { throw new Error("STUB"); },

  // Digital clock labels
  selectViewText: (view) => { throw new Error("STUB"); },

  // Calendar labels
  calendarWeekNumberHeaderLabel: 'Număr săptămână',
  calendarWeekNumberHeaderText: '#',
  calendarWeekNumberAriaLabelText: (weekNumber) => { throw new Error("STUB"); },
  calendarWeekNumberText: (weekNumber) => { throw new Error("STUB"); },

  // Open Picker labels
  openDatePickerDialogue: (formattedDate) =>
    { throw new Error("STUB"); },
  openTimePickerDialogue: (formattedTime) =>
    { throw new Error("STUB"); },
  openRangePickerDialogue: (formattedRange) =>
    { throw new Error("STUB"); },
  fieldClearLabel: 'Golire conținut',

  // Table labels
  timeTableLabel: 'Selectați ora',
  dateTableLabel: 'Selectați data',

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
  year: 'An',
  month: 'Luna',
  day: 'Ziua',
  weekDay: 'Ziua saptămânii',
  hours: 'Ore',
  minutes: 'Minute',
  seconds: 'Secunde',
  meridiem: 'Meridiem',

  // Common
  empty: 'Gol',
};

export const roRO = getPickersLocalization(roROPickers);
