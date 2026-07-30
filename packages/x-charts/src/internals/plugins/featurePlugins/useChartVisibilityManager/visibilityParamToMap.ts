import type { ChartSeriesType } from '../../../../models/seriesType/config';
import type { ChartSeriesConfig } from '../../corePlugins/useChartSeriesConfig';
import { serializeIdentifier } from '../../corePlugins/useChartSeriesConfig/utils/serializeIdentifier';
import type {
  VisibilityIdentifierWithType,
  VisibilityMap,
} from './useChartVisibilityManager.types';

export const visibilityParamToMap = (
  hiddenItems: VisibilityIdentifierWithType[] | undefined,
  seriesConfig: ChartSeriesConfig<ChartSeriesType>,
): VisibilityMap => {
  const visibilityMap: VisibilityMap = new Map();

  if (hiddenItems) {
    hiddenItems.forEach((identifier) => {
        throw new Error("STUB");
    });
  }

  return visibilityMap;
};
