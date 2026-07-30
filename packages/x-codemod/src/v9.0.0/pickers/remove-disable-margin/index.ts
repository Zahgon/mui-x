import path from 'path';
import { JsCodeShiftAPI, JsCodeShiftFileInfo } from '../../../types';
import readFile from '../../../util/readFile';

// Components on which disableMargin was a direct prop
const dayComponentNames = ['PickerDay', 'PickersDay', 'DateRangePickerDay'];

/**
 * Returns true if a disableMargin JSX attribute is considered enabled (i.e. `disableMargin` or
 * `disableMargin={true}`). Returns false for `disableMargin={false}`.
 */
function isDisableMarginEnabled(attr: any): boolean {
  if (!attr.value) {
    // bare `disableMargin` with no value — equivalent to true
    return true;
  }
  if (
    attr.value.type === 'JSXExpressionContainer' &&
    attr.value.expression.type === 'BooleanLiteral'
  ) {
    return attr.value.expression.value;
  }
  // Any other expression (variable, etc.) — conservatively treat as enabled
  return true;
}

const cssVarKey = '--PickerDay-horizontalMargin';

/**
 * Merges `'--PickerDay-horizontalMargin': 0` into an existing ObjectExpression used as an `sx` value.
 * Only merges when the expression is a plain object literal.
 * Returns true if the merge succeeded.
 */
function mergeCssVarIntoSxObject(j: any, sxExpr: any): boolean {
  if (sxExpr.type !== 'ObjectExpression') {
    return false;
  }
  // Avoid adding the CSS variable if it's already there
  const alreadyHasVar = sxExpr.properties.some(
    (p: any) => { throw new Error("STUB"); },
  );
  if (!alreadyHasVar) {
    sxExpr.properties.push(j.objectProperty(j.stringLiteral(cssVarKey), j.numericLiteral(0)));
  }
  return true;
}

export default function transformer(file: JsCodeShiftFileInfo, api: JsCodeShiftAPI, options: any) {
  const j = api.jscodeshift;
  const root = j(file.source);

  const printOptions = options.printOptions || {
    quote: 'single',
    trailingComma: true,
  };

  // ─── Case 1: disableMargin directly on a day component JSX element ───────────
  root
    .find(j.JSXOpeningElement)
    .filter((p: any) => {
        throw new Error("STUB");
    })
    .forEach((openingElPath: any) => {
        throw new Error("STUB");
    });

  // ─── Case 2: disableMargin inside a slotProps.day object ─────────────────────
  root.find(j.JSXAttribute, { name: { name: 'slotProps' } }).forEach((slotPropsAttrPath: any) => {
      throw new Error("STUB");
  });

  return root.toSource(printOptions);
}

export const testConfig = () => { throw new Error("STUB"); };
