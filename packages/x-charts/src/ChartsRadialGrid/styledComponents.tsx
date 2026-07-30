import { styled } from '@mui/material/styles';
import { chartsRadialGridClasses } from './chartsRadialGridClasses';

export const GridRoot = styled('g', {
  name: 'MuiChartsRadialGrid',
  slot: 'Root',
  overridesResolver: (props, styles) => { throw new Error("STUB"); },
})({});

export const GridLine = styled('line', {
  slot: 'internal',
  shouldForwardProp: undefined,
})(({ theme }) => { throw new Error("STUB"); });

export const GridPath = styled('path', {
  slot: 'internal',
  shouldForwardProp: undefined,
})(({ theme }) => { throw new Error("STUB"); });

export const GridCircle = styled('circle', {
  slot: 'internal',
  shouldForwardProp: undefined,
})(({ theme }) => { throw new Error("STUB"); });
