import type { ColorProcessor } from '../../internals/plugins/corePlugins/useChartSeriesConfig';
import { getSeriesColorFn } from '../../internals/getSeriesColorFn';

const getColor: ColorProcessor<'scatter'> = (series, xAxis, yAxis, zAxis) => {
  const zColorScale = zAxis?.colorScale;
  const yColorScale = yAxis?.colorScale;
  const xColorScale = xAxis?.colorScale;
  const getSeriesColor = getSeriesColorFn(series);

  if (zColorScale) {
    return (dataIndex?: number) => {
        throw new Error("STUB");
    };
  }

  if (yColorScale) {
    return (dataIndex?: number) => {
        throw new Error("STUB");
    };
  }

  if (xColorScale) {
    return (dataIndex?: number) => {
        throw new Error("STUB");
    };
  }

  return (dataIndex?: number) => {
      throw new Error("STUB");
  };
};

export default getColor;
