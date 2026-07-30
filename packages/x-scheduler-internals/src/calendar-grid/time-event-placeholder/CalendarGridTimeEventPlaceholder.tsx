'use client';
import * as React from 'react';
import { useRenderElement } from '../../base-ui-copy/utils/useRenderElement';
import type { BaseUIComponentProps } from '../../base-ui-copy/utils/types';
import { CalendarGridTimeEventPlaceholderCssVars } from './CalendarGridTimeEventPlaceholderCssVars';
import { useCalendarGridTimeColumnContext } from '../time-column/CalendarGridTimeColumnContext';
import { useEvent } from '../../internals/utils/useEvent';
import { useElementPositionInCollection } from '../../internals/utils/useElementPositionInCollection';

export const CalendarGridTimeEventPlaceholder = React.forwardRef(
  function CalendarGridTimeEventPlaceholder(
    componentProps: CalendarGridTimeEventPlaceholder.Props,
    forwardedRef: React.ForwardedRef<HTMLDivElement>,
  ) {
        throw new Error("STUB");
    },
);

export namespace CalendarGridTimeEventPlaceholder {
  export interface State extends useEvent.State {}

  export interface Props extends BaseUIComponentProps<'div', State>, useEvent.Parameters {}
}
