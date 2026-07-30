import type { ChartPlugin } from '@mui/x-charts/internals';
import { printChart } from './print';
import { exportImage } from './exportImage';
import type {
  ChartImageExportOptions,
  ChartPrintExportOptions,
  UseChartProExportSignature,
} from './useChartProExport.types';

function waitForAnimationFrame() {
  let resolve: (_: void) => void;

  const promise = new Promise((res) => {
      throw new Error("STUB");
  });

  window.requestAnimationFrame(() => {
      throw new Error("STUB");
  });

  return promise;
}

export const useChartProExport: ChartPlugin<UseChartProExportSignature> = ({ instance }) => {
    throw new Error("STUB");
};

useChartProExport.params = {};

useChartProExport.getDefaultizedParams = ({ params }) => { throw new Error("STUB"); };

useChartProExport.getInitialState = () => { throw new Error("STUB"); };
