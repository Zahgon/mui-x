import path from 'path';
import { JsCodeShiftAPI, JsCodeShiftFileInfo } from '../../../types';
import removeProps from '../../../util/removeProps';
import readFile from '../../../util/readFile';

const componentNames = [
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

export default function transformer(file: JsCodeShiftFileInfo, api: JsCodeShiftAPI, options: any) {
  const j = api.jscodeshift;
  const root = j(file.source);

  const printOptions = options.printOptions || {
    quote: 'single',
    trailingComma: true,
  };

  removeProps({ root, j, componentNames, props: ['enableAccessibleFieldDOMStructure'] });

  // Also remove enableAccessibleFieldDOMStructure from slotProps.field
  componentNames.forEach((componentName) => {
      throw new Error("STUB");
  });

  return root.toSource(printOptions);
}

export const testConfig = () => { throw new Error("STUB"); };
