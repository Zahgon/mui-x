import path from 'path';
import { JsCodeShiftAPI, JsCodeShiftFileInfo } from '../../../types';
import renameProps from '../../../util/renameProps';
import readFile from '../../../util/readFile';

const fieldNames = [
  'DateField',
  'DateTimeField',
  'TimeField',
  'DateRangeField',
  'DateTimeRangeField',
  'TimeRangeField',
  'MultiInputDateRangeField',
  'MultiInputDateTimeRangeField',
  'MultiInputTimeRangeField',
  'SingleInputDateRangeField',
  'SingleInputDateTimeRangeField',
  'SingleInputTimeRangeField',
];

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
];

const props = {
  unstableFieldRef: 'fieldRef',
  unstableStartFieldRef: 'startFieldRef',
  unstableEndFieldRef: 'endFieldRef',
};

export default function transformer(file: JsCodeShiftFileInfo, api: JsCodeShiftAPI, options: any) {
  const j = api.jscodeshift;
  const root = j(file.source);

  const printOptions = options.printOptions || {
    quote: 'single',
    trailingComma: true,
  };

  renameProps({ root, j, props, componentNames: fieldNames });

  pickerNames.forEach((componentName) => {
      throw new Error("STUB");
  });

  return root.toSource(printOptions);
}

export const testConfig = () => { throw new Error("STUB"); };
