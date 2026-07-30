import type { ColorProcessor } from '../../internals/plugins/corePlugins/useChartSeriesConfig';

const getColor: ColorProcessor<'pie'> = (series) => {
  return (dataIndex: number) => {
      throw new Error("STUB");
  };
};

export default getColor;
