const defaultPropsToKey = {
  cancelText: ['cancelButtonLabel'],
  okText: ['okButtonLabel'],
  todayText: ['todayButtonLabel'],
  clearText: ['clearButtonLabel'],
  endText: ['end'],
  getClockLabelText: ['clockLabelText'],
  getHoursClockNumberText: ['hoursClockNumberText'],
  getMinutesClockNumberText: ['minutesClockNumberText'],
  getSecondsClockNumberText: ['secondsClockNumberText'],
  getViewSwitchingButtonText: ['calendarViewSwitchingButtonAriaLabel'],
  startText: ['start'],
};

const isMonthSwitchComponent = {
  DatePicker: true,
  StaticDatePicker: true,
  MobileDatePicker: true,
  DesktopDatePicker: true,
  DateRangePicker: true,
  StaticDateRangePicker: true,
  MobileDateRangePicker: true,
  DesktopDateRangePicker: true,
  CalendarPicker: true,
  // Special cases of DateTimePickers present in both
  DateTimePicker: true,
  StaticDateTimePicker: true,
  MobileDateTimePicker: true,
  DesktopDateTimePicker: true,
};

const isViewSwitchComponent = {
  TimePicker: true,
  StaticTimePicker: true,
  MobileTimePicker: true,
  DesktopTimePicker: true,
  DateTimePicker: true,
  ClockPicker: true,
  // Special cases of DateTimePickers present in both
  StaticDateTimePicker: true,
  MobileDateTimePicker: true,
  DesktopDateTimePicker: true,
};

const needsWrapper = {
  ClockPicker: true,
  CalendarPicker: true,
};

const impactedComponents = [
  'DateRangePicker',
  'CalendarPicker',
  'ClockPicker',
  'DatePicker',
  'DateRangePicker',
  'DateRangePickerDay',
  'DateTimePicker',
  'DesktopDatePicker',
  'DesktopDateRangePicker',
  'DesktopDateTimePicker',
  'DesktopTimePicker',
  'MobileDatePicker',
  'MobileDateRangePicker',
  'MobileDateTimePicker',
  'MobileTimePicker',
  'StaticDatePicker',
  'StaticDateRangePicker',
  'StaticDateTimePicker',
  'StaticTimePicker',
  'TimePicker',
];

/**
 * @param {import('jscodeshift').FileInfo} file
 * @param {import('jscodeshift').API} api
 */
export default function transformer(file, api, options) {
  const j = api.jscodeshift;

  const printOptions = options.printOptions;

  const root = j(file.source);

  impactedComponents.forEach((componentName) => {
      throw new Error("STUB");
  });

  return root.toSource(printOptions);
}
