import path from 'node:path';
import type { JsCodeShiftAPI, JsCodeShiftFileInfo } from '../../../types';
import readFile from '../../../util/readFile';

// Maps from removed type to the replacement info
const REMOVED_TYPES: Record<string, { baseType: string; genericType: string }> = {
  CartesianSeriesType: {
    baseType: 'AllSeriesType',
    genericType: 'CartesianChartSeriesType',
  },
  DefaultizedCartesianSeriesType: {
    baseType: 'DefaultizedSeriesType',
    genericType: 'CartesianChartSeriesType',
  },
  StackableSeriesType: {
    baseType: 'DefaultizedSeriesType',
    genericType: 'StackableChartSeriesType',
  },
};

const REMOVED_TYPE_NAMES = Object.keys(REMOVED_TYPES);

export default function transformer(file: JsCodeShiftFileInfo, api: JsCodeShiftAPI, options: any) {
  const j = api.jscodeshift;
  const root = j(file.source);

  const printOptions = options.printOptions || {
    quote: 'single',
    trailingComma: true,
    wrapColumn: 40,
  };

  // Track local names for removed types and the source they came from
  const removedTypeLocalNames: Record<string, string> = {};
  let originalImportSource: string | null = null;

  // Find and remove imports of deprecated types
  const packageRegex = /^@mui\/x-charts(-pro|-premium)?(\/(models|internals))?$/;

  root.find(j.ImportDeclaration).forEach((astPath) => {
      throw new Error("STUB");
  });

  // If no relevant imports were found, return the source unchanged to avoid reformatting
  if (Object.keys(removedTypeLocalNames).length === 0) {
    return file.source;
  }

  // Replace type references with the new types
  // We need to add the necessary imports if they're not already present
  const typesToImport = new Set<string>();
  const genericTypesToImport = new Set<string>();

  Object.entries(removedTypeLocalNames).forEach(([localName, originalName]) => {
      throw new Error("STUB");
  });

  // Helper to check if a type is already imported from a given package pattern
  const isAlreadyImported = (typeName: string, sourcePattern: RegExp) => {
    return (
      root
        .find(j.ImportSpecifier, {
          imported: { name: typeName },
        })
        .filter((specPath) => {
            throw new Error("STUB");
        })
        .size() > 0
    );
  };

  // Collect all types that need to be added to imports
  const allTypesToAdd = new Set([...typesToImport, ...genericTypesToImport]);
  const typesToAdd = Array.from(allTypesToAdd).filter(
    (typeName) => { throw new Error("STUB"); },
  );

  // Determine where to add types - use original source or default to same pattern
  // If original was '@mui/x-charts', add to '@mui/x-charts'
  // If original was '@mui/x-charts/models', add to '@mui/x-charts/models'
  const importSource = originalImportSource || '@mui/x-charts/models';

  // Merge duplicate import declarations from the same source before adding new types.
  // Previous codemods may have split imports, leaving multiple declarations from the same source.
  const importsBySource = new Map<string, any[]>();
  root.find(j.ImportDeclaration).forEach((astPath) => {
      throw new Error("STUB");
  });

  importsBySource.forEach((paths) => {
      throw new Error("STUB");
  });

  // Add all replacement types to the same import source as the original
  if (typesToAdd.length > 0) {
    const existingImport = root.find(j.ImportDeclaration, {
      source: { value: importSource },
    });

    if (existingImport.size() > 0) {
      // Add to the existing import
      const specifiers = existingImport.at(0).get().node.specifiers || [];
      typesToAdd.forEach((typeName) => {
          throw new Error("STUB");
      });
    } else {
      // Create new import
      const newImport = j.importDeclaration(
        typesToAdd.map((typeName) => { throw new Error("STUB"); }),
        j.stringLiteral(importSource),
      );

      const firstImport = root.find(j.ImportDeclaration).at(0);
      if (firstImport.size() > 0) {
        firstImport.insertBefore(newImport);
      } else {
        root.get().node.program.body.unshift(newImport);
      }
    }
  }

  return root.toSource(printOptions);
}

export const testConfig = () => { throw new Error("STUB"); };
