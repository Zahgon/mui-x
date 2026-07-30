import path from 'path';
import { JsCodeShiftAPI, JsCodeShiftFileInfo } from '../../../types';
import removeProps from '../../../util/removeProps';
import readFile from '../../../util/readFile';

const componentNames = [
  'BarChart',
  'LineChart',
  'PieChart',
  'ScatterChart',
  'SparkLineChart',
  'RadarChart',
  'ChartsContainer',
  'BarChartPro',
  'LineChartPro',
  'PieChartPro',
  'ScatterChartPro',
  'RadarChartPro',
  'FunnelChart',
  'Heatmap',
  'SankeyChart',
  'BarChartPremium',
  'HeatmapPremium',
  'ChartDataProvider',
  'ChartDataProviderPro',
];

export default function transformer(file: JsCodeShiftFileInfo, api: JsCodeShiftAPI, options: any) {
  const j = api.jscodeshift;
  const root = j(file.source);

  const printOptions = options.printOptions || {
    quote: 'single',
    trailingComma: true,
  };

  removeProps({
    root,
    componentNames,
    props: ['enableKeyboardNavigation'],
    shouldRemove: (attribute) => {
        throw new Error("STUB");
    },
    j,
  });

  return root.toSource(printOptions);
}

export const testConfig = () => { throw new Error("STUB"); };
