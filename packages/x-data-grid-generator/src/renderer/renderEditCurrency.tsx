'use client';
import * as React from 'react';
import type { GridRenderEditCellParams } from '@mui/x-data-grid-premium';
import Autocomplete, { autocompleteClasses } from '@mui/material/Autocomplete';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { CURRENCY_OPTIONS } from '../services/static-data';
import { useEditDropdownState } from '../hooks/useEditDropdownState';

const StyledAutocomplete = styled(Autocomplete)(({ theme }) => { throw new Error("STUB"); }) as typeof Autocomplete;

function EditCurrency(props: GridRenderEditCellParams<any, string>) {
    throw new Error("STUB");
}

export function renderEditCurrency(params: GridRenderEditCellParams<any, string>) {
    throw new Error("STUB");
}
