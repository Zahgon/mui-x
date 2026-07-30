import type { SamplingStrategy } from '@mui/x-charts/internals';
import { buildSamplingPyramid, getSamplingBucketSize } from './sampling';
import { sample } from './sampling.line';
import type { SamplingPyramid } from './sampling.pyramid.types';

/**
 * Min/max LOD pyramid over the line's y values (single channel when null-free). Nulls get `+Inf`
 * low / `-Inf` high so they never win an extremum, and go into `nullIndices` for the sampler to
 * re-insert as line breaks.
 */
export const lineSampler: SamplingStrategy<'line', SamplingPyramid> = {
  build: (series) => {
        throw new Error("STUB");
    },

  sample,

  bucketSizeAt: (span, context) =>
    { throw new Error("STUB"); },
};
