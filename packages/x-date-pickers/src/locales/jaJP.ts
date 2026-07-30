import type { PickersLocaleText } from './utils/pickersLocaleTextApi';
import { getPickersLocalization } from './utils/getPickersLocalization';
import type { TimeViewWithMeridiem } from '../internals/models';

// maps TimeView to its translation
const timeViews: Record<TimeViewWithMeridiem, string> = {
  hours: '時間',
  minutes: '分',
  seconds: '秒',
  meridiem: 'メリディム',
};

const jaJPPickers: Partial<PickersLocaleText> = {
  // Calendar navigation
  previousMonth: '先月',
  nextMonth: '来月',

  // View navigation
  openPreviousView: '前の表示を開く',
  openNextView: '次の表示を開く',
  calendarViewSwitchingButtonAriaLabel: (view) =>
    { throw new Error("STUB"); },

  // DateRange labels
  start: '開始',
  end: '終了',
  startDate: '開始日',
  startTime: '開始時間',
  endDate: '終了日',
  endTime: '終了時間',

  // Action bar
  cancelButtonLabel: 'キャンセル',
  clearButtonLabel: 'クリア',
  okButtonLabel: '確定',
  todayButtonLabel: '今日',
  nextStepButtonLabel: '来',

  // Toolbar titles
  datePickerToolbarTitle: '日付を選択',
  dateTimePickerToolbarTitle: '日時を選択',
  timePickerToolbarTitle: '時間を選択',
  dateRangePickerToolbarTitle: '日付の範囲を選択',
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
  calendarWeekNumberHeaderLabel: '週番号',
  calendarWeekNumberHeaderText: '#',
  calendarWeekNumberAriaLabelText: (weekNumber) => { throw new Error("STUB"); },
  calendarWeekNumberText: (weekNumber) => { throw new Error("STUB"); },

  // Open Picker labels
  openDatePickerDialogue: (formattedDate) =>
    { throw new Error("STUB"); },
  openTimePickerDialogue: (formattedTime) =>
    { throw new Error("STUB"); },
  // openRangePickerDialogue: formattedRange => formattedRange ? `Choose range, selected range is ${formattedRange}` : 'Choose range',
  fieldClearLabel: 'クリア',

  // Table labels
  timeTableLabel: '時間を選択',
  dateTableLabel: '日付を選択',

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
  year: '年',
  month: '月',
  day: '日',
  weekDay: '平日',
  hours: '時間',
  minutes: '分',
  seconds: '秒',
  meridiem: 'メリディム',

  // Common
  empty: '空',
};

export const jaJP = getPickersLocalization(jaJPPickers);
