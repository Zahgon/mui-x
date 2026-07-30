'use client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import { useInteractionItemProps, consumeSlots } from '@mui/x-charts/internals';
import type { SeriesId } from '@mui/x-charts/internals';
import { useItemHighlightState } from '@mui/x-charts/hooks';
import clsx from 'clsx';
import { useUtilityClasses } from './funnelClasses';
import type { FunnelClasses } from './funnelClasses';

export interface FunnelSectionProps extends Omit<React.SVGProps<SVGPathElement>, 'ref'> {
  seriesId: SeriesId;
  dataIndex: number;
  color: string;
  classes?: Partial<FunnelClasses>;
  variant?: 'filled' | 'outlined';
}

export const FunnelSectionPath = styled('path', {
  name: 'MuiFunnelChart',
  slot: 'Section',
})(() => { throw new Error("STUB"); });

/**
 * @ignore - internal component.
 */
const FunnelSection = consumeSlots<FunnelSectionProps, SVGPathElement>(
  'MuiFunnelSection',
  'funnelSection',
  {
    classesResolver: useUtilityClasses,
  },
  React.forwardRef(function FunnelSection(
    props: FunnelSectionProps,
    ref: React.Ref<SVGPathElement>,
  ) {
      throw new Error("STUB");
  }),
);

export { FunnelSection };
