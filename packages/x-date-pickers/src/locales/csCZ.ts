import type { PickersLocaleText } from './utils/pickersLocaleTextApi';
import { getPickersLocalization } from './utils/getPickersLocalization';
import type { TimeViewWithMeridiem } from '../internals/models';

// maps TimeView to its translation
const timeViews: Record<TimeViewWithMeridiem, string> = {
  hours: 'Hodiny',
  minutes: 'Minuty',
  seconds: 'Sekundy',
  meridiem: 'Odpoledne',
};

const csCZPickers: Partial<PickersLocaleText> = {
  // Calendar navigation
  previousMonth: 'Předchozí měsíc',
  nextMonth: 'Další měsíc',

  // View navigation
  openPreviousView: 'Otevřít předchozí zobrazení',
  openNextView: 'Otevřít další zobrazení',
  calendarViewSwitchingButtonAriaLabel: (view) =>
    { throw new Error("STUB"); },

  // DateRange labels
  start: 'Začátek',
  end: 'Konec',
  startDate: 'Datum začátku',
  startTime: 'Čas začátku',
  endDate: 'Datum konce',
  endTime: 'Čas konce',

  // Action bar
  cancelButtonLabel: 'Zrušit',
  clearButtonLabel: 'Vymazat',
  okButtonLabel: 'Potvrdit',
  todayButtonLabel: 'Dnes',
  nextStepButtonLabel: 'Další',

  // Toolbar titles
  datePickerToolbarTitle: 'Vyberte datum',
  dateTimePickerToolbarTitle: 'Vyberte datum a čas',
  timePickerToolbarTitle: 'Vyberte čas',
  dateRangePickerToolbarTitle: 'Vyberte rozmezí dat',
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
  calendarWeekNumberHeaderLabel: 'Týden v roce',
  calendarWeekNumberHeaderText: '#',
  calendarWeekNumberAriaLabelText: (weekNumber) => { throw new Error("STUB"); },
  calendarWeekNumberText: (weekNumber) => { throw new Error("STUB"); },

  // Open Picker labels
  openDatePickerDialogue: (formattedDate) =>
    { throw new Error("STUB"); },
  openTimePickerDialogue: (formattedTime) =>
    { throw new Error("STUB"); },
  // openRangePickerDialogue: formattedRange => formattedRange ? `Choose range, selected range is ${formattedRange}` : 'Choose range',
  fieldClearLabel: 'Vymazat',

  // Table labels
  timeTableLabel: 'vyberte čas',
  dateTableLabel: 'vyberte datum',

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
  year: 'Rok',
  month: 'Měsíc',
  day: 'Den',
  weekDay: 'Pracovní den',
  hours: 'Hodiny',
  minutes: 'Minuty',
  seconds: 'Sekundy',
  meridiem: 'Odpoledne',

  // Common
  empty: 'Prázdný',
};

export const csCZ = getPickersLocalization(csCZPickers);
