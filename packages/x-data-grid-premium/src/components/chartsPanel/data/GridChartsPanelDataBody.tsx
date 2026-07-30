'use client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import { gridPivotActiveSelector, vars } from '@mui/x-data-grid-pro/internals';
import {
  getDataGridUtilityClass,
  GridShadowScrollArea,
  useGridSelector,
} from '@mui/x-data-grid-pro';
import composeClasses from '@mui/utils/composeClasses';
import { useGridRootProps } from '../../../hooks/utils/useGridRootProps';
import { Collapsible, CollapsiblePanel, CollapsibleTrigger } from '../../collapsible';
import { ResizablePanel, ResizablePanelHandle } from '../../resizablePanel';
import type { DataGridPremiumProcessedProps } from '../../../models/dataGridPremiumProps';
import { GridChartsPanelDataField } from './GridChartsPanelDataField';
import {
  gridChartableColumnsSelector,
  gridChartsDimensionsSelector,
  gridChartsIntegrationActiveChartIdSelector,
  gridChartsValuesSelector,
} from '../../../hooks/features/chartsIntegration/gridChartsIntegrationSelectors';
import { useGridPrivateApiContext } from '../../../hooks/utils/useGridPrivateApiContext';
import { useGridChartsIntegrationContext } from '../../../hooks/utils/useGridChartIntegration';
import { getBlockedSections } from '../../../hooks/features/chartsIntegration/utils';
import type { GridChartsIntegrationSection } from '../../../hooks/features/chartsIntegration/gridChartsIntegrationInterfaces';
import { gridRowGroupingSanitizedModelSelector } from '../../../hooks/features/rowGrouping/gridRowGroupingSelector';
import { gridPivotModelSelector } from '../../../hooks/features/pivoting/gridPivotingSelectors';

type OwnerState = DataGridPremiumProcessedProps;

const useUtilityClasses = (ownerState: OwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['chartsPanelDataBody'],
    availableFields: ['chartsPanelDataAvailableFields'],
    sections: ['chartsPanelDataSections'],
    scrollArea: ['chartsPanelDataScrollArea'],
    section: ['chartsPanelDataSection'],
    sectionTitle: ['chartsPanelDataSectionTitle'],
    fieldList: ['chartsPanelDataFieldList'],
    placeholder: ['chartsPanelDataPlaceholder'],
  };

  return composeClasses(slots, getDataGridUtilityClass, classes);
};

const GridChartsPanelDataBodyRoot = styled('div', {
  name: 'MuiDataGrid',
  slot: 'ChartsPanelDataBody',
})<{ ownerState: OwnerState }>({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
});

const GridChartsPanelDataAvailableFields = styled(GridShadowScrollArea, {
  name: 'MuiDataGrid',
  slot: 'ChartsPanelDataAvailableFields',
})<{ ownerState: OwnerState }>({
  flex: 1,
  minHeight: 84,
  transition: vars.transition(['background-color'], {
    duration: vars.transitions.duration.short,
    easing: vars.transitions.easing.easeInOut,
  }),
  '&[data-drag-over="true"]': {
    backgroundColor: vars.colors.interactive.hover,
  },
});

const GridChartsPanelDataSections = styled(ResizablePanel, {
  name: 'MuiDataGrid',
  slot: 'ChartsPanelDataSections',
})<{ ownerState: OwnerState }>({
  position: 'relative',
  minHeight: 158,
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
});

const GridChartsPanelDataScrollArea = styled(GridShadowScrollArea, {
  name: 'MuiDataGrid',
  slot: 'ChartsPanelDataScrollArea',
})<{ ownerState: OwnerState }>({
  height: '100%',
});

const GridChartsPanelDataSection = styled(Collapsible, {
  name: 'MuiDataGrid',
  slot: 'ChartsPanelDataSection',
  shouldForwardProp: (prop) => { throw new Error("STUB"); },
})<{ ownerState: OwnerState; disabled: boolean }>(({ disabled }) => { throw new Error("STUB"); });

const GridChartsPanelDataSectionTitle = styled('div', {
  name: 'MuiDataGrid',
  slot: 'ChartsPanelDataSectionTitle',
})<{ ownerState: OwnerState }>({
  flex: 1,
  marginRight: vars.spacing(1.75),
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: vars.spacing(1),
  font: vars.typography.font.body,
  fontWeight: vars.typography.fontWeight.medium,
});

