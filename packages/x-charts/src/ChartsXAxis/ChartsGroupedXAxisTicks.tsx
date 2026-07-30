'use client';
import * as React from 'react';
import type { ChartsXAxisProps, AxisGroup } from '../models/axis';
import { isOrdinalScale } from '../internals/scaleGuards';
import { useChartsContext } from '../context/ChartsProvider/useChartsContext';
import { TICK_LABEL_GAP } from './utilities';
import { useTicksGrouped } from '../hooks/useTicksGrouped';
import { useAxisTicksProps } from './useAxisTicksProps';
import { useStore } from '../internals/store/useStore';
import { selectorChartXAxisAutoSizeResults } from '../internals/plugins/featurePlugins/useChartCartesianAxis/useChartAxisAutoSize.selectors';
import type { UseChartCartesianAxisSignature } from '../internals/plugins/featurePlugins/useChartCartesianAxis';
import { getGroupingConfig } from '../internals/getGroupingConfig';

interface ChartsGroupedXAxisProps extends ChartsXAxisProps {}

/**
 * @ignore - internal component.
 */
function ChartsGroupedXAxisTicks(inProps: ChartsGroupedXAxisProps) {
  const {
    xScale,
    defaultizedProps,
    tickNumber,
    positionSign,
    classes,
    Tick,
    TickLabel,
    axisTickLabelProps,
  } = useAxisTicksProps(inProps);

  if (!isOrdinalScale(xScale)) {
    throw new Error(
      'MUI X Charts: ChartsGroupedXAxis only supports the `band` and `point` scale types. ' +
        'Grouped axis ticks require an ordinal scale to display category groupings. ' +
        'Use a band or point scale type for the x-axis, or use a non-grouped axis component.',
    );
  }

  const {
    disableTicks,
    tickSize,
    valueFormatter,
    slotProps,
    tickInterval,
    tickPlacement,
    tickLabelPlacement,
  } = defaultizedProps;

  const groups = (defaultizedProps as { groups: AxisGroup[] }).groups;
  const axisId = defaultizedProps.id;

  const { instance } = useChartsContext();
  const store = useStore<[UseChartCartesianAxisSignature]>();

  // Get computed group tick sizes from auto-sizing (if available)
  const autoSizeResults = store.use(selectorChartXAxisAutoSizeResults);
  const axisAutoSizeResult = axisId ? autoSizeResults[axisId] : undefined;
  const computedGroupTickSizes = axisAutoSizeResult?.groupTickSizes;

  const xTicks = useTicksGrouped({
    scale: xScale,
    tickNumber,
    valueFormatter,
    tickInterval,
    tickPlacement,
    tickLabelPlacement,
    direction: 'x',
    groups,
  });

  return (
    <React.Fragment>
      {xTicks.map((item, index) => {
          throw new Error("STUB");
      })}
    </React.Fragment>
  );
}

export { ChartsGroupedXAxisTicks };
