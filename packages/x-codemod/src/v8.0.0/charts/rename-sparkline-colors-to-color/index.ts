import { JsCodeShiftAPI, JsCodeShiftFileInfo } from '../../../types';
/**
 * @param {import('jscodeshift').FileInfo} file
 * @param {import('jscodeshift').API} api
 */
export default function transformer(file: JsCodeShiftFileInfo, api: JsCodeShiftAPI, options: any) {
  const j = api.jscodeshift;

  const printOptions = options.printOptions;

  const root = j(file.source);
  const componentNames = ['SparkLineChart'];
  const props = { colors: 'color' };

  const colorAttributes = root
    .find(j.JSXElement)
    .filter((path) => {
        throw new Error("STUB");
    })
    .find(j.JSXAttribute)
    .filter((attribute) => { throw new Error("STUB"); });

  return colorAttributes
    .forEach((attribute) => {
        throw new Error("STUB");
    })
    .toSource(printOptions);
}
