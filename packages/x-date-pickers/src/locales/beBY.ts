import type { PickersLocaleText } from './utils/pickersLocaleTextApi';
import { getPickersLocalization } from './utils/getPickersLocalization';
import type { TimeViewWithMeridiem } from '../internals/models';

const views: Record<TimeViewWithMeridiem, string> = {
  // maps TimeView to its translation
  hours: 'гадзіны',
  minutes: 'хвіліны',
  seconds: 'секунды',
  meridiem: 'мерыдыем',
};

const beBYPickers: Partial<PickersLocaleText> = {
  // Calendar navigation
  previousMonth: 'Папярэдні месяц',
  nextMonth: 'Наступны месяц',

  // View navigation
  openPreviousView: 'Aдкрыць папярэдні выгляд',
  openNextView: 'Aдкрыць наступны выгляд',
  calendarViewSwitchingButtonAriaLabel: (view) =>
    { throw new Error("STUB"); },

  // DateRange labels
  start: 'Пачатак',
  end: 'Канец',
  // startDate: 'Start date',
  // startTime: 'Start time',
  // endDate: 'End date',
  // endTime: 'End time',

  // Action bar
  cancelButtonLabel: 'Адмена',
  clearButtonLabel: 'Ачысціць',
  okButtonLabel: 'OK',
  todayButtonLabel: 'Сёння',
  nextStepButtonLabel: 'Наступны',

  // Toolbar titles
  datePickerToolbarTitle: 'Абраць дату',
  dateTimePickerToolbarTitle: 'Абраць дату і час',
  timePickerToolbarTitle: 'Абраць час',
  dateRangePickerToolbarTitle: 'Абраць каляндарны перыяд',
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
  calendarWeekNumberHeaderLabel: 'Нумар тыдня',
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
  timeTableLabel: 'абраць час',
  dateTableLabel: 'абраць дату',

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

export const beBY = getPickersLocalization(beBYPickers);
