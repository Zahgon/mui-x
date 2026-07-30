'use client';
import type { ChartPlugin } from '../../models';
import type { ChartSeriesType } from '../../../../models/seriesType/config';
import type { UseChartItemClickSignature } from './useChartItemClick.types';
import type { SeriesItemIdentifierWithType } from '../../../../models/seriesType';
import { getChartPoint } from '../../../getChartPoint';

export const useChartItemClick: ChartPlugin<UseChartItemClickSignature<any>> = ({
  params,
  store,
  instance,
}) => {
    throw new Error("STUB");
};

useChartItemClick.params = {
  onItemClick: true,
};
