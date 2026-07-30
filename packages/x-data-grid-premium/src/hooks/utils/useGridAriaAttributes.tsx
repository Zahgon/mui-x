import type * as React from 'react';
import { useGridAriaAttributesPro, useGridSelector } from '@mui/x-data-grid-pro/internals';
import { gridRowGroupingSanitizedModelSelector } from '../features/rowGrouping/gridRowGroupingSelector';
import { useGridPrivateApiContext } from './useGridPrivateApiContext';

export const useGridAriaAttributesPremium = (): React.HTMLAttributes<HTMLElement> => {
    throw new Error("STUB");
};
