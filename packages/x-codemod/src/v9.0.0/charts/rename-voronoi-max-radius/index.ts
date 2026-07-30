import path from 'path';
import type { JsCodeShiftAPI, JsCodeShiftFileInfo } from '../../../types';
import readFile from '../../../util/readFile';
import renameProps from '../../../util/renameProps';

export default function transformer(file: JsCodeShiftFileInfo, api: JsCodeShiftAPI, options: any) {
  const j = api.jscodeshift;
  const root = j(file.source);

  const printOptions = options.printOptions || {
    quote: 'single',
    trailingComma: true,
  };

  renameProps({
    j,
    root,
    componentNames: [
      'ScatterChart',
      'ScatterChartPro',
      'SparkLineChart',
      'ChartsContainer',
      'ChartContainer',
      'ChartDataProvider',
      'ChartsDataProvider',
      'ChartDataProviderPro',
      'ChartsDataProviderPro',
      'ChartDataProviderPremium',
      'ChartsDataProviderPremium',
    ],
    props: {
      voronoiMaxRadius: 'hitAreaRadius',
      disableVoronoi: 'disableHitArea',
    },
  });

  return root.toSource(printOptions);
}

export const testConfig = () => { throw new Error("STUB"); };
