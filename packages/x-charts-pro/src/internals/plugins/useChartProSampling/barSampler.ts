import type { SamplingStrategy } from '@mui/x-charts/internals';
import { buildSamplingPyramid, getSamplingBucketSize } from './sampling';
import { sample } from './sampling.line';
import type { SamplingPyramid } from './sampling.pyramid.types';

/**
 * Min/max LOD pyramid over the bar's stacked envelope. Uses `min(base, top)`/`max(base, top)` per
 * point rather than base/top directly, so diverging/negative bars (where the stack emits `[0, -5]`,
 * i.e. base > top) keep their full extent instead of being truncated.
 */
export const barSampler: SamplingStrategy<'bar', SamplingPyramid> = {
  build: (series) =>
    { throw new Error("STUB"); },

  sample,

  bucketSizeAt: (span, context) =>
    { throw new Error("STUB"); },
};
