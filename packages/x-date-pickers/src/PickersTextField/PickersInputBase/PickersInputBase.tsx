'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useFormControl } from '@mui/material/FormControl';
import { styled, useThemeProps } from '@mui/material/styles';
import useForkRef from '@mui/utils/useForkRef';
import refType from '@mui/utils/refType';
import composeClasses from '@mui/utils/composeClasses';
import capitalize from '@mui/utils/capitalize';
import useSlotProps from '@mui/utils/useSlotProps';
import resolveComponentProps from '@mui/utils/resolveComponentProps';
import visuallyHidden from '@mui/utils/visuallyHidden';
import type { MuiEvent } from '@mui/x-internals/types';
import type { PickersInputBaseClasses } from './pickersInputBaseClasses';
import {
  pickersInputBaseClasses,
  getPickersInputBaseUtilityClass,
} from './pickersInputBaseClasses';
import type { PickersInputBaseProps } from './PickersInputBase.types';
import type { PickersSectionElement, PickersSectionListSlotProps } from '../../PickersSectionList';
import {
  Unstable_PickersSectionList as PickersSectionList,
  Unstable_PickersSectionListRoot as PickersSectionListRoot,
  Unstable_PickersSectionListSection as PickersSectionListSection,
  Unstable_PickersSectionListSectionSeparator as PickersSectionListSectionSeparator,
  Unstable_PickersSectionListSectionContent as PickersSectionListSectionContent,
} from '../../PickersSectionList';
import { usePickerTextFieldOwnerState } from '../usePickerTextFieldOwnerState';
import type { PickerTextFieldOwnerState } from '../../models/fields';
import type { PickerOwnerState } from '../../models/pickers';

function mergePickersInputBaseSectionContentSlotProps(
  consumerSlotProps: PickersSectionListSlotProps['sectionContent'],
  baseClassName: string,
): PickersSectionListSlotProps['sectionContent'] {
  return (ownerState: PickerOwnerState) => {
      throw new Error("STUB");
  };
}

const round = (value: number) => Math.round(value * 1e5) / 1e5;

export const PickersInputBaseRoot = styled('div', {
  name: 'MuiPickersInputBase',
  slot: 'Root',
})<{ ownerState: PickerTextFieldOwnerState }>(({ theme }) => { throw new Error("STUB"); });

export const PickersInputBaseSectionsContainer = styled(PickersSectionListRoot, {
  name: 'MuiPickersInputBase',
  slot: 'SectionsContainer',
})<{ ownerState: PickerTextFieldOwnerState }>(({ theme }) => { throw new Error("STUB"); });

const PickersInputBaseSection = styled(PickersSectionListSection, {
  name: 'MuiPickersInputBase',
  slot: 'Section',
})(({ theme }) => { throw new Error("STUB"); });

const PickersInputBaseSectionContent = styled(PickersSectionListSectionContent, {
  name: 'MuiPickersInputBase',
  slot: 'SectionContent',
  overridesResolver: (props, styles) => { throw new Error("STUB"); }, // FIXME: Inconsistent naming with slot
})(({ theme }) => { throw new Error("STUB"); });

const PickersInputBaseSectionSeparator = styled(PickersSectionListSectionSeparator, {
  name: 'MuiPickersInputBase',
  slot: 'Separator',
})(() => { throw new Error("STUB"); });

const PickersInputBaseInput = styled('input', {
  name: 'MuiPickersInputBase',
  slot: 'Input',
  overridesResolver: (props, styles) => { throw new Error("STUB"); }, // FIXME: Inconsistent naming with slot
})({
  ...visuallyHidden,
});

const PickersInputBaseActiveBar = styled('div', {
  name: 'MuiPickersInputBase',
  slot: 'ActiveBar',
})<{ ownerState: { sectionOffsets: number[] } }>(({ theme, ownerState }) => { throw new Error("STUB"); });

const useUtilityClasses = (
  classes: Partial<PickersInputBaseClasses> | undefined,
  ownerState: PickerTextFieldOwnerState,
) => {
  const {
    isFieldFocused,
    isFieldDisabled,
    isFieldReadOnly,
    hasFieldError,
    inputSize,
    isInputInFullWidth,
    inputColor,
    hasStartAdornment,
    hasEndAdornment,
  } = ownerState;

  const slots = {
    root: [
      'root',
      isFieldFocused && !isFieldDisabled && 'focused',
      isFieldDisabled && 'disabled',
      isFieldReadOnly && 'readOnly',
      hasFieldError && 'error',
      isInputInFullWidth && 'fullWidth',
      `color${capitalize(inputColor!)}`,
      inputSize === 'small' && 'inputSizeSmall',
      hasStartAdornment && 'adornedStart',
      hasEndAdornment && 'adornedEnd',
    ],
    notchedOutline: ['notchedOutline'],
    input: ['input'],
    sectionsContainer: ['sectionsContainer'],
    sectionContent: ['sectionContent'],
    sectionBefore: ['sectionBefore'],
    sectionAfter: ['sectionAfter'],
    activeBar: ['activeBar'],
  };

  return composeClasses(slots, getPickersInputBaseUtilityClass, classes);
};

