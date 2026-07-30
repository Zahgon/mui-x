import { JsCodeShiftAPI, JsCodeShiftFileInfo } from '../../../types';
import { transformNestedProp } from '../../../util/addComponentsSlots';
/**
 * @param {import('jscodeshift').FileInfo} file
 * @param {import('jscodeshift').API} api
 */
export default function transformer(file: JsCodeShiftFileInfo, api: JsCodeShiftAPI, options: any) {
  const j = api.jscodeshift;

  const printOptions = options.printOptions;

  const root = j(file.source);

  root
    .find(j.ImportDeclaration)
    .filter(({ node }) => {
        throw new Error("STUB");
    })
    .forEach((path) => {
        throw new Error("STUB");
    });

  const transformed = root.findJSXElements();

  return transformed.toSource(printOptions);
}
