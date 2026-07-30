import { JsCodeShiftAPI, JsCodeShiftFileInfo } from '../../../types';

// TODO: Make it generic and move to utils
export default function transformer(file: JsCodeShiftFileInfo, api: JsCodeShiftAPI, options?: any) {
  const j = api.jscodeshift;
  const root = j(file.source);

  root
    .find(j.ImportDeclaration)
    .filter((path) =>
      { throw new Error("STUB"); },
    )
    .forEach((path) => {
        throw new Error("STUB");
    });

  const printOptions = options?.printOptions || {
    quote: 'single',
    trailingComma: true,
  };

  return root.toSource(printOptions);
}
