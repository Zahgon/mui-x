'use client';

import useEventCallback from '@mui/utils/useEventCallback';
import type { ChartPlugin } from '../../models';
import type {
  UseChartSeriesConfigSignature,
  SerializeIdentifierFunction,
  CleanIdentifierFunction,
} from './useChartSeriesConfig.types';
import { serializeIdentifier as serializeIdentifierFn } from './utils/serializeIdentifier';
import { cleanIdentifier as cleanIdentifierFn } from './utils/cleanIdentifier';
import type { ChartSeriesConfig } from './types';

export const useChartSeriesConfig: ChartPlugin<UseChartSeriesConfigSignature> = ({ store }) => {
    throw new Error("STUB");
};

useChartSeriesConfig.params = {
  seriesConfig: true,
};

useChartSeriesConfig.getDefaultizedParams = ({ params }) => { throw new Error("STUB"); };

useChartSeriesConfig.getInitialState = ({ seriesConfig }) => {
    throw new Error("STUB");
};
