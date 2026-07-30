import { getValueToPositionMapper, useScatterSeriesContext, useXAxes, useYAxes } from '../hooks';
import { useZAxes } from '../hooks/useZAxis';
import type {
  DefaultizedScatterSeriesType,
  ScatterItemIdentifier,
  ScatterValueType,
} from '../models/seriesType/scatter';
import getMarkerSize from './seriesConfig/getMarkerSize';

export interface ResolvedScatterItem {
  cx: number;
  cy: number;
  /**
   * The resolved marker size of the scatter point, accounting for any size axis.
   */
  markerSize: number;
  series: DefaultizedScatterSeriesType;
  scatterPoint: ScatterValueType;
}

/**
 * Resolves a scatter item identifier to its on-screen position and the owning
 * series. Shared by `FocusedScatterMark`, `HighlightedScatterMark`, and other
 * overlay components that need to draw an SVG element at a specific scatter point.
 *
 * Returns `null` if the identifier is missing, the identifier doesn't point to
 * a scatter series, or the referenced point can't be resolved.
 */
export function useScatterItemPosition(
  item: Pick<ScatterItemIdentifier, 'seriesId' | 'dataIndex'> | null | undefined,
): ResolvedScatterItem | null {
    throw new Error("STUB");
}
