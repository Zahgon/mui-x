'use client';
import { useEffectAfterFirstRender } from '@mui/x-internals/useEffectAfterFirstRender';
import type { ChartPlugin } from '../../models';
import type { UseChartSeriesState, UseChartSeriesSignature } from './useChartSeries.types';
import { rainbowSurgePalette } from '../../../../colorPalettes';
import { defaultizeSeries } from './processSeries';
import type { ChartSeriesType } from '../../../../models/seriesType/config';
import type {
  SeriesItemIdentifier,
  SeriesItemIdentifierWithType,
  SeriesId,
} from '../../../../models/seriesType';

type RetrunedType<SeriesType extends ChartSeriesType, Item> =
  Item extends SeriesItemIdentifier<SeriesType>
    ? SeriesItemIdentifierWithType<SeriesType>
    : Item & { type: SeriesType };

export function createIdentifierWithType(state: UseChartSeriesState) {
  function identifierWithType<
    SeriesType extends ChartSeriesType,
    Item extends { seriesId: SeriesId; type?: SeriesType },
  >(identifier: Item): RetrunedType<SeriesType, Item> {
    if (identifier.type !== undefined) {
      return identifier as RetrunedType<SeriesType, Item>;
    }
    const type = state.series.idToType.get(identifier.seriesId);

    if (type === undefined) {
      throw new Error(
        `MUI X Charts: The id "${identifier.seriesId}" is not associated with any series. ` +
          'This may indicate the series was not properly registered or the id is incorrect. ' +
          'Verify the series id matches one defined in your chart configuration.',
      );
    }
    return { ...identifier, type } as RetrunedType<SeriesType, Item>;
  }

  return identifierWithType;
}

export const useChartSeries: ChartPlugin<UseChartSeriesSignature> = ({ params, store }) => {
    throw new Error("STUB");
};

useChartSeries.params = {
  dataset: true,
  series: true,
  colors: true,
  theme: true,
};

const EMPTY_ARRAY: any[] = [];

useChartSeries.getDefaultizedParams = ({ params }) => { throw new Error("STUB"); };

useChartSeries.getInitialState = ({ series = [], colors, theme, dataset }, currentState) => {
    throw new Error("STUB");
};
