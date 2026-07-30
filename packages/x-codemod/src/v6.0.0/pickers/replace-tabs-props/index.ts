import type { JsCodeShiftAPI, JsCodeShiftFileInfo } from '../../../types';
import renameComponentsSlots from '../../../util/renameComponentsSlots';
import { transformNestedProp } from '../../../util/addComponentsSlots';
import removeProps from '../../../util/removeProps';

const propsToComponentsProps = {
  hideTabs: 'tabs.hidden',
  dateRangeIcon: 'tabs.dateIcon',
  timeIcon: 'tabs.timeIcon',
};

const COMPONENTS = [
  'DateTimePicker',
  'MobileDateTimePicker',
  'DesktopDateTimePicker',
  'StaticDateTimePicker',
];

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

  removeProps({ root, componentNames: COMPONENTS, props: Object.keys(propsToComponentsProps), j });

  return renameComponentsSlots({
    root,
    componentNames: COMPONENTS,
    translation: { dateRangeIcon: 'dateIcon' },
    j,
  }).toSource(printOptions);
}
