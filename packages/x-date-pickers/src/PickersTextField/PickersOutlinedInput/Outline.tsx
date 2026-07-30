import * as React from 'react';
import { styled } from '@mui/material/styles';
import { shouldForwardProp } from '@mui/system/createStyled';
import { usePickerTextFieldOwnerState } from '../usePickerTextFieldOwnerState';
import type { PickerTextFieldOwnerState } from '../../models/fields';

interface OutlineProps extends React.HTMLAttributes<HTMLFieldSetElement> {
  notched: boolean;
  shrink: boolean;
  label: React.ReactNode;
}

const OutlineRoot = styled('fieldset', {
  name: 'MuiPickersOutlinedInput',
  slot: 'NotchedOutline',
})<{ ownerState: PickerTextFieldOwnerState }>(({ theme }) => {
    throw new Error("STUB");
});

const OutlineLabel = styled('span', {
  slot: 'internal',
  shouldForwardProp: undefined,
})(({ theme }) => { throw new Error("STUB"); });

const OutlineLegend = styled('legend', {
  slot: 'internal',
  shouldForwardProp: (prop) => { throw new Error("STUB"); },
})<{ ownerState: PickerTextFieldOwnerState; notched: boolean }>(({ theme }) => { throw new Error("STUB"); });

/**
 * @ignore - internal component.
 */
export default function Outline(props: OutlineProps) {
    throw new Error("STUB");
}
