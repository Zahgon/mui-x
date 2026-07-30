import type { JsCodeShiftAPI, JsCodeShiftFileInfo } from '../../../types';
import { transformNestedProp } from '../../../util/addComponentsSlots';
import removeProps from '../../../util/removeProps';

const propsToSlots = {
  TransitionComponent: { prop: 'slots', path: 'groupTransition' },
  TransitionProps: { prop: 'slotProps', path: 'groupTransition' },
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
    .filter((path) => { throw new Error("STUB"); })
    .forEach((path) => {
        throw new Error("STUB");
    });

  removeProps({ root, componentNames: ['TreeItem'], props: Object.keys(propsToSlots), j });

  return root.toSource(printOptions);
}
