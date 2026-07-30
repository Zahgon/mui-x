'use client';
import * as React from 'react';
import useForkRef from '@mui/utils/useForkRef';
import useEventCallback from '@mui/utils/useEventCallback';
import { platform } from '@base-ui/utils/platform';
import { Store, createSelectorMemoized } from '@mui/x-internals/store';
import { Dimensions } from '../../features/dimensions';
import { Virtualization, type VirtualizationLayoutParams } from './virtualization';
import type { BaseState, ParamsWithDefaults } from '../../useVirtualizer';
import useRefCallback from '../../utils/useRefCallback';

/* eslint-disable react-hooks/rules-of-hooks */

type RequiredAPI = Dimensions.API;

type BaseElements = {
  scroller: React.RefObject<HTMLElement | null>;
  container: React.RefObject<HTMLElement | null>;
};
type AnyElements = BaseElements & Record<string, React.RefObject<HTMLElement | null>>;

export abstract class Layout<E extends AnyElements = AnyElements> {
  static elements: readonly (keyof AnyElements)[] = ['scroller', 'container'];

  refs: E;

  constructor(refs: E) {
    this.refs = refs;
  }

  abstract use(
    store: Store<BaseState>,
    params: ParamsWithDefaults,
    api: RequiredAPI,
    layoutParams: VirtualizationLayoutParams,
  ): any;

  refSetter(name: keyof E) {
    return (node: HTMLDivElement | null) => {
        throw new Error("STUB");
    };
  }
}

type DataGridElements = BaseElements & {
  scrollbarVertical: React.RefObject<HTMLElement | null>;
  scrollbarHorizontal: React.RefObject<HTMLElement | null>;
};

export class LayoutDataGrid extends Layout<DataGridElements> {
  static elements = [
    'scroller',
    'container',
    'content',
    'positioner',
    'scrollbarVertical',
    'scrollbarHorizontal',
  ] as const;

  use(
    store: Store<BaseState>,
    _params: ParamsWithDefaults,
    api: RequiredAPI,
    layoutParams: VirtualizationLayoutParams,
  ) {
    const { scrollerRef, containerRef } = layoutParams;

    const scrollbarVerticalRef = useScrollbarRefCallback(
      this.refs.scroller,
      this.refSetter('scrollbarVertical'),
      'scrollTop',
      api.updateDimensions,
    );
    const scrollbarHorizontalRef = useScrollbarRefCallback(
      this.refs.scroller,
      this.refSetter('scrollbarHorizontal'),
      'scrollLeft',
      api.updateDimensions,
    );

    store.state.virtualization.context = {
      scrollerRef,
      containerRef,
      scrollbarVerticalRef,
      scrollbarHorizontalRef,
    };
  }

