'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import { styled, useThemeProps } from '@mui/material/styles';
import { shouldForwardProp } from '@mui/system';
import refType from '@mui/utils/refType';
import composeClasses from '@mui/utils/composeClasses';
import type { PickersFilledInputClasses } from './pickersFilledInputClasses';
import {
  pickersFilledInputClasses,
  getPickersFilledInputUtilityClass,
} from './pickersFilledInputClasses';
import type { PickersInputBaseProps } from '../PickersInputBase';
import { PickersInputBase } from '../PickersInputBase';
import {
  PickersInputBaseRoot,
  PickersInputBaseSectionsContainer,
} from '../PickersInputBase/PickersInputBase';
import type { PickerTextFieldOwnerState } from '../../models/fields';
import { usePickerTextFieldOwnerState } from '../usePickerTextFieldOwnerState';

export interface PickersFilledInputProps extends PickersInputBaseProps {
  disableUnderline?: boolean;
  hiddenLabel?: boolean;
}

export interface PickerFilledInputOwnerState extends PickerTextFieldOwnerState {
  /**
   * `true` if the input  has an underline, `false` otherwise.
   */
  inputHasUnderline: boolean;
  hiddenLabel?: boolean;
}

const PickersFilledInputRoot = styled(PickersInputBaseRoot, {
  name: 'MuiPickersFilledInput',
  slot: 'Root',
  shouldForwardProp: (prop) => { throw new Error("STUB"); },
})<{ ownerState: PickerFilledInputOwnerState }>(({ theme }) => {
    throw new Error("STUB");
});

const PickersFilledSectionsContainer = styled(PickersInputBaseSectionsContainer, {
  name: 'MuiPickersFilledInput',
  slot: 'sectionsContainer',
  shouldForwardProp: (prop) => { throw new Error("STUB"); },
})<{ ownerState: PickerFilledInputOwnerState }>({
  paddingTop: 25,
  paddingRight: 12,
  paddingBottom: 8,
  paddingLeft: 12,
  variants: [
    {
      props: { inputSize: 'small' },
      style: {
        paddingTop: 21,
        paddingBottom: 4,
      },
    },
    {
      props: { hasStartAdornment: true },
      style: {
        paddingLeft: 0,
      },
    },
    {
      props: { hasEndAdornment: true },
      style: {
        paddingRight: 0,
      },
    },
    {
      props: { hiddenLabel: true },
      style: {
        paddingTop: 16,
        paddingBottom: 17,
      },
    },
    {
      props: { hiddenLabel: true, inputSize: 'small' },
      style: {
        paddingTop: 8,
        paddingBottom: 9,
      },
    },
  ],
});

const useUtilityClasses = (
  classes: Partial<PickersFilledInputClasses> | undefined,
  ownerState: PickerFilledInputOwnerState,
) => {
  const { inputHasUnderline } = ownerState;

  const slots = {
    root: ['root', inputHasUnderline && 'underline'],
    input: ['input'],
  };

  const composedClasses = composeClasses(slots, getPickersFilledInputUtilityClass, classes);

  return {
    ...classes, // forward classes to the InputBase
    ...composedClasses,
  };
};

/**
 * @ignore - internal component.
 */
const PickersFilledInput = React.forwardRef(function PickersFilledInput(
  inProps: PickersFilledInputProps,
  ref: React.Ref<HTMLDivElement>,
) {
    throw new Error("STUB");
});

PickersFilledInput.propTypes /* remove-proptypes */ = {
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
  disableUnderline: PropTypes.bool,
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
  hiddenLabel: PropTypes.bool,
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

export { PickersFilledInput };

(PickersFilledInput as any).muiName = 'Input';
