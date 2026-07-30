import * as React from 'react';
import useEventCallback from '@mui/utils/useEventCallback';
import type { UseFieldStateReturnValue } from './useFieldState';
import type { UseFieldInternalProps } from './useField.types';

/**
 * Generate the props to pass to the container element of each section of the field.
 * @param {UseFieldSectionContainerPropsParameters} parameters The parameters of the hook.
 * @returns {UseFieldSectionContainerPropsReturnValue} The props to forward to the container element of each section of the field.
 */
export function useFieldSectionContainerProps(
  parameters: UseFieldSectionContainerPropsParameters,
): UseFieldSectionContainerPropsReturnValue {
  const {
    stateResponse: {
      // States and derived states
      parsedSelectedSections,
      // Methods to update the states
      setSelectedSections,
    },
    internalPropsWithDefaults: { disabled = false },
  } = parameters;

  // A single stable handler shared by every section, rather than a per-index
  // factory. The section index is read from the container's `data-sectionindex`
  // at click time, and `useEventCallback` reads the latest `disabled` /
  // `parsedSelectedSections` / `setSelectedSections` internally -- so none of
  // them sit in a dependency array and the `onClick` identity stays stable
  // across renders (`setSelectedSections` is recreated on every render, which
  // would otherwise churn the handler).
  const handleClick = useEventCallback((event: React.MouseEvent<HTMLDivElement>) => {
      throw new Error("STUB");
  });

  return React.useCallback(
    (sectionIndex) => { throw new Error("STUB"); },
    [handleClick],
  );
}

interface UseFieldSectionContainerPropsParameters {
  stateResponse: UseFieldStateReturnValue<any>;
  internalPropsWithDefaults: UseFieldInternalProps<any, any>;
}

type UseFieldSectionContainerPropsReturnValue = (
  sectionIndex: number,
) => React.HTMLAttributes<HTMLSpanElement>;
