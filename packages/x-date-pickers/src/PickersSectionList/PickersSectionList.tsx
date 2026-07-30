'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import useSlotProps from '@mui/utils/useSlotProps';
import composeClasses from '@mui/utils/composeClasses';
import useForkRef from '@mui/utils/useForkRef';
import { styled, useThemeProps } from '@mui/material/styles';
import type { PickersSectionListClasses } from './pickersSectionListClasses';
import {
  getPickersSectionListUtilityClass,
  pickersSectionListClasses,
} from './pickersSectionListClasses';
import type { PickersSectionListProps, PickersSectionElement } from './PickersSectionList.types';
import { usePickerPrivateContext } from '../internals/hooks/usePickerPrivateContext';

export const PickersSectionListRoot = styled('div', {
  name: 'MuiPickersSectionList',
  slot: 'Root',
})({
  direction: 'ltr /*! @noflip */' as any,
  outline: 'none',
});

export const PickersSectionListSection = styled('span', {
  name: 'MuiPickersSectionList',
  slot: 'Section',
})({});

export const PickersSectionListSectionSeparator = styled('span', {
  name: 'MuiPickersSectionList',
  slot: 'SectionSeparator',
})({
  whiteSpace: 'pre',
});

export const PickersSectionListSectionContent = styled('span', {
  name: 'MuiPickersSectionList',
  slot: 'SectionContent',
})({
  outline: 'none',
});

const useUtilityClasses = (classes: Partial<PickersSectionListClasses> | undefined) => {
  const slots = {
    root: ['root'],
    section: ['section'],
    sectionContent: ['sectionContent'],
  };

  return composeClasses(slots, getPickersSectionListUtilityClass, classes);
};

interface PickersSectionProps extends Pick<PickersSectionListProps, 'slots' | 'slotProps'> {
  element: PickersSectionElement;
  classes: PickersSectionListClasses;
}

function PickersSection(props: PickersSectionProps) {
    throw new Error("STUB");
}

PickersSection.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  classes: PropTypes.object.isRequired,
  element: PropTypes.shape({
    after: PropTypes.object.isRequired,
    before: PropTypes.object.isRequired,
    container: PropTypes.object.isRequired,
    content: PropTypes.object.isRequired,
  }).isRequired,
  /**
   * The props used for each component slot.
   */
  slotProps: PropTypes.object,
  /**
   * Overridable component slots.
   */
  slots: PropTypes.object,
} as any;

type PickersSectionListComponent = ((
  props: PickersSectionListProps & React.RefAttributes<HTMLDivElement>,
) => React.JSX.Element) & { propTypes?: any };

/**
 * Demos:
 *
 * - [Custom field](https://mui.com/x/react-date-pickers/custom-field/)
 *
 * API:
 *
 * - [PickersSectionList API](https://mui.com/x/api/date-pickers/pickers-section-list/)
 */
const PickersSectionList = React.forwardRef(function PickersSectionList(
  inProps: PickersSectionListProps,
  ref: React.Ref<HTMLDivElement>,
) {
    throw new Error("STUB");
}) as PickersSectionListComponent;

PickersSectionList.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * If true, the whole element is editable.
   * Useful when all the sections are selected.
   */
  contentEditable: PropTypes.bool.isRequired,
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
   */
  slotProps: PropTypes.object,
  /**
   * Overridable component slots.
   */
  slots: PropTypes.object,
} as any;

export { PickersSectionList };
