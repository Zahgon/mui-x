'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { styled, useThemeProps } from '@mui/material/styles';
import composeClasses from '@mui/utils/composeClasses';
import type { PickerValidDate } from '@mui/x-date-pickers/models';
import type {
  BaseToolbarProps,
  ExportedBaseToolbarProps,
  PickerVariant,
  TimeViewWithMeridiem,
  PickerRangeValue,
  PickerToolbarOwnerState,
} from '@mui/x-date-pickers/internals';
import {
  PickersToolbar,
  PickersToolbarButton,
  PickersToolbarText,
  getMeridiem,
  formatMeridiem,
  pickersToolbarClasses,
  pickersToolbarTextClasses,
  MULTI_SECTION_CLOCK_SECTION_WIDTH,
  useToolbarOwnerState,
} from '@mui/x-date-pickers/internals';
import {
  usePickerAdapter,
  usePickerContext,
  usePickerTranslations,
} from '@mui/x-date-pickers/hooks';
import type { TimeRangePickerToolbarClasses } from './timeRangePickerToolbarClasses';
import { getTimeRangePickerToolbarUtilityClass } from './timeRangePickerToolbarClasses';
import { usePickerRangePositionContext } from '../hooks';

const useUtilityClasses = (
  classes: Partial<TimeRangePickerToolbarClasses> | undefined,
  ownerState: PickerToolbarOwnerState,
) => {
  const { pickerVariant } = ownerState;
  const slots = {
    root: ['root'],
    container: ['container', pickerVariant],
    separator: ['separator'],
    timeContainer: ['timeContainer'],
  };

  return composeClasses(slots, getTimeRangePickerToolbarUtilityClass, classes);
};

export interface TimeRangePickerToolbarProps
  extends Omit<BaseToolbarProps, 'toolbarFormat'>, ExportedTimeRangePickerToolbarProps {
  ampm: boolean;
}

export interface ExportedTimeRangePickerToolbarProps extends Omit<
  ExportedBaseToolbarProps,
  'toolbarFormat'
> {
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<TimeRangePickerToolbarClasses>;
}

const TimeRangePickerToolbarRoot = styled(PickersToolbar, {
  name: 'MuiTimeRangePickerToolbar',
  slot: 'Root',
})<{ ownerState: PickerToolbarOwnerState }>(({ theme }) => { throw new Error("STUB"); });

const TimeRangePickerToolbarContainer = styled('div', {
  name: 'MuiTimeRangePickerToolbar',
  slot: 'Container',
  shouldForwardProp: (prop) => { throw new Error("STUB"); },
})<{ pickerVariant: PickerVariant }>({
  display: 'flex',
  flex: 1,
  variants: [
    {
      props: { pickerVariant: 'mobile' },
      style: {
        flexDirection: 'column',
        rowGap: 8,
      },
    },
    {
      props: { pickerVariant: 'desktop' },
      style: {
        flexDirection: 'row',
        gap: 1,
      },
    },
  ],
});

const TimeRangePickerToolbarTimeContainer = styled('div', {
  name: 'MuiTimeRangePickerToolbar',
  slot: 'TimeContainer',
})({
  display: 'flex',
  justifyContent: 'space-around',
  flex: 1,
});

const TimeRangePickerToolbarSeparator = styled(PickersToolbarText, {
  name: 'MuiTimeRangePickerToolbar',
  slot: 'Separator',
})({
  cursor: 'default',
});

type TimeRangePickerToolbarTimeElementProps = Pick<
  TimeRangePickerToolbarProps,
  'ampm' | 'toolbarPlaceholder'
> & {
  onViewChange: (view: TimeViewWithMeridiem) => void;
  view?: TimeViewWithMeridiem;
  value: PickerValidDate | null;
  separatorClasses: string;
};

/**
 * @ignore - internal component
 */
function TimeRangePickerToolbarTimeElement(props: TimeRangePickerToolbarTimeElementProps) {
    throw new Error("STUB");
}

TimeRangePickerToolbarTimeElement.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  ampm: PropTypes.bool.isRequired,
  onViewChange: PropTypes.func.isRequired,
  separatorClasses: PropTypes.string.isRequired,
  /**
   * Toolbar value placeholder—it is displayed when the value is empty.
   * @default "––"
   */
  toolbarPlaceholder: PropTypes.node,
  value: PropTypes.object,
  view: PropTypes.oneOf(['hours', 'meridiem', 'minutes', 'seconds']),
} as any;

const TimeRangePickerToolbar = React.forwardRef(function TimeRangePickerToolbar(
  inProps: TimeRangePickerToolbarProps,
  ref: React.Ref<HTMLDivElement>,
) {
    throw new Error("STUB");
});

TimeRangePickerToolbar.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  ampm: PropTypes.bool.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  className: PropTypes.string,
  /**
   * If `true`, show the toolbar even in desktop mode.
   * @default `true` for Desktop, `false` for Mobile.
   */
  hidden: PropTypes.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])),
    PropTypes.func,
    PropTypes.object,
  ]),
  titleId: PropTypes.string,
  /**
   * Toolbar value placeholder—it is displayed when the value is empty.
   * @default "––"
   */
  toolbarPlaceholder: PropTypes.node,
} as any;

export { TimeRangePickerToolbar };
