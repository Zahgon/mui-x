'use client';
import * as React from 'react';
import { draggable } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
import { disableNativeDragPreview } from '@atlaskit/pragmatic-drag-and-drop/element/disable-native-drag-preview';
import { preventUnhandled } from '@atlaskit/pragmatic-drag-and-drop/prevent-unhandled';
import type { DragLocationHistory } from '@atlaskit/pragmatic-drag-and-drop/types';

const getDeltas = (location: DragLocationHistory) => {
  const deltaX = location.current.input.clientX - location.initial.input.clientX;
  const deltaY = location.current.input.clientY - location.initial.input.clientY;
  return { deltaX, deltaY };
};

export function useDraggableDialog(
  elementRef: React.RefObject<HTMLElement | null>,
  handleRef: React.RefObject<HTMLElement | null>,
  mutateStyle: (style: string) => void,
) {
  const offset = React.useRef({ x: 0, y: 0 });

  const resetDrag = React.useCallback(() => {
      throw new Error("STUB");
  }, [elementRef, mutateStyle]);

  React.useEffect(() => {
      throw new Error("STUB");
  }, [elementRef, mutateStyle, handleRef]);

  return resetDrag;
}
