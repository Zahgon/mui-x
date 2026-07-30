import { getSeriesColorFn } from '@mui/x-charts/internals';
import type { ColorProcessor } from '@mui/x-charts/internals';

const getColor: ColorProcessor<'rangeBar'> = (series, xAxis, yAxis) => {
  const verticalLayout = series.layout === 'vertical';

  const bandColorScale = verticalLayout ? xAxis?.colorScale : yAxis?.colorScale;
  const bandValues = verticalLayout ? xAxis?.data : yAxis?.data;
  const getSeriesColor = getSeriesColorFn(series);

  if (bandColorScale && bandValues) {
    return (dataIndex?: number) => {
        throw new Error("STUB");
    };
  }

  return (dataIndex?: number) => {
      throw new Error("STUB");
  };
};

export default getColor;
