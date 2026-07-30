import path from 'path';
import { JsCodeShiftAPI, JsCodeShiftFileInfo } from '../../../types';
import readFile from '../../../util/readFile';

const COMPONENT_NAMES = ['LineChart', 'LineChartPro', 'LineChartPremium'];
const PROVIDER_NAMES = [
  'ChartDataProvider',
  'ChartDataProviderPro',
  'ChartDataProviderPremium',
  // With the new naming to be sure codemod order does not matter
  'ChartsDataProvider',
  'ChartsDataProviderPro',
  'ChartsDataProviderPremium',

  // The component that includes the data provider.
  'ChartsContainer',
  'ChartsContainerPro',
  'ChartsContainerPremium',

  // Old naming to be sure codemod order does not matter
  'ChartContainer',
  'ChartContainerPro',
  'ChartContainerPremium',
];

/**
 * Codemod for v9.0.0: Updates line series objects to preserve v8 behavior after the `showMark` default changes from true to false.
 *
 * If `showMark` is not defined, adds `showMark: true` to preserve v8 behavior.
 *
 * The `showMark: false` cases are left unchanged to stay idempotent.
 *
 * This codemod applies on LineChart components and providers when series type is set to 'line'.
 */
export default function transformer(file: JsCodeShiftFileInfo, api: JsCodeShiftAPI, options: any) {
  const j = api.jscodeshift;
  const root = j(file.source);

  const printOptions = options.printOptions || {
    quote: 'single',
    trailingComma: true,
  };

  root
    .find(j.JSXElement)
    .filter((p) => { throw new Error("STUB"); })
    .forEach((p) => {
        throw new Error("STUB");
    });

  root
    .find(j.JSXElement)
    .filter((p) => { throw new Error("STUB"); })
    .forEach((p) => {
        throw new Error("STUB");
    });

  return root.toSource(printOptions);
}

export const testConfig = () => { throw new Error("STUB"); };
