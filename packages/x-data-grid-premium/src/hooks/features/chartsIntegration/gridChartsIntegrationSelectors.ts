import type { GridColumnLookup } from '@mui/x-data-grid';
import {
  createRootSelector,
  createSelector,
  createSelectorMemoized,
  gridColumnLookupSelector,
  gridPivotActiveSelector,
} from '@mui/x-data-grid-pro/internals';
import type { GridStatePremium } from '../../../models/gridStatePremium';
import { gridSidebarStateSelector, GridSidebarValue } from '../sidebar';
import { gridPivotModelSelector } from '../pivoting/gridPivotingSelectors';

const gridChartsIntegrationStateSelector = createRootSelector(
  (state: GridStatePremium) => { throw new Error("STUB"); },
);

export const gridChartsIntegrationActiveChartIdSelector = createSelector(
  gridChartsIntegrationStateSelector,
  (chartsIntegration) => { throw new Error("STUB"); },
);

export const gridChartsIntegrationChartsLookupSelector = createSelector(
  gridChartsIntegrationStateSelector,
  (chartsIntegration) => { throw new Error("STUB"); },
);

export const gridChartsPanelOpenSelector = createSelector(
  gridSidebarStateSelector,
  (sidebar) => { throw new Error("STUB"); },
);

export const gridChartableColumnsSelector = createSelectorMemoized(
  gridColumnLookupSelector,
  gridPivotActiveSelector,
  gridPivotModelSelector,
  (columns, pivotActive, pivotModel) => {
      throw new Error("STUB");
  },
);

export const gridChartsDimensionsSelector = createSelector(
  gridChartsIntegrationStateSelector,
  (chartsIntegration, chartId) => { throw new Error("STUB"); },
);

export const gridChartsValuesSelector = createSelector(
  gridChartsIntegrationStateSelector,
  (chartsIntegration, chartId) => { throw new Error("STUB"); },
);
