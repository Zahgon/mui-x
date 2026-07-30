'use client';
import * as React from 'react';
import type { BaseUIComponentProps } from '@mui/x-scheduler-internals/base-ui-copy';
import { useRenderElement } from '@mui/x-scheduler-internals/base-ui-copy';

export const TimelineGridCell = React.forwardRef(function TimelineGridCell(
  componentProps: TimelineGridCell.Props,
  forwardedRef: React.ForwardedRef<HTMLDivElement>,
) {
    throw new Error("STUB");
});

export namespace TimelineGridCell {
  export interface State {}

  export interface Props extends BaseUIComponentProps<'div', State> {}
}
