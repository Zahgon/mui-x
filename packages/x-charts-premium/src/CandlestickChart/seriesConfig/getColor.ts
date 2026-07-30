import { getSeriesColorFn } from '@mui/x-charts/internals';
import type { ColorProcessor } from '@mui/x-charts/internals';

const getColor: ColorProcessor<'ohlc'> = (series, xAxis) => {
  const bandColorScale = xAxis?.colorScale;
  const bandValues = xAxis?.data;
  const getSeriesColor = getSeriesColorFn(series);

  if (bandColorScale && bandValues) {
    return (dataIndex?: number) => {
        throw new Error("STUB");
    };
  }

  if (series.colorGetter) {
    return (dataIndex?: number) => {
        throw new Error("STUB");
    };
  }

  const { upColor, downColor } = series;

  return (dataIndex?: number) => {
      throw new Error("STUB");
  };
};

export default getColor;
