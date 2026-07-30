'use client';
import * as React from 'react';
import useEnhancedEffect from '@mui/utils/useEnhancedEffect';
import useEventCallback from '@mui/utils/useEventCallback';
import useForkRef from '@mui/utils/useForkRef';
import useId from '@mui/utils/useId';
import type {
  PickerViewsRendererProps,
  UsePickerParameters,
  UsePickerProps,
  UsePickerReturnValue,
} from './usePicker.types';
import type {
  DateOrTimeViewWithMeridiem,
  PickerRangeValue,
  PickerValidValue,
  PickerValue,
} from '../../models';
import { usePickerAdapter } from '../../../hooks/usePickerAdapter';
import { useReduceAnimations } from '../useReduceAnimations';
import type { FieldRef, InferError, PickerOwnerState } from '../../../models';
import type {
  PickerActionsContextValue,
  PickerContextValue,
  PickerPrivateContextValue,
} from '../../components/PickerProvider';
import { isTimeView } from '../../utils/time-utils';
import { useViews } from '../useViews';
import type { PickerFieldPrivateContextValue } from '../useNullableFieldPrivateContext';
import { useOrientation } from './hooks/useOrientation';
import { useValueAndOpenStates } from './hooks/useValueAndOpenStates';
import type { PickersActionBarAction } from '../../../PickersActionBar';

export const usePicker = <
  TValue extends PickerValidValue,
  TView extends DateOrTimeViewWithMeridiem,
  TExternalProps extends UsePickerProps<TValue, TView, any, any>,
