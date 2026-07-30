import { getLabel } from '@mui/x-charts/internals';
import type { AxisTooltipGetter, TooltipGetter } from '@mui/x-charts/internals';

const tooltipGetter: TooltipGetter<'rangeBar'> = (params) => {
    throw new Error("STUB");
};

export const axisTooltipGetter: AxisTooltipGetter<'rangeBar', 'x' | 'y'> = (series) => {
    throw new Error("STUB");
};

export default tooltipGetter;
