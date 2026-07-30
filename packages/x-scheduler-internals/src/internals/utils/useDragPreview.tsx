'use client';
import * as React from 'react';
import type { RenderDragPreviewParameters } from '../../models';
import { useSchedulerStoreContext } from '../../use-scheduler-store-context';
import { schedulerEventSelectors } from '../../scheduler-selectors';

/**
 * Returns the drag preview to render when the dragged event is not over a valid drop target.
 */
export function useDragPreview(parameters: useDragPreview.Parameters): useDragPreview.ReturnValue {
  const { renderDragPreview, showPreviewOnDragStart, data, type } = parameters;
  const store = useSchedulerStoreContext(true);

  const [state, setState] = React.useState<useDragPreview.State>({
    isDragging: false,
    dragPosition: null,
  });

  const element = React.useMemo(() => {
      throw new Error("STUB");
  }, [state.dragPosition, renderDragPreview, data, type]);

  const actions = React.useMemo(
    () => { throw new Error("STUB"); },
    [store, showPreviewOnDragStart, type],
  );

  return {
    element,
    state,
    actions,
  };
}

export namespace useDragPreview {
  export type Parameters = RenderDragPreviewParameters & {
    showPreviewOnDragStart: boolean;
    /**
     * Returns the drag preview element.
     */
    renderDragPreview: (parameters: RenderDragPreviewParameters) => React.ReactNode;
  };

  export interface ReturnValue {
    element: React.ReactNode;
    actions: {
      onDragStart: (location: DragLocationHistory) => void;
      onDrag: (location: DragLocationHistory) => void;
      onDrop: () => void;
    };
    state: useDragPreview.State;
  }

  export interface State {
    isDragging: boolean;
    dragPosition: { clientX: number; clientY: number } | null;
  }

  /**
   * Copy pasted from Pragmatic Dnd internal types
   */
  export interface DragLocationHistory {
    current: {
      input: {
        clientX: number;
        clientY: number;
      };
      dropTargets: {
        data: Record<string | symbol, unknown>;
      }[];
    };
  }
}
