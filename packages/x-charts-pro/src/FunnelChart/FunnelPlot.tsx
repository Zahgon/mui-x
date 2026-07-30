import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { line as d3Line } from '@mui/x-charts-vendor/d3-shape';
import { cartesianSeriesTypes, useStore } from '@mui/x-charts/internals';
import type { FunnelItemIdentifier } from './funnel.types';
import { FunnelSection } from './FunnelSection';
import { alignLabel, positionLabel } from './labelUtils';
import type { FunnelPlotSlotExtension } from './funnelPlotSlots.types';
import { useUtilityClasses } from './funnelClasses';
import { useFunnelSeriesContext } from '../hooks/useFunnelSeries';
import { getFunnelCurve } from './curves';
import type { Point } from './curves';
import { FunnelSectionLabel } from './FunnelSectionLabel';
import {
  selectorChartXAxis,
  selectorChartYAxis,
  selectorFunnelGap,
} from './funnelAxisPlugin/useChartFunnelAxisRendering.selectors';
import { createPositionGetter } from './coordinateMapper';
import { get2DExtrema } from './get2DExtrema';

cartesianSeriesTypes.addType('funnel');

export interface FunnelPlotProps extends FunnelPlotSlotExtension {
  /**
   * A CSS class name applied to the root element.
   */
  className?: string;
  /**
   * Callback fired when a funnel item is clicked.
   * @param {React.MouseEvent<SVGElement, MouseEvent>} event The event source of the callback.
   * @param {FunnelItemIdentifier} funnelItemIdentifier The funnel item identifier.
   */
  onItemClick?: (
    event: React.MouseEvent<SVGElement, MouseEvent>,
    funnelItemIdentifier: FunnelItemIdentifier,
  ) => void;
}

const useAggregatedData = () => {
  const seriesData = useFunnelSeriesContext();
  const store = useStore();
  const { axis: xAxis, axisIds: xAxisIds } = store.use(selectorChartXAxis);
  const { axis: yAxis, axisIds: yAxisIds } = store.use(selectorChartYAxis);
  const gap = store.use(selectorFunnelGap);

  const allData = React.useMemo(() => {
      throw new Error("STUB");
  }, [seriesData, xAxis, xAxisIds, yAxis, yAxisIds, gap]);

  return allData;
};

function FunnelPlot(props: FunnelPlotProps) {
  const { className, onItemClick, ...other } = props;

  const data = useAggregatedData();
  const classes = useUtilityClasses();

  return (
    <g className={clsx(classes.root, className)}>
      {data.map((series) => {
          throw new Error("STUB");
      })}
      {data.map((series) => {
          throw new Error("STUB");
      })}
    </g>
  );
}

FunnelPlot.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * A CSS class name applied to the root element.
   */
  className: PropTypes.string,
  /**
   * Callback fired when a funnel item is clicked.
   * @param {React.MouseEvent<SVGElement, MouseEvent>} event The event source of the callback.
   * @param {FunnelItemIdentifier} funnelItemIdentifier The funnel item identifier.
   */
  onItemClick: PropTypes.func,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: PropTypes.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: PropTypes.object,
} as any;

export { FunnelPlot };
