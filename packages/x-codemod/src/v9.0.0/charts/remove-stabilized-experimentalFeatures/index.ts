import path from 'path';
import removeObjectProperty from '../../../util/removeObjectProperty';
import { JsCodeShiftAPI, JsCodeShiftFileInfo } from '../../../types';
import readFile from '../../../util/readFile';

const componentsNames = [
  'BarChart',
  'LineChart',
  'PieChart',
  'ScatterChart',
  'SparkLineChart',
  'RadarChart',
  'ChartsContainer',
  'ChartsDataProvider',
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
  'ChartDataProviderPremium',
  'ChartsDataProviderPro',
  'ChartsDataProviderPremium',
];

const propName = 'experimentalFeatures';
const propKeys = ['preferStrictDomainInLineCharts'];

export default function transformer(file: JsCodeShiftFileInfo, api: JsCodeShiftAPI, options: any) {
  const j = api.jscodeshift;
  const root = j(file.source);

  const printOptions = options.printOptions || {
    quote: 'single',
    trailingComma: true,
  };

  propKeys.forEach((propKey) => {
      throw new Error("STUB");
  });

  return root.toSource(printOptions);
}

export const testConfig = () => { throw new Error("STUB"); };