>({
  ref,
  props,
  valueManager,
  valueType,
  variant,
  validator,
  onPopperExited,
  autoFocusView,
  rendererInterceptor: RendererInterceptor,
  localeText,
  viewContainerRole,
  getStepNavigation,
}: UsePickerParameters<TValue, TView, TExternalProps>): UsePickerReturnValue<TValue> => {
  type TError = InferError<TExternalProps>;

  const {
    // View props
    views,
    view: viewProp,
    openTo,
    onViewChange,
    viewRenderers,
    reduceAnimations: reduceAnimationsProp,
    orientation: orientationProp,
    disableOpenPicker,
    closeOnSelect,
    // Form props
    disabled,
    readOnly,
    // Field props
    formatDensity,
    selectedSections,
    onSelectedSectionsChange,
    format,
    label,
    // Other props
    autoFocus,
    name,
    keepOpenDuringFieldFocus,
  } = props;

  const { className, sx, ...propsToForwardToView } = props;

  /**
   * TODO: Improve how we generate the aria-label and aria-labelledby attributes.
   */
  const labelId = useId();
  const adapter = usePickerAdapter();
  const reduceAnimations = useReduceAnimations(reduceAnimationsProp);
  const orientation = useOrientation(views, orientationProp);
  const { current: initialView } = React.useRef<TView | null>(openTo ?? null);

  /**
   * Refs
   */
  const [triggerElement, triggerRef] = React.useState<HTMLElement | null>(null);
  const popupRef = React.useRef<HTMLElement>(null);
  const internalFieldRef = React.useRef<FieldRef<PickerValue> | FieldRef<PickerRangeValue> | null>(
    null,
  );
  const rootRefObject = React.useRef<HTMLDivElement>(null);
  const rootRef = useForkRef(ref, rootRefObject);

  const { timezone, state, setOpen, setValue, setValueFromView, value, viewValue } =
    useValueAndOpenStates<TValue, TView, TExternalProps>({
      props,
      valueManager,
      validator,
    });

  const {
    view,
    setView,
    defaultView,
    focusedView,
    setFocusedView,
    setValueAndGoToNextView,
    goToNextStep,
    hasNextStep,
    hasSeveralSteps,
  } = useViews({
    view: viewProp,
    views,
    openTo,
    onChange: setValueFromView,
    onViewChange,
    autoFocus: autoFocusView,
    getStepNavigation,
  });

  const clearValue = useEventCallback(() => {
      throw new Error("STUB");
  });

  const setValueToToday = useEventCallback(() =>
    { throw new Error("STUB"); },
  );

  const acceptValueChanges = useEventCallback(() => { throw new Error("STUB"); });

  const cancelValueChanges = useEventCallback(() =>
    { throw new Error("STUB"); },
  );

  const dismissViews = useEventCallback(() => {
      throw new Error("STUB");
  });

  const { hasUIView, viewModeLookup, timeViewsCount } = React.useMemo(
    () =>
      { throw new Error("STUB"); },
    [viewRenderers, views],
  );

  const currentViewMode = viewModeLookup[view];
  const getCurrentViewMode = useEventCallback(() => { throw new Error("STUB"); });

  const [popperView, setPopperView] = React.useState<TView | null>(
    currentViewMode === 'UI' ? view : null,
  );
  if (popperView !== view && viewModeLookup[view] === 'UI') {
    setPopperView(view);
  }

  useEnhancedEffect(() => {
      throw new Error("STUB");
  }, [view]); // eslint-disable-line react-hooks/exhaustive-deps

  useEnhancedEffect(() => {
      throw new Error("STUB");
  }, [state.open]); // eslint-disable-line react-hooks/exhaustive-deps

  const ownerState = React.useMemo<PickerOwnerState>(
    () => { throw new Error("STUB"); },
    [
      adapter,
      valueManager,
      value,
      state.open,
      orientation,
      variant,
      props.disabled,
      props.readOnly,
    ],
  );

  const triggerStatus = React.useMemo(() => {
      throw new Error("STUB");
  }, [disableOpenPicker, hasUIView, disabled, readOnly]);

  const wrappedGoToNextStep = useEventCallback(goToNextStep);

  const defaultActionBarActions = React.useMemo<PickersActionBarAction[]>(() => {
      throw new Error("STUB");
  }, [closeOnSelect, hasSeveralSteps]);

  const actionsContextValue = React.useMemo<PickerActionsContextValue<TValue, TView, TError>>(
    () => { throw new Error("STUB"); },
    [
      setValue,
      setOpen,
      clearValue,
      setValueToToday,
      acceptValueChanges,
      cancelValueChanges,
      setView,
      wrappedGoToNextStep,
    ],
  );

  const contextValue = React.useMemo<PickerContextValue<TValue, TView, TError>>(
    () => { throw new Error("STUB"); },
    [
      actionsContextValue,
      value,
      rootRef,
      variant,
      orientation,
      reduceAnimations,
      disabled,
      readOnly,
      format,
      className,
      name,
      label,
      sx,
      triggerStatus,
      keepOpenDuringFieldFocus,
      hasNextStep,
      timezone,
      state.open,
      popperView,
      views,
      initialView,
      autoFocus,
    ],
  );

  const privateContextValue = React.useMemo<PickerPrivateContextValue>(
    () => { throw new Error("STUB"); },
    [
      dismissViews,
      ownerState,
      hasUIView,
      getCurrentViewMode,
      labelId,
      triggerElement,
      viewContainerRole,
      defaultActionBarActions,
      onPopperExited,
    ],
  );

  const fieldPrivateContextValue = React.useMemo<PickerFieldPrivateContextValue>(
    () => { throw new Error("STUB"); },
    [formatDensity, selectedSections, onSelectedSectionsChange, internalFieldRef],
  );

  const isValidContextValue = (testedValue: TValue) => {
      throw new Error("STUB");
  };

  const renderCurrentView = () => {
    if (popperView == null) {
      return null;
    }

    const renderer = viewRenderers[popperView];
    if (renderer == null) {
      return null;
    }

    const rendererProps: PickerViewsRendererProps<TValue, TView, TExternalProps> = {
      ...propsToForwardToView,
      views,
      timezone,
      value: viewValue,
      onChange: setValueAndGoToNextView,
      view: popperView,
      onViewChange: setView,
      showViewSwitcher: timeViewsCount > 1,
      timeViewsCount,
      ...(viewContainerRole === 'tooltip'
        ? { focusedView: null, onFocusedViewChange: () => {
            throw new Error("STUB");
        } }
        : {
            focusedView,
            onFocusedViewChange: setFocusedView,
          }),
    };

    if (RendererInterceptor) {
      return (
        <RendererInterceptor
          viewRenderers={viewRenderers}
          popperView={popperView}
          rendererProps={rendererProps}
        />
      );
    }

    return renderer(rendererProps);
  };

  return {
    providerProps: {
      localeText,
      contextValue,
      privateContextValue,
      actionsContextValue,
      fieldPrivateContextValue,
      isValidContextValue,
    },
    renderCurrentView,
    ownerState,
  };
};
