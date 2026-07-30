import ownerDocument from '@mui/utils/ownerDocument';
import { loadStyleSheets } from '@mui/x-internals/export';
import { warnOnce } from '@mui/x-internals/warning';
import { applyStyles, copyCanvasesContent, createExportIframe } from './common';
import type { ChartImageExportOptions } from './useChartProExport.types';
import { defaultOnBeforeExport } from './defaults';

export const getDrawDocument = async () => {
  try {
    const module = await import('rasterizehtml');

    return (module.default || module).drawDocument;
  } catch (error) {
    throw new Error(
      `MUI X Charts: Failed to import 'rasterizehtml' module. This dependency is mandatory when exporting a chart as an image. Make sure you have it installed as a dependency.`,
      { cause: error },
    );
  }
};

export async function exportImage(
  element: Element,
  svg: HTMLElement | SVGElement,
  params?: ChartImageExportOptions,
) {
  const {
    fileName,
    type = 'image/png',
    quality = 0.9,
    onBeforeExport = defaultOnBeforeExport,
    copyStyles = true,
    nonce,
    pixelRatio,
  } = params ?? {};
  if (
    process.env.NODE_ENV !== 'production' &&
    pixelRatio !== undefined &&
    (!Number.isFinite(pixelRatio) || pixelRatio <= 0)
  ) {
    warnOnce(
      'MUI X Charts: `pixelRatio` must be a finite number greater than 0 when exporting a chart as an image.',
      'error',
    );
  }

  const drawDocumentPromise = getDrawDocument();
  const doc = ownerDocument(element);

  const ratio = pixelRatio ?? Math.max(window.devicePixelRatio || 1, 1);
  const iframe = createExportIframe(fileName);
  /* We apply the min/max width and height to ensure the SVG doesn't resize in the export.
   * We apply to the original SVG so that the cloned tree will contain the styles and revert these
   * styles changes after the chart is cloned. */
  const previousStyles = applyStyles(svg, { width: `${svg.getBoundingClientRect().width}px` });

  let resolve: (value: void) => void;
  const iframeLoadPromise = new Promise((res) => {
      throw new Error("STUB");
  });

  iframe.onload = async () => {
      throw new Error("STUB");
  };

  doc.body.appendChild(iframe);

  await iframeLoadPromise;
  await onBeforeExport(iframe);

  const drawDocument = await drawDocumentPromise;

  /* Use the size from the export body in case `onBeforeExport` adds some elements that should be in the export. */
  const exportDocBodySize = iframe.contentDocument!.body.getBoundingClientRect();
  const canvas = document.createElement('canvas');
  canvas.width = exportDocBodySize.width * ratio;
  canvas.height = exportDocBodySize.height * ratio;
  canvas.style.width = `${exportDocBodySize.width}px`;
  canvas.style.height = `${exportDocBodySize.height}px`;

  if (canvas.width === 0 || canvas.height === 0) {
    doc.body.removeChild(iframe);
    throw new Error(
      `MUI X Charts: Cannot export an image with zero width or height. Width: ${canvas.width}px. Height: ${canvas.height}px.`,
    );
  }

  try {
    await drawDocument(iframe.contentDocument!, canvas, {
      // Handle retina displays: https://github.com/cburgmer/rasterizeHTML.js/blob/262b3404d1c469ce4a7750a2976dec09b8ae2d6c/examples/retina.html#L71
      zoom: ratio,
      nonce,
    });
  } finally {
    doc.body.removeChild(iframe);
  }

  let resolveBlobPromise: (value: Blob | null) => void;
  const blobPromise = new Promise<Blob | null>((res) => {
      throw new Error("STUB");
  });

  let blob: Blob | null;

  try {
    canvas.toBlob((b) => { throw new Error("STUB"); }, type, quality);
    blob = await blobPromise;
  } catch (error) {
    throw new Error('MUI X Charts: Failed to create blob from canvas.', { cause: error });
  }

  if (!blob) {
    throw new Error('MUI X Charts: Failed to create blob from canvas.');
  }

  const url = URL.createObjectURL(blob);

  triggerDownload(url, fileName || document.title);

  URL.revokeObjectURL(url);
}

function triggerDownload(url: string, name: string) {
  const a = document.createElement('a');
  a.href = url;
  a.download = name;
  a.click();
}
