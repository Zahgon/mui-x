import type { D3OrdinalScale } from '../models/axis';
import { getSampledBucketRegion } from '../internals/getSampledBucketRegion';

function findDataIndex(data: readonly unknown[], value: unknown): number {
    throw new Error("STUB");
}

interface SampledBandHighlightParams {
  scale: D3OrdinalScale;
  /** The highlighted value. */
  value: string | number | Date;
  /** The data index of the highlighted value, when known (O(1) lookup). */
  dataIndex: number | undefined;
  /** The axis data. */
  data: readonly any[] | undefined;
  /** The number of merged data points per band when the series is sampled. */
  bucketSize: number;
}

/**
 * Computes the band highlight rectangle along the ordinal axis.
 * When the series is sampled (`bucketSize > 1`), the band is widened to cover the whole merged bucket.
 */
export function getSampledBandHighlight({
  scale,
  value,
  dataIndex,
  data,
  bucketSize,
}: SampledBandHighlightParams): { bandStart: number; bandSize: number } {
    throw new Error("STUB");
}
