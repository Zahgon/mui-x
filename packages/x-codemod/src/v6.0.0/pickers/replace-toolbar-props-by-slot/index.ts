import type { JsCodeShiftAPI, JsCodeShiftFileInfo } from '../../../types';
import { transformNestedProp } from '../../../util/addComponentsSlots';
import removeProps from '../../../util/removeProps';

const propsToSlots = {
  ToolbarComponent: { prop: 'components', path: 'Toolbar' },
  toolbarPlaceholder: { prop: 'componentsProps', path: 'toolbar.toolbarPlaceholder' },
  toolbarFormat: { prop: 'componentsProps', path: 'toolbar.toolbarFormat' },
  showToolbar: { prop: 'componentsProps', path: 'toolbar.hidden' },
  toolbarTitle: { prop: 'localeText', path: 'toolbarTitle' },
};

const COMPONENTS = [
  'DateTimePicker',
  'MobileDateTimePicker',
  'DesktopDateTimePicker',
  'StaticDateTimePicker',

  'DatePicker',
  'MobileDatePicker',
  'DesktopDatePicker',
  'StaticDatePicker',

  'TimePicker',
  'MobileTimePicker',
  'DesktopTimePicker',
  'StaticTimePicker',

  'DateRangePicker',
  'MobileDateRangePicker',
  'DesktopDateRangePicker',
  'StaticDateRangePicker',
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

  removeProps({ root, componentNames: COMPONENTS, props: Object.keys(propsToSlots), j });

  return root.toSource(printOptions);
}
