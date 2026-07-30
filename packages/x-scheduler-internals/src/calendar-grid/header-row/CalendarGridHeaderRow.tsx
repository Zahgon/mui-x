'use client';
import * as React from 'react';
import { useRenderElement } from '../../base-ui-copy/utils/useRenderElement';
import type { BaseUIComponentProps } from '../../base-ui-copy/utils/types';
import { CompositeList } from '../../base-ui-copy/composite/list/CompositeList';

export const CalendarGridHeaderRow = React.forwardRef(function CalendarGridHeaderRow(
  componentProps: CalendarGridHeaderRow.Props,
  forwardedRef: React.ForwardedRef<HTMLDivElement>,
) {
    throw new Error("STUB");
});

export namespace CalendarGridHeaderRow {
  export interface State {}

  export interface Props extends BaseUIComponentProps<'div', State> {}
}
