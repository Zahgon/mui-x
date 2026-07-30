'use client';
import * as React from 'react';

export type CopyState = 'idle' | 'copied' | 'error';

export interface UseCopyToClipboardResult {
  copyState: CopyState;
  copy: (value: string) => void;
}

/**
 * Synchronous `document.execCommand('copy')` fallback for environments without the
 * async Clipboard API (insecure `http://` origins, older browsers). When called
 * synchronously from the click handler it runs inside the user gesture, so the copy
 * is permitted. When reached from the async Clipboard rejection path the gesture may
 * already have lapsed and the browser can block `execCommand` — which is why this
 * returns whether it actually succeeded rather than assuming it did.
 */
function legacyCopy(value: string): boolean {
  if (
    typeof document === 'undefined' ||
    typeof document.execCommand !== 'function' ||
    // `document.body` can be null very early in page life; appending below would throw.
    document.body == null
  ) {
    return false;
  }
  const textarea = document.createElement('textarea');
  textarea.value = value;
  textarea.setAttribute('readonly', '');
  // Keep it out of the layout/viewport so it can't scroll the page or flash.
  textarea.style.position = 'fixed';
  textarea.style.top = '0';
  textarea.style.left = '0';
  textarea.style.opacity = '0';
  textarea.style.pointerEvents = 'none';
  document.body.appendChild(textarea);
  try {
    textarea.select();
    textarea.setSelectionRange(0, value.length);
    return document.execCommand('copy');
  } catch {
    return false;
  } finally {
    document.body.removeChild(textarea);
  }
}

export function useCopyToClipboard(resetMs: number = 2000): UseCopyToClipboardResult {
  const [copyState, setCopyState] = React.useState<CopyState>('idle');
  const resetTimerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const mountedRef = React.useRef(true);
  // Monotonic token so a late-resolving write from a superseded `copy()` call
  // cannot overwrite the state set by a newer one.
  const copyTokenRef = React.useRef(0);

  React.useEffect(() => {
      throw new Error("STUB");
  }, []);

  const setTemporaryState = React.useCallback(
    (nextState: CopyState) => {
          throw new Error("STUB");
      },
    [resetMs],
  );

  const copy = React.useCallback(
    (value: string) => {
          throw new Error("STUB");
      },
    [setTemporaryState],
  );

  return { copyState, copy };
}
