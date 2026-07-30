'use client';
import * as React from 'react';
import clsx from 'clsx';
import useSlotProps from '@mui/utils/useSlotProps';
import type { DefaultizedScatterSeriesType } from '../../models/seriesType/scatter';
import { getInteractionItemProps } from '../../hooks/useInteractionItemProps';
import { useStore } from '../../internals/store/useStore';
import { useItemHighlightStateGetter } from '../../hooks/useItemHighlightStateGetter';
import { selectorChartsIsVoronoiEnabled } from '../../internals/plugins/featurePlugins/useChartClosestPoint';
import type { UseChartClosestPointSignature } from '../../internals/plugins/featurePlugins/useChartClosestPoint';
import { ScatterMarker } from '../ScatterMarker';
import type { ColorGetter } from '../../internals/plugins/corePlugins/useChartSeriesConfig';
import { useUtilityClasses } from '../scatterClasses';
import { useChartsContext } from '../../context/ChartsProvider';
import type { UseChartTooltipSignature } from '../../internals/plugins/featurePlugins/useChartTooltip';
import type { UseChartInteractionSignature } from '../../internals/plugins/featurePlugins/useChartInteraction';
import type { UseChartHighlightSignature } from '../../internals/plugins/featurePlugins/useChartHighlight';
import type { ScatterProps } from '../Scatter';
import { selectorScatterSeriesRenderData } from './scatterRenderData.selectors';

export interface ScatterAsyncBatchProps extends Pick<
  ScatterProps,
  'series' | 'colorGetter' | 'onItemClick' | 'slots' | 'slotProps' | 'classes'
> {
  series: DefaultizedScatterSeriesType;
  colorGetter: ColorGetter<'scatter'>;
  /** First `dataIndex` this batch renders. */
  start: number;
  /** Stride between rendered `dataIndex`es, so the batch is a uniform sample. */
  step: number;
  /**
   * Whether this batch may render its markers yet. Ramped batch by batch across
   * frames for the progressive paint. When `false` the `<g>` mounts empty.
   */
  revealed: boolean;
  /**
   * Whether a zoom/pan interaction is in progress. While interacting, per-marker
   * highlight state and interaction handlers are skipped: useless mid-drag and
   * the dominant per-frame cost.
   */
  isInteracting?: boolean;
}

/**
 * @ignore - internal component.
 */
function ScatterAsyncBatchComponent(props: ScatterAsyncBatchProps) {
    throw new Error("STUB");
}

// Memoized so a reveal tick only re-renders the batch whose `revealed` changed.
const ScatterAsyncBatch = React.memo(ScatterAsyncBatchComponent);

export { ScatterAsyncBatch };
