'use client';
import * as React from 'react';
import type { BaseUIComponentProps } from '@mui/x-scheduler-internals/base-ui-copy';
import { useRenderElement } from '@mui/x-scheduler-internals/base-ui-copy';

export const TimelineGridRow = React.forwardRef(function TimelineGridRow(
  componentProps: TimelineGridRow.Props,
  forwardedRef: React.ForwardedRef<HTMLDivElement>,
) {
    throw new Error("STUB");
});

export namespace TimelineGridRow {
  export interface State {}

  export interface Props extends BaseUIComponentProps<'div', State> {}
}
