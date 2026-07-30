import type { PickersLocaleText } from './utils/pickersLocaleTextApi';
import { getPickersLocalization } from './utils/getPickersLocalization';
import type { TimeViewWithMeridiem } from '../internals/models';

// maps TimeView to its translation
const timeViews: Record<TimeViewWithMeridiem, string> = {
  hours: 'Hodiny',
  minutes: 'Minúty',
  seconds: 'Sekundy',
  meridiem: 'Popoludnie',
};

const skSKPickers: Partial<PickersLocaleText> = {
  // Calendar navigation
  previousMonth: 'Predchádzajúci mesiac',
  nextMonth: 'Ďalší mesiac',

  // View navigation
  openPreviousView: 'Otvoriť predchádzajúce zobrazenie',
  openNextView: 'Otvoriť ďalšie zobrazenie',
  calendarViewSwitchingButtonAriaLabel: (view) =>
    { throw new Error("STUB"); },

  // DateRange labels
  start: 'Začiatok',
  end: 'Koniec',
  // startDate: 'Start date',
  // startTime: 'Start time',
  // endDate: 'End date',
  // endTime: 'End time',

  // Action bar
  cancelButtonLabel: 'Zrušiť',
  clearButtonLabel: 'Vymazať',
  okButtonLabel: 'Potvrdiť',
  todayButtonLabel: 'Dnes',
  nextStepButtonLabel: 'Ďalší',

  // Toolbar titles
  datePickerToolbarTitle: 'Vyberte dátum',
  dateTimePickerToolbarTitle: 'Vyberte dátum a čas',
  timePickerToolbarTitle: 'Vyberte čas',
  dateRangePickerToolbarTitle: 'Vyberete rozmedzie dátumov',
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
  calendarWeekNumberHeaderLabel: 'Týždeň v roku',
  calendarWeekNumberHeaderText: '#',
  calendarWeekNumberAriaLabelText: (weekNumber) => { throw new Error("STUB"); },
  calendarWeekNumberText: (weekNumber) => { throw new Error("STUB"); },

  // Open Picker labels
  openDatePickerDialogue: (formattedDate) =>
    { throw new Error("STUB"); },
  openTimePickerDialogue: (formattedTime) =>
    { throw new Error("STUB"); },
  // openRangePickerDialogue: formattedRange => formattedRange ? `Choose range, selected range is ${formattedRange}` : 'Choose range',
  // fieldClearLabel: 'Clear',

  // Table labels
  timeTableLabel: 'vyberte čas',
  dateTableLabel: 'vyberte dátum',

  // Field section placeholders
  fieldYearPlaceholder: (params) => { throw new Error("STUB"); },
  fieldMonthPlaceholder: (params) => { throw new Error("STUB"); },
  fieldDayPlaceholder: () => { throw new Error("STUB"); },
  // fieldWeekDayPlaceholder: params => params.contentType === 'letter' ? 'EEEE' : 'EE',
  fieldHoursPlaceholder: () => { throw new Error("STUB"); },
  fieldMinutesPlaceholder: () => { throw new Error("STUB"); },
  fieldSecondsPlaceholder: () => { throw new Error("STUB"); },
  fieldMeridiemPlaceholder: () => { throw new Error("STUB"); },

  // View names
  // year: 'Year',
  // month: 'Month',
  // day: 'Day',
  // weekDay: 'Week day',
  // hours: 'Hours',
  // minutes: 'Minutes',
  // seconds: 'Seconds',
  // meridiem: 'Meridiem',

  // Common
  // empty: 'Empty',
};

export const skSK = getPickersLocalization(skSKPickers);
