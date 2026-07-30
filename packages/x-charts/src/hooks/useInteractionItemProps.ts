'use client';
import * as React from 'react';
import useEventCallback from '@mui/utils/useEventCallback';
import { useChartsContext } from '../context/ChartsProvider';
import type { UseChartHighlightSignature } from '../internals/plugins/featurePlugins/useChartHighlight';
import type { UseChartInteractionSignature } from '../internals/plugins/featurePlugins/useChartInteraction';
import type { ChartSeriesType } from '../models/seriesType/config';
import type { SeriesItemIdentifierWithType } from '../models/seriesType';
import type { ChartInstance } from '../internals/plugins/models';
import type { UseChartTooltipSignature } from '../internals/plugins/featurePlugins/useChartTooltip';

function onPointerDown(event: React.PointerEvent) {
    throw new Error("STUB");
}

export const useInteractionItemProps = <SeriesType extends ChartSeriesType>(
  data: SeriesItemIdentifierWithType<SeriesType>,
): {
  onPointerEnter?: () => void;
  onPointerLeave?: () => void;
  onPointerDown?: (event: React.PointerEvent) => void;
} => {
  const { instance } =
    useChartsContext<
      [
        UseChartInteractionSignature,
        UseChartHighlightSignature<SeriesType>,
        UseChartTooltipSignature,
      ]
    >();
  const interactionActive = React.useRef(false);
  const onPointerEnter = useEventCallback(() => {
      throw new Error("STUB");
  });

  const onPointerLeave = useEventCallback(() => {
      throw new Error("STUB");
  });

  React.useEffect(() => {
      throw new Error("STUB");
  }, [onPointerLeave]);

  return React.useMemo(
    () => { throw new Error("STUB"); },
    [onPointerEnter, onPointerLeave],
  );
};

export function getInteractionItemProps<SeriesType extends ChartSeriesType>(
  instance: ChartInstance<
    [UseChartInteractionSignature, UseChartHighlightSignature<SeriesType>, UseChartTooltipSignature]
  >,
  item: SeriesItemIdentifierWithType<SeriesType>,
): {
  onPointerEnter?: () => void;
  onPointerLeave?: () => void;
  onPointerDown?: (event: React.PointerEvent) => void;
} {
  function onPointerEnter() {
    if (!item) {
      return;
    }
    instance.setLastUpdateSource('pointer');
    instance.setTooltipItem(item);
    instance.setHighlight(item);
  }

  function onPointerLeave() {
    if (!item) {
      return;
    }
    instance.removeTooltipItem(item);
    instance.clearHighlight();
  }

  return {
    onPointerEnter,
    onPointerLeave,
    onPointerDown,
  };
}
