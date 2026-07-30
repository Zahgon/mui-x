import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { chartsTooltipClasses } from './chartsTooltipClasses';

/**
 * @ignore - internal component.
 */
export const ChartsTooltipPaper = styled('div', {
  name: 'MuiChartsTooltip',
  slot: 'Container',
  overridesResolver: (props, styles) => { throw new Error("STUB"); }, // FIXME: Inconsistent naming with slot
})(({ theme }) => { throw new Error("STUB"); });

/**
 * @ignore - internal component.
 */
export const ChartsTooltipTable = styled('table', {
  name: 'MuiChartsTooltip',
  slot: 'Table',
})(({ theme }) => { throw new Error("STUB"); });

/**
 * @ignore - internal component.
 */
export const ChartsTooltipRow = styled('tr', {
  name: 'MuiChartsTooltip',
  slot: 'Row',
})(({ theme }) => { throw new Error("STUB"); });

/**
 * @ignore - internal component.
 */
export const ChartsTooltipCell = styled(Typography, {
  name: 'MuiChartsTooltip',
  slot: 'Cell',
})<{ component?: React.ElementType }>(({ theme }) => { throw new Error("STUB"); });
