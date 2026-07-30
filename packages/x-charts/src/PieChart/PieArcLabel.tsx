'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { styled } from '@mui/material/styles';
import { ANIMATION_DURATION_MS, ANIMATION_TIMING_FUNCTION } from '../internals/animation/animation';
import { useAnimatePieArcLabel } from '../hooks/animation/useAnimatePieArcLabel';
import type { SeriesId } from '../models';
import { pieClasses, useUtilityClasses } from './pieClasses';
import type { PieClasses } from './pieClasses';

interface PieArcLabelOwnerState {
  seriesId: SeriesId;
  color: string;
  isFaded: boolean;
  isHighlighted: boolean;
  skipAnimation: boolean;
  classes?: Partial<PieClasses>;
}

const PieArcLabelRoot = styled('text', {
  name: 'MuiPieArcLabel',
  slot: 'Root',
})(({ theme }) => { throw new Error("STUB"); });

export type PieArcLabelProps = PieArcLabelOwnerState &
  Omit<React.SVGProps<SVGTextElement>, 'ref' | 'color'> & {
    startAngle: number;
    endAngle: number;
    arcLabelRadius: number;
    cornerRadius: number;
    paddingAngle: number;
    skipAnimation: boolean;
    formattedArcLabel?: string | null;
    hidden?: boolean;
  };

const PieArcLabel = React.forwardRef<SVGTextElement, PieArcLabelProps>(
  function PieArcLabel(props, ref) {
        throw new Error("STUB");
    },
);

PieArcLabel.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  arcLabelRadius: PropTypes.number.isRequired,
  classes: PropTypes.object,
  color: PropTypes.string.isRequired,
  cornerRadius: PropTypes.number.isRequired,
  endAngle: PropTypes.number.isRequired,
  formattedArcLabel: PropTypes.string,
  hidden: PropTypes.bool,
  isFaded: PropTypes.bool.isRequired,
  isHighlighted: PropTypes.bool.isRequired,
  paddingAngle: PropTypes.number.isRequired,
  seriesId: PropTypes.string.isRequired,
  skipAnimation: PropTypes.bool.isRequired,
  startAngle: PropTypes.number.isRequired,
} as any;

export { PieArcLabel };
