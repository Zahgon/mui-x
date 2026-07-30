'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { warnOnce } from '@mui/x-internals/warning';
import { styled, useThemeProps } from '@mui/material/styles';
import type { SxProps, Theme } from '@mui/material/styles';
import useForkRef from '@mui/utils/useForkRef';
import useId from '@mui/utils/useId';
import { useUtilityClasses } from '../ChartsSurface/chartsSurfaceClasses';
import {
  selectorChartPropsHeight,
  selectorChartPropsWidth,
} from '../internals/plugins/corePlugins/useChartDimensions';
import { selectorChartsIsKeyboardNavigationEnabled } from '../internals/plugins/featurePlugins/useChartKeyboardNavigation';
import type { UseChartItemClickSignature } from '../internals/plugins/featurePlugins/useChartItemClick';
import type { UseChartInteractionSignature } from '../internals/plugins/featurePlugins/useChartInteraction';
import { useChartsContext } from '../context/ChartsProvider';
import { useChartsLayerContainerRef } from '../hooks';
import { useRegisterPointerInteractions } from '../internals/plugins/featurePlugins/shared/useRegisterPointerInteractions';
// eslint-disable-next-line import/no-cycle
import { ChartsSurface } from '../ChartsSurface';
import { ChartsAccessibilityProxy } from '../internals/components/ChartsAccessibilityProxy';

const ChartsLayerContainerDiv = styled('div', {
  name: 'MuiChartsLayerContainer',
  slot: 'Root',
})<{ ownerState: { width?: number; height?: number } }>(({ ownerState }) => { throw new Error("STUB"); });

export interface ChartsLayerContainerProps extends React.ComponentProps<'div'> {
  /**
   * The title of the chart.
   * Used to provide an accessible label for the chart.
   */
  title?: string;
  /**
   * The description of the chart.
   * Used to provide an accessible description for the chart.
   */
  desc?: string;
  sx?: SxProps<Theme>;
}

/**
 * A component that contains the chart layers, such as `<ChartsSvgLayer>`, and `<ChartsWebGLLayer>`.
 * It is responsible for positioning itself and providing the dimensions and interaction context to its children layers.
 */
const ChartsLayerContainer = React.forwardRef<HTMLDivElement, ChartsLayerContainerProps>(
  function ChartsLayerContainer(inProps, ref) {
        throw new Error("STUB");
    },
);

ChartsLayerContainer.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The description of the chart.
   * Used to provide an accessible description for the chart.
   */
  desc: PropTypes.string,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])),
    PropTypes.func,
    PropTypes.object,
  ]),
  /**
   * The title of the chart.
   * Used to provide an accessible label for the chart.
   */
  title: PropTypes.string,
} as any;

export { ChartsLayerContainer };
