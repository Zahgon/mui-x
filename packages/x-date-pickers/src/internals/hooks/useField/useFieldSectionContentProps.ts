import * as React from 'react';
import useEventCallback from '@mui/utils/useEventCallback';
import type { UseFieldStateReturnValue } from './useFieldState';
import type { FieldSection, MuiPickersAdapter } from '../../../models';
import type { UseFieldDOMGetters, UseFieldInternalProps } from './useField.types';
import { usePickerAdapter, usePickerTranslations } from '../../../hooks';
import { syncSelectionToDOM } from './syncSelectionToDOM';
import { removeLocalizedDigits } from './useField.utils';
import type { UseFieldCharacterEditingReturnValue } from './useFieldCharacterEditing';
import type { FieldRangeSection, PickerAnyManager } from '../../models';
import type { PickersSectionElement } from '../../../PickersSectionList';

/**
 * Generate the props to pass to the content element of each section of the field.
 * @param {UseFieldSectionContentPropsParameters} parameters The parameters of the hook.
 * @returns {UseFieldSectionContentPropsReturnValue} The props to forward to the content element of each section of the field.
 */
export function useFieldSectionContentProps(
  parameters: UseFieldSectionContentPropsParameters,
): UseFieldSectionContentPropsReturnValue {
  const adapter = usePickerAdapter();
  const translations = usePickerTranslations();

  const {
    focused,
    domGetters,
    stateResponse,
    applyCharacterEditing,
    manager: { internal_fieldValueManager: fieldValueManager },
    stateResponse: {
      // States and derived states
      parsedSelectedSections,
      sectionsValueBoundaries,
      state,
      value,
      localizedDigits,

      // Methods to update the states
      clearActiveSection,
      setCharacterQuery,
      setSelectedSections,
      updateSectionValue,
      updateValueFromValueStr,
    },
    internalPropsWithDefaults: { disabled = false, readOnly = false },
  } = parameters;

  const isContainerEditable = parsedSelectedSections === 'all';
  const isEditable = !isContainerEditable && !disabled && !readOnly;

  /**
   * If a section content has been updated with a value we don't want to keep,
   * Then we need to imperatively revert it (we can't let React do it because the value did not change in his internal representation).
   */
  const revertDOMSectionChange = useEventCallback((sectionIndex: number) => {
      throw new Error("STUB");
  });

  const handleInput = useEventCallback((event: React.FormEvent<HTMLSpanElement>) => {
      throw new Error("STUB");
  });

  const handleMouseUp = useEventCallback((event: React.MouseEvent) => {
      throw new Error("STUB");
  });

  const handlePaste = useEventCallback((event: React.ClipboardEvent<HTMLSpanElement>) => {
      throw new Error("STUB");
  });

  const handleDragOver = useEventCallback((event: React.DragEvent<HTMLSpanElement>) => {
      throw new Error("STUB");
  });

  const createFocusHandler = React.useCallback(
    (sectionIndex: number) => { throw new Error("STUB"); },
    [disabled, setSelectedSections],
  );

  return React.useCallback(
    (section, sectionIndex) => {
          throw new Error("STUB");
      },
    [
      sectionsValueBoundaries,
      isContainerEditable,
      disabled,
      readOnly,
      isEditable,
      translations,
      adapter,
      localizedDigits,
      handleInput,
      handlePaste,
      handleMouseUp,
      handleDragOver,
      createFocusHandler,
      fieldValueManager,
      value,
    ],
  );
}

interface UseFieldSectionContentPropsParameters {
  manager: PickerAnyManager;
  stateResponse: UseFieldStateReturnValue<any>;
  applyCharacterEditing: UseFieldCharacterEditingReturnValue;
  internalPropsWithDefaults: UseFieldInternalProps<any, any>;
  domGetters: UseFieldDOMGetters;
  focused: boolean;
}

type UseFieldSectionContentPropsReturnValue = (
  section: FieldSection,
  sectionIndex: number,
) => PickersSectionElement['content'];

function getSectionValueText(
  section: FieldSection,
  adapter: MuiPickersAdapter,
  localizedDigits: string[],
): string | undefined {
  if (!section.value) {
    return undefined;
  }
  switch (section.type) {
    case 'month': {
      if (section.contentType === 'digit') {
        const dateWithMonth = adapter.setMonth(
          adapter.date(),
          Number(removeLocalizedDigits(section.value, localizedDigits)) - 1,
        );
        return adapter.isValid(dateWithMonth) ? adapter.format(dateWithMonth, 'month') : '';
      }
      const parsedDate = adapter.parse(section.value, section.format);
      return parsedDate && adapter.isValid(parsedDate)
        ? adapter.format(parsedDate, 'month')
        : undefined;
    }
    case 'day':
      if (section.contentType === 'digit') {
        const dateWithDay = adapter.setDate(
          adapter.startOfYear(adapter.date()),
          Number(removeLocalizedDigits(section.value, localizedDigits)),
        );
        // Announce a cardinal day (e.g. "2"), not a locale ordinal (e.g. French "2ème").
        // See https://github.com/mui/mui-x/issues/22915.
        return adapter.isValid(dateWithDay) ? adapter.format(dateWithDay, 'dayOfMonth') : '';
      }
      return section.value;
    case 'weekDay':
      // TODO: improve by providing the label of the week day
      return undefined;
    default:
      return undefined;
  }
}

function getSectionValueNow(
  section: FieldSection,
  adapter: MuiPickersAdapter,
  localizedDigits: string[],
): number | undefined {
  if (!section.value) {
    return undefined;
  }
  const nonLocalizedValue = removeLocalizedDigits(section.value, localizedDigits);
  switch (section.type) {
    case 'weekDay': {
      if (section.contentType === 'letter') {
        // TODO: improve by resolving the week day number from a letter week day
        return undefined;
      }
      return Number(nonLocalizedValue);
    }
    case 'meridiem': {
      const parsedDate = adapter.parse(
        `01:00 ${section.value}`,
        `${adapter.formats.hours12h}:${adapter.formats.minutes} ${section.format}`,
      );
      if (parsedDate) {
        return adapter.getHours(parsedDate) >= 12 ? 1 : 0;
      }
      return undefined;
    }
    case 'day':
      return section.contentType === 'digit-with-letter'
        ? parseInt(nonLocalizedValue, 10)
        : Number(nonLocalizedValue);
    case 'month': {
      if (section.contentType === 'digit') {
        return Number(nonLocalizedValue);
      }
      const parsedDate = adapter.parse(section.value, section.format);
      return parsedDate ? adapter.getMonth(parsedDate) + 1 : undefined;
    }
    default:
      return section.contentType !== 'letter' ? Number(nonLocalizedValue) : undefined;
  }
}
