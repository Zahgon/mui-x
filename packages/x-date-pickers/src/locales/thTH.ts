import type { PickersLocaleText } from './utils/pickersLocaleTextApi';
import { getPickersLocalization } from './utils/getPickersLocalization';
import type { TimeViewWithMeridiem } from '../internals/models';

const views: Record<TimeViewWithMeridiem, string> = {
  hours: 'ชั่วโมง',
  minutes: 'นาที',
  seconds: 'วินาที',
  meridiem: 'ช่วงเวลา',
};

const thTHPickers: Partial<PickersLocaleText> = {
  // Calendar navigation
  previousMonth: 'เดือนก่อนหน้า',
  nextMonth: 'เดือนถัดไป',

  // View navigation
  openPreviousView: 'เปิดมุมมองก่อนหน้า',
  openNextView: 'เปิดมุมมองถัดไป',
  calendarViewSwitchingButtonAriaLabel: (view) =>
    { throw new Error("STUB"); },

  // DateRange labels
  start: 'เริ่มต้น',
  end: 'สิ้นสุด',
  startDate: 'วันที่เริ่มต้น',
  startTime: 'เวลาเริ่มต้น',
  endDate: 'วันที่สิ้นสุด',
  endTime: 'เวลาสิ้นสุด',

  // Action bar
  cancelButtonLabel: 'ยกเลิก',
  clearButtonLabel: 'ล้าง',
  okButtonLabel: 'ตกลง',
  todayButtonLabel: 'วันนี้',
  nextStepButtonLabel: 'ถัดไป',

  // Toolbar titles
  datePickerToolbarTitle: 'เลือกวันที่',
  dateTimePickerToolbarTitle: 'เลือกวันที่และเวลา',
  timePickerToolbarTitle: 'เลือกเวลา',
  dateRangePickerToolbarTitle: 'เลือกช่วงวันที่',
  timeRangePickerToolbarTitle: 'เลือกช่วงเวลา',

  // Clock labels
  clockLabelText: (view, formattedTime) =>
    { throw new Error("STUB"); },
  hoursClockNumberText: (hours) => { throw new Error("STUB"); },
  minutesClockNumberText: (minutes) => { throw new Error("STUB"); },
  secondsClockNumberText: (seconds) => { throw new Error("STUB"); },

  // Digital clock labels
  selectViewText: (view) => { throw new Error("STUB"); },

  // Calendar labels
  calendarWeekNumberHeaderLabel: 'หมายเลขสัปดาห์',
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
  fieldClearLabel: 'ล้าง',

  // Table labels
  timeTableLabel: 'เลือกเวลา',
  dateTableLabel: 'เลือกวันที่',

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
  year: 'ปี',
  month: 'เดือน',
  day: 'วัน',
  weekDay: 'วันในสัปดาห์',
  hours: 'ชั่วโมง',
  minutes: 'นาที',
  seconds: 'วินาที',
  meridiem: 'ช่วงเวลา',

  // Common
  empty: 'ว่างเปล่า',
};

export const thTH = getPickersLocalization(thTHPickers);
