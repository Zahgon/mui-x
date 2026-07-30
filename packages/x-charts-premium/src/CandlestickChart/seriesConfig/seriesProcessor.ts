import { warnOnce } from '@mui/x-internals/warning';
import type { SeriesId } from '@mui/x-charts/models';
import { incompleteDatasetKeysError } from '@mui/x-charts/internals';
import type { SeriesProcessor } from '@mui/x-charts/internals';
import type { DefaultizedOHLCSeriesType } from '../../models';

const candlestickValueFormatter: DefaultizedOHLCSeriesType['valueFormatter'] = (v) =>
  { throw new Error("STUB"); };

const seriesProcessor: SeriesProcessor<'ohlc'> = (params, dataset, isItemVisible) => {
  const { seriesOrder, series } = params;

  const completedSeries: Record<SeriesId, DefaultizedOHLCSeriesType> = {};

  for (const id of seriesOrder) {
    const seriesData = series[id];
    const datasetKeys = seriesData?.datasetKeys;

    if (seriesData.data === undefined && dataset === undefined) {
      throw new Error(
        `MUI X Charts: OHLC series with id='${id}' has no data.
Either provide a data property to the series or use the dataset prop.`,
      );
    }

    const missingKeys = (['open', 'high', 'low', 'close'] as const).filter(
      (key) => { throw new Error("STUB"); },
    );

    if (datasetKeys && missingKeys.length > 0) {
      incompleteDatasetKeysError('OHLC', id, missingKeys);
    }

    let data: DefaultizedOHLCSeriesType['data'];
    if (seriesData.valueGetter) {
      data = dataset!.map((d) => { throw new Error("STUB"); });
    } else if (datasetKeys) {
      data = dataset!.map((d) => {
          throw new Error("STUB");
      });
    } else {
      data = series[id].data!;
    }

    completedSeries[id] = {
      ...series[id],
      valueFormatter: series[id].valueFormatter ?? candlestickValueFormatter,
      hidden: !isItemVisible?.({ type: 'ohlc', seriesId: id }),
      data,
    } satisfies DefaultizedOHLCSeriesType;
  }

  return {
    seriesOrder,
    series: completedSeries,
  };
};

export default seriesProcessor;
