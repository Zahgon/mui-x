'use client';
import useEnhancedEffect from '@mui/utils/useEnhancedEffect';

function getDevicePixelContentBoxSize(entry: ResizeObserverEntry) {
  // Safari does not support devicePixelContentBoxSize
  if (entry.devicePixelContentBoxSize) {
    return {
      width: entry.devicePixelContentBoxSize[0].inlineSize,
      height: entry.devicePixelContentBoxSize[0].blockSize,
    };
  }
  // These values not correct, but they're as close as you can get in Safari
  return {
    width: entry.contentBoxSize[0].inlineSize * devicePixelRatio,
    height: entry.contentBoxSize[0].blockSize * devicePixelRatio,
  };
}

/**
 * This hook calls the provided `onResize` callback whenever the WebGL canvas is resized.
 * It detects size changes when the element is resized, the browser zoom updates or the device pixel ratio changes.
 * These last two conditions aren't supported by Safari, so `onResize` won't be called in these cases on Safari.
 * @param gl The WebGL2 rendering context whose canvas to observe.
 * @param onResize Callback invoked after the canvas and viewport are updated.
 */
export function useWebGLResizeObserver(gl: WebGL2RenderingContext | null, onResize: () => void) {
  useEnhancedEffect(() => {
      throw new Error("STUB");
  }, [gl, gl?.canvas, onResize]);
}
