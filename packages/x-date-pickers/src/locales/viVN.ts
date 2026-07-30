import type { PickersLocaleText } from './utils/pickersLocaleTextApi';
import { getPickersLocalization } from './utils/getPickersLocalization';
import type { TimeViewWithMeridiem } from '../internals/models';

const views: Record<TimeViewWithMeridiem, string> = {
  hours: 'giờ',
  minutes: 'phút',
  seconds: 'giây',
  meridiem: 'buổi',
};

const viVNPickers: Partial<PickersLocaleText> = {
  // Calendar navigation
  previousMonth: 'Tháng trước',
  nextMonth: 'Tháng sau',

  // View navigation
  openPreviousView: 'Mở xem trước',
  openNextView: 'Mở xem sau',
  calendarViewSwitchingButtonAriaLabel: (view) =>
    { throw new Error("STUB"); },

  // DateRange labels
  start: 'Bắt đầu',
  end: 'Kết thúc',
  startDate: 'Ngày bắt đầu',
  startTime: 'Thời gian bắt đầu',
  endDate: 'Ngày kết thúc',
  endTime: 'Thời gian kết thúc',

  // Action bar
  cancelButtonLabel: 'Hủy',
  clearButtonLabel: 'Xóa',
  okButtonLabel: 'OK',
  todayButtonLabel: 'Hôm nay',
  nextStepButtonLabel: 'Sau',

  // Toolbar titles
  datePickerToolbarTitle: 'Chọn ngày',
  dateTimePickerToolbarTitle: 'Chọn ngày và giờ',
  timePickerToolbarTitle: 'Chọn giờ',
  dateRangePickerToolbarTitle: 'Chọn khoảng ngày',
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
  calendarWeekNumberHeaderLabel: 'Số tuần',
  calendarWeekNumberHeaderText: '#',
  calendarWeekNumberAriaLabelText: (weekNumber) => { throw new Error("STUB"); },
  calendarWeekNumberText: (weekNumber) => { throw new Error("STUB"); },

  // Open Picker labels
  openDatePickerDialogue: (formattedDate) =>
    { throw new Error("STUB"); },
  openTimePickerDialogue: (formattedTime) =>
    { throw new Error("STUB"); },
  // openRangePickerDialogue: formattedRange => formattedRange ? `Choose range, selected range is ${formattedRange}` : 'Choose range',
  fieldClearLabel: 'Xóa giá trị',

  // Table labels
  timeTableLabel: 'chọn giờ',
  dateTableLabel: 'chọn ngày',

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
  year: 'Năm',
  month: 'Tháng',
  day: 'Ngày',
  weekDay: 'Thứ',
  hours: 'Giờ',
  minutes: 'Phút',
  seconds: 'Giây',
  meridiem: 'Buổi',

  // Common
  empty: 'Trống',
};

export const viVN = getPickersLocalization(viVNPickers);
