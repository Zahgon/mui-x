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
    packageNames: ['@mui/x-charts-pro', '@mui/x-charts-premium'],
    imports: [
      // ChartZoomSlider → ChartsZoomSlider
      {
        oldEndpoint: 'ChartZoomSlider',
        newEndpoint: 'ChartsZoomSlider',
        importsMapping: {
          ChartZoomSlider: 'ChartsZoomSlider',
          ChartAxisZoomSliderThumbClasses: 'ChartsAxisZoomSliderThumbClasses',
          ChartAxisZoomSliderThumbClassKey: 'ChartsAxisZoomSliderThumbClassKey',
          chartAxisZoomSliderThumbClasses: 'chartsAxisZoomSliderThumbClasses',
          ChartAxisZoomSliderTrackClasses: 'ChartsAxisZoomSliderTrackClasses',
          ChartAxisZoomSliderTrackClassKey: 'ChartsAxisZoomSliderTrackClassKey',
          chartAxisZoomSliderTrackClasses: 'chartsAxisZoomSliderTrackClasses',
        },
      },
    ],
  });

  return root.toSource(printOptions);
}

export const testConfig = () => { throw new Error("STUB"); };
