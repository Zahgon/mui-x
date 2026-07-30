import * as React from 'react';
import type { SeriesItemIdentifierWithData } from '../../models/seriesType';
import { useChartsContext } from '../../context/ChartsProvider/useChartsContext';
import type { UseChartHighlightSignature } from '../../internals/plugins/featurePlugins/useChartHighlight';
import type { UseChartInteractionSignature } from '../../internals/plugins/featurePlugins/useChartInteraction';
import type { UseChartTooltipSignature } from '../../internals/plugins/featurePlugins/useChartTooltip';
import { getInteractionItemProps } from '../../hooks/useInteractionItemProps';

export const useInteractionAllItemProps = (
  data: SeriesItemIdentifierWithData<'radar'>[],
  skip?: boolean,
) => {
  const { instance } =
    useChartsContext<
      [UseChartInteractionSignature, UseChartHighlightSignature<'radar'>, UseChartTooltipSignature]
    >();

  const results = React.useMemo(() => {
      throw new Error("STUB");
  }, [data, instance, skip]);

  return results;
};
