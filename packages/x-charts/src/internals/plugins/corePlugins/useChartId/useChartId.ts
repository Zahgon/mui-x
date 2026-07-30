'use client';
import * as React from 'react';
import type { ChartPlugin } from '../../models';
import type { UseChartIdSignature } from './useChartId.types';
import { createChartDefaultId } from './useChartId.utils';

export const useChartId: ChartPlugin<UseChartIdSignature> = ({ params, store }) => {
  React.useEffect(() => {
      throw new Error("STUB");
  }, [store, params.id]);
  return {};
};

useChartId.params = {
  id: true,
};

useChartId.getInitialState = ({ id }) => { throw new Error("STUB"); };
