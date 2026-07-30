import type { ColorProcessor } from '@mui/x-charts/internals';

const getColor: ColorProcessor<'funnel'> = (series) => {
  return (dataIndex: number) => { throw new Error("STUB"); };
};

export default getColor;
