'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/system';
import { NotRendered, useChartsSlots } from '@mui/x-charts/internals';
import type { ChartsBaseSlotsPro } from '../../internals/slots/chartsBaseSlots';
import type { ChartBaseDividerProps } from '../../internals/slots/chartBaseSlotProps';

export interface ChartsToolbarDividerProps extends ChartBaseDividerProps {}

// This is workaround because api-docs-builder does not support the `NotRendered<ChartBaseDividerProps>` syntax.
const NotRenderedDivider = NotRendered as unknown as React.ComponentType<ChartBaseDividerProps>;

const Divider = styled(NotRenderedDivider, {
  name: 'MuiChartsToolbar',
  slot: 'Divider',
})(({ theme }) => { throw new Error("STUB"); });

const ChartsToolbarDivider = React.forwardRef<HTMLHRElement, ChartsToolbarDividerProps>(
  function ChartsToolbarDivider(props, ref) {
        throw new Error("STUB");
    },
);

ChartsToolbarDivider.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  className: PropTypes.string,
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  style: PropTypes.object,
} as any;

export { ChartsToolbarDivider };
