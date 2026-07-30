import type { PickersLocaleText } from './utils/pickersLocaleTextApi';
import { getPickersLocalization } from './utils/getPickersLocalization';
import type { TimeViewWithMeridiem } from '../internals/models';

const views: Record<TimeViewWithMeridiem, string> = {
  hours: 'tunnit',
  minutes: 'minuutit',
  seconds: 'sekuntit',
  meridiem: 'iltapäivä',
};

const fiFIPickers: Partial<PickersLocaleText> = {
  // Calendar navigation
  previousMonth: 'Edellinen kuukausi',
  nextMonth: 'Seuraava kuukausi',

  // View navigation
  openPreviousView: 'Avaa edellinen näkymä',
  openNextView: 'Avaa seuraava näkymä',
  calendarViewSwitchingButtonAriaLabel: (view) =>
    { throw new Error("STUB"); },

  // DateRange labels
  start: 'Alku',
  end: 'Loppu',
  startDate: 'Alkamispäivämäärä',
  startTime: 'Alkamisaika',
  endDate: 'Päättymispäivämäärä',
  endTime: 'Päättymisaika',

  // Action bar
  cancelButtonLabel: 'Peruuta',
  clearButtonLabel: 'Tyhjennä',
  okButtonLabel: 'OK',
  todayButtonLabel: 'Tänään',
  nextStepButtonLabel: 'Seuraava',

  // Toolbar titles
  datePickerToolbarTitle: 'Valitse päivä',
  dateTimePickerToolbarTitle: 'Valitse päivä ja aika',
  timePickerToolbarTitle: 'Valitse aika',
  dateRangePickerToolbarTitle: 'Valitse aikaväli',
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
  calendarWeekNumberHeaderLabel: 'Viikko',
  calendarWeekNumberHeaderText: '#',
  calendarWeekNumberAriaLabelText: (weekNumber) => { throw new Error("STUB"); },
  calendarWeekNumberText: (weekNumber) => { throw new Error("STUB"); },

  // Open Picker labels
  openDatePickerDialogue: (formattedDate) =>
    { throw new Error("STUB"); },
  openTimePickerDialogue: (formattedTime) =>
    { throw new Error("STUB"); },
  // openRangePickerDialogue: formattedRange => formattedRange ? `Choose range, selected range is ${formattedRange}` : 'Choose range',
  fieldClearLabel: 'Tyhjennä arvo',

  // Table labels
  timeTableLabel: 'valitse aika',
  dateTableLabel: 'valitse päivä',

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
  year: 'Vuosi',
  month: 'Kuukausi',
  day: 'Päivä',
  weekDay: 'Viikonpäivä',
  hours: 'Tunnit',
  minutes: 'Minuutit',
  seconds: 'Sekunnit',
  meridiem: 'Iltapäivä',

  // Common
  empty: 'Tyhjä',
};

export const fiFI = getPickersLocalization(fiFIPickers);