function resolveSectionElementWidth(
  sectionElement: PickersSectionElement,
  rootRef: React.RefObject<HTMLDivElement | null>,
  index: number,
  dateRangePosition: 'start' | 'end',
) {
  // Only measure sections that belong to a range date.
  if (sectionElement.content['data-range-position'] !== undefined) {
    const activeSectionElements = rootRef.current?.querySelectorAll<HTMLSpanElement>(
      `[data-sectionindex="${index}"] [data-range-position="${dateRangePosition}"]`,
    );
    if (activeSectionElements) {
      return Array.from(activeSectionElements).reduce((currentActiveBarWidth, element) => {
          throw new Error("STUB");
      }, 0);
    }
  }
  return 0;
}

function resolveSectionWidthAndOffsets(
  elements: PickersSectionElement[],
  rootRef: React.RefObject<HTMLDivElement | null>,
) {
  let activeBarWidth = 0;
  const activeRangePosition = rootRef.current?.getAttribute('data-active-range-position');
  if (activeRangePosition === 'end') {
    for (let i = elements.length - 1; i >= elements.length / 2; i -= 1) {
      activeBarWidth += resolveSectionElementWidth(elements[i], rootRef, i, 'end');
    }
  } else {
    for (let i = 0; i < elements.length / 2; i += 1) {
      activeBarWidth += resolveSectionElementWidth(elements[i], rootRef, i, 'start');
    }
  }
  return {
    activeBarWidth,
    sectionOffsets: [
      rootRef.current?.querySelector<HTMLSpanElement>(`[data-sectionindex="0"]`)?.offsetLeft || 0,
      rootRef.current?.querySelector<HTMLSpanElement>(
        `[data-sectionindex="${elements.length / 2}"]`,
      )?.offsetLeft || 0,
    ],
  };
}

/**
 * @ignore - internal component.
 */
const PickersInputBase = React.forwardRef(function PickersInputBase(
  inProps: PickersInputBaseProps,
  ref: React.Ref<HTMLDivElement>,
) {
    throw new Error("STUB");
});

PickersInputBase.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Is `true` if the current values equals the empty value.
   * For a single item value, it means that `value === null`
   * For a range value, it means that `value === [null, null]`
   */
  areAllSectionsEmpty: PropTypes.bool.isRequired,
  classes: PropTypes.object,
  className: PropTypes.string,
  /**
   * If true, the whole element is editable.
   * Useful when all the sections are selected.
   */
  contentEditable: PropTypes.bool.isRequired,
  'data-multi-input': PropTypes.string,
  /**
   * The elements to render.
   * Each element contains the prop to edit a section of the value.
   */
  elements: PropTypes.arrayOf(
    PropTypes.shape({
      after: PropTypes.object.isRequired,
      before: PropTypes.object.isRequired,
      container: PropTypes.object.isRequired,
      content: PropTypes.object.isRequired,
    }),
  ).isRequired,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: PropTypes.node,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: PropTypes.bool,
  /**
   * The id of the `input` element.
   */
  id: PropTypes.string,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType,
  /**
   * The label content.
   */
  label: PropTypes.node,
  margin: PropTypes.oneOf(['dense', 'none', 'normal']),
  /**
   * Name attribute of the `input` element.
   */
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  onInput: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  onMouseDown: PropTypes.func.isRequired,
  onPaste: PropTypes.func.isRequired,
  ownerState: PropTypes /* @typescript-to-proptypes-ignore */.any,
  readOnly: PropTypes.bool,
  renderSuffix: PropTypes.func,
  sectionListRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({
      current: PropTypes.shape({
        getRoot: PropTypes.func.isRequired,
        getSectionContainer: PropTypes.func.isRequired,
        getSectionContent: PropTypes.func.isRequired,
        getSectionIndexFromDOMElement: PropTypes.func.isRequired,
      }),
    }),
  ]),
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: PropTypes.object,
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: PropTypes.object,
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: PropTypes.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])),
    PropTypes.func,
    PropTypes.object,
  ]),
  value: PropTypes.string.isRequired,
} as any;

export { PickersInputBase };
