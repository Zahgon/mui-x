import path from 'path';
import type { JsCodeShiftAPI, JsCodeShiftFileInfo } from '../../../types';
import readFile from '../../../util/readFile';
import { renameImports } from '../../../util/renameImports';

export default function transformer(file: JsCodeShiftFileInfo, api: JsCodeShiftAPI, options: any) {
  const j = api.jscodeshift;
  const root = j(file.source);

  const printOptions = options.printOptions || {
    quote: 'single',
    trailingComma: true,
  };

  renameImports({
    j,
    root,
    packageNames: ['@mui/x-charts', '@mui/x-charts-pro', '@mui/x-charts-premium'],
    imports: [
      {
        oldEndpoint: 'ChartDataProvider',
        newEndpoint: 'ChartsDataProvider',
        importsMapping: {
          ChartDataProvider: 'ChartsDataProvider',
          ChartDataProviderProps: 'ChartsDataProviderProps',
          ChartDataProviderSlots: 'ChartsDataProviderSlots',
          ChartDataProviderSlotProps: 'ChartsDataProviderSlotProps',
        },
      },
    ],
  });

  renameImports({
    j,
    root,
    packageNames: ['@mui/x-charts-pro', '@mui/x-charts-premium'],
    imports: [
      {
        oldEndpoint: 'ChartDataProviderPro',
        newEndpoint: 'ChartsDataProviderPro',
        importsMapping: {
          ChartDataProviderPro: 'ChartsDataProviderPro',
          ChartDataProviderProProps: 'ChartsDataProviderProProps',
          ChartDataProviderProSlots: 'ChartsDataProviderProSlots',
          ChartDataProviderProSlotProps: 'ChartsDataProviderProSlotProps',
        },
      },
    ],
  });

  renameImports({
    j,
    root,
    packageNames: ['@mui/x-charts-premium'],
    imports: [
      {
        oldEndpoint: 'ChartDataProviderPremium',
        newEndpoint: 'ChartsDataProviderPremium',
        importsMapping: {
          ChartDataProviderPremium: 'ChartsDataProviderPremium',
          ChartDataProviderPremiumProps: 'ChartsDataProviderPremiumProps',
          ChartDataProviderPremiumSlots: 'ChartsDataProviderPremiumSlots',
          ChartDataProviderPremiumSlotProps: 'ChartsDataProviderPremiumSlotProps',
        },
      },
    ],
  });

  return root.toSource(printOptions);
}

export const testConfig = () => { throw new Error("STUB"); };
