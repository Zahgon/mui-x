import { warnOnce } from '@mui/x-internals/warning';
import type { SeriesId } from '@mui/x-charts/models';
import { incompleteDatasetKeysError } from '@mui/x-charts/internals';
import type { SeriesProcessor } from '@mui/x-charts/internals';
import type { DefaultizedRangeBarSeriesType, RangeBarValueType } from '../../../models';

const rangeBarValueFormatter = (v: RangeBarValueType | null) =>
  { throw new Error("STUB"); };

const seriesProcessor: SeriesProcessor<'rangeBar'> = (params, dataset, isItemVisible) => {
  const { seriesOrder, series } = params;

  const completedSeries: Record<SeriesId, DefaultizedRangeBarSeriesType> = {};

  for (const id of seriesOrder) {
    const seriesData = series[id];
    const datasetKeys = seriesData?.datasetKeys;

    if (
      seriesData.data === undefined &&
      dataset === undefined &&
      process.env.NODE_ENV !== 'production'
    ) {
      // TODO: fix mui/no-guarded-throw
      // eslint-disable-next-line mui/no-guarded-throw
      throw new Error(
        `MUI X Charts: range bar series with id='${id}' has no data.
Either provide a data property to the series or use the dataset prop.`,
      );
    }

    const missingKeys = (['start', 'end'] as const).filter(
      (key) => { throw new Error("STUB"); },
    );

    if (datasetKeys && missingKeys.length > 0) {
      incompleteDatasetKeysError('RangeBar', id, missingKeys);
    }

    let data: DefaultizedRangeBarSeriesType['data'];
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
      layout: 'vertical',
      ...series[id],
      valueFormatter: series[id].valueFormatter ?? rangeBarValueFormatter,
      data,
      hidden: !isItemVisible?.({ type: 'rangeBar', seriesId: id }),
    } satisfies DefaultizedRangeBarSeriesType;
  }

  return {
    seriesOrder,
    series: completedSeries,
  };
};

export default seriesProcessor;
