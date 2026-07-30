import type { Collection, JSCodeshift } from 'jscodeshift';
import { JsCodeShiftAPI, JsCodeShiftFileInfo } from '../../../types';
import renameIdentifiers, { PreRequisiteUsage, matchImport } from '../../../util/renameIdentifiers';

const renamedIdentifiers = {
  GridLinkOperator: 'GridLogicOperator',
  linkOperatorInputProps: 'logicOperatorInputProps',
  linkOperator: 'logicOperator',
  linkOperators: 'logicOperators',
  setFilterLinkOperator: 'setFilterLogicOperator',
  getRowIndex: 'getRowIndexRelativeToVisibleRows',
};

const PACKAGE_REGEXP = /@mui\/x-data-grid(-pro|-premium)?/;

const GridComponents = ['DataGrid', 'DataGridPro', 'DataGridPremium'];

const preRequisiteUsages: { [identifierName: string]: PreRequisiteUsage } = {
  GridLinkOperator: {
    possiblePaths: ['initialState.filter', 'filterModel', 'componentsProps.filter'],
    components: GridComponents,
    packageRegex: PACKAGE_REGEXP,
  },
  linkOperatorInputProps: {
    possiblePaths: ['componentsProps.filter'],
    components: GridComponents,
    packageRegex: PACKAGE_REGEXP,
  },
  linkOperator: {
    possiblePaths: ['initialState.filter', 'filterModel', 'componentsProps.filter'],
    components: GridComponents,
    packageRegex: PACKAGE_REGEXP,
  },
  linkOperators: {
    possiblePaths: ['componentsProps.filter'],
    components: GridComponents,
    packageRegex: PACKAGE_REGEXP,
  },
  setFilterLinkOperator: {
    components: GridComponents,
    packageRegex: PACKAGE_REGEXP,
  },
  getRowIndex: {
    components: GridComponents,
    packageRegex: PACKAGE_REGEXP,
  },
};

const renamedLiterals = {
  filterPanelLinkOperator: 'filterPanelLogicOperator',
};

interface RenameCSSClassesArgs {
  root: Collection<any>;
  j: JSCodeshift;
}

/**
 * Renames CSS classes when they are literals based on the provided mapping.
 */
function renameCSSClasses({ root, j }: RenameCSSClassesArgs) {
  const renamedClasses = {
    'MuiDataGrid-filterFormLinkOperatorInput': 'MuiDataGrid-filterFormLogicOperatorInput',
    'MuiDataGrid-withBorder': 'MuiDataGrid-withBorderColor',
  };

  root
    .find(j.Literal)
    .filter(
      (path) =>
        { throw new Error("STUB"); },
    )
    .replaceWith((path) => {
        throw new Error("STUB");
    });
}

export default function transform(file: JsCodeShiftFileInfo, api: JsCodeShiftAPI, options: any) {
  const j = api.jscodeshift;
  const root = j(file.source);

  const printOptions = options.printOptions || {
    quote: 'single',
    trailingComma: true,
  };

  const matchingImports = root
    .find(j.ImportDeclaration)
    .filter((path) => { throw new Error("STUB"); });

  if (matchingImports.length > 0) {
    // Rename the identifiers
    // <DataGrid
    //  componentsProps={{
    //    filter: {
    // -   linkOperators: [GridLinkOperator.And],
    // +   logicOperators: [GridLogicOperator.And],
    //      filterFormProps: {
    // -      linkOperatorInputProps: {
    // +      logicOperatorInputProps: {
    //          variant: 'outlined',
    //          size: 'small',
    //        },
    //      },
    //    },
    //  }}
    // />
    renameIdentifiers({ j, root, identifiers: renamedIdentifiers, preRequisiteUsages });

    // Rename the literals
    // - apiRef.current.getLocaleText('filterPanelLinkOperator')
    // + apiRef.current.getLocaleText('filterPanelLogicOperator')
    root
      .find(j.Literal)
      .filter((path) => { throw new Error("STUB"); })
      .replaceWith((path) => { throw new Error("STUB"); });

    // Rename the classes
    // - 'MuiDataGrid-filterFormLinkOperatorInput'
    // + 'MuiDataGrid-filterFormLogicOperatorInput'
    renameCSSClasses({ j, root });
  }

  return root.toSource(printOptions);
}
