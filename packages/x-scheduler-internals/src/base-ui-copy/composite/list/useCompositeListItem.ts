'use client';
import * as React from 'react';
import { useIsoLayoutEffect } from '@base-ui/utils/useIsoLayoutEffect';
import { useCompositeListContext } from './CompositeListContext';

export interface UseCompositeListItemParameters<Metadata> {
  index?: number | undefined;
  label?: string | null | undefined;
  metadata?: Metadata | undefined;
  textRef?: React.RefObject<HTMLElement | null> | undefined;
  /** Enables guessing the indexes. This avoids a re-render after mount, which is useful for
   * large lists. This should be used for lists that are likely flat and vertical, other cases
   * might trigger a re-render anyway. */
  indexGuessBehavior?: IndexGuessBehavior | undefined;
}

interface UseCompositeListItemReturnValue {
  ref: (node: HTMLElement | null) => void;
  index: number;
}

export enum IndexGuessBehavior {
  None,
  GuessFromOrder,
}

/**
 * Used to register a list item and its index (DOM position) in the `CompositeList`.
 */
export function useCompositeListItem<Metadata>(
  params: UseCompositeListItemParameters<Metadata> = {},
): UseCompositeListItemReturnValue {
  const { label, metadata, textRef, indexGuessBehavior, index: externalIndex } = params;

  const { register, unregister, subscribeMapChange, elementsRef, labelsRef, nextIndexRef } =
    useCompositeListContext();

  const indexRef = React.useRef(-1);
  const [index, setIndex] = React.useState<number>(
    externalIndex ??
      (indexGuessBehavior === IndexGuessBehavior.GuessFromOrder
        ? () => {
            throw new Error("STUB");
        }
        : -1),
  );

  const componentRef = React.useRef<Element | null>(null);

  const ref = React.useCallback(
    (node: HTMLElement | null) => {
          throw new Error("STUB");
      },
    [index, elementsRef, labelsRef, label, textRef],
  );

  useIsoLayoutEffect(() => {
      throw new Error("STUB");
  }, [externalIndex, register, unregister, metadata]);

  useIsoLayoutEffect(() => {
      throw new Error("STUB");
  }, [externalIndex, subscribeMapChange, setIndex]);

  return React.useMemo(
    () => { throw new Error("STUB"); },
    [index, ref],
  );
}
