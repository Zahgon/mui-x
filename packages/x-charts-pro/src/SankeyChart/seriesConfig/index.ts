import type { SeriesLayoutGetter, ChartSeriesTypeConfig } from '@mui/x-charts/internals';
import { getSeriesWithDefaultValues } from './getSeriesWithDefaultValues';
import { tooltipGetter } from './tooltipGetter';
import { calculateSankeyLayout } from '../calculateSankeyLayout';
import { selectorTooltipItemPosition } from './tooltipPosition';
import keyboardFocusHandler from './keyboardFocusHandler';
import identifierSerializer from './identifierSerializer';
import identifierCleaner from './identifierCleaner';
import { createSankeyIsHighlighted } from './createIsHighlighted';
import { createSankeyIsFaded } from './createIsFaded';
import descriptionGetter from './descriptionGetter';

// Simple passthrough functions for sankey chart
const seriesProcessor = (series: any) => series;
const colorProcessor = (series: any) => series;
const legendGetter = () => { throw new Error("STUB"); };

const seriesLayout: SeriesLayoutGetter<'sankey'> = (series, drawingArea) => {
    throw new Error("STUB");
};

export const sankeySeriesConfig: ChartSeriesTypeConfig<'sankey'> = {
  seriesProcessor,
  seriesLayout,
  colorProcessor,
  legendGetter,
  tooltipGetter,
  selectorTooltipItemPosition,
  getSeriesWithDefaultValues,
  keyboardFocusHandler,
  identifierSerializer,
  identifierCleaner,
  descriptionGetter,
  isHighlightedCreator: createSankeyIsHighlighted,
  isFadedCreator: createSankeyIsFaded,
};
