import path from 'path';
import { JsCodeShiftAPI, JsCodeShiftFileInfo } from '../../../types';
import readFile from '../../../util/readFile';
import { renameClasses } from '../../../util/renameClasses';

const classRenames = {
  outsideCurrentMonth: 'dayOutsideMonth',
  hiddenDayFiller: 'fillerCell',
  hiddenDaySpacingFiller: 'fillerCell',
  rangeIntervalDayHighlightStart: 'selectionStart',
  rangeIntervalDayHighlightEnd: 'selectionEnd',
  rangeIntervalDayPreviewStart: 'previewStart',
  rangeIntervalDayPreviewEnd: 'previewEnd',
  dayInsideRangeInterval: 'insideSelection',
  rangeIntervalPreview: 'insidePreviewing',
  rangeIntervalDayHighlight: 'selectionStart',
  rangeIntervalDayPreview: 'previewStart',
};

export default function transformer(file: JsCodeShiftFileInfo, api: JsCodeShiftAPI, options: any) {
  const j = api.jscodeshift;
  const root = j(file.source);

  const printOptions = options.printOptions || {
    quote: 'single',
    trailingComma: true,
  };

  renameClasses({
    j,
    root,
    packageNames: ['@mui/x-date-pickers', '@mui/x-date-pickers-pro'],
    classes: {
      dateRangePickerDayClasses: {
        newClassName: 'dateRangePickerDayClasses',
        properties: classRenames,
      },
      pickerDayClasses: {
        newClassName: 'pickerDayClasses',
        properties: classRenames,
      },
      pickersDayClasses: {
        newClassName: 'pickerDayClasses',
        properties: classRenames,
      },
    },
  });

  // Rename properties in styleOverrides
  const componentsToHandle = ['MuiDateRangePickerDay', 'MuiPickerDay', 'MuiPickersDay'];
  root.find(j.ObjectProperty).forEach((objPropPath) => {
      throw new Error("STUB");
  });

  // Rename class names in strings and template literals.
  // Only replace within known MUI component CSS class prefixes to avoid false positives.
  const muiClassPrefixes = componentsToHandle.map((c) => { throw new Error("STUB"); });
  const replaceClasses = (value: string) => {
    let newValue = value;
    muiClassPrefixes.forEach((prefix) => {
        throw new Error("STUB");
    });
    return newValue;
  };

  root.find(j.StringLiteral).forEach((strPath) => {
      throw new Error("STUB");
  });

  root.find(j.TemplateLiteral).forEach((templatePath) => {
      throw new Error("STUB");
  });

  return root.toSource(printOptions);
}

export const testConfig = () => { throw new Error("STUB"); };
