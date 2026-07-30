'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useLicenseVerifier } from '@mui/x-license/internals';
import type { CSSInterpolation, Theme } from '@mui/material/styles';
import { styled, useThemeProps } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import useForkRef from '@mui/utils/useForkRef';
import composeClasses from '@mui/utils/composeClasses';
import useEnhancedEffect from '@mui/utils/useEnhancedEffect';
import type { MuiEvent } from '@mui/x-internals/types';
import { usePickerDayOwnerState } from '@mui/x-date-pickers/internals';
import { usePickerAdapter } from '@mui/x-date-pickers/hooks';
import type {
  DateRangePickerDayOwnerState,
  DateRangePickerDayProps,
} from './DateRangePickerDay.types';
import type {
  DateRangePickerDayClasses,
  DateRangePickerDayClassKey,
} from './dateRangePickerDayClasses';
import {
  dateRangePickerDayClasses,
  getDateRangePickerDayUtilityClass,
} from './dateRangePickerDayClasses';

const useUtilityClasses = (
  ownerState: DateRangePickerDayOwnerState,
  classes?: Partial<DateRangePickerDayClasses>,
) => {
  const {
    isDaySelected,
    disableHighlightToday,
    isDayCurrent,
    isDayDisabled,
    isDayOutsideMonth,
    isDayFillerCell,
    isDayPreviewStart,
    isDayPreviewEnd,
    isDayInsidePreview,
    isDayPreviewed,
    isDaySelectionStart,
    isDaySelectionEnd,
    isDayInsideSelection,
    isDayStartOfWeek,
    isDayEndOfWeek,
    isDayStartOfMonth,
    isDayEndOfMonth,
    isDayFirstVisibleCell,
    isDayLastVisibleCell,
    isDayDraggable,
  } = ownerState;

  const slots = {
    root: [
      'root',
      isDayDisabled && 'disabled',
      !disableHighlightToday && isDayCurrent && !isDaySelected && !isDayFillerCell && 'today',
      isDayOutsideMonth && 'dayOutsideMonth',
      isDayFillerCell && 'fillerCell',
      isDaySelected && 'selected',
      isDayPreviewStart && 'previewStart',
      isDayPreviewEnd && 'previewEnd',
      isDayInsidePreview && 'insidePreviewing',
      isDaySelectionStart && 'selectionStart',
      isDaySelectionEnd && 'selectionEnd',
      isDayInsideSelection && 'insideSelection',
      isDayEndOfWeek && 'endOfWeek',
      isDayStartOfWeek && 'startOfWeek',
      isDayPreviewed && 'previewed',
      isDayStartOfMonth && 'startOfMonth',
      isDayEndOfMonth && 'endOfMonth',
      isDayFirstVisibleCell && 'firstVisibleCell',
      isDayLastVisibleCell && 'lastVisibleCell',
      isDayDraggable && 'draggable',
    ],
  };

  return composeClasses(slots, getDateRangePickerDayUtilityClass, classes);
};

const highlightStyles = (theme: Theme) => ({
  content: '""' /* Creates an empty element */,
  height: '100%',
  backgroundColor: theme.alpha(
    (theme.vars || theme).palette.primary.main,
    (theme.vars || theme).palette.action.focusOpacity,
  ),
  boxSizing: 'border-box',
  left: 'calc(var(--PickerDay-horizontalMargin) * (-1))',
  right: 'calc(var(--PickerDay-horizontalMargin) * (-1))',
});
const previewStyles = (theme: Theme) => ({
  content: '""' /* Creates an empty element */,
  height: '100%',
  border: `1.2px dashed ${(theme.vars || theme).palette.divider}`,
  borderLeftColor: 'transparent',
  borderRightColor: 'transparent',
  boxSizing: 'border-box',
  left: 'calc(-1 * var(--PickerDay-horizontalMargin))',
  right: 'calc(-1 * var(--PickerDay-horizontalMargin))',
});

const selectedDayStyles = (theme: Theme) => ({
  color: (theme.vars || theme).palette.primary.contrastText,
  backgroundColor: (theme.vars || theme).palette.primary.main,
  fontWeight: theme.typography.fontWeightMedium,
  '&:focus, &:hover': {
    willChange: 'background-color',
    backgroundColor: (theme.vars || theme).palette.primary.dark,
  },
  [`&.${dateRangePickerDayClasses.disabled}`]: {
    opacity: 0.6,
  },
});

const insideSelectionStyle = () => ({
  [`&.${dateRangePickerDayClasses.disabled}`]: {
    opacity: 0.6,
  },
});

const DateRangePickerDayRoot = styled(ButtonBase, {
  name: 'MuiDateRangePickerDay',
  slot: 'Root',
  overridesResolver: (
    props: { ownerState: DateRangePickerDayOwnerState },
    styles: Record<DateRangePickerDayClassKey, CSSInterpolation>,
  ) => {
      throw new Error("STUB");
  },
})<{ ownerState: DateRangePickerDayOwnerState }>(({ theme }) => { throw new Error("STUB"); });

type DateRangePickerDayComponent = ((
  props: DateRangePickerDayProps & React.RefAttributes<HTMLButtonElement>,
) => React.JSX.Element) & { propTypes?: any };

const noop = () => {};

const DateRangePickerDayRaw = React.forwardRef(function DateRangePickerDay(
  inProps: DateRangePickerDayProps,
  forwardedRef: React.Ref<HTMLButtonElement>,
) {
    throw new Error("STUB");
});

