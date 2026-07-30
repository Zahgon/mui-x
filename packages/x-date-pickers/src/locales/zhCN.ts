import type { PickersLocaleText } from './utils/pickersLocaleTextApi';
import { getPickersLocalization } from './utils/getPickersLocalization';
import type { TimeViewWithMeridiem } from '../internals/models';

const views: Record<TimeViewWithMeridiem, string> = {
  hours: '小时',
  minutes: '分钟',
  seconds: '秒',
  meridiem: '十二小时制',
};

const zhCNPickers: Partial<PickersLocaleText> = {
  // Calendar navigation
  previousMonth: '上个月',
  nextMonth: '下个月',

  // View navigation
  openPreviousView: '前一个视图',
  openNextView: '下一个视图',
  calendarViewSwitchingButtonAriaLabel: (view) =>
    { throw new Error("STUB"); },

  // DateRange labels
  start: '开始',
  end: '结束',
  startDate: '开始日期',
  startTime: '开始时间',
  endDate: '结束日期',
  endTime: '结束时间',

  // Action bar
  cancelButtonLabel: '取消',
  clearButtonLabel: '清除',
  okButtonLabel: '确认',
  todayButtonLabel: '今天',
  nextStepButtonLabel: '下个',

  // Toolbar titles
  datePickerToolbarTitle: '选择日期',
  dateTimePickerToolbarTitle: '选择日期和时间',
  timePickerToolbarTitle: '选择时间',
  dateRangePickerToolbarTitle: '选择日期范围',
  timeRangePickerToolbarTitle: '选择时间范围',

  // Clock labels
  clockLabelText: (view, formattedTime) =>
    { throw new Error("STUB"); },
  hoursClockNumberText: (hours) => { throw new Error("STUB"); },
  minutesClockNumberText: (minutes) => { throw new Error("STUB"); },
  secondsClockNumberText: (seconds) => { throw new Error("STUB"); },

  // Digital clock labels
  selectViewText: (view) => { throw new Error("STUB"); },

  // Calendar labels
  calendarWeekNumberHeaderLabel: '周数',
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
  timeTableLabel: '选择时间',
  dateTableLabel: '选择日期',

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
  hours: '时',
  minutes: '分',
  seconds: '秒',
  meridiem: '十二小时制',

  // Common
  empty: '空',
};

export const zhCN = getPickersLocalization(zhCNPickers);
