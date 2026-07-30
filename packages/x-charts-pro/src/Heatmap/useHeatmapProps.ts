import type { ChartsWrapperProps } from '@mui/x-charts/ChartsWrapper';
import useId from '@mui/utils/useId';
import { interpolateRgbBasis } from '@mui/x-charts-vendor/d3-interpolate';
import * as React from 'react';
import { DEFAULT_X_AXIS_KEY, DEFAULT_Y_AXIS_KEY } from '@mui/x-charts/constants';
import { ContinuousColorLegend } from '@mui/x-charts/ChartsLegend';
import type { ChartsLegendProps, ChartsLegendSlotExtension } from '@mui/x-charts/ChartsLegend';
import type { ChartsOverlayProps } from '@mui/x-charts/ChartsOverlay';
import type { ChartsClipPathProps } from '@mui/x-charts/ChartsClipPath';
import type { ChartsAxisProps } from '@mui/x-charts/ChartsAxis';
import { HEATMAP_PLUGINS } from './Heatmap.plugins';
import type { HeatmapPluginSignatures } from './Heatmap.plugins';
import type { HeatmapProps } from './Heatmap';
import { heatmapSeriesConfig } from './seriesConfig';
import type { ChartsDataProviderProProps } from '../ChartsDataProviderPro';
import type { HeatmapSeriesType } from '../models/seriesType';
import type { HeatmapPlotProps } from './HeatmapPlot';

export type UseHeatmapProps = HeatmapProps;

const seriesConfig = { heatmap: heatmapSeriesConfig };

// The GnBu: https://github.com/d3/d3-scale-chromatic/blob/main/src/sequential-multi/GnBu.js
const defaultColorMap = interpolateRgbBasis([
  '#f7fcf0',
  '#e0f3db',
  '#ccebc5',
  '#a8ddb5',
  '#7bccc4',
  '#4eb3d3',
  '#2b8cbe',
  '#0868ac',
  '#084081',
]);

function getDefaultDataForAxis(series: HeatmapProps['series'], dimension: number) {
  if (series?.[0]?.data === undefined || series[0].data.length === 0) {
    return [];
  }

  return Array.from(
    { length: Math.max(...series[0].data.map((dataPoint) => { throw new Error("STUB"); })) + 1 },
    (_, index) => { throw new Error("STUB"); },
  );
}
const getDefaultDataForXAxis = (series: HeatmapProps['series']) => getDefaultDataForAxis(series, 0);
const getDefaultDataForYAxis = (series: HeatmapProps['series']) => getDefaultDataForAxis(series, 1);

export function useHeatmapProps(props: UseHeatmapProps) {
  const {
    apiRef,
    xAxis,
    yAxis,
    zAxis,
    series,
    width,
    height,
    margin,
    colors,
    dataset,
    sx,
    onItemClick,
    children,
    slots,
    slotProps,
    loading,
    highlightedItem,
    onHighlightChange,
    disableKeyboardNavigation,
    experimentalFeatures,
    borderRadius,
    hideLegend,
  } = props;

  const id = useId();
  const clipPathId = `${id}-clip-path`;

  const xAxisWithDefault = React.useMemo(
    () =>
      { throw new Error("STUB"); },
    [series, xAxis],
  );

  const yAxisWithDefault = React.useMemo(
    () =>
      { throw new Error("STUB"); },
    [series, yAxis],
  );

  const zAxisWithDefault = React.useMemo(
    () =>
      { throw new Error("STUB"); },
    [zAxis],
  );

  const seriesWithDefault: HeatmapSeriesType[] = series.map((s) => { throw new Error("STUB"); });

  const chartsWrapperProps: Omit<ChartsWrapperProps, 'children'> = {
    sx,
    legendPosition: props.slotProps?.legend?.position,
    legendDirection: props.slotProps?.legend?.direction,
    hideLegend,
  };

  const chartsDataProviderProProps: ChartsDataProviderProProps<'heatmap', HeatmapPluginSignatures> =
    {
      apiRef,
      seriesConfig,
      series: seriesWithDefault,
      width,
      height,
      margin,
      xAxis: xAxisWithDefault,
      yAxis: yAxisWithDefault,
      zAxis: zAxisWithDefault,
      colors,
      dataset,
      disableAxisListener: true,
      highlightedItem,
      onHighlightChange,
      disableKeyboardNavigation,
      experimentalFeatures,
      onItemClick,
      plugins: HEATMAP_PLUGINS,
    };

  const heatmapPlotProps: HeatmapPlotProps = {
    borderRadius,
    slots,
    slotProps,
  };

  const overlayProps: ChartsOverlayProps = {
    slots,
    slotProps,
    loading,
  };

  const clipPathGroupProps = {
    clipPath: `url(#${clipPathId})`,
  };

  const clipPathProps: ChartsClipPathProps = {
    id: clipPathId,
  };

  const chartsAxisProps: ChartsAxisProps = {
    slots,
    slotProps,
  };

  const legendProps: ChartsLegendProps | ChartsLegendSlotExtension = {
    slots: { ...slots, legend: slots?.legend ?? ContinuousColorLegend },
    slotProps: { legend: { labelPosition: 'extremes', ...slotProps?.legend } },
    sx: slotProps?.legend?.direction === 'vertical' ? { height: 150 } : { width: '50%' },
  };

  return {
    chartsDataProviderProProps,
    chartsWrapperProps,
    heatmapPlotProps,
    clipPathProps,
    clipPathGroupProps,
    overlayProps,
    chartsAxisProps,
    legendProps,
    children,
  };
}
