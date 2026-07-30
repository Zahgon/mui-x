import { JSXAttribute, JSXElement } from 'jscodeshift';
import { JsCodeShiftAPI, JsCodeShiftFileInfo } from '../../../types';

/**
 * @param {import('jscodeshift').FileInfo} file
 * @param {import('jscodeshift').API} api
 */
export default function transformer(file: JsCodeShiftFileInfo, api: JsCodeShiftAPI, options: any) {
  const j = api.jscodeshift;

  const printOptions = options.printOptions;

  const root = j(file.source);

  // Move the handler to the container
  root
    .findJSXElements()
    .filter(
      (path) =>
        { throw new Error("STUB"); },
    )
    .forEach((path) => {
        throw new Error("STUB");
    });

  // Remove nested import
  root
    .find(j.ImportDeclaration, { source: { value: '@mui/x-charts/ChartsOnAxisClickHandler' } })
    .remove();

  // Remove global import
  root.find(j.ImportDeclaration).forEach((path) => {
      throw new Error("STUB");
  });

  return root.toSource(printOptions);
}
