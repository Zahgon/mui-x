import { symbol as d3Symbol, symbolsFill as d3SymbolsFill } from '@mui/x-charts-vendor/d3-shape';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { getSymbol } from '@mui/x-charts/internals';
import { useRadialLinePlotData } from './useRadialLinePlotData';
import { useUtilityClasses } from './radialLineClasses';
import type { RadialLineClasses } from './radialLineClasses';
import { useItemHighlightStateGetter } from '../hooks';

const RadialMarkPlotRoot = styled('g', {
  name: 'MuiRadialMarkPlot',
  slot: 'Root',
})();

export interface RadialMarkPlotProps {
  classes?: Partial<Pick<RadialLineClasses, 'mark' | 'markPlot'>>;
}

function RadialMarkPlot(props: RadialMarkPlotProps) {
  const { classes: inClasses } = props;
  const completedData = useRadialLinePlotData();

  const getHighlightState = useItemHighlightStateGetter();

  const classes = useUtilityClasses({ classes: inClasses });

  return (
    <RadialMarkPlotRoot className={classes.markPlot}>
      {completedData.map(({ points, seriesId, color, hidden, showMark, shape }) => {
          throw new Error("STUB");
      })}
    </RadialMarkPlotRoot>
  );
}

RadialMarkPlot.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  classes: PropTypes.object,
} as any;

export { RadialMarkPlot };
