import path from 'path';
import { JsCodeShiftAPI, JsCodeShiftFileInfo } from '../../../types';
import readFile from '../../../util/readFile';

const pickerNames = [
  'DatePicker',
  'DesktopDatePicker',
  'MobileDatePicker',
  'StaticDatePicker',
  'DateTimePicker',
  'DesktopDateTimePicker',
  'MobileDateTimePicker',
  'StaticDateTimePicker',
  'TimePicker',
  'DesktopTimePicker',
  'MobileTimePicker',
  'StaticTimePicker',
  'DateRangePicker',
  'DesktopDateRangePicker',
  'MobileDateRangePicker',
  'StaticDateRangePicker',
  'DateTimeRangePicker',
  'DesktopDateTimeRangePicker',
  'MobileDateTimeRangePicker',
  'TimeRangePicker',
  'DesktopTimeRangePicker',
  'MobileTimeRangePicker',
  'DateCalendar',
  'DayCalendar',
];

export default function transformer(file: JsCodeShiftFileInfo, api: JsCodeShiftAPI, options: any) {
  const j = api.jscodeshift;
  const root = j(file.source);

  const printOptions = options.printOptions || {
    quote: 'single',
    trailingComma: true,
  };

  const dayComponents = ['PickerDay2', 'DateRangePickerDay2'];

  root.find(j.ObjectExpression).forEach((objectExpressionPath) => {
      throw new Error("STUB");
  });

  // Remove imports if no longer used
  dayComponents.forEach((componentName) => {
      throw new Error("STUB");
  });

  return root.toSource(printOptions);
}

export const testConfig = () => { throw new Error("STUB"); };
