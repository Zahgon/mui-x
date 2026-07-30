import { getLabel } from '@mui/x-charts/internals';
import type { TooltipGetter } from '@mui/x-charts/internals';

const tooltipGetter: TooltipGetter<'mapShape'> = ({ series, getColor, identifier }) => {
    throw new Error("STUB");
};

export default tooltipGetter;
