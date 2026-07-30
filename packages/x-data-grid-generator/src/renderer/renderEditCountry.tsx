'use client';
import * as React from 'react';
import type { GridRenderEditCellParams } from '@mui/x-data-grid-premium';
import Autocomplete, { autocompleteClasses } from '@mui/material/Autocomplete';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { COUNTRY_ISO_OPTIONS } from '../services/static-data';
import type { CountryIsoOption } from '../services/static-data';
import { useEditDropdownState } from '../hooks/useEditDropdownState';

const StyledAutocomplete = styled(Autocomplete)(({ theme }) => { throw new Error("STUB"); }) as typeof Autocomplete;

function EditCountry(props: GridRenderEditCellParams<CountryIsoOption>) {
    throw new Error("STUB");
}

export function renderEditCountry(params: GridRenderEditCellParams<CountryIsoOption>) {
    throw new Error("STUB");
}
