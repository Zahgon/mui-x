import type { ColorProcessor } from '../../internals/plugins/corePlugins/useChartSeriesConfig';
import { getSeriesColorFn } from '../../internals/getSeriesColorFn';

const getColor: ColorProcessor<'radar'> = (series) => {
  const getSeriesColor = getSeriesColorFn(series);

  return (dataIndex?: number) => {
      throw new Error("STUB");
  };
};

export default getColor;
