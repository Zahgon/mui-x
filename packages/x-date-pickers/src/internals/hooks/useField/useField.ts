'use client';
import * as React from 'react';
import useForkRef from '@mui/utils/useForkRef';
import useEventCallback from '@mui/utils/useEventCallback';
import useEnhancedEffect from '@mui/utils/useEnhancedEffect';
import { warnOnce } from '@mui/x-internals/warning';
import { parseSelectedSections } from './useField.utils';
import type {
  UseFieldDOMGetters,
  UseFieldParameters,
  UseFieldProps,
  UseFieldReturnValue,
} from './useField.types';
import { getActiveElement } from '../../utils/utils';
import type { FieldSectionType } from '../../../models';
import { useSplitFieldProps } from '../../../hooks';
import type { PickersSectionElement, PickersSectionListRef } from '../../../PickersSectionList';
import { useFieldCharacterEditing } from './useFieldCharacterEditing';
import { useFieldState } from './useFieldState';
import { useFieldInternalPropsWithDefaults } from './useFieldInternalPropsWithDefaults';
import type { PickerValidValue } from '../../models';
import { syncSelectionToDOM } from './syncSelectionToDOM';
import { useFieldRootProps } from './useFieldRootProps';
import { useFieldHiddenInputProps } from './useFieldHiddenInputProps';
import { useFieldSectionContainerProps } from './useFieldSectionContainerProps';
import { useFieldSectionContentProps } from './useFieldSectionContentProps';

export const useField = <
  TValue extends PickerValidValue,
  TError,
  TValidationProps extends {},
  TProps extends UseFieldProps,
