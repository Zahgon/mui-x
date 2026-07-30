export function createExportIframe(title?: string): HTMLIFrameElement {
  const iframeEl = document.createElement('iframe');
  iframeEl.style.position = 'absolute';
  iframeEl.style.width = '0px';
  iframeEl.style.height = '0px';
  iframeEl.title = title || document.title;
  return iframeEl;
}

/**
 * Applies styles to an element and returns the previous styles.
 */
export function applyStyles(
  element: HTMLElement | SVGElement,
  styles: Record<string, string | null>,
) {
  const previousStyles: Record<string, string | null> = {};

  Object.entries(styles).forEach(([key, value]) => {
      throw new Error("STUB");
  });

  return previousStyles;
}

/**
 * Copies the content of all canvases from the original element to the cloned element.
 */
export function copyCanvasesContent(original: Element, clone: Element) {
  const originalCanvases = original.querySelectorAll('canvas');
  const cloneCanvases = clone.querySelectorAll('canvas');

  const promises = Array.from(originalCanvases).map(async (originalCanvas, index) => {
      throw new Error("STUB");
  });

  return Promise.all(promises);
}
