'use client';
import * as React from 'react';
import useEventCallback from '@mui/utils/useEventCallback';
import type { SlideDirection } from './PickersSlideTransition';
import { useIsDateDisabled } from './useIsDateDisabled';
import type { MuiPickersAdapter, PickersTimezone, PickerValidDate } from '../models';
import type { DateCalendarDefaultizedProps } from './DateCalendar.types';
import { singleItemValueManager } from '../internals/utils/valueManagers';
import { SECTION_TYPE_GRANULARITY } from '../internals/utils/getDefaultReferenceDate';
import { findClosestEnabledDate } from '../internals/utils/date-utils';
import { usePickerAdapter } from '../hooks/usePickerAdapter';

interface CalendarState {
  currentMonth: PickerValidDate;
  focusedDay: PickerValidDate | null;
  isMonthSwitchingAnimating: boolean;
  slideDirection: SlideDirection;
}

type ReducerAction<TType, TAdditional = {}> = { type: TType } & TAdditional;

interface SetVisibleDatePayload {
  direction: SlideDirection;
  month: PickerValidDate;
  focusedDay: PickerValidDate | null;
  /**
   * The update does not trigger month switching animation.
   * It can be useful when selecting month from the month view.
   */
  skipAnimation: boolean;
}

const createCalendarStateReducer =
  (reduceAnimations: boolean, adapter: MuiPickersAdapter) =>
  (
    state: CalendarState,
    action:
      | ReducerAction<'finishMonthSwitchingAnimation'>
      | ReducerAction<'setVisibleDate', SetVisibleDatePayload>
      | ReducerAction<'changeMonthTimezone', { newTimezone: string }>,
  ): CalendarState => {
      throw new Error("STUB");
  };

interface UseCalendarStateParameters extends Pick<
  DateCalendarDefaultizedProps,
  | 'referenceDate'
  | 'disableFuture'
  | 'disablePast'
  | 'minDate'
  | 'maxDate'
  | 'onMonthChange'
  | 'onYearChange'
  | 'reduceAnimations'
  | 'shouldDisableDate'
> {
  value: PickerValidDate | null;
  timezone: PickersTimezone;
  getCurrentMonthFromVisibleDate: (
    focusedDay: PickerValidDate,
    prevMonth: PickerValidDate,
  ) => PickerValidDate;
}

interface UseCalendarStateReturnValue {
  referenceDate: PickerValidDate;
  calendarState: CalendarState;
  setVisibleDate: (parameters: SetVisibleDateParameters) => void;
  isDateDisabled: (day: PickerValidDate | null) => boolean;
  onMonthSwitchingAnimationEnd: () => void;
}

export const useCalendarState = (
  params: UseCalendarStateParameters,
): UseCalendarStateReturnValue => {
  const {
    value,
    referenceDate: referenceDateProp,
    disableFuture,
    disablePast,
    maxDate,
    minDate,
    onMonthChange,
    onYearChange,
    reduceAnimations,
    shouldDisableDate,
    timezone,
    getCurrentMonthFromVisibleDate,
  } = params;

  const adapter = usePickerAdapter();

  const reducerFn = React.useRef(
    createCalendarStateReducer(Boolean(reduceAnimations), adapter),
  ).current;

  const referenceDate = React.useMemo<PickerValidDate>(
    () => {
          throw new Error("STUB");
      },
    // We want the `referenceDate` to update on prop and `timezone` change (https://github.com/mui/mui-x/issues/10804)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [referenceDateProp, timezone],
  );

  const [calendarState, dispatch] = React.useReducer(reducerFn, {
    isMonthSwitchingAnimating: false,
    focusedDay: referenceDate,
    // Keep the time from the reference date when computing the current month anchor.
    // Using startOfMonth would reset the time to 00:00 which breaks expectations
    // that month selections preserve the referenceDate time when no value is provided.
    // See tests: "should use `referenceDate` when no value defined".
    currentMonth: adapter.setDate(referenceDate, 1),
    slideDirection: 'left',
  });

  const isDateDisabled = useIsDateDisabled({
    shouldDisableDate,
    minDate,
    maxDate,
    disableFuture,
    disablePast,
    timezone,
  });

  // Ensure that `calendarState.currentMonth` timezone is updated when `referenceDate` (or timezone changes)
  // https://github.com/mui/mui-x/issues/10804
  React.useEffect(() => {
      throw new Error("STUB");
  }, [referenceDate, adapter]);

  const setVisibleDate = useEventCallback(({ target, reason }: SetVisibleDateParameters) => {
      throw new Error("STUB");
  });

  const onMonthSwitchingAnimationEnd = React.useCallback(() => {
      throw new Error("STUB");
  }, []);

  return {
    referenceDate,
    calendarState,
    setVisibleDate,
    isDateDisabled,
    onMonthSwitchingAnimationEnd,
  };
};

interface SetVisibleDateParameters {
  target: PickerValidDate;
  reason: 'header-navigation' | 'cell-interaction' | 'controlled-value-change';
}