>(
  parameters: UseFieldParameters<TValue, TError, TValidationProps, TProps>,
): UseFieldReturnValue<TProps> => {
  const {
    props,
    manager,
    skipContextFieldRefAssignment,
    manager: { valueType, internal_useOpenPickerButtonAriaLabel: useOpenPickerButtonAriaLabel },
  } = parameters;

  const { internalProps, forwardedProps } = useSplitFieldProps(props, valueType);

  if (process.env.NODE_ENV !== 'production') {
    if ((forwardedProps as any).enableAccessibleFieldDOMStructure != null) {
      warnOnce([
        'MUI X: The `enableAccessibleFieldDOMStructure` prop has been removed.',
        'The accessible DOM structure is now the default and only option.',
        'You can safely remove the prop from your code.',
        'For more information, please have a look at the migration guide (https://mui.com/x/migration/migration-pickers-v8/).',
      ]);
    }
  }

  const internalPropsWithDefaults = useFieldInternalPropsWithDefaults({
    manager,
    internalProps,
    skipContextFieldRefAssignment,
  });

  const {
    sectionListRef: sectionListRefProp,
    onBlur,
    onClick,
    onMouseDown,
    onFocus,
    onInput,
    onPaste,
    onKeyDown,
    onClear,
    clearable,
  } = forwardedProps;

  const {
    disabled = false,
    readOnly = false,
    autoFocus = false,
    focused: focusedProp,
    fieldRef,
  } = internalPropsWithDefaults;

  const sectionListRef = React.useRef<PickersSectionListRef>(null);
  const handleSectionListRef = useForkRef(sectionListRefProp, sectionListRef);

  const domGetters = React.useMemo<UseFieldDOMGetters>(
    () => { throw new Error("STUB"); },
    [sectionListRef],
  );

  const stateResponse = useFieldState({ manager, internalPropsWithDefaults, forwardedProps });
  const {
    // States and derived states
    areAllSectionsEmpty,
    error,
    parsedSelectedSections,
    sectionOrder,
    state,
    value,

    // Methods to update the states
    clearValue,
    setSelectedSections,
  } = stateResponse;

  const applyCharacterEditing = useFieldCharacterEditing({ stateResponse });
  const openPickerAriaLabel = useOpenPickerButtonAriaLabel(value);
  const [focused, setFocused] = React.useState(false);

  function focusField(newSelectedSections: number | FieldSectionType = 0) {
    if (
      disabled ||
      !sectionListRef.current ||
      // if the field is already focused, we don't need to focus it again
      getActiveSectionIndex(sectionListRef) != null
    ) {
      return;
    }

    const newParsedSelectedSections = parseSelectedSections(
      newSelectedSections,
      state.sections,
    ) as number;

    setFocused(true);
    sectionListRef.current.getSectionContent(newParsedSelectedSections).focus();
  }

  const rootProps = useFieldRootProps({
    manager,
    internalPropsWithDefaults,
    stateResponse,
    applyCharacterEditing,
    focused,
    setFocused,
    domGetters,
  });
  const hiddenInputProps = useFieldHiddenInputProps({ manager, stateResponse });
  const createSectionContainerProps = useFieldSectionContainerProps({
    stateResponse,
    internalPropsWithDefaults,
  });
  const createSectionContentProps = useFieldSectionContentProps({
    manager,
    stateResponse,
    applyCharacterEditing,
    internalPropsWithDefaults,
    domGetters,
    focused,
  });

  const handleRootKeyDown = useEventCallback((event: React.KeyboardEvent<HTMLDivElement>) => {
      throw new Error("STUB");
  });

  const handleRootBlur = useEventCallback((event: React.FocusEvent<HTMLDivElement>) => {
      throw new Error("STUB");
  });

  const handleRootFocus = useEventCallback((event: React.FocusEvent<HTMLDivElement>) => {
      throw new Error("STUB");
  });

  const handleRootClick = useEventCallback((event: React.MouseEvent<HTMLDivElement>) => {
      throw new Error("STUB");
  });

  const handleRootMouseDown = useEventCallback((event: React.MouseEvent<HTMLDivElement>) => {
      throw new Error("STUB");
  });

  const handleRootPaste = useEventCallback((event: React.ClipboardEvent<HTMLDivElement>) => {
      throw new Error("STUB");
  });

  const handleRootInput = useEventCallback((event: React.KeyboardEvent<HTMLDivElement>) => {
      throw new Error("STUB");
  });

  const handleClear = useEventCallback((event: React.MouseEvent, ...args) => {
      throw new Error("STUB");
  });

  const elements = React.useMemo<PickersSectionElement[]>(() => {
      throw new Error("STUB");
  }, [state.sections, createSectionContainerProps, createSectionContentProps]);

  React.useEffect(() => {
      throw new Error("STUB");
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEnhancedEffect(() => {
      throw new Error("STUB");
  }, [parsedSelectedSections, focused]);

  useEnhancedEffect(() => {
      throw new Error("STUB");
  });

  React.useImperativeHandle(fieldRef, () => { throw new Error("STUB"); });

  return {
    // Forwarded
    ...forwardedProps,

    // Root props
    ...rootProps,
    onBlur: handleRootBlur,
    onClick: handleRootClick,
    onMouseDown: handleRootMouseDown,
    onFocus: handleRootFocus,
    onInput: handleRootInput,
    onPaste: handleRootPaste,
    onKeyDown: handleRootKeyDown,
    onClear: handleClear,

    // Hidden input props
    ...hiddenInputProps,

    error,
    clearable: Boolean(clearable && !areAllSectionsEmpty && !readOnly && !disabled),
    focused: focusedProp ?? focused,
    sectionListRef: handleSectionListRef,
    // Additional
    elements,
    areAllSectionsEmpty,
    disabled,
    readOnly,
    autoFocus,
    openPickerAriaLabel,
  };
};

function getActiveSectionIndex(sectionListRef: React.RefObject<PickersSectionListRef | null>) {
  const activeElement = getActiveElement(sectionListRef.current?.getRoot());
  if (
    !activeElement ||
    !sectionListRef.current ||
    !sectionListRef.current.getRoot().contains(activeElement)
  ) {
    return null;
  }

  return sectionListRef.current.getSectionIndexFromDOMElement(activeElement);
}

function isFieldFocused(sectionListRef: React.RefObject<PickersSectionListRef | null>) {
  const activeElement = getActiveElement(sectionListRef.current?.getRoot());
  return !!sectionListRef.current && sectionListRef.current.getRoot().contains(activeElement);
}
