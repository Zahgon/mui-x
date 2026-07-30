import ownerDocument from '@mui/utils/ownerDocument';
import { loadStyleSheets } from '@mui/x-internals/export';
import { copyCanvasesContent, createExportIframe } from './common';
import type { ChartPrintExportOptions } from './useChartProExport.types';
import { defaultOnBeforeExport } from './defaults';

export function printChart(
  element: Element,
  {
    fileName,
    onBeforeExport = defaultOnBeforeExport,
    copyStyles = true,
    nonce,
  }: ChartPrintExportOptions = {},
) {
  const printWindow = createExportIframe(fileName);
  const doc = ownerDocument(element);

  printWindow.onload = async () => {
      throw new Error("STUB");
  };

  doc.body.appendChild(printWindow);
}
