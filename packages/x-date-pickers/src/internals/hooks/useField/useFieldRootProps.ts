import useEventCallback from '@mui/utils/useEventCallback';
import useTimeout from '@mui/utils/useTimeout';
import type {
  InferFieldSection,
  MuiPickersAdapter,
  PickersTimezone,
  PickerValidDate,
} from '../../../models';
import type {
  FieldSectionsValueBoundaries,
  UseFieldDOMGetters,
  UseFieldInternalProps,
} from './useField.types';
import type { UseFieldStateReturnValue } from './useFieldState';
import { getActiveElement } from '../../utils/utils';
import type { UseFieldCharacterEditingReturnValue } from './useFieldCharacterEditing';
import { syncSelectionToDOM } from './syncSelectionToDOM';
import type { PickerAnyManager, PickerValidValue } from '../../models';
import { usePickerAdapter } from '../../../hooks/usePickerAdapter';
import {
  cleanDigitSectionValue,
  getLetterEditingOptions,
  removeLocalizedDigits,
} from './useField.utils';

/**
 * Generate the props to pass to the root element of the field.
 * @param {UseFieldRootPropsParameters} parameters The parameters of the hook.
 * @returns {UseFieldRootPropsReturnValue} The props to forward to the root element of the field.
 */
export function useFieldRootProps(
  parameters: UseFieldRootPropsParameters,
): UseFieldRootPropsReturnValue {
  const {
    manager: { internal_fieldValueManager: fieldValueManager },
    focused,
    setFocused,
    domGetters,
    stateResponse,
    applyCharacterEditing,
    internalPropsWithDefaults,
    stateResponse: {
      // States and derived states
      parsedSelectedSections,
      sectionsValueBoundaries,
      sectionOrder,
      state,
      value,
      activeSectionIndex,
      localizedDigits,
      timezone,

      // Methods to update the states
      clearValue,
      clearActiveSection,
      setCharacterQuery,
      setSelectedSections,
      updateValueFromValueStr,
      updateSectionValue,
    },
    internalPropsWithDefaults: { disabled = false, readOnly = false, minutesStep },
  } = parameters;

  const adapter = usePickerAdapter();

  const handleKeyDown = useEventCallback((event: React.KeyboardEvent<HTMLSpanElement>) => {
      throw new Error("STUB");
  });

  const containerClickTimeout = useTimeout();
  const handleClick = useEventCallback(() => {
      throw new Error("STUB");
  });

  // Replaces Chromium's focus delegation with an explicit section focus on
  // every primary mousedown inside the sections container. The CSS gate
  // (`WebkitUserModify: read-only` while not `:focus-within`) can make the
  // section's contenteditable span temporarily non-focusable, in which case
  // Chromium falls back to the sections-container `tabindex=0` and our
  // `handleFocus` then runs the "no active section" fallback, briefly
  // selecting the first section before the click bubble corrects it.
  // Setting the target section here (and letting `syncSelectionToDOM` move
  // focus via `.focus()`, which works even with the user-modify rule
  // active) skips that race entirely.
  const handleMouseDown = useEventCallback((event: React.MouseEvent) => {
      throw new Error("STUB");
  });

  const handleInput = useEventCallback((event: React.FormEvent<HTMLDivElement>) => {
      throw new Error("STUB");
  });

  const handlePaste = useEventCallback((event: React.ClipboardEvent<HTMLDivElement>) => {
      throw new Error("STUB");
  });

  const handleFocus = useEventCallback(() => {
      throw new Error("STUB");
  });

  const handleBlur = useEventCallback(() => {
      throw new Error("STUB");
  });

  return {
    // Event handlers
    onKeyDown: handleKeyDown,
    onBlur: handleBlur,
    onFocus: handleFocus,
    onClick: handleClick,
    onMouseDown: handleMouseDown,
    onPaste: handlePaste,
    onInput: handleInput,

    // Other
    contentEditable: parsedSelectedSections === 'all',
    tabIndex: internalPropsWithDefaults.disabled || parsedSelectedSections === 0 ? -1 : 0, // TODO: Try to set to undefined when there is a section selected.
  };
}

/**
 * Returns the index of the section whose horizontal center is closest to `clientX`.
 * Returns `null` if the field renders no `[role="spinbutton"]` descendants
 * (defensive — every section content span sets `role="spinbutton"` in practice).
 */
function findClosestSectionIndexToPoint(root: HTMLElement, clientX: number): number | null {
  const sections = root.querySelectorAll<HTMLElement>('[role="spinbutton"]');
  if (sections.length === 0) {
    return null;
  }
  let closestIndex = 0;
  let closestDistance = Infinity;
  for (let i = 0; i < sections.length; i += 1) {
    const rect = sections[i].getBoundingClientRect();
    const center = (rect.left + rect.right) / 2;
    const distance = Math.abs(clientX - center);
    if (distance < closestDistance) {
      closestDistance = distance;
      closestIndex = i;
    }
  }
  return closestIndex;
}

