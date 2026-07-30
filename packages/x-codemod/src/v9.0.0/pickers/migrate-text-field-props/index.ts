import path from 'path';
import { JsCodeShiftAPI, JsCodeShiftFileInfo } from '../../../types';
import readFile from '../../../util/readFile';
// @ts-ignore - JS file without types
import { transformNestedProp, addItemToObject } from '../../../util/addComponentsSlots';
import removeProps from '../../../util/removeProps';

/**
 * Maps a legacy text-field prop name to the corresponding key inside `slotProps`.
 */
const PROP_TO_SLOT: Record<string, string> = {
  InputProps: 'input',
  inputProps: 'htmlInput',
  InputLabelProps: 'inputLabel',
  FormHelperTextProps: 'formHelperText',
};

const LEGACY_PROP_NAMES = Object.keys(PROP_TO_SLOT);

const FIELD_AND_PICKER_NAMES = [
  // Fields
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
  // Pickers
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

const ALL_TARGET_NAMES = [...FIELD_AND_PICKER_NAMES, 'PickersTextField'];

const getKeyName = (key: any): string | undefined => {
  if (!key) {
    return undefined;
  }
  if (key.type === 'Identifier') {
    return key.name;
  }
  if (key.type === 'Literal' || key.type === 'StringLiteral') {
    return String(key.value);
  }
  return undefined;
};

export default function transformer(file: JsCodeShiftFileInfo, api: JsCodeShiftAPI, options: any) {
  const j = api.jscodeshift;
  const root = j(file.source);

  const printOptions = options.printOptions || {
    quote: 'single',
    trailingComma: true,
  };

  // 1. Rewrite legacy props passed directly as JSX attributes on field / picker components.
  root
    .find(j.JSXElement)
    .filter((elementPath) => {
        throw new Error("STUB");
    })
    .forEach((elementPath) => {
        throw new Error("STUB");
    });

  // Drop the now-orphaned legacy attributes from the targeted components.
  removeProps({ root, componentNames: ALL_TARGET_NAMES, props: LEGACY_PROP_NAMES, j });

  // 2. Rewrite legacy props found inside `slotProps={{ field: { ... } }}` and
  //    `slotProps={{ textField: { ... } }}` regardless of which component they appear on.
  root.find(j.JSXAttribute, { name: { name: 'slotProps' } }).forEach((attrPath) => {
      throw new Error("STUB");
  });

  return root.toSource(printOptions);
}

export const testConfig = () => { throw new Error("STUB"); };
