'use client';
import * as React from 'react';
import { autoScrollForElements } from '@atlaskit/pragmatic-drag-and-drop-auto-scroll/element';
import { useRenderElement } from '../../base-ui-copy/utils/useRenderElement';
import type { BaseUIComponentProps } from '../../base-ui-copy/utils/types';
import { CompositeList } from '../../base-ui-copy/composite/list/CompositeList';

export const CalendarGridTimeScrollableContent = React.forwardRef(
  function CalendarGridScrollableContent(
    componentProps: CalendarGridTimeScrollableContent.Props,
    forwardedRef: React.ForwardedRef<HTMLDivElement>,
  ) {
        throw new Error("STUB");
    },
);

export namespace CalendarGridTimeScrollableContent {
  export interface State {}

  export interface Props extends BaseUIComponentProps<'div', State> {}
}
