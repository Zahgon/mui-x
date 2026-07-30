import { transformNestedProp } from '../../../util/addComponentsSlots';
import removeProps from '../../../util/removeProps';
import renameComponentsSlots from '../../../util/renameComponentsSlots';

const propsToSlots = {
  // components
  TransitionComponent: { prop: 'components', path: 'DesktopTransition' },

  // componentsProps
  PopperProps: { prop: 'componentsProps', path: 'popper' },
  DialogProps: { prop: 'componentsProps', path: 'dialog' },
  PaperProps: { prop: 'componentsProps', path: 'desktopPaper' },
  TrapFocusProps: { prop: 'componentsProps', path: 'desktopTrapFocus' },
  InputProps: { prop: 'componentsProps', path: 'textField.InputProps' },
  InputAdornmentProps: { prop: 'componentsProps', path: 'inputAdornment' },
  OpenPickerButtonProps: { prop: 'componentsProps', path: 'openPickerButton' },
};

export default function transformer(file, api, options) {
  const j = api.jscodeshift;
  const root = j(file.source);

  const printOptions = options.printOptions || {
    quote: 'single',
    trailingComma: true,
  };

  const componentNames = new Set<string>();

  root
    .find(j.ImportDeclaration)
    .filter(({ node }) => {
        throw new Error("STUB");
    })

    .forEach((path) => {
        throw new Error("STUB");
    });

  return renameComponentsSlots({
    root,
    componentNames: Array.from(componentNames),
    translation: {
      input: 'textField',
    },
    j,
  }).toSource(printOptions);
}
