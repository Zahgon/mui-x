import path from 'path';
import { JsCodeShiftAPI, JsCodeShiftFileInfo } from '../../../types';
import readFile from '../../../util/readFile';

export default function transformer(file: JsCodeShiftFileInfo, api: JsCodeShiftAPI, options: any) {
  const j = api.jscodeshift;
  const root = j(file.source);

  const printOptions = options.printOptions || {
    quote: 'single',
    trailingComma: true,
  };

  const renames = {
    PickerDay2: 'PickerDay',
    PickerDay2Props: 'PickerDayProps',
    pickerDay2Classes: 'pickerDayClasses',
    PickerDay2ClassKey: 'PickerDayClassKey',
    PickerDay2Slots: 'PickerDaySlots',
    PickerDay2SlotProps: 'PickerDaySlotProps',
    PickerDay2OwnerState: 'PickerDayOwnerState',
    DateRangePickerDay2: 'DateRangePickerDay',
    DateRangePickerDay2Props: 'DateRangePickerDayProps',
    dateRangePickerDay2Classes: 'dateRangePickerDayClasses',
    DateRangePickerDay2ClassKey: 'DateRangePickerDayClassKey',
    DateRangePickerDay2Slots: 'DateRangePickerDaySlots',
    DateRangePickerDay2SlotProps: 'DateRangePickerDaySlotProps',
    DateRangePickerDay2OwnerState: 'DateRangePickerDayOwnerState',
  };

  const renameKeys = Object.keys(renames);

  // Rename imports and usages
  renameKeys.forEach((oldName) => {
      throw new Error("STUB");
  });

  // Rename theme components in createTheme / theme augmentation
  root.find(j.Identifier, { name: 'MuiPickerDay2' }).forEach((keyPath) => {
      throw new Error("STUB");
  });
  root.find(j.Identifier, { name: 'MuiDateRangePickerDay2' }).forEach((keyPath) => {
      throw new Error("STUB");
  });

  // Also handle string literals and template literals
  const replaceClass = (value: string) =>
    value
      .replace(/MuiPickerDay2\b/g, 'MuiPickerDay')
      .replace(/MuiDateRangePickerDay2\b/g, 'MuiDateRangePickerDay');

  root.find(j.StringLiteral).forEach((keyPath) => {
      throw new Error("STUB");
  });

  root.find(j.TemplateLiteral).forEach((keyPath) => {
      throw new Error("STUB");
  });

  // Update import sources
  root.find(j.ImportDeclaration).forEach((importPath) => {
      throw new Error("STUB");
  });

  return root.toSource(printOptions);
}

export const testConfig = () => { throw new Error("STUB"); };
