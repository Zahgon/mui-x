import renameComponentsSlots from '../../../util/renameComponentsSlots';

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
      LeftArrowButton: 'PreviousIconButton',
      RightArrowButton: 'NextIconButton',
    },
    j,
  }).toSource(printOptions);
}
