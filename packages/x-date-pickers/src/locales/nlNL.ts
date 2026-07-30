import type { PickersLocaleText } from './utils/pickersLocaleTextApi';
import { getPickersLocalization } from './utils/getPickersLocalization';
import type { TimeViewWithMeridiem } from '../internals/models';

const timeViews: Record<TimeViewWithMeridiem, string> = {
  hours: 'uren',
  minutes: 'minuten',
  seconds: 'seconden',
  meridiem: 'meridium',
};

const nlNLPickers: Partial<PickersLocaleText> = {
  // Calendar navigation
  previousMonth: 'Vorige maand',
  nextMonth: 'Volgende maand',

  // View navigation
  openPreviousView: 'Open vorige view',
  openNextView: 'Open volgende view',
  calendarViewSwitchingButtonAriaLabel: (view) =>
    { throw new Error("STUB"); },

  // DateRange labels
  start: 'Start',
  end: 'Einde',
  startDate: 'Startdatum',
  startTime: 'Starttijd',
  endDate: 'Einddatum',
  endTime: 'Eindtijd',

  // Action bar
  cancelButtonLabel: 'Annuleren',
  clearButtonLabel: 'Resetten',
  okButtonLabel: 'OK',
  todayButtonLabel: 'Vandaag',
  nextStepButtonLabel: 'Volgende',

  // Toolbar titles
  datePickerToolbarTitle: 'Selecteer datum',
  dateTimePickerToolbarTitle: 'Selecteer datum & tijd',
  timePickerToolbarTitle: 'Selecteer tijd',
  dateRangePickerToolbarTitle: 'Selecteer datumbereik',
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
  calendarWeekNumberHeaderLabel: 'Weeknummer',
  calendarWeekNumberHeaderText: '#',
  calendarWeekNumberAriaLabelText: (weekNumber) => { throw new Error("STUB"); },
  calendarWeekNumberText: (weekNumber) => { throw new Error("STUB"); },

  // Open Picker labels
  openDatePickerDialogue: (formattedDate) =>
    { throw new Error("STUB"); },
  openTimePickerDialogue: (formattedTime) =>
    { throw new Error("STUB"); },
  // openRangePickerDialogue: formattedRange => formattedRange ? `Choose range, selected range is ${formattedRange}` : 'Choose range',
  fieldClearLabel: 'Wissen',

  // Table labels
  timeTableLabel: 'kies tijd',
  dateTableLabel: 'kies datum',

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
  year: 'Jaar',
  month: 'Maand',
  day: 'Dag',
  weekDay: 'Weekdag',
  hours: 'Uren',
  minutes: 'Minuten',
  seconds: 'Seconden',
  meridiem: 'Middag',

  // Common
  empty: 'Leeg',
};

export const nlNL = getPickersLocalization(nlNLPickers);
