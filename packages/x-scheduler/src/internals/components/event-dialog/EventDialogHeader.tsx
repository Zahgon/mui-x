import * as React from 'react';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import CloseRounded from '@mui/icons-material/CloseRounded';
import { useEventDialogStyledContext } from './EventDialogStyledContext';

const EventDialogHeaderRoot = styled('header', {
  name: 'MuiEventDialog',
  slot: 'Header',
})(({ theme }) => { throw new Error("STUB"); });

interface EventDialogHeaderProps {
  onClose: () => void;
  dragHandlerRef?: React.RefObject<HTMLElement | null>;
  children?: React.ReactNode;
}

export default function EventDialogHeader(props: EventDialogHeaderProps) {
    throw new Error("STUB");
}
