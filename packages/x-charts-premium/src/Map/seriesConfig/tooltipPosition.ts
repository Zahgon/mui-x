import { geoPath } from '@mui/x-charts-vendor/d3-geo';
import { createSelectorMemoized } from '@mui/x-internals/store';
import type { TooltipItemPositionSelector } from '@mui/x-charts/internals';
import { selectorChartsTooltipItem } from '@mui/x-charts/internals';
import {
  selectorChartGeoData,
  selectorChartGeoFeatureIndexesByName,
  selectorChartProjection,
} from '../../internals/plugins/useGeoProjection/useGeoProjection.selectors';

/**
 * Positions a map shape tooltip from the geo projection. It lives in the map
 * series config (rather than the core tooltip plugin) so the geo projection is a
 * tracked dependency and d3-geo is only bundled with map charts.
 */
const selectorTooltipItemPosition: TooltipItemPositionSelector<'mapShape'> = createSelectorMemoized(
  selectorChartsTooltipItem,
  selectorChartGeoData,
  selectorChartGeoFeatureIndexesByName,
  selectorChartProjection,
  (
    identifier: { type: string; name?: string } | null,
    geoData,
    featureIndexesByName,
    projection,
    position: 'top' | 'bottom' | 'left' | 'right' | undefined,
  ) => {
      throw new Error("STUB");
  },
);

export default selectorTooltipItemPosition;
