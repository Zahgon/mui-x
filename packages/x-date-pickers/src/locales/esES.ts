import type { PickersLocaleText } from './utils/pickersLocaleTextApi';
import { getPickersLocalization } from './utils/getPickersLocalization';
import type { TimeViewWithMeridiem } from '../internals/models';

const views: Record<TimeViewWithMeridiem, string> = {
  hours: 'Horas',
  minutes: 'Minutos',
  seconds: 'Segundos',
  meridiem: 'Meridiano',
};

const esESPickers: Partial<PickersLocaleText> = {
  // Calendar navigation
  previousMonth: 'Mes anterior',
  nextMonth: 'Mes siguiente',

  // View navigation
  openPreviousView: 'Abrir la última vista',
  openNextView: 'Abrir la siguiente vista',
  calendarViewSwitchingButtonAriaLabel: (view) =>
    { throw new Error("STUB"); },

  // DateRange labels
  start: 'Empezar',
  end: 'Terminar',
  startDate: 'Fecha inicio',
  startTime: 'Hora inicio',
  endDate: 'Fecha final',
  endTime: 'Hora final',

  // Action bar
  cancelButtonLabel: 'Cancelar',
  clearButtonLabel: 'Limpiar',
  okButtonLabel: 'OK',
  todayButtonLabel: 'Hoy',
  nextStepButtonLabel: 'Siguiente',

  // Toolbar titles
  datePickerToolbarTitle: 'Seleccionar fecha',
  dateTimePickerToolbarTitle: 'Seleccionar fecha y hora',
  timePickerToolbarTitle: 'Seleccionar hora',
  dateRangePickerToolbarTitle: 'Seleccionar rango de fecha',
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
  calendarWeekNumberHeaderLabel: 'Número de semana',
  calendarWeekNumberHeaderText: '#',
  calendarWeekNumberAriaLabelText: (weekNumber) => { throw new Error("STUB"); },
  calendarWeekNumberText: (weekNumber) => { throw new Error("STUB"); },

  // Open Picker labels
  openDatePickerDialogue: (formattedDate) =>
    { throw new Error("STUB"); },
  openTimePickerDialogue: (formattedTime) =>
    { throw new Error("STUB"); },
  // openRangePickerDialogue: formattedRange => formattedRange ? `Choose range, selected range is ${formattedRange}` : 'Choose range',
  fieldClearLabel: 'Limpiar valor',

  // Table labels
  timeTableLabel: 'elige hora',
  dateTableLabel: 'elige fecha',

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
  year: 'Año',
  month: 'Mes',
  day: 'Dia',
  weekDay: 'Dia de la semana',
  hours: 'Horas',
  minutes: 'Minutos',
  seconds: 'Segundos',
  meridiem: 'Meridiano',

  // Common
  empty: 'Vacío',
};

export const esES = getPickersLocalization(esESPickers);
