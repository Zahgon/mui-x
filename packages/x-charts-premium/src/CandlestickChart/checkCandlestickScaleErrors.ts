import type { SeriesId } from '@mui/x-charts/models';
import { isBandScale } from '@mui/x-charts/internals';
import type { D3Scale } from '@mui/x-charts/internals';

export function checkCandlestickScaleErrors(seriesId: SeriesId, xScale: D3Scale) {
    throw new Error("STUB");
}
