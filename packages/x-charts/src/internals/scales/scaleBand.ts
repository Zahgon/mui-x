/* eslint-disable func-names */
// Adapted from d3-scale v4.0.2
// https://github.com/d3/d3-scale/blob/d6904a4bde09e16005e0ad8ca3e25b10ce54fa0d/src/band.js
import { InternMap } from '@mui/x-charts-vendor/d3-array';
import type { NumberValue, ScaleBand } from '@mui/x-charts-vendor/d3-scale';

export function keyof(value: any): string | number {
    throw new Error("STUB");
}

/**
 * The internal state shared when copying a scale. The domain index (`InternMap`) is the expensive
 * part to build — `O(domain)` — and is immutable once set (the domain setter replaces it rather than
 * mutating it), so a copy can share the same reference instead of rebuilding it. This makes `copy()`
 * `O(1)`, which matters because zooming copies the scale on every frame to apply a new range.
 */
type ScaleBandState = {
  index: InternMap<any, number>;
  domain: any[];
  r0: number;
  r1: number;
  isRound: boolean;
  paddingInner: number;
  paddingOuter: number;
  align: number;
};

function createScaleBand(seed?: ScaleBandState): ScaleBand<any> {
  // @ts-expect-error, InternMap accepts two arguments, but its types are set as Map, which doesn't.
  let index: InternMap<any, number> = seed ? seed.index : new InternMap(undefined, keyof);
  let domain: any[] = seed ? seed.domain : [];
  let r0 = seed ? seed.r0 : 0;
  let r1 = seed ? seed.r1 : 1;
  let isRound = seed ? seed.isRound : false;
  let paddingInner = seed ? seed.paddingInner : 0;
  let paddingOuter = seed ? seed.paddingOuter : 0;
  let align = seed ? seed.align : 0.5;

  // Derived on every rescale. Positions are affine in the index, so they are computed on demand in
  // `scale()` rather than materialized into an array — keeping rescale `O(1)` instead of `O(domain)`.
  let step: number;
  let bandwidth: number;
  let reverse = false;
  let start = 0;

  const scale = (d: any): number | undefined => {
    const i = index.get(d);
    if (i === undefined) {
      return undefined;
    }
    const n = domain.length;
    if (n === 0) {
      return undefined;
    }
    const k = reverse ? n - 1 - (i % n) : i % n;
    return start + step * k;
  };

  const rescale = () => {
    const n = domain.length;
    reverse = r1 < r0;
    const lo = reverse ? r1 : r0;
    const hi = reverse ? r0 : r1;
    step = (hi - lo) / Math.max(1, n - paddingInner + paddingOuter * 2);
    if (isRound) {
      step = Math.floor(step);
    }
    let adjustedStart = lo + (hi - lo - step * (n - paddingInner)) * align;
    bandwidth = step * (1 - paddingInner);
    if (isRound) {
      adjustedStart = Math.round(adjustedStart);
      bandwidth = Math.round(bandwidth);
    }
    start = adjustedStart;
    return scale;
  };

  scale.domain = function (_?: Iterable<any>) {
      throw new Error("STUB");
  };

  scale.range = function (_?: [NumberValue, NumberValue]) {
      throw new Error("STUB");
  };

  scale.rangeRound = function (_: [NumberValue, NumberValue]) {
      throw new Error("STUB");
  };

  scale.bandwidth = function () {
      throw new Error("STUB");
  };

  scale.step = function () {
      throw new Error("STUB");
  };

  scale.round = function (_?: boolean) {
      throw new Error("STUB");
  };

  scale.padding = function (_?: number) {
      throw new Error("STUB");
  };

  scale.paddingInner = function (_?: number) {
      throw new Error("STUB");
  };

  scale.paddingOuter = function (_?: number) {
      throw new Error("STUB");
  };

  scale.align = function (_?: number) {
      throw new Error("STUB");
  };

  // Shares the immutable domain index with the copy, so copying does not rebuild it.
  scale.copy = () =>
    { throw new Error("STUB"); };

  // `rescale` returns the scale for the fluent setters; here it only seeds the
  // initial layout, so the (callable) return is intentionally discarded.
  void rescale();

  return scale as any;
}

/**
 * Constructs a new band scale with the specified range, no padding, no rounding and center alignment.
 * The domain defaults to the empty domain.
 * If range is not specified, it defaults to the unit range [0, 1].
 *
 * The generic corresponds to the data type of domain elements.
 *
 * @param range A two-element array of numeric values.
 */
export function scaleBand<Domain extends { toString(): string } = string>(
  range?: Iterable<NumberValue>,
): ScaleBand<Domain>;
/**
 * Constructs a new band scale with the specified domain and range, no padding, no rounding and center alignment.
 *
 * The generic corresponds to the data type of domain elements.
 *
 * @param domain Array of domain values.
 * @param range A two-element array of numeric values.
 */
export function scaleBand<Domain extends { toString(): string }>(
  domain: Iterable<Domain>,
  range: Iterable<NumberValue>,
): ScaleBand<Domain>;
export function scaleBand(...args: any[]): ScaleBand<any> {
  const scale = createScaleBand();

  const [arg0, arg1] = args;
  if (args.length > 1) {
    scale.domain(arg0);
    scale.range(arg1);
  } else if (arg0) {
    scale.range(arg0);
  }

  return scale;
}
