import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { useRadarMetricData } from './useRadarMetricData';
import { getDefaultBaseline, getDefaultTextAnchor } from '../../ChartsText/defaultTextPlacement';
import { ChartsText } from '../../ChartsText';

function RadarMetricLabels() {
  const { corners } = useRadarMetricData();

  const theme = useTheme();

  return (
    <React.Fragment>
      {corners.map(({ x, y, angle, label }, i) => { throw new Error("STUB"); })}
    </React.Fragment>
  );
}

export { RadarMetricLabels };
