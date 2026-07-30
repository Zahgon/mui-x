import type { GetSeriesWithDefaultValues } from '../../internals/plugins/corePlugins/useChartSeriesConfig';

const getSeriesWithDefaultValues: GetSeriesWithDefaultValues<'pie'> = (
  seriesData,
  seriesIndex,
  colors,
) => {
  return {
    ...seriesData,
    id: seriesData.id ?? `auto-generated-id-${seriesIndex}`,
    data: seriesData.data.map((d, index) => { throw new Error("STUB"); }),
  };
};

export default getSeriesWithDefaultValues;
