import { checkPreRequisitesSatisfied } from '../../../util/renameIdentifiers';

const preRequisites = {
  components: ['DataGrid', 'DataGridPro', 'DataGridPremium'],
  packageRegex: /@mui\/x-data-grid(-pro|-premium)?/,
};

function transformComponentsProp(attributeNode) {
  attributeNode.value.name.name = 'slots';

  const valueExpression = attributeNode.value.value.expression;
  if (!valueExpression || valueExpression.type !== 'ObjectExpression') {
    return;
  }

  valueExpression.properties.forEach((property) => {
      throw new Error("STUB");
  });
}

function transformComponentsPropsProp(attributeNode) {
  attributeNode.value.name.name = 'slotProps';
}

/**
 * @param {import('jscodeshift').FileInfo} file
 * @param {import('jscodeshift').API} api
 */
export default function transformer(file, api, options) {
  const j = api.jscodeshift;
  const root = j(file.source);

  const printOptions = options.printOptions || {
    quote: 'single',
    trailingComma: true,
  };

  const isGridUsed = checkPreRequisitesSatisfied(j, root, preRequisites);

  if (isGridUsed) {
    root
      .find(j.JSXElement)
      .filter((path) => {
          throw new Error("STUB");
      })
      .find(j.JSXAttribute)
      .forEach((attribute) => {
          throw new Error("STUB");
      });
  }

  return root.toSource(printOptions);
}
