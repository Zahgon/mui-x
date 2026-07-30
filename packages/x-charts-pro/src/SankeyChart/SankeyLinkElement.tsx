'use client';
import * as React from 'react';
import useEventCallback from '@mui/utils/useEventCallback';
import type { SeriesId } from '@mui/x-charts/internals';
import { useInteractionItemProps } from '@mui/x-charts/internals';
import type { SankeyLayoutLink, SankeyLinkIdentifierWithData } from './sankey.types';
import { useSankeyLinkHighlightState } from './sankeyHighlightHooks';
import { useUtilityClasses } from './sankeyClasses';

export interface SankeyLinkElementProps {
  /**
   * The series ID to which the link belongs
   */
  seriesId: SeriesId;
  /**
   * The link data
   */
  link: SankeyLayoutLink;
  /**
   * Opacity to apply to the link
   */
  opacity?: number;
  /**
   * Callback fired when a sankey item is clicked.
   * @param {React.MouseEvent<SVGElement, MouseEvent>} event The event source of the callback.
   * @param {SankeyLinkIdentifierWithData} link The sankey link identifier.
   */
  onClick?: (
    event: React.MouseEvent<SVGElement, MouseEvent>,
    link: SankeyLinkIdentifierWithData,
  ) => void;
}

/**
 * @ignore - internal component.
 */
export const SankeyLinkElement = React.forwardRef<SVGPathElement, SankeyLinkElementProps>(
  function SankeyLinkElement(props, ref) {
        throw new Error("STUB");
    },
);
