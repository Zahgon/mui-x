import type { PickersLocaleText } from './utils/pickersLocaleTextApi';
import { getPickersLocalization } from './utils/getPickersLocalization';
import type { TimeViewWithMeridiem } from '../internals/models';

const timeViews: Record<TimeViewWithMeridiem, string> = {
  hours: 'horas',
  minutes: 'minutos',
  seconds: 'segundos',
  meridiem: 'meridiano',
};

const ptPTPickers: Partial<PickersLocaleText> = {
  // Calendar navigation
  previousMonth: 'Mês anterior',
  nextMonth: 'Próximo mês',

  // View navigation
  openPreviousView: 'Abrir seleção anterior',
  openNextView: 'Abrir próxima seleção',
  calendarViewSwitchingButtonAriaLabel: (view) =>
    { throw new Error("STUB"); },

  // DateRange labels
  start: 'Início',
  end: 'Fim',
  startDate: 'Data de início',
  startTime: 'Hora de início',
  endDate: 'Data de fim',
  endTime: 'Hora de fim',

  // Action bar
  cancelButtonLabel: 'Cancelar',
  clearButtonLabel: 'Limpar',
  okButtonLabel: 'OK',
  todayButtonLabel: 'Hoje',
  nextStepButtonLabel: 'Próximo',

  // Toolbar titles
  datePickerToolbarTitle: 'Selecione a data',
  dateTimePickerToolbarTitle: 'Selecione a data e a hora',
  timePickerToolbarTitle: 'Selecione a hora',
  dateRangePickerToolbarTitle: 'Selecione o intervalo de datas',
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
  calendarWeekNumberHeaderLabel: 'Número da semana',
  calendarWeekNumberHeaderText: 'N.º',
  calendarWeekNumberAriaLabelText: (weekNumber) => { throw new Error("STUB"); },
  calendarWeekNumberText: (weekNumber) => { throw new Error("STUB"); },

  // Open Picker labels
  openDatePickerDialogue: (formattedDate) =>
    { throw new Error("STUB"); },
  openTimePickerDialogue: (formattedTime) =>
    { throw new Error("STUB"); },
  // openRangePickerDialogue: formattedRange => formattedRange ? `Choose range, selected range is ${formattedRange}` : 'Choose range',
  fieldClearLabel: 'Limpar valor',

  // Table labels
  timeTableLabel: 'escolha uma hora',
  dateTableLabel: 'escolha uma data',

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
  year: 'Ano',
  month: 'Mês',
  day: 'Dia',
  weekDay: 'Dia da Semana',
  hours: 'Horas',
  minutes: 'Minutos',
  seconds: 'Segundos',
  meridiem: 'Meridiano',

  // Common
  empty: 'Vazio',
};

export const ptPT = getPickersLocalization(ptPTPickers);
