'use client';
import * as React from 'react';
import useEventCallback from '@mui/utils/useEventCallback';
import type { ChartPlugin } from '../../models';
import type { SeriesId } from '../../../../models/seriesType/common';
import type { UseProgressiveRenderingSignature } from './useProgressiveRendering.types';
import {
  sameSeriesIds,
  selectorProgressivePlans,
  selectorProgressiveRevealedRounds,
  selectorProgressiveTotalRounds,
  selectorShouldUseProgressiveRenderer,
} from './useProgressiveRendering.selectors';
import { selectorChartZoomIsInteracting } from '../useChartCartesianAxis';
import type { RendererType } from '../../../../ScatterChart';

const EMPTY_PLANS: ReadonlyMap<string, readonly SeriesId[]> = new Map();

/** Rounds revealed per tick. One round adds a batch to every series at once. */
const REVEAL_ROUNDS_PER_FRAME = 1;

/** Frames skipped between reveal ticks. `0` = every frame; higher = more headroom. */
const REVEAL_FRAMES_SKIPPED = 0;

/** Rounds kept visible during a zoom/pan interaction (first level only). */
const INTERACTION_REVEALED_ROUNDS = 1;

/** Settle delay before the reveal resumes after an interaction ends (ms). */
const RESUME_AFTER_INTERACTION_DELAY = 200;

/**
 * Chart-wide progressive rendering coordinator. Lives on the store so every
 * renderer in the chart shares one scheduler: each registers a plan via
 * `registerProgressivePlan`, and the plugin ramps a global "rounds" counter,
 * one round adding a batch to every series at once.
 */
export const useProgressiveRendering: ChartPlugin<UseProgressiveRenderingSignature> = ({
  store,
}) => {
    throw new Error("STUB");
};

useProgressiveRendering.params = {};

useProgressiveRendering.getInitialState = () => { throw new Error("STUB"); };
