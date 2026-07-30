import type { PickersLocaleText } from './utils/pickersLocaleTextApi';
import { getPickersLocalization } from './utils/getPickersLocalization';
import type { TimeViewWithMeridiem } from '../internals/models';

// maps TimeView to its translation
const timeViews: Record<TimeViewWithMeridiem, string> = {
  hours: 'Óra',
  minutes: 'Perc',
  seconds: 'Másodperc',
  meridiem: 'Délután',
};

const huHUPickers: Partial<PickersLocaleText> = {
  // Calendar navigation
  previousMonth: 'Előző hónap',
  nextMonth: 'Következő hónap',

  // View navigation
  openPreviousView: 'Előző nézet megnyitása',
  openNextView: 'Következő nézet megnyitása',
  calendarViewSwitchingButtonAriaLabel: (view) =>
    { throw new Error("STUB"); },

  // DateRange labels
  start: 'Kezdő dátum',
  end: 'Záró dátum',
  startDate: 'Kezdő dátum',
  startTime: 'Kezdő idő',
  endDate: 'Záró dátum',
  endTime: 'Záró idő',

  // Action bar
  cancelButtonLabel: 'Mégse',
  clearButtonLabel: 'Törlés',
  okButtonLabel: 'OK',
  todayButtonLabel: 'Ma',
  nextStepButtonLabel: 'Következő',

  // Toolbar titles
  datePickerToolbarTitle: 'Dátum kiválasztása',
  dateTimePickerToolbarTitle: 'Dátum és idő kiválasztása',
  timePickerToolbarTitle: 'Idő kiválasztása',
  dateRangePickerToolbarTitle: 'Dátumhatárok kiválasztása',
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
  calendarWeekNumberHeaderLabel: 'Hét',
  calendarWeekNumberHeaderText: '#',
  calendarWeekNumberAriaLabelText: (weekNumber) => { throw new Error("STUB"); },
  calendarWeekNumberText: (weekNumber) => { throw new Error("STUB"); },

  // Open Picker labels
  openDatePickerDialogue: (formattedDate) =>
    { throw new Error("STUB"); },
  openTimePickerDialogue: (formattedTime) =>
    { throw new Error("STUB"); },
  // openRangePickerDialogue: formattedRange => formattedRange ? `Choose range, selected range is ${formattedRange}` : 'Choose range',
  fieldClearLabel: 'Tartalom ürítése',

  // Table labels
  timeTableLabel: 'válasszon időt',
  dateTableLabel: 'válasszon dátumot',

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
  year: 'Év',
  month: 'Hónap',
  day: 'Nap',
  weekDay: 'Hétköznap',
  hours: timeViews.hours,
  minutes: timeViews.minutes,
  seconds: timeViews.seconds,
  meridiem: timeViews.meridiem,

  // Common
  empty: 'Üres',
};

export const huHU = getPickersLocalization(huHUPickers);
