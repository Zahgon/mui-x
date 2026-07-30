import type { ColorProcessor } from '@mui/x-charts/internals';

const getColor: ColorProcessor<'mapShape'> = (series, _mainAxis, _secondaryAxis, zAxis) => {
  const colorScale = zAxis?.colorScale;

  if (colorScale) {
    return (name?: string) => {
        throw new Error("STUB");
    };
  }

  return (name?: string) => {
      throw new Error("STUB");
  };
};

export default getColor;
