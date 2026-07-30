import type { TimeClockProps } from '../TimeClock';
import { TimeClock } from '../TimeClock';
import type { TimeView } from '../models';
import type { DigitalClockProps } from '../DigitalClock';
import { DigitalClock } from '../DigitalClock';
import type { BaseClockProps } from '../internals/models/props/time';
import type { MultiSectionDigitalClockProps } from '../MultiSectionDigitalClock';
import { MultiSectionDigitalClock } from '../MultiSectionDigitalClock';
import { isInternalTimeView, isTimeView } from '../internals/utils/time-utils';
import type { TimeViewWithMeridiem } from '../internals/models';
import type { TimePickerProps } from '../TimePicker/TimePicker.types';

export type TimeViewRendererProps<
  TView extends TimeViewWithMeridiem,
  TComponentProps extends BaseClockProps<TView>,
> = Omit<TComponentProps, 'views' | 'openTo' | 'view' | 'onViewChange'> & {
  view: TView;
  onViewChange?: (view: TView) => void;
  views: readonly TView[];
};

export const renderTimeViewClock = ({
  view,
  onViewChange,
  focusedView,
  onFocusedViewChange,
  views,
  value,
  defaultValue,
  referenceDate,
  onChange,
  className,
  classes,
  disableFuture,
  disablePast,
  minTime,
  maxTime,
  shouldDisableTime,
  minutesStep,
  ampm,
  ampmInClock,
  slots,
  slotProps,
  readOnly,
  disabled,
  sx,
  autoFocus,
  showViewSwitcher,
  disableIgnoringDatePartForTimeValidation,
  timezone,
}: TimeViewRendererProps<TimeView, TimeClockProps<TimeView>>) => { throw new Error("STUB"); };

export const renderDigitalClockTimeView = ({
  view,
  onViewChange,
  focusedView,
  onFocusedViewChange,
  views,
  value,
  defaultValue,
  referenceDate,
  onChange,
  className,
  classes,
  disableFuture,
  disablePast,
  minTime,
  maxTime,
  shouldDisableTime,
  minutesStep,
  ampm,
  slots,
  slotProps,
  readOnly,
  disabled,
  sx,
  autoFocus,
  disableIgnoringDatePartForTimeValidation,
  timeSteps,
  skipDisabled,
  timezone,
}: TimeViewRendererProps<
  Extract<TimeView, 'hours'>,
  Omit<DigitalClockProps, 'timeStep'> & Pick<TimePickerProps, 'timeSteps'>
>) => { throw new Error("STUB"); };

export const renderMultiSectionDigitalClockTimeView = ({
  view,
  onViewChange,
  focusedView,
  onFocusedViewChange,
  views,
  value,
  defaultValue,
  referenceDate,
  onChange,
  className,
  classes,
  disableFuture,
  disablePast,
  minTime,
  maxTime,
  shouldDisableTime,
  minutesStep,
  ampm,
  slots,
  slotProps,
  readOnly,
  disabled,
  sx,
  autoFocus,
  disableIgnoringDatePartForTimeValidation,
  timeSteps,
  skipDisabled,
  timezone,
}: TimeViewRendererProps<TimeViewWithMeridiem, MultiSectionDigitalClockProps>) => { throw new Error("STUB"); };
