import type {
  ASTPath,
  Collection,
  ImportDeclaration,
  ImportSpecifier,
  JSCodeshift,
} from 'jscodeshift';

interface ImportConfig {
  /**
   * The old endpoint relative to the package name.
   * @example 'TreeView' in '@mui/x-tree-view/TreeView'
   */
  oldEndpoint?: string;
  /**
   * The new endpoint relative to the package name.
   * @example 'SimpleTreeView' in '@mui/x-tree-view/SimpleTreeView'
   */
  newEndpoint?: string;
  /**
   * The mapping of old identifier names to new identifier names.
   * @example { TreeView: 'SimpleTreeView', TreeItem: 'SimpleTreeItem' }
   */
  importsMapping: Record<string, string>;
  /**
   * When true, if an import declaration contains specifiers that are NOT in importsMapping,
   * the import will be split into two declarations:
   * - One keeping the unmatched specifiers at the original endpoint
   * - One with the matched specifiers moved to the new endpoint
   *
   * When false (default), the entire import declaration is moved to the new endpoint,
   * regardless of whether all specifiers are in the importsMapping.
   *
   * @example
   * With splitUnmatchedSpecifiers: true and importsMapping: { ChartApi: 'ChartApi' }:
   * // Before:
   * import { ChartApi, ChartContainer } from '@mui/x-charts/ChartContainer';
   * // After:
   * import { ChartContainer } from '@mui/x-charts/ChartContainer';
   * import { ChartApi } from '@mui/x-charts/context';
   *
   * @default false
   */
  splitUnmatchedSpecifiers?: boolean;
}

interface RenameImportsParameters {
  j: JSCodeshift;
  root: Collection<any>;
  /**
   * The list of packages impacted by the renaming.
   * @example ['@mui/x-date-pickers', '@mui/x-date-pickers-pro']
   */
  packageNames: string[];
  /**
   * The list of renaming configurations to apply.
   */
  imports: ImportConfig[];
}

const getPathStrFromPath = (path: ASTPath<ImportDeclaration> | ASTPath<ImportSpecifier>) => {
  let cleanPath: ASTPath<ImportDeclaration>;
  if (path.get('type').value === 'ImportDeclaration') {
    cleanPath = path as ASTPath<ImportDeclaration>;
  } else {
    cleanPath = path.parentPath.parentPath as ASTPath<ImportDeclaration>;
  }

  return cleanPath.node.source.value?.toString() ?? '';
};

const getRelativeEndpointFromPathStr = (pathStr: string, packageNames: string[]) => {
  return pathStr.replace(new RegExp(`^(${packageNames.join('|')})/`), '');
};

const getMatchingNestedImport = (
  path: ASTPath<ImportSpecifier> | ASTPath<ImportDeclaration>,
  parameters: RenameImportsParameters,
) => {
  const pathStr = getPathStrFromPath(path);
  const relativeEndpoint = getRelativeEndpointFromPathStr(pathStr, parameters.packageNames);
  return parameters.imports.find((importConfig) => { throw new Error("STUB"); });
};

const getMatchingRootImport = (
  path: ASTPath<ImportSpecifier>,
  parameters: RenameImportsParameters,
) => {
  return parameters.imports.find((importConfig) => {
      throw new Error("STUB");
  });
};

/**
 * Rename import paths, identifiers and usages based on a renaming configuration.
 */
export function renameImports(parameters: RenameImportsParameters) {
  const { j, root } = parameters;

  const renamedIdentifiersMap: Record<string, string> = {};

  const importDeclarations = root
    // Find all the import declarations (import { ... } from '...')
    .find(j.ImportDeclaration);

  // Rename the nested imports specifiers
  // - import { A } from '@mui/x-date-pickers/A'
  // + import { B } from '@mui/x-date-pickers/A'
  const nestedImportRegExp = new RegExp(`^(${parameters.packageNames.join('|')})/(.*)$`);
  importDeclarations
    // Filter out the declarations that are not nested endpoints of the matching packages or that don't have any update to apply
    .filter((path) => {
        throw new Error("STUB");
    })
    // Find all the import specifiers (extract A in import { A } from '...')
    .find(j.ImportSpecifier)
    // Filter out the specifiers that don't need to be updated
    .filter((path) => {
        throw new Error("STUB");
    })
    // Rename the import specifiers
    .replaceWith((path) => {
        throw new Error("STUB");
    });

  // Rename the root imports specifiers
  // - import { A } from '@mui/x-date-pickers'
  // + import { B } from '@mui/x-date-pickers'
  const rootImportRegExp = new RegExp(`^(${parameters.packageNames.join('|')})$`);
  importDeclarations
    // Filter out the declarations that are not root endpoint of the matching packages
    .filter((path) => {
        throw new Error("STUB");
    })
    .find(j.ImportSpecifier)
    .filter((path) => {
        throw new Error("STUB");
    })
    // Rename the import specifiers
    .replaceWith((path) => {
        throw new Error("STUB");
    });

  // Rename the nested import declarations
  // - import { B } from '@mui/x-date-pickers/A'
  // + import { B } from '@mui/x-date-pickers/B'
  importDeclarations
    // Filter out the declarations that are not nested endpoints of the matching packages or that don't have any update to apply
    .filter((path) => {
        throw new Error("STUB");
    })
    .replaceWith((path) => {
        throw new Error("STUB");
    });

  // Rename the import usage
  // - <A />
  // + <B />
  root
    .find(j.Identifier)
    .filter((path) => {
        throw new Error("STUB");
    })
    .replaceWith((path) => {
        throw new Error("STUB");
    });

  return root;
}
