import type { PickersLocaleText } from './utils/pickersLocaleTextApi';
import { getPickersLocalization } from './utils/getPickersLocalization';
import type { TimeViewWithMeridiem } from '../internals/models';

const views: Record<TimeViewWithMeridiem, string> = {
  hours: '小時',
  minutes: '分鐘',
  seconds: '秒',
  meridiem: '十二小時制',
};

const zhTWPickers: Partial<PickersLocaleText> = {
  // Calendar navigation
  previousMonth: '上個月',
  nextMonth: '下個月',

  // View navigation
  openPreviousView: '前一個視圖',
  openNextView: '下一個視圖',
  calendarViewSwitchingButtonAriaLabel: (view) =>
    { throw new Error("STUB"); },

  // DateRange labels
  start: '開始',
  end: '結束',
  startDate: '開始日期',
  startTime: '開始時間',
  endDate: '結束日期',
  endTime: '結束時間',

  // Action bar
  cancelButtonLabel: '取消',
  clearButtonLabel: '清除',
  okButtonLabel: '確認',
  todayButtonLabel: '今天',
  nextStepButtonLabel: '下個',

  // Toolbar titles
  datePickerToolbarTitle: '選擇日期',
  dateTimePickerToolbarTitle: '選擇日期和時間',
  timePickerToolbarTitle: '選擇時間',
  dateRangePickerToolbarTitle: '選擇日期範圍',
  timeRangePickerToolbarTitle: '選擇時間範圍',

  // Clock labels
  clockLabelText: (view, formattedTime) =>
    { throw new Error("STUB"); },
  hoursClockNumberText: (hours) => { throw new Error("STUB"); },
  minutesClockNumberText: (minutes) => { throw new Error("STUB"); },
  secondsClockNumberText: (seconds) => { throw new Error("STUB"); },

  // Digital clock labels
  selectViewText: (view) => { throw new Error("STUB"); },

  // Calendar labels
  calendarWeekNumberHeaderLabel: '週數',
  calendarWeekNumberHeaderText: '#',
  calendarWeekNumberAriaLabelText: (weekNumber) => { throw new Error("STUB"); },
  calendarWeekNumberText: (weekNumber) => { throw new Error("STUB"); },

  // Open Picker labels
  openDatePickerDialogue: (formattedDate) =>
    { throw new Error("STUB"); },
  openTimePickerDialogue: (formattedTime) =>
    { throw new Error("STUB"); },
  openRangePickerDialogue: (formattedRange) =>
    { throw new Error("STUB"); },
  fieldClearLabel: '清除',

  // Table labels
  timeTableLabel: '選擇時間',
  dateTableLabel: '選擇日期',

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
  year: '年份',
  month: '月份',
  day: '日期',
  weekDay: '星期',
  hours: '時',
  minutes: '分',
  seconds: '秒',
  meridiem: '十二小時制',

  // Common
  empty: '空',
};

export const zhTW = getPickersLocalization(zhTWPickers);
