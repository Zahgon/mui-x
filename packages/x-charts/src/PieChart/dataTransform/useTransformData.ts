'use client';
import * as React from 'react';
import type {
  ComputedPieRadius,
  DefaultizedPieSeriesType,
  DefaultizedPieValueType,
} from '../../models/seriesType/pie';
import { useItemHighlightStateGetter } from '../../hooks/useItemHighlightStateGetter';
import { useIsItemFocusedGetter } from '../../hooks/useIsItemFocusedGetter';
import { getModifiedArcProperties } from './getModifiedArcProperties';

export interface AnimatedObject {
  innerRadius: number;
  outerRadius: number;
  arcLabelRadius: number;
  cornerRadius: number;
  startAngle: number;
  endAngle: number;
  paddingAngle: number;
}

export interface ValueWithHighlight extends DefaultizedPieValueType, AnimatedObject {
  dataIndex: number;
  isFaded: boolean;
  isHighlighted: boolean;
  isFocused: boolean;
}

export function useTransformData(
  series: Pick<
    DefaultizedPieSeriesType,
    'cornerRadius' | 'paddingAngle' | 'id' | 'highlighted' | 'faded' | 'data'
  > &
    ComputedPieRadius,
) {
  const { id: seriesId, data, faded, highlighted } = series;

  const getHighlightState = useItemHighlightStateGetter();
  const isItemFocused = useIsItemFocusedGetter();

  const dataWithHighlight: ValueWithHighlight[] = React.useMemo(
    () =>
      { throw new Error("STUB"); },
    [data, seriesId, getHighlightState, isItemFocused, series, faded, highlighted],
  );

  return dataWithHighlight;
}
