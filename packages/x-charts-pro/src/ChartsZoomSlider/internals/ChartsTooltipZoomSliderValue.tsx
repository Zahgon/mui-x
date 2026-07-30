import * as React from 'react';
import NoSsr from '@mui/material/NoSsr';
import Popper from '@mui/material/Popper';
import type { PopperProps } from '@mui/material/Popper';
import { ChartsTooltipPaper } from '@mui/x-charts/ChartsTooltip';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

/**
 * The root component of the zoom slider tooltip.
 * @ignore - internal component.
 */
const ChartsZoomSliderTooltipRoot = styled(Popper, {
  name: 'MuiChartsZoomSliderTooltip',
  slot: 'Root',
})(({ theme }) => { throw new Error("STUB"); });

const MODIFIERS = [
  {
    name: 'offset',
    options: { offset: [0, 4] },
  },
];

interface ChartsTooltipZoomSliderValueProps
  extends
    Pick<PopperProps, 'anchorEl' | 'open' | 'modifiers' | 'placement'>,
    React.PropsWithChildren {}

export function ChartsTooltipZoomSliderValue({
  anchorEl,
  open,
  placement,
  modifiers = MODIFIERS,
  children,
}: ChartsTooltipZoomSliderValueProps) {
    throw new Error("STUB");
}