DateRangePickerDayRaw.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({
      current: PropTypes.shape({
        focusVisible: PropTypes.func.isRequired,
      }),
    }),
  ]),
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: PropTypes.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  className: PropTypes.string,
  component: PropTypes.elementType,
  /**
   * The date to show.
   */
  day: PropTypes.object.isRequired,
  /**
   * If `true`, the day is disabled.
   * @default false
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, today's day is not highlighted.
   * @default false
   */
  disableHighlightToday: PropTypes.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: PropTypes.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: PropTypes.bool,
  /**
   * If `true`, the day can be dragged to change the current date range.
   * @default false
   */
  draggable: PropTypes.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: PropTypes.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: PropTypes.string,
  /**
   * If `true`, the day is being animated.
   * @default false
   */
  isAnimating: PropTypes.bool,
  /**
   * If `true`, the day is a filler day (its content is hidden).
   * @default false
   */
  isDayFillerCell: PropTypes.bool,
  /**
   * Set to `true` if the `day` is the end of a highlighted date range.
   */
  isEndOfHighlighting: PropTypes.bool,
  /**
   * Set to `true` if the `day` is the end of a previewing date range.
   */
  isEndOfPreviewing: PropTypes.bool,
  /**
   * If `true`, the day is the first visible cell of the month.
   * @default false
   */
  isFirstVisibleCell: PropTypes.bool,
  /**
   * Set to `true` if the `day` is in a highlighted date range.
   */
  isHighlighting: PropTypes.bool,
  /**
   * If `true`, the day is the last visible cell of the month.
   * @default false
   */
  isLastVisibleCell: PropTypes.bool,
  /**
   * Set to `true` if the `day` is in a preview date range.
   */
  isPreviewing: PropTypes.bool,
  /**
   * Set to `true` if the `day` is the start of a highlighted date range.
   */
  isStartOfHighlighting: PropTypes.bool,
  /**
   * Set to `true` if the `day` is the start of a previewing date range.
   */
  isStartOfPreviewing: PropTypes.bool,
  /**
   * Indicates if the day should be visually selected.
   */
  isVisuallySelected: PropTypes.bool,
  /**
   * Whether the custom component is expected to render a native `<button>` element
   * when passing a React component to the `component` or `slots` prop.
   */
  nativeButton: PropTypes.bool,
  /**
   * Callback fired when the component is blurred.
   * @param {React.FocusEvent<HTMLButtonElement>} event The event object.
   * @param {PickerValidDate} day The day.
   * @default () => {}
   */
  onBlur: PropTypes.func,
  /**
   * Callback fired when the component is clicked.
   * @param {MuiEvent<React.MouseEvent<HTMLButtonElement>>} event The event object.
   * @default () => {}
   */
  onClick: PropTypes.func,
  /**
   * Callback fired when the day is selected.
   * @param {PickerValidDate} day The day to select.
   */
  onDaySelect: PropTypes.func.isRequired,
  /**
   * Callback fired when the component is focused.
   * @param {React.FocusEvent<HTMLButtonElement>} event The event object.
   * @param {PickerValidDate} day The day.
   * @default () => {}
   */
  onFocus: PropTypes.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: PropTypes.func,
  /**
   * Callback fired when a key is pressed.
   * @param {React.KeyboardEvent<HTMLButtonElement>} event The event object.
   * @param {PickerValidDate} day The day.
   * @default () => {}
   */
  onKeyDown: PropTypes.func,
  /**
   * Callback fired when the mouse button is pressed.
   * @param {React.MouseEvent<HTMLButtonElement>} event The event object.
   * @default () => {}
   */
  onMouseDown: PropTypes.func,
  /**
   * Callback fired when the mouse enters the component.
   * @param {React.MouseEvent<HTMLButtonElement>} event The event object.
   * @param {PickerValidDate} day The day.
   * @default () => {}
   */
  onMouseEnter: PropTypes.func,
  /**
   * If `true`, the day is outside the current month.
   * @default false
   */
  outsideCurrentMonth: PropTypes.bool,
  /**
   * If `true`, renders as selected.
   * @default false
   */
  selected: PropTypes.bool,
  /**
   * If `true`, days outside the current month are rendered:
   *
   * - if `fixedWeekNumber` is defined, renders days to have the weeks requested.
   *
   * - if `fixedWeekNumber` is not defined, renders day to fill the first and last week of the current month.
   *
   * - ignored if `calendars` equals more than `1` on range pickers.
   * @default false
   */
  showDaysOutsideCurrentMonth: PropTypes.bool,
  style: PropTypes.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])),
    PropTypes.func,
    PropTypes.object,
  ]),
  /**
   * @default 0
   */
  tabIndex: PropTypes.number,
  /**
   * If `true`, today's day is highlighted.
   * @default false
   */
  today: PropTypes.bool,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: PropTypes.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({
      current: PropTypes.shape({
        pulsate: PropTypes.func.isRequired,
        start: PropTypes.func.isRequired,
        stop: PropTypes.func.isRequired,
      }),
    }),
  ]),
  /**
   * The HTML [`type`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button#type)
   * attribute applied to `button` and `a` elements.
   * Ignored when rendering non-native buttons.
   * @default 'button'
   */
  type: PropTypes.string,
} as any;

/**
 * Demos:
 * - [DateRangePicker](https://mui.com/x/react-date-pickers/date-range-picker/)
 *
 * API:
 * - [DateRangePickerDay API](https://mui.com/x/api/date-pickers/date-range-picker-day/)
 */
export const DateRangePickerDay = React.memo(DateRangePickerDayRaw) as DateRangePickerDayComponent;
