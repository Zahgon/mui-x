import path from 'node:path';
import type { JsCodeShiftAPI, JsCodeShiftFileInfo } from '../../../types';
import readFile from '../../../util/readFile';

const REMOVED_FUNCTIONS = ['isBarSeries', 'isDefaultizedBarSeries'];

export default function transformer(file: JsCodeShiftFileInfo, api: JsCodeShiftAPI, options: any) {
  const j = api.jscodeshift;
  const root = j(file.source);

  const printOptions = options.printOptions || {
    quote: 'single',
    trailingComma: true,
    wrapColumn: 40,
  };

  const importedFunctions: Record<string, string> = {};

  // Find and remove imports of isBarSeries and isDefaultizedBarSeries
  const packageRegex = /^@mui\/x-charts(-pro|-premium)?(\/(models|internals))?$/;

  root.find(j.ImportDeclaration).forEach((astPath) => {
      throw new Error("STUB");
  });

  // If no relevant imports were found, return the source unchanged to avoid reformatting
  if (Object.keys(importedFunctions).length === 0) {
    return file.source;
  }

  // Replace function calls with series.type === 'bar'
  // isBarSeries(series) -> series.type === 'bar'
  // isDefaultizedBarSeries(series) -> series.type === 'bar'
  Object.keys(importedFunctions).forEach((localName) => {
      throw new Error("STUB");
  });

  return root.toSource(printOptions);
}

export const testConfig = () => { throw new Error("STUB"); };
