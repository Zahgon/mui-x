'use client';
import * as React from 'react';
import type { GridRenderEditCellParams } from '@mui/x-data-grid-premium';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import InfoIcon from '@mui/icons-material/Info';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import DoneIcon from '@mui/icons-material/Done';
import { STATUS_OPTIONS } from '../services/static-data';
import { useEditDropdownState } from '../hooks/useEditDropdownState';

function EditStatus(props: GridRenderEditCellParams<any, string>) {
    throw new Error("STUB");
}

export function renderEditStatus(params: GridRenderEditCellParams<any, string>) {
    throw new Error("STUB");
}
