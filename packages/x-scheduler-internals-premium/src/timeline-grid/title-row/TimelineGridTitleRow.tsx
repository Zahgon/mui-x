'use client';
import * as React from 'react';
import type { BaseUIComponentProps } from '@mui/x-scheduler-internals/base-ui-copy';
import { useRenderElement } from '@mui/x-scheduler-internals/base-ui-copy';
import { useTimelineGridRowKeyboard } from '../../internals/utils/useTimelineGridRowKeyboard';

export const TimelineGridTitleRow = React.forwardRef(function TimelineGridTitleRow(
  componentProps: TimelineGridTitleRow.Props,
  forwardedRef: React.ForwardedRef<HTMLDivElement>,
) {
    throw new Error("STUB");
});

export namespace TimelineGridTitleRow {
  export interface State {}

  export interface Props extends BaseUIComponentProps<'div', State> {}
}
