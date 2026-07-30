'use client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import type { SxProps, Theme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import useEventCallback from '@mui/utils/useEventCallback';
import { useLegend } from '../hooks/useLegend';
import type { Direction } from './direction';
import type { SeriesLegendItemContext, SeriesLegendItemParams } from './legendContext.types';
import { ChartsLabelMark } from '../ChartsLabel/ChartsLabelMark';
import { seriesContextBuilder } from './onClickContextBuilder';
import { legendClasses, useUtilityClasses } from './chartsLegendClasses';
import type { ChartsLegendClasses } from './chartsLegendClasses';
import { consumeSlots } from '../internals/consumeSlots';
import { ChartsLabel } from '../ChartsLabel/ChartsLabel';
import { useChartsContext } from '../context/ChartsProvider';
import { selectorIsItemVisibleGetter } from '../internals/plugins/featurePlugins/useChartVisibilityManager';
import type {
  VisibilityIdentifierWithType,
  UseChartVisibilityManagerSignature,
} from '../internals/plugins/featurePlugins/useChartVisibilityManager';
import { useStore } from '../internals/store/useStore';

export interface ChartsLegendProps {
  /**
   * Callback fired when a legend item is clicked.
   * @param {React.MouseEvent<HTMLButtonElement, MouseEvent>} event The click event.
   * @param {SeriesLegendItemContext} legendItem The legend item data.
   * @param {number} index The index of the clicked legend item.
   */
  onItemClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    legendItem: SeriesLegendItemContext,
    index: number,
  ) => void;
  /**
   * The direction of the legend layout.
   * The default depends on the chart.
   */
  direction?: Direction;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<ChartsLegendClasses>;
  /**
   * If `true`, clicking on a legend item will toggle the visibility of the corresponding series.
   * @default false
   */
  toggleVisibilityOnClick?: boolean;
  className?: string;
  sx?: SxProps<Theme>;
  tabIndex?: number;
}

const RootElement = styled('ul', {
  name: 'MuiChartsLegend',
  slot: 'Root',
})<{ ownerState: ChartsLegendProps }>(({ ownerState, theme }) => { throw new Error("STUB"); });

const ChartsLegend = consumeSlots(
  'MuiChartsLegend',
  'legend',
  {
    defaultProps: { direction: 'horizontal' },
    // @ts-expect-error position is used only in the slots, but it is passed to the SVG wrapper.
    // We omit it here to avoid passing to slots.
    omitProps: ['position'],
    classesResolver: useUtilityClasses,
  },
  React.forwardRef(function ChartsLegend(
    props: ChartsLegendProps,
    ref: React.Ref<HTMLUListElement>,
  ) {
      throw new Error("STUB");
  }),
);

ChartsLegend.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  className: PropTypes.string,
  /**
   * The direction of the legend layout.
   * The default depends on the chart.
   */
  direction: PropTypes.oneOf(['horizontal', 'vertical']),
  /**
   * Callback fired when a legend item is clicked.
   * @param {React.MouseEvent<HTMLButtonElement, MouseEvent>} event The click event.
   * @param {SeriesLegendItemContext} legendItem The legend item data.
   * @param {number} index The index of the clicked legend item.
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
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])),
    PropTypes.func,
    PropTypes.object,
  ]),
  /**
   * If `true`, clicking on a legend item will toggle the visibility of the corresponding series.
   * @default false
   */
  toggleVisibilityOnClick: PropTypes.bool,
} as any;

export { ChartsLegend };
