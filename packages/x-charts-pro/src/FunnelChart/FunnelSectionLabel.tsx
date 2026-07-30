'use client';
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { consumeSlots } from '@mui/x-charts/internals';
import type { SeriesId } from '@mui/x-charts/internals';
import clsx from 'clsx';
import { useUtilityClasses } from './funnelClasses';
import type { FunnelClasses } from './funnelClasses';

export interface FunnelSectionLabelConfig {
  x: number;
  y: number;
  value: string | null;
  textAnchor?: React.SVGProps<SVGTextElement>['textAnchor'];
  dominantBaseline?: React.SVGProps<SVGTextElement>['dominantBaseline'];
}

export interface FunnelSectionLabelProps extends Omit<
  React.SVGProps<SVGTextElement>,
  'ref' | 'id'
> {
  classes?: Partial<FunnelClasses>;
  label: FunnelSectionLabelConfig;
  /**
   * Indicate if the section is filled or outlined.
   * Can be used to apply different styles to the label.
   */
  variant?: 'filled' | 'outlined';
  seriesId: SeriesId;
  dataIndex: number;
}

export const FunnelSectionLabelText = styled('text', {
  name: 'MuiFunnelChart',
  slot: 'SectionLabel',
})(() => { throw new Error("STUB"); });

/**
 * @ignore - internal component.
 */
const FunnelSectionLabel = consumeSlots<FunnelSectionLabelProps, SVGTextElement>(
  'MuiFunnelSectionLabel',
  'funnelSectionLabel',
  {
    classesResolver: useUtilityClasses,
  },
  React.forwardRef(function FunnelSectionLabel(
    props: FunnelSectionLabelProps,
    ref: React.Ref<SVGTextElement>,
  ) {
      throw new Error("STUB");
  }),
);

export { FunnelSectionLabel };
