'use client';
import * as React from 'react';
import { useRenderElement } from '../../base-ui-copy/utils/useRenderElement';
import type { BaseUIComponentProps } from '../../base-ui-copy/utils/types';
import { useEvent } from '../../internals/utils/useEvent';

export const CalendarGridDayEventPlaceholder = React.forwardRef(
  function CalendarGridDayEventPlaceholder(
    componentProps: CalendarGridDayEventPlaceholder.Props,
    forwardedRef: React.ForwardedRef<HTMLDivElement>,
  ) {
        throw new Error("STUB");
    },
);

export namespace CalendarGridDayEventPlaceholder {
  export interface State extends useEvent.State {}

  export interface Props extends BaseUIComponentProps<'div', State>, useEvent.Parameters {}
}
