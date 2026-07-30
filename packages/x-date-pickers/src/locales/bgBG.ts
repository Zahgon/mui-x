import type { PickersLocaleText } from './utils/pickersLocaleTextApi';
import { getPickersLocalization } from './utils/getPickersLocalization';
import type { TimeViewWithMeridiem } from '../internals/models';

const views: Record<TimeViewWithMeridiem, string> = {
  hours: 'часове',
  minutes: 'минути',
  seconds: 'секунди',
  meridiem: 'преди обяд/след обяд',
};

const bgBGPickers: Partial<PickersLocaleText> = {
  // Calendar navigation
  previousMonth: 'Предишен месец',
  nextMonth: 'Следващ месец',

  // View navigation
  openPreviousView: 'Отвори предишен изглед',
  openNextView: 'Отвори следващ изглед',
  calendarViewSwitchingButtonAriaLabel: (view) =>
    { throw new Error("STUB"); },

  // DateRange labels
  start: 'Начало',
  end: 'Край',
  startDate: 'Начална дата',
  startTime: 'Начален час',
  endDate: 'Крайна дата',
  endTime: 'Краен час',

  // Action bar
  cancelButtonLabel: 'Отказ',
  clearButtonLabel: 'Изчисти',
  okButtonLabel: 'ОК',
  todayButtonLabel: 'Днес',
  nextStepButtonLabel: 'Следващ',

  // Toolbar titles
  datePickerToolbarTitle: 'Избери дата',
  dateTimePickerToolbarTitle: 'Избери дата и час',
  timePickerToolbarTitle: 'Избери час',
  dateRangePickerToolbarTitle: 'Избери времеви период',
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
  calendarWeekNumberHeaderLabel: 'Седмица',
  calendarWeekNumberHeaderText: '#',
  calendarWeekNumberAriaLabelText: (weekNumber) => { throw new Error("STUB"); },
  calendarWeekNumberText: (weekNumber) => { throw new Error("STUB"); },

  // Open Picker labels
  openDatePickerDialogue: (formattedDate) =>
    { throw new Error("STUB"); },
  openTimePickerDialogue: (formattedTime) =>
    { throw new Error("STUB"); },
  // openRangePickerDialogue: formattedRange => formattedRange ? `Choose range, selected range is ${formattedRange}` : 'Choose range',
  fieldClearLabel: 'Изчисти стойност',

  // Table labels
  timeTableLabel: 'избери час',
  dateTableLabel: 'избери дата',

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
  year: 'Година',
  month: 'Месец',
  day: 'Ден',
  weekDay: 'Ден от седмицата',
  hours: 'Часове',
  minutes: 'Минути',
  seconds: 'Секунди',
  meridiem: 'Преди обяд/след обяд',

  // Common
  empty: 'Празно',
};

export const bgBG = getPickersLocalization(bgBGPickers);
