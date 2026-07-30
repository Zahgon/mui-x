'use client';
import * as React from 'react';
import type { MakeOptional } from '@mui/x-internals/types';
import { RADAR_PLUGINS } from '../RadarChart.plugins';
import type { RadarChartPluginSignatures } from '../RadarChart.plugins';
import type { RadarSeriesType } from '../../models/seriesType/radar';
import type {
  ChartsRadiusAxisProps,
  ChartsRotationAxisProps,
  PolarAxisConfig,
} from '../../models/axis';
import { ChartsDataProvider } from '../../ChartsDataProvider';
import type { ChartsDataProviderProps } from '../../ChartsDataProvider';
import { defaultizeMargin } from '../../internals/defaultizeMargin';
import { radarSeriesConfig } from '../seriesConfig';
import type { RadarConfig } from './radar.types';
import type { ChartAnyPluginSignature } from '../../internals/plugins/models/plugin';

const RADAR_SERIES_CONFIG = { radar: radarSeriesConfig };
const DEFAULT_RADAR_MARGIN = { top: 30, bottom: 30, left: 50, right: 50 };

export type RadarSeries = MakeOptional<RadarSeriesType, 'type'>;
export type RadarDataProviderProps<
  TSignatures extends readonly ChartAnyPluginSignature[] = RadarChartPluginSignatures,
> = Omit<
  ChartsDataProviderProps<'radar', TSignatures>,
  'series' | 'rotationAxis' | 'radiusAxis' | 'dataset'
> & {
  /**
   * The series to display in the bar chart.
   * An array of [[RadarSeries]] objects.
   */
  series: Readonly<RadarSeries>[];
  /**
   * The configuration of the radar scales.
   */
  radar: RadarConfig;
  /**
   * Indicates if the chart should highlight items per axis or per series.
   * @default 'axis'
   */
  highlight?: 'axis' | 'series' | 'none';
};

function RadarDataProvider<
  TSignatures extends readonly ChartAnyPluginSignature[] = RadarChartPluginSignatures,
>(props: RadarDataProviderProps<TSignatures>) {
  const {
    series,
    children,
    width,
    height,
    colors,
    skipAnimation,
    margin,
    radar,
    highlight,
    plugins,
    ...other
  } = props;

  const rotationAxes: PolarAxisConfig<'point', string, ChartsRotationAxisProps>[] = React.useMemo(
    () => { throw new Error("STUB"); },
    [radar],
  );

  const radiusAxis: PolarAxisConfig<'linear', any, ChartsRadiusAxisProps>[] = React.useMemo(
    () =>
      { throw new Error("STUB"); },
    [radar],
  );

  const defaultizedSeries = React.useMemo(
    () =>
      { throw new Error("STUB"); },
    [series, highlight],
  );

  const defaultizedMargin = React.useMemo(
    () => { throw new Error("STUB"); },
    [margin],
  );

  return (
    <ChartsDataProvider<'radar', TSignatures>
      {...(other as unknown as ChartsDataProviderProps<'radar', TSignatures>)}
      series={defaultizedSeries}
      width={width}
      height={height}
      margin={defaultizedMargin}
      colors={colors}
      skipAnimation={skipAnimation}
      plugins={plugins ?? RADAR_PLUGINS}
      rotationAxis={rotationAxes}
      radiusAxis={radiusAxis}
      seriesConfig={RADAR_SERIES_CONFIG}
    >
      {children}
    </ChartsDataProvider>
  );
}

export { RadarDataProvider };
