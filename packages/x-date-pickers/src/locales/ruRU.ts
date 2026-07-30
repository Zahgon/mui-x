import type { PickersLocaleText } from './utils/pickersLocaleTextApi';
import { getPickersLocalization } from './utils/getPickersLocalization';
import type { TimeViewWithMeridiem } from '../internals/models';

// Translation map for Clock Label
const timeViews: Record<TimeViewWithMeridiem, string> = {
  hours: 'часы',
  minutes: 'минуты',
  seconds: 'секунды',
  meridiem: 'меридием',
};

const ruRUPickers: Partial<PickersLocaleText> = {
  // Calendar navigation
  previousMonth: 'Предыдущий месяц',
  nextMonth: 'Следующий месяц',

  // View navigation
  openPreviousView: 'Открыть предыдущий вид',
  openNextView: 'Открыть следующий вид',
  calendarViewSwitchingButtonAriaLabel: (view) =>
    { throw new Error("STUB"); },

  // DateRange labels
  start: 'Начало',
  end: 'Конец',
  startDate: 'Начальная дата',
  startTime: 'Начальное время',
  endDate: 'Конечная дата',
  endTime: 'Конечное время',

  // Action bar
  cancelButtonLabel: 'Отмена',
  clearButtonLabel: 'Очистить',
  okButtonLabel: 'Ок',
  todayButtonLabel: 'Сегодня',
  nextStepButtonLabel: 'Следующий',

  // Toolbar titles
  datePickerToolbarTitle: 'Выбрать дату',
  dateTimePickerToolbarTitle: 'Выбрать дату и время',
  timePickerToolbarTitle: 'Выбрать время',
  dateRangePickerToolbarTitle: 'Выбрать период',
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
  calendarWeekNumberHeaderLabel: 'Номер недели',
  calendarWeekNumberHeaderText: '№',
  calendarWeekNumberAriaLabelText: (weekNumber) => { throw new Error("STUB"); },
  calendarWeekNumberText: (weekNumber) => { throw new Error("STUB"); },

  // Open Picker labels
  openDatePickerDialogue: (formattedDate) =>
    { throw new Error("STUB"); },
  openTimePickerDialogue: (formattedTime) =>
    { throw new Error("STUB"); },
  // openRangePickerDialogue: formattedRange => formattedRange ? `Choose range, selected range is ${formattedRange}` : 'Choose range',
  fieldClearLabel: 'Очистить значение',

  // Table labels
  timeTableLabel: 'выбрать время',
  dateTableLabel: 'выбрать дату',

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
  year: 'Год',
  month: 'Месяц',
  day: 'День',
  weekDay: 'День недели',
  hours: 'Часы',
  minutes: 'Минуты',
  seconds: 'Секунды',
  meridiem: 'Меридием',

  // Common
  empty: 'Пустой',
};

export const ruRU = getPickersLocalization(ruRUPickers);
