import type { PickersLocaleText } from './utils/pickersLocaleTextApi';
import { getPickersLocalization } from './utils/getPickersLocalization';
import type { TimeViewWithMeridiem } from '../internals/models';

const views: Record<TimeViewWithMeridiem, string> = {
  hours: '시간을',
  minutes: '분을',
  seconds: '초를',
  meridiem: '오전/오후를',
};

const koKRPickers: Partial<PickersLocaleText> = {
  // Calendar navigation
  previousMonth: '이전 달',
  nextMonth: '다음 달',

  // View navigation
  openPreviousView: '이전 화면 보기',
  openNextView: '다음 화면 보기',
  calendarViewSwitchingButtonAriaLabel: (view) =>
    { throw new Error("STUB"); },

  // DateRange labels
  start: '시작',
  end: '종료',
  startDate: '시작 날짜',
  startTime: '시작 시간',
  endDate: '종료 날짜',
  endTime: '종료 시간',

  // Action bar
  cancelButtonLabel: '취소',
  clearButtonLabel: '초기화',
  okButtonLabel: '확인',
  todayButtonLabel: '오늘',
  nextStepButtonLabel: '다음',

  // Toolbar titles
  datePickerToolbarTitle: '날짜 선택하기',
  dateTimePickerToolbarTitle: '날짜 & 시간 선택하기',
  timePickerToolbarTitle: '시간 선택하기',
  dateRangePickerToolbarTitle: '날짜 범위 선택하기',
  timeRangePickerToolbarTitle: '시간 범위 선택하기',

  // Clock labels
  clockLabelText: (view, formattedTime) =>
    { throw new Error("STUB"); },
  hoursClockNumberText: (hours) => { throw new Error("STUB"); },
  minutesClockNumberText: (minutes) => { throw new Error("STUB"); },
  secondsClockNumberText: (seconds) => { throw new Error("STUB"); },

  // Digital clock labels
  selectViewText: (view) => { throw new Error("STUB"); },

  // Calendar labels
  calendarWeekNumberHeaderLabel: '주 번호',
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
  fieldClearLabel: '지우기',

  // Table labels
  timeTableLabel: '선택한 시간',
  dateTableLabel: '선택한 날짜',

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
  year: '년',
  month: '월',
  day: '일',
  weekDay: '평일',
  hours: '시간',
  minutes: '분',
  seconds: '초',
  meridiem: '오전/오후',

  // Common
  empty: '공란',
};

export const koKR = getPickersLocalization(koKRPickers);