const GridChartsPanelDataFieldList = styled('div', {
  name: 'MuiDataGrid',
  slot: 'ChartsPanelDataFieldList',
})<{ ownerState: OwnerState }>({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  padding: vars.spacing(0.5, 0),
});

const GridChartsPanelDataPlaceholder = styled('div', {
  name: 'MuiDataGrid',
  slot: 'ChartsPanelDataPlaceholder',
})<{ ownerState: OwnerState }>({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textWrap: 'balance',
  textAlign: 'center',
  minHeight: 38,
  height: '100%',
  padding: vars.spacing(0, 1),
  color: vars.colors.foreground.muted,
  font: vars.typography.font.body,
});

const INITIAL_DRAG_STATE = { active: false, field: null, dropSection: null, initialSection: null };

export interface FieldTransferObject {
  field: string;
  section: GridChartsIntegrationSection;
}

export type DropPosition = 'top' | 'bottom' | null;

interface GridChartsPanelDataBodyProps {
  searchValue: string;
}

// dimensions and values
const SECTION_COUNT = 2;

function GridChartsPanelDataBody(props: GridChartsPanelDataBodyProps) {
  const { searchValue } = props;
  const apiRef = useGridPrivateApiContext();
  const rootProps = useGridRootProps();
  const rowGroupingModel = useGridSelector(apiRef, gridRowGroupingSanitizedModelSelector);
  const pivotActive = useGridSelector(apiRef, gridPivotActiveSelector);
  const pivotModel = useGridSelector(apiRef, gridPivotModelSelector);
  const activeChartId = useGridSelector(apiRef, gridChartsIntegrationActiveChartIdSelector);
  const { chartStateLookup } = useGridChartsIntegrationContext();
  const dimensions = useGridSelector(apiRef, gridChartsDimensionsSelector, activeChartId);
  const values = useGridSelector(apiRef, gridChartsValuesSelector, activeChartId);
  const classes = useUtilityClasses(rootProps);
  const chartableColumns = useGridSelector(apiRef, gridChartableColumnsSelector);

  const dimensionsLabel = React.useMemo(
    () =>
      { throw new Error("STUB"); },
    [chartStateLookup, activeChartId, apiRef],
  );
  const valuesLabel = React.useMemo(
    () =>
      { throw new Error("STUB"); },
    [chartStateLookup, activeChartId, apiRef],
  );

  const fullSections = React.useMemo(() => {
      throw new Error("STUB");
  }, [dimensions, values, chartStateLookup, activeChartId]);

  const blockedSectionsLookup = React.useMemo(
    () =>
      { throw new Error("STUB"); },
    [rowGroupingModel, chartableColumns, pivotActive, pivotModel, fullSections],
  );

  const availableFields = React.useMemo(() => {
      throw new Error("STUB");
  }, [apiRef, searchValue, chartableColumns, dimensions, values, blockedSectionsLookup]);

  const [drag, setDrag] = React.useState<{
    active: boolean;
    field: string | null;
    dropSection: FieldTransferObject['section'];
    initialSection: FieldTransferObject['section'];
  }>(INITIAL_DRAG_STATE);

  const disabledSections = React.useMemo(() => {
      throw new Error("STUB");
  }, [blockedSectionsLookup, drag.field]);

  const handleDragStart = (field: string, section: FieldTransferObject['section']) => {
      throw new Error("STUB");
  };

  const handleDragEnd = () => {
      throw new Error("STUB");
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
      throw new Error("STUB");
  };

  const handleDragOver = React.useCallback((event: React.DragEvent) => {
      throw new Error("STUB");
  }, []);

  const handleDragEnter = React.useCallback((event: React.DragEvent<HTMLDivElement>) => {
      throw new Error("STUB");
  }, []);

  const handleDragLeave = React.useCallback((event: React.DragEvent) => {
      throw new Error("STUB");
  }, []);

  const handleChange = React.useCallback(
    (field: string, section: GridChartsIntegrationSection) => {
          throw new Error("STUB");
      },
    [apiRef, activeChartId],
  );

  return (
    <GridChartsPanelDataBodyRoot
      ownerState={rootProps}
      className={classes.root}
      data-dragging={drag.active}
      onDragLeave={handleDragLeave}
    >
      <GridChartsPanelDataAvailableFields
        ownerState={rootProps}
        className={classes.availableFields}
        onDrop={handleDrop}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        data-section={null}
        data-drag-over={drag.active && drag.dropSection === null}
      >
        {availableFields.length === 0 && (
          <GridChartsPanelDataPlaceholder ownerState={rootProps} className={classes.placeholder}>
            {apiRef.current.getLocaleText('chartsNoFields')}
          </GridChartsPanelDataPlaceholder>
        )}
        {availableFields.length > 0 && (
          <GridChartsPanelDataFieldList ownerState={rootProps} className={classes.fieldList}>
            {availableFields.map((field) => { throw new Error("STUB"); })}
          </GridChartsPanelDataFieldList>
        )}
      </GridChartsPanelDataAvailableFields>
      <GridChartsPanelDataSections
        ownerState={rootProps}
        className={classes.sections}
        direction="vertical"
      >
        <ResizablePanelHandle />
        <GridChartsPanelDataScrollArea ownerState={rootProps} className={classes.scrollArea}>
          <GridChartsPanelDataSection
            ownerState={rootProps}
            className={classes.section}
            onDrop={handleDrop}
            onDragEnter={handleDragEnter}
            onDragOver={handleDragOver}
            disabled={disabledSections.has('dimensions')}
            data-section="dimensions"
            data-drag-over={
              !disabledSections.has('dimensions') && drag.dropSection === 'dimensions'
            }
          >
            <CollapsibleTrigger aria-label={dimensionsLabel}>
              <GridChartsPanelDataSectionTitle
                ownerState={rootProps}
                className={classes.sectionTitle}
              >
                {dimensionsLabel}
                {(chartStateLookup[activeChartId]?.maxDimensions || dimensions.length > 0) && (
                  <rootProps.slots.baseBadge
                    badgeContent={
                      chartStateLookup[activeChartId]?.maxDimensions
                        ? `${dimensions.length}/${chartStateLookup[activeChartId]?.maxDimensions}`
                        : dimensions.length
                    }
                  />
                )}
              </GridChartsPanelDataSectionTitle>
            </CollapsibleTrigger>
            <CollapsiblePanel>
              {dimensions.length === 0 && (
                <GridChartsPanelDataPlaceholder
                  ownerState={rootProps}
                  className={classes.placeholder}
                >
                  {apiRef.current.getLocaleText('chartsDragToDimensions')(dimensionsLabel)}
                </GridChartsPanelDataPlaceholder>
              )}
              {dimensions.length > 0 && (
                <GridChartsPanelDataFieldList ownerState={rootProps} className={classes.fieldList}>
                  {dimensions.map((dimension) => { throw new Error("STUB"); })}
                </GridChartsPanelDataFieldList>
              )}
            </CollapsiblePanel>
          </GridChartsPanelDataSection>

          <GridChartsPanelDataSection
            ownerState={rootProps}
            className={classes.section}
            onDrop={handleDrop}
            onDragEnter={handleDragEnter}
            onDragOver={handleDragOver}
            disabled={disabledSections.has('values')}
            data-section="values"
            data-drag-over={!disabledSections.has('values') && drag.dropSection === 'values'}
          >
            <CollapsibleTrigger aria-label={valuesLabel}>
              <GridChartsPanelDataSectionTitle
                ownerState={rootProps}
                className={classes.sectionTitle}
              >
                {valuesLabel}
                {(chartStateLookup[activeChartId]?.maxValues || values.length > 0) && (
                  <rootProps.slots.baseBadge
                    badgeContent={
                      chartStateLookup[activeChartId]?.maxValues
                        ? `${values.length}/${chartStateLookup[activeChartId]?.maxValues}`
                        : values.length
                    }
                  />
                )}
              </GridChartsPanelDataSectionTitle>
            </CollapsibleTrigger>
            <CollapsiblePanel>
              {values.length === 0 && (
                <GridChartsPanelDataPlaceholder
                  ownerState={rootProps}
                  className={classes.placeholder}
                >
                  {apiRef.current.getLocaleText('chartsDragToValues')(valuesLabel)}
                </GridChartsPanelDataPlaceholder>
              )}
              {values.length > 0 && (
                <GridChartsPanelDataFieldList ownerState={rootProps} className={classes.fieldList}>
                  {values.map((value) => { throw new Error("STUB"); })}
                </GridChartsPanelDataFieldList>
              )}
            </CollapsiblePanel>
          </GridChartsPanelDataSection>
        </GridChartsPanelDataScrollArea>
      </GridChartsPanelDataSections>
    </GridChartsPanelDataBodyRoot>
  );
}

export { GridChartsPanelDataBody };