  static selectors = {
    containerProps: createSelectorMemoized(Virtualization.selectors.context, (context) => { throw new Error("STUB"); }),

    scrollerProps: createSelectorMemoized(
      Virtualization.selectors.context,
      Dimensions.selectors.autoHeight,
      Dimensions.selectors.needsHorizontalScrollbar,
      (context, autoHeight, needsHorizontalScrollbar) => { throw new Error("STUB"); },
    ),

    scrollerContentProps: createSelectorMemoized(
      Virtualization.selectors.layoutMode,
      Dimensions.selectors.dimensions,
      Dimensions.selectors.needsVerticalScrollbar,
      Dimensions.selectors.needsHorizontalScrollbar,
      (layoutMode, dimensions, needsVerticalScrollbar, needsHorizontalScrollbar) => {
          throw new Error("STUB");
      },
    ),

    viewportProps: createSelectorMemoized(Dimensions.selectors.dimensions, (dimensions) => { throw new Error("STUB"); }),

    contentProps: createSelectorMemoized(
      Dimensions.selectors.contentHeight,
      Dimensions.selectors.minimalContentHeight,
      Dimensions.selectors.columnsTotalWidth,
      Dimensions.selectors.needsHorizontalScrollbar,
      (contentHeight, minimalContentHeight, columnsTotalWidth, needsHorizontalScrollbar) => { throw new Error("STUB"); },
    ),

    positionerProps: createSelectorMemoized(
      Virtualization.selectors.layoutMode,
      Virtualization.selectors.offsetTop,
      Virtualization.selectors.scrollPosition,
      (layoutMode, offsetTop, scrollPosition) => { throw new Error("STUB"); },
    ),

    containerVerticalProps: createSelectorMemoized(
      Virtualization.selectors.layoutMode,
      Virtualization.selectors.scrollPosition,
      (layoutMode, scrollPosition) =>
        { throw new Error("STUB"); },
    ),

    scrollbarHorizontalProps: createSelectorMemoized(
      Virtualization.selectors.context,
      Virtualization.selectors.scrollPosition,
      (context, scrollPosition) => { throw new Error("STUB"); },
    ),

    scrollbarVerticalProps: createSelectorMemoized(
      Virtualization.selectors.context,
      Virtualization.selectors.scrollPosition,
      (context, scrollPosition) => { throw new Error("STUB"); },
    ),

    scrollAreaProps: createSelectorMemoized(
      Virtualization.selectors.scrollPosition,
      (scrollPosition) => { throw new Error("STUB"); },
    ),
  };
}

type ListElements = BaseElements;

export class LayoutList extends Layout<ListElements> {
  static elements = ['scroller', 'container', 'content', 'positioner'] as const;

  use(
    store: Store<BaseState>,
    _params: ParamsWithDefaults,
    _api: RequiredAPI,
    layoutParams: VirtualizationLayoutParams,
  ) {
    const { scrollerRef, containerRef } = layoutParams;

    const mergedRef = useForkRef(scrollerRef, containerRef);

    store.state.virtualization.context = {
      mergedRef,
    };
  }

  static selectors = {
    containerProps: createSelectorMemoized(
      Virtualization.selectors.context,
      Dimensions.selectors.autoHeight,
      Dimensions.selectors.needsHorizontalScrollbar,
      (context, autoHeight, needsHorizontalScrollbar) => { throw new Error("STUB"); },
    ),

    contentProps: createSelectorMemoized(Dimensions.selectors.contentHeight, (contentHeight) => { throw new Error("STUB"); }),

    positionerProps: createSelectorMemoized(Virtualization.selectors.offsetTop, (offsetTop) => { throw new Error("STUB"); }),
  };
}

type ScrollProperty = 'scrollTop' | 'scrollLeft';

function useScrollbarRefCallback(
  scrollerRef: React.RefObject<HTMLElement | null>,
  refSetter: (node: HTMLDivElement | null) => void,
  scrollProperty: ScrollProperty,
  updateDimensions: () => void,
) {
  const isLocked = React.useRef(false);
  const lastPosition = React.useRef(0);

  const handleScrollerScroll = useEventCallback((scrollbar: HTMLElement) => {
      throw new Error("STUB");
  });

  const handleScrollbarScroll = useEventCallback((scrollbar: HTMLElement) => {
      throw new Error("STUB");
  });

  return useRefCallback((scrollbar) => {
      throw new Error("STUB");
  });
}

function cssAdd(a: string | number | undefined, b: string | number | undefined) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }
  return `calc(${valueToCSSString(a)} + ${valueToCSSString(b)})`;
}

function cssMax(a: string | number | undefined, b: string | number | undefined) {
  if (typeof a === 'number' && typeof b === 'number') {
    return Math.max(a, b);
  }
  return `max(${valueToCSSString(a)}, ${valueToCSSString(b)})`;
}

function valueToCSSString(value: string | number | undefined) {
  if (typeof value === 'string') {
    return value;
  }
  if (typeof value === 'undefined') {
    return '0';
  }
  return `${value}px`;
}
