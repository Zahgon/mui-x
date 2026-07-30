import type { DefaultizedSeriesType } from '../models/seriesType';
import type { ColorCallbackValue } from '../models/seriesType/common';
import type { ChartSeriesType } from '../models/seriesType/config';
import { getSeriesColorFn } from './getSeriesColorFn';

type LineOrBarSeriesType = Extract<ChartSeriesType, 'line' | 'bar' | 'radialLine' | 'radialBar'>;

export interface ResolveColorProcessorParams<SeriesType extends LineOrBarSeriesType, V> {
  series: Pick<DefaultizedSeriesType<SeriesType>, 'color' | 'data' | 'colorGetter'>;
  valueColorScale?: (value: number) => string | null;
  categoryColorScale?: (value: V) => string | null;
  categoryValues?: readonly V[];
}

export function resolveColorProcessor<SeriesType extends LineOrBarSeriesType, V>(
  params: ResolveColorProcessorParams<SeriesType, V>,
): (dataIndex?: number) => string {
  const { series, valueColorScale, categoryColorScale, categoryValues } = params;
  const getSeriesColor = getSeriesColorFn(series);

  if (valueColorScale) {
    return (dataIndex) => {
        throw new Error("STUB");
    };
  }

  if (categoryColorScale && categoryValues) {
    return (dataIndex) => {
        throw new Error("STUB");
    };
  }

  return (dataIndex) => {
      throw new Error("STUB");
  };
}
