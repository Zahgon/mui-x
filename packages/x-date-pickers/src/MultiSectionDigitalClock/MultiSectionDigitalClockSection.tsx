'use client';
import * as React from 'react';
import clsx from 'clsx';
import { styled, useThemeProps } from '@mui/material/styles';
import composeClasses from '@mui/utils/composeClasses';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import useForkRef from '@mui/utils/useForkRef';
import useEnhancedEffect from '@mui/utils/useEnhancedEffect';
import useEventCallback from '@mui/utils/useEventCallback';
import type { MultiSectionDigitalClockSectionClasses } from './multiSectionDigitalClockSectionClasses';
import { getMultiSectionDigitalClockSectionUtilityClass } from './multiSectionDigitalClockSectionClasses';
import type {
  MultiSectionDigitalClockOption,
  MultiSectionDigitalClockSlots,
  MultiSectionDigitalClockSlotProps,
} from './MultiSectionDigitalClock.types';
import {
  DIGITAL_CLOCK_VIEW_HEIGHT,
  MULTI_SECTION_CLOCK_SECTION_WIDTH,
} from '../internals/constants/dimensions';
import { getFocusedListItemIndex } from '../internals/utils/utils';
import type { FormProps } from '../internals/models/formProps';
import type { PickerOwnerState } from '../models/pickers';
import { usePickerPrivateContext } from '../internals/hooks/usePickerPrivateContext';
import type { MultiSectionDigitalClockClasses } from './multiSectionDigitalClockClasses';

export interface ExportedMultiSectionDigitalClockSectionProps {
  className?: string;
  classes?: Partial<MultiSectionDigitalClockSectionClasses>;
  slots?: MultiSectionDigitalClockSlots;
  slotProps?: MultiSectionDigitalClockSlotProps;
}

export interface MultiSectionDigitalClockSectionProps<TSectionValue extends number | string>
  extends FormProps, ExportedMultiSectionDigitalClockSectionProps {
  autoFocus?: boolean;
  items: MultiSectionDigitalClockOption<TSectionValue>[];
  onChange: (value: TSectionValue) => void;
  active?: boolean;
  skipDisabled?: boolean;
  role?: string;
}

export interface MultiSectionDigitalClockSectionOwnerState extends PickerOwnerState {
  /**
   * `true` if this is not the initial render of the digital clock.
   */
  hasDigitalClockAlreadyBeenRendered: boolean;
}

const useUtilityClasses = (classes: Partial<MultiSectionDigitalClockClasses> | undefined) => {
  const slots = {
    root: ['root'],
    item: ['item'],
  };

  return composeClasses(slots, getMultiSectionDigitalClockSectionUtilityClass, classes);
};

const MultiSectionDigitalClockSectionRoot = styled(MenuList, {
  name: 'MuiMultiSectionDigitalClockSection',
  slot: 'Root',
})<{ ownerState: MultiSectionDigitalClockSectionOwnerState }>(({ theme }) => { throw new Error("STUB"); });

const MultiSectionDigitalClockSectionItem = styled(MenuItem, {
  name: 'MuiMultiSectionDigitalClockSection',
  slot: 'Item',
})(({ theme }) => { throw new Error("STUB"); });

type MultiSectionDigitalClockSectionComponent = <TSectionValue extends number | string>(
  props: MultiSectionDigitalClockSectionProps<TSectionValue> &
    React.RefAttributes<HTMLUListElement>,
) => React.JSX.Element & { propTypes?: any };

/**
 * @ignore - internal component.
 */
export const MultiSectionDigitalClockSection = React.forwardRef(
  function MultiSectionDigitalClockSection<TSectionValue extends number | string>(
    inProps: MultiSectionDigitalClockSectionProps<TSectionValue>,
    ref: React.Ref<HTMLUListElement>,
  ) {
        throw new Error("STUB");
    },
) as MultiSectionDigitalClockSectionComponent;
