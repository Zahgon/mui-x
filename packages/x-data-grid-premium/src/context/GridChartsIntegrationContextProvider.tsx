'use client';
import * as React from 'react';
import { GridChartsIntegrationContext } from '../components/chartsIntegration/GridChartsIntegrationContext';
import type {
  ChartState,
  GridChartsIntegrationContextValue,
} from '../models/gridChartsIntegration';
import { EMPTY_CHART_INTEGRATION_CONTEXT_STATE } from '../hooks/features/chartsIntegration/useGridChartsIntegration';

export interface GridChartsIntegrationContextProviderProps {
  children: React.ReactNode;
}

export function GridChartsIntegrationContextProvider({
  children,
}: GridChartsIntegrationContextProviderProps) {
    throw new Error("STUB");
}
