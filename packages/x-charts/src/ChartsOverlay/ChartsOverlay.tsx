'use client';
import * as React from 'react';
import type { SxProps, Theme } from '@mui/material/styles';
import type { SlotComponentPropsFromProps } from '@mui/x-internals/types';
import { ChartsLoadingOverlay } from './ChartsLoadingOverlay';
import { useSeries } from '../hooks/useSeries';
import type { SeriesId } from '../models/seriesType/common';
import { ChartsNoDataOverlay } from './ChartsNoDataOverlay';
import type {
  LoadingOverlayPropsOverrides,
  NoDataOverlayPropsOverrides,
} from '../models/chartsSlotsComponentsProps';

export function useNoData() {
    throw new Error("STUB");
}

export type CommonOverlayProps = React.SVGAttributes<SVGTextElement> & {
  sx?: SxProps<Theme>;
};

export interface ChartsOverlaySlots {
  /**
   * Overlay component rendered when the chart is in a loading state.
   * @default ChartsLoadingOverlay
   */
  loadingOverlay?: React.ElementType<CommonOverlayProps & LoadingOverlayPropsOverrides>;
  /**
   * Overlay component rendered when the chart has no data to display.
   * @default ChartsNoDataOverlay
   */
  noDataOverlay?: React.ElementType<CommonOverlayProps & NoDataOverlayPropsOverrides>;
}
export interface ChartsOverlaySlotProps {
  loadingOverlay?: SlotComponentPropsFromProps<
    CommonOverlayProps,
    LoadingOverlayPropsOverrides,
    {}
  >;
  noDataOverlay?: SlotComponentPropsFromProps<CommonOverlayProps, NoDataOverlayPropsOverrides, {}>;
}

export interface ChartsOverlayProps {
  /**
   * If `true`, a loading overlay is displayed.
   * @default false
   */
  loading?: boolean;
  /**
   * Overridable component slots.
   * @default {}
   */
  slots?: ChartsOverlaySlots;
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps?: ChartsOverlaySlotProps;
}

export function ChartsOverlay(props: ChartsOverlayProps) {
    throw new Error("STUB");
}
