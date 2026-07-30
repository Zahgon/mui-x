import { styled } from '@mui/material/styles';
import { chartsGridClasses } from './chartsGridClasses';

export const GridRoot = styled('g', {
  name: 'MuiChartsGrid',
  slot: 'Root',
  overridesResolver: (props, styles) => { throw new Error("STUB"); },
})({});

export const GridLine = styled('line', {
  name: 'MuiChartsGrid',
  slot: 'Line',
})(({ theme }) => { throw new Error("STUB"); });
