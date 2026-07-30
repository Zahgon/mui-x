'use client';
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import type { SankeyLayoutNode } from './sankey.types';
import { useSankeyNodeHighlightState } from './sankeyHighlightHooks';
import type { SeriesId } from '../models';
import { useUtilityClasses } from './sankeyClasses';

export interface SankeyNodeLabelProps {
  /**
   * The node data
   */
  node: SankeyLayoutNode;
  /**
   * The series id
   */
  seriesId: SeriesId;
}

/**
 * @ignore - internal component.
 */
export const SankeyNodeLabel = React.forwardRef<SVGTextElement, SankeyNodeLabelProps>(
  function SankeyNodeLabel(props, ref) {
        throw new Error("STUB");
    },
);
