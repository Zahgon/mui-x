import type { PickersLocaleText } from './utils/pickersLocaleTextApi';
import { getPickersLocalization } from './utils/getPickersLocalization';
import type { TimeViewWithMeridiem } from '../internals/models';

const timeViews: Record<TimeViewWithMeridiem, string> = {
  hours: 'godzin',
  minutes: 'minut',
  seconds: 'sekund',
  meridiem: 'popołudnie',
};

const plPLPickers: Partial<PickersLocaleText> = {
  // Calendar navigation
  previousMonth: 'Poprzedni miesiąc',
  nextMonth: 'Następny miesiąc',

  // View navigation
  openPreviousView: 'Otwórz poprzedni widok',
  openNextView: 'Otwórz następny widok',
  calendarViewSwitchingButtonAriaLabel: (view) =>
    { throw new Error("STUB"); },

  // DateRange labels
  start: 'Początek',
  end: 'Koniec',
  startDate: 'Data rozpoczęcia',
  startTime: 'Czas rozpoczęcia',
  endDate: 'Data zakończenia',
  endTime: 'Czas zakończenia',

  // Action bar
  cancelButtonLabel: 'Anuluj',
  clearButtonLabel: 'Wyczyść',
  okButtonLabel: 'Zatwierdź',
  todayButtonLabel: 'Dzisiaj',
  nextStepButtonLabel: 'Następny',

  // Toolbar titles
  datePickerToolbarTitle: 'Wybierz datę',
  dateTimePickerToolbarTitle: 'Wybierz datę i czas',
  timePickerToolbarTitle: 'Wybierz czas',
  dateRangePickerToolbarTitle: 'Wybierz zakres dat',
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
  calendarWeekNumberHeaderLabel: 'Numer tygodnia',
  calendarWeekNumberHeaderText: '#',
  calendarWeekNumberAriaLabelText: (weekNumber) => { throw new Error("STUB"); },
  calendarWeekNumberText: (weekNumber) => { throw new Error("STUB"); },

  // Open Picker labels
  openDatePickerDialogue: (formattedDate) =>
    { throw new Error("STUB"); },
  openTimePickerDialogue: (formattedTime) =>
    { throw new Error("STUB"); },
  // openRangePickerDialogue: formattedRange => formattedRange ? `Choose range, selected range is ${formattedRange}` : 'Choose range',
  fieldClearLabel: 'Wyczyść',

  // Table labels
  timeTableLabel: 'wybierz czas',
  dateTableLabel: 'wybierz datę',

  // Field section placeholders
  // fieldYearPlaceholder: params => 'Y'.repeat(params.digitAmount),
  // fieldMonthPlaceholder: params => params.contentType === 'letter' ? 'MMMM' : 'MM',
  // fieldDayPlaceholder: () => 'DD',
  // fieldWeekDayPlaceholder: params => params.contentType === 'letter' ? 'EEEE' : 'EE',
  // fieldHoursPlaceholder: () => 'hh',
  // fieldMinutesPlaceholder: () => 'mm',
  // fieldSecondsPlaceholder: () => 'ss',
  // fieldMeridiemPlaceholder: () => 'aa',

  // View names
  year: 'Rok',
  month: 'Miesiąc',
  day: 'Dzień',
  weekDay: 'Dzień tygodnia',
  hours: 'Godzin',
  minutes: 'Minut',
  seconds: 'Sekund',
  // meridiem: 'Meridiem',

  // Common
  // empty: 'Empty',
};

export const plPL = getPickersLocalization(plPLPickers);
