'use client';
import * as React from 'react';
import clsx from 'clsx';
import { useGridApiContext } from '@mui/x-data-grid-premium';
import type { GridRenderEditCellParams } from '@mui/x-data-grid-premium';
import Slider, { sliderClasses } from '@mui/material/Slider';
import type { SliderProps } from '@mui/material/Slider';
import Tooltip from '@mui/material/Tooltip';
import debounce from '@mui/utils/debounce';
import { alpha, styled } from '@mui/material/styles';

const StyledSlider = styled(Slider)(({ theme }) => { throw new Error("STUB"); });

function ValueLabelComponent(props: any) {
    throw new Error("STUB");
}

function EditProgress(props: GridRenderEditCellParams<any, number>) {
    throw new Error("STUB");
}

export function renderEditProgress(params: GridRenderEditCellParams<any, number>) {
    throw new Error("STUB");
}
