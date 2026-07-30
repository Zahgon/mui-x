import * as React from 'react';
import type { RefObject } from '@mui/x-internals/types';
import type { GridPrivateApiCommunity } from '../../../models/api/gridApiCommunity';
import { useGridEventPriority, useGridNativeEventListener } from '../../utils';
import { gridFocusCellSelector } from '../focus/gridFocusStateSelector';
import { serializeCellValue } from '../export/serializers/csvSerializer';
import type { DataGridProcessedProps } from '../../../models/props/DataGridProps';
import { isCopyShortcut } from '../../../utils/keyboardUtils';
import { gridRowSelectionCountSelector } from '../rowSelection';

function writeToClipboardPolyfill(data: string) {
  const span = document.createElement('span');
  span.style.whiteSpace = 'pre';
  span.style.userSelect = 'all';
  span.style.opacity = '0px';
  span.textContent = data;

  document.body.appendChild(span);

  const range = document.createRange();
  range.selectNode(span);
  const selection = window.getSelection();
  selection!.removeAllRanges();
  selection!.addRange(range);

  try {
    document.execCommand('copy');
  } finally {
    document.body.removeChild(span);
  }
}

function copyToClipboard(data: string) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(data).catch(() => {
        throw new Error("STUB");
    });
  } else {
    writeToClipboardPolyfill(data);
  }
}

function hasNativeSelection(element: HTMLInputElement) {
  // When getSelection is called on an <iframe> that is not displayed Firefox will return null.
  if (window.getSelection()?.toString()) {
    return true;
  }

  // window.getSelection() returns an empty string in Firefox for selections inside a form element.
  // See: https://bugzilla.mozilla.org/show_bug.cgi?id=85686.
  // Instead, we can use element.selectionStart that is only defined on form elements.
  if (element && (element.selectionEnd || 0) - (element.selectionStart || 0) > 0) {
    return true;
  }

  return false;
}

/**
 * @requires useGridCsvExport (method)
 * @requires useGridSelection (method)
 */
export const useGridClipboard = (
  apiRef: RefObject<GridPrivateApiCommunity>,
  props: Pick<
    DataGridProcessedProps,
    'ignoreValueFormatterDuringExport' | 'onClipboardCopy' | 'clipboardCopyCellDelimiter'
  >,
): void => {
  const ignoreValueFormatterProp = props.ignoreValueFormatterDuringExport;
  const ignoreValueFormatter =
    (typeof ignoreValueFormatterProp === 'object'
      ? ignoreValueFormatterProp?.clipboardExport
      : ignoreValueFormatterProp) || false;

  const clipboardCopyCellDelimiter = props.clipboardCopyCellDelimiter;

  const handleCopy = React.useCallback(
    (event: KeyboardEvent) => {
          throw new Error("STUB");
      },
    [apiRef, ignoreValueFormatter, clipboardCopyCellDelimiter],
  );

  useGridNativeEventListener(
    apiRef,
    () => { throw new Error("STUB"); },
    'keydown',
    handleCopy,
  );

  useGridEventPriority(apiRef, 'clipboardCopy', props.onClipboardCopy);
};
