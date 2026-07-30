import type { PickersLocaleText } from './utils/pickersLocaleTextApi';
import { getPickersLocalization } from './utils/getPickersLocalization';
import type { TimeViewWithMeridiem } from '../internals/models';

// Translation map for Clock Label
const timeViews: Record<TimeViewWithMeridiem, string> = {
  hours: 'Сағатты',
  minutes: 'Минутты',
  seconds: 'Секундты',
  meridiem: 'Меридием',
};

const kzKZPickers: Partial<PickersLocaleText> = {
  // Calendar navigation
  previousMonth: 'Алдыңғы ай',
  nextMonth: 'Келесі ай',

  // View navigation
  openPreviousView: 'Алдыңғы көріністі ашу',
  openNextView: 'Келесі көріністі ашу',
  calendarViewSwitchingButtonAriaLabel: (view) =>
    { throw new Error("STUB"); },

  // DateRange labels
  start: 'Бастау',
  end: 'Cоңы',
  // startDate: 'Start date',
  // startTime: 'Start time',
  // endDate: 'End date',
  // endTime: 'End time',

  // Action bar
  cancelButtonLabel: 'Бас тарту',
  clearButtonLabel: 'Тазарту',
  okButtonLabel: 'Ок',
  todayButtonLabel: 'Бүгін',
  nextStepButtonLabel: 'Келесі',

  // Toolbar titles
  datePickerToolbarTitle: 'Күнді таңдау',
  dateTimePickerToolbarTitle: 'Күн мен уақытты таңдау',
  timePickerToolbarTitle: 'Уақытты таңдау',
  dateRangePickerToolbarTitle: 'Кезеңді таңдаңыз',
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
  calendarWeekNumberHeaderLabel: 'Апта нөмірі',
  calendarWeekNumberHeaderText: '№',
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
  timeTableLabel: 'уақытты таңдау',
  dateTableLabel: 'күнді таңдау',

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

export const kzKZ = getPickersLocalization(kzKZPickers);
