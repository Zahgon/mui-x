import { isOrdinalScale } from '@mui/x-charts/internals';
import type { D3Scale } from '@mui/x-charts/internals';
import type { PositionGetter } from './curves/curve.types';

export const createPositionGetter: (
  scale: D3Scale,
  isCategoryDirection: boolean,
  gap: number,
  ordinalScaleData: readonly any[] | undefined,
) => PositionGetter =
  (scale, isCategoryDirection, gap, ordinalScaleData) =>
  (value, bandIndex, stackOffset, useBand) => {
      throw new Error("STUB");
  };