function getDeltaFromKeyCode(keyCode: Omit<AvailableAdjustKeyCode, 'Home' | 'End'>) {
  switch (keyCode) {
    case 'ArrowUp':
      return 1;
    case 'ArrowDown':
      return -1;
    case 'PageUp':
      return 5;
    case 'PageDown':
      return -5;
    default:
      return 0;
  }
}

function adjustSectionValue<TValue extends PickerValidValue>(
  adapter: MuiPickersAdapter,
  timezone: PickersTimezone,
  section: InferFieldSection<TValue>,
  keyCode: AvailableAdjustKeyCode,
  sectionsValueBoundaries: FieldSectionsValueBoundaries,
  localizedDigits: string[],
  activeDate: PickerValidDate | null,
  stepsAttributes?: { minutesStep?: number },
): string {
  const delta = getDeltaFromKeyCode(keyCode);
  const isStart = keyCode === 'Home';
  const isEnd = keyCode === 'End';

  const shouldSetAbsolute = section.value === '' || isStart || isEnd;

  const adjustDigitSection = () => {
    const sectionBoundaries = sectionsValueBoundaries[section.type]({
      currentDate: activeDate,
      format: section.format,
      contentType: section.contentType,
    });

    const getCleanValue = (value: number) =>
      cleanDigitSectionValue(adapter, value, sectionBoundaries, localizedDigits, section);

    const step =
      section.type === 'minutes' && stepsAttributes?.minutesStep ? stepsAttributes.minutesStep : 1;

    let newSectionValueNumber: number;

    if (shouldSetAbsolute) {
      if (section.type === 'year' && !isEnd && !isStart) {
        return adapter.formatByString(adapter.date(undefined, timezone), section.format);
      }

      if (delta > 0 || isStart) {
        newSectionValueNumber = sectionBoundaries.minimum;
      } else {
        newSectionValueNumber = sectionBoundaries.maximum;
      }
    } else {
      const currentSectionValue = parseInt(
        removeLocalizedDigits(section.value, localizedDigits),
        10,
      );
      newSectionValueNumber = currentSectionValue + delta * step;
    }

    if (newSectionValueNumber % step !== 0) {
      if (delta < 0 || isStart) {
        newSectionValueNumber += step - ((step + newSectionValueNumber) % step); // for JS -3 % 5 = -3 (should be 2)
      }
      if (delta > 0 || isEnd) {
        newSectionValueNumber -= newSectionValueNumber % step;
      }
    }

    if (newSectionValueNumber > sectionBoundaries.maximum) {
      return getCleanValue(
        sectionBoundaries.minimum +
          ((newSectionValueNumber - sectionBoundaries.maximum - 1) %
            (sectionBoundaries.maximum - sectionBoundaries.minimum + 1)),
      );
    }

    if (newSectionValueNumber < sectionBoundaries.minimum) {
      return getCleanValue(
        sectionBoundaries.maximum -
          ((sectionBoundaries.minimum - newSectionValueNumber - 1) %
            (sectionBoundaries.maximum - sectionBoundaries.minimum + 1)),
      );
    }

    return getCleanValue(newSectionValueNumber);
  };

  const adjustLetterSection = () => {
    const options = getLetterEditingOptions(adapter, timezone, section.type, section.format);
    if (options.length === 0) {
      return section.value;
    }

    if (shouldSetAbsolute) {
      if (delta > 0 || isStart) {
        return options[0];
      }

      return options[options.length - 1];
    }

    const currentOptionIndex = options.indexOf(section.value);
    const newOptionIndex = (currentOptionIndex + delta) % options.length;
    const clampedIndex = (newOptionIndex + options.length) % options.length;

    return options[clampedIndex];
  };

  if (section.contentType === 'digit' || section.contentType === 'digit-with-letter') {
    return adjustDigitSection();
  }

  return adjustLetterSection();
}

type AvailableAdjustKeyCode = 'ArrowUp' | 'ArrowDown' | 'PageUp' | 'PageDown' | 'Home' | 'End';

interface UseFieldRootPropsParameters {
  manager: PickerAnyManager;
  stateResponse: UseFieldStateReturnValue<any>;
  applyCharacterEditing: UseFieldCharacterEditingReturnValue;
  internalPropsWithDefaults: UseFieldInternalProps<any, any> & { minutesStep?: number };
  domGetters: UseFieldDOMGetters;
  focused: boolean;
  setFocused: (focused: boolean) => void;
}

interface UseFieldRootPropsReturnValue {
  onKeyDown: React.KeyboardEventHandler<HTMLDivElement>;
  onBlur: React.FocusEventHandler<HTMLDivElement>;
  onFocus: React.FocusEventHandler<HTMLDivElement>;
  onClick: React.MouseEventHandler<HTMLDivElement>;
  onMouseDown: React.MouseEventHandler<HTMLDivElement>;
  onPaste: React.ClipboardEventHandler<HTMLDivElement>;
  onInput: React.FormEventHandler<HTMLDivElement>;
  contentEditable: boolean;
  tabIndex: number;
}
