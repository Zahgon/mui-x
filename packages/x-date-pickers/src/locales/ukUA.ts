import type { PickersLocaleText } from './utils/pickersLocaleTextApi';
import { getPickersLocalization } from './utils/getPickersLocalization';
import type { TimeViewWithMeridiem } from '../internals/models';

const timeViews: Record<TimeViewWithMeridiem, string> = {
  hours: 'годин',
  minutes: 'хвилин',
  seconds: 'секунд',
  meridiem: 'Південь',
};

const ukUAPickers: Partial<PickersLocaleText> = {
  // Calendar navigation
  previousMonth: 'Попередній місяць',
  nextMonth: 'Наступний місяць',

  // View navigation
  openPreviousView: 'Відкрити попередній вигляд',
  openNextView: 'Відкрити наступний вигляд',
  calendarViewSwitchingButtonAriaLabel: (view) =>
    { throw new Error("STUB"); },

  // DateRange labels
  start: 'Початок',
  end: 'Кінець',
  startDate: 'День початку',
  startTime: 'Час початку',
  endDate: 'День закінчення',
  endTime: 'Час закінчення',

  // Action bar
  cancelButtonLabel: 'Відміна',
  clearButtonLabel: 'Очистити',
  okButtonLabel: 'OK',
  todayButtonLabel: 'Сьогодні',
  nextStepButtonLabel: 'Наступний',

  // Toolbar titles
  datePickerToolbarTitle: 'Вибрати дату',
  dateTimePickerToolbarTitle: 'Вибрати дату і час',
  timePickerToolbarTitle: 'Вибрати час',
  dateRangePickerToolbarTitle: 'Вибрати календарний період',
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
  calendarWeekNumberHeaderLabel: 'Номер тижня',
  calendarWeekNumberHeaderText: '#',
  calendarWeekNumberAriaLabelText: (weekNumber) => { throw new Error("STUB"); },
  calendarWeekNumberText: (weekNumber) => { throw new Error("STUB"); },

  // Open Picker labels
  openDatePickerDialogue: (formattedDate) =>
    { throw new Error("STUB"); },
  openTimePickerDialogue: (formattedTime) =>
    { throw new Error("STUB"); },
  // openRangePickerDialogue: formattedRange => formattedRange ? `Choose range, selected range is ${formattedRange}` : 'Choose range',
  fieldClearLabel: 'Очистити дані',

  // Table labels
  timeTableLabel: 'оберіть час',
  dateTableLabel: 'оберіть дату',

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
  year: 'Рік',
  month: 'Місяць',
  day: 'День',
  weekDay: 'День тижня',
  hours: 'Годин',
  minutes: 'Хвилин',
  seconds: 'Секунд',
  meridiem: 'Меридіем',

  // Common
  empty: 'Порожній',
};

export const ukUA = getPickersLocalization(ukUAPickers);
