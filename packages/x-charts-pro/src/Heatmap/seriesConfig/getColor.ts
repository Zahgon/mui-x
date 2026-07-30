import type { ColorProcessor } from '@mui/x-charts/internals';

const getColor: ColorProcessor<'heatmap'> = (series, xAxis, yAxis, zAxis) => {
  const zColorScale = zAxis?.colorScale;

  if (zColorScale) {
    return (value: number | null) => {
        throw new Error("STUB");
    };
  }

  return () => { throw new Error("STUB"); };
};

export default getColor;
