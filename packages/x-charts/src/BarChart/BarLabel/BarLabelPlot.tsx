import * as React from 'react';
import type { AnimationData } from '../types';
import { BarLabelItem } from './BarLabelItem';
import type { SeriesId } from '../../models/seriesType/common';
import type { BarSeriesType, BarValueType } from '../../models/seriesType/bar';
import type { BarLabelFunction } from './BarLabel.types';

interface BarLabelPlotProps {
  processedSeries: ProcessedBarLabelSeriesData;
  className: string;
  skipAnimation?: boolean;
}

export interface ProcessedBarLabelSeriesData {
  seriesId: SeriesId;
  data: ProcessedBarLabelData[];
  barLabel?: 'value' | BarLabelFunction;
  barLabelPlacement?: BarSeriesType['barLabelPlacement'];
  layout?: 'vertical' | 'horizontal';
  xOrigin: number;
  yOrigin: number;
}

export interface ProcessedBarLabelData extends AnimationData {
  seriesId: SeriesId;
  dataIndex: number;
  color: string;
  value: BarValueType | null;
  hidden: boolean;
}

/**
 * @ignore - internal component.
 */
function BarLabelPlot(props: BarLabelPlotProps) {
  const { processedSeries, className, skipAnimation, ...other } = props;
  const { seriesId, data, layout, xOrigin, yOrigin } = processedSeries;

  if (!processedSeries.barLabel) {
    return null;
  }

  return (
    <g key={seriesId} className={className} data-series={seriesId}>
      {data.map(({ x, y, dataIndex, color, value, width, height, hidden }) => { throw new Error("STUB"); })}
    </g>
  );
}

export { BarLabelPlot };
