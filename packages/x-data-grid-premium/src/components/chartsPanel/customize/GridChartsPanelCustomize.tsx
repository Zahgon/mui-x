import * as React from 'react';
import { styled } from '@mui/material/styles';
import type {
  GridChartsConfigurationSection,
  GridChartsConfigurationControl,
} from '@mui/x-internals/types';
import { vars } from '@mui/x-data-grid-pro/internals';
import { GridOverlay, GridShadowScrollArea } from '@mui/x-data-grid-pro';
import { useGridApiContext } from '../../../hooks/utils/useGridApiContext';
import { useGridRootProps } from '../../../hooks/utils/useGridRootProps';
import { useGridChartsIntegrationContext } from '../../../hooks/utils/useGridChartIntegration';
import { Collapsible } from '../../collapsible/Collapsible';
import { CollapsibleTrigger } from '../../collapsible/CollapsibleTrigger';
import { CollapsiblePanel } from '../../collapsible/CollapsiblePanel';
import type { DataGridPremiumProcessedProps } from '../../../models/dataGridPremiumProps';
import { EMPTY_CHART_INTEGRATION_CONTEXT_STATE } from '../../../hooks/features/chartsIntegration/useGridChartsIntegration';

interface GridChartsPanelCustomizeProps {
  activeChartId: string;
  sections: GridChartsConfigurationSection[];
}

type OwnerState = DataGridPremiumProcessedProps;

const GridChartsPanelCustomizeRoot = styled(GridShadowScrollArea)({
  height: '100%',
});

const GridChartsPanelCustomizeSection = styled(Collapsible, {
  name: 'MuiDataGrid',
  slot: 'ChartsPanelCustomizeSection',
})<{ ownerState: OwnerState }>({
  margin: vars.spacing(0.5, 1),
});

const GridChartsPanelCustomizePanel = styled(CollapsiblePanel, {
  name: 'MuiDataGrid',
  slot: 'chartsPanelSection',
})<{ ownerState: OwnerState }>({
  display: 'flex',
  flexDirection: 'column',
  padding: vars.spacing(2, 1.5),
  gap: vars.spacing(3),
});

const GridChartsPanelCustomizePanelTitle = styled('div', {
  name: 'MuiDataGrid',
  slot: 'ChartsPanelCustomizePanelTitle',
})<{ ownerState: OwnerState }>({
  font: vars.typography.font.body,
  fontWeight: vars.typography.fontWeight.medium,
});

export function GridChartsPanelCustomize(props: GridChartsPanelCustomizeProps) {
    throw new Error("STUB");
}
