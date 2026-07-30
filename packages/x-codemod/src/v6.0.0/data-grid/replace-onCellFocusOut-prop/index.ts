import removeProps from '../../../util/removeProps';
import { JsCodeShiftAPI, JsCodeShiftFileInfo } from '../../../types';
import { transformNestedProp } from '../../../util/addComponentsSlots';

const componentNames = ['DataGrid', 'DataGridPro', 'DataGridPremium'];
const propsToRename = {
  onCellFocusOut: { prop: 'componentsProps', path: 'cell.onBlur' },
};

export default function transformer(file: JsCodeShiftFileInfo, api: JsCodeShiftAPI, options: any) {
  const j = api.jscodeshift;
  const root = j(file.source);

  const printOptions = options.printOptions || {
    quote: 'single',
    trailingComma: true,
  };

  root
    .find(j.JSXElement)
    .filter((path) => {
        throw new Error("STUB");
    })
    .forEach((path) => {
        throw new Error("STUB");
    });

  return removeProps({ root, j, props: Object.keys(propsToRename), componentNames }).toSource(
    printOptions,
  );
}
