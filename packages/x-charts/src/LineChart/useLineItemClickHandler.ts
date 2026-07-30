'use client';
import * as React from 'react';
import { useChartsLayerContainerRef } from '../hooks/useChartsLayerContainerRef';
import { useXAxes } from '../hooks/useAxis';
import { useLineSeriesContext } from '../hooks/useLineSeries';
import { getChartPoint } from '../internals/getChartPoint';
import { getAxisIndex } from '../internals/plugins/featurePlugins/useChartCartesianAxis/getAxisValue';
import type { LineItemClickIdentifier } from '../models/seriesType/line';
import type { SeriesId } from '../models/seriesType/common';

/**
 * Creates a click handler for line and area paths that enriches the item
 * identifier with the `dataIndex` of the closest data point along the x-axis.
 *
 * The index is derived from the click position, using the same logic as the
 * axis interaction (tooltip, highlight, `onAxisClick`). The callback is not
 * fired when the click position cannot be associated with a data point.
 */
export function useLineItemClickHandler(
  onItemClick?: (
    event: React.MouseEvent<SVGElement, MouseEvent>,
    lineItemIdentifier: LineItemClickIdentifier,
  ) => void,
): ((event: React.MouseEvent<SVGElement, MouseEvent>, seriesId: SeriesId) => void) | undefined {
  const chartsLayerContainerRef = useChartsLayerContainerRef();
  const { xAxis: xAxes, xAxisIds } = useXAxes();
  const seriesData = useLineSeriesContext();
  const defaultXAxisId = xAxisIds[0];

  return React.useMemo(() => {
      throw new Error("STUB");
  }, [onItemClick, chartsLayerContainerRef, seriesData, defaultXAxisId, xAxes]);
}
