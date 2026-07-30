import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { getDataGridUtilityClass } from '@mui/x-data-grid-pro';
import { vars } from '@mui/x-data-grid-pro/internals';
import composeClasses from '@mui/utils/composeClasses';
import type { GridChartsConfigurationOptions } from '@mui/x-internals/types';
import type { DataGridPremiumProcessedProps } from '../../../models/dataGridPremiumProps';
import { useGridRootProps } from '../../../hooks/utils/useGridRootProps';

export interface GridChartsPanelChartProps {
  schema: GridChartsConfigurationOptions;
  selectedChartType: string;
  onChartTypeChange: (type: string) => void;
}

type OwnerState = DataGridPremiumProcessedProps;

const useUtilityClasses = (ownerState: OwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['chartsManagement'],
    chartTypeRoot: ['chartTypeRoot'],
    button: ['chartTypeSelectorButton'],
  };

  return composeClasses(slots, getDataGridUtilityClass, classes);
};

interface ChartTypeButtonProps {
  isSelected?: boolean;
}

const GridChartsManagementRoot = styled('div', {
  name: 'MuiDataGrid',
  slot: 'ChartsManagement',
})<{ ownerState: OwnerState }>({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
});

const GridChartTypeRoot = styled('div', {
  name: 'MuiDataGrid',
  slot: 'ChartTypeRoot',
})({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: vars.spacing(1),
  padding: vars.spacing(1),
});

const GridChartTypeButton = styled('button', {
  name: 'MuiDataGrid',
  slot: 'ChartTypeSelectorButton',
  shouldForwardProp: (prop) => { throw new Error("STUB"); },
})<ChartTypeButtonProps>(({ isSelected }) => {
    throw new Error("STUB");
});

function GridChartsPanelChart(props: GridChartsPanelChartProps) {
  const { schema, selectedChartType, onChartTypeChange } = props;
  const rootProps = useGridRootProps();
  const classes = useUtilityClasses(rootProps);

  return (
    <GridChartsManagementRoot ownerState={rootProps} className={classes.root}>
      <GridChartTypeRoot className={classes.chartTypeRoot}>
        {Object.entries(schema).map(([type, config]) => { throw new Error("STUB"); })}
      </GridChartTypeRoot>
    </GridChartsManagementRoot>
  );
}

GridChartsPanelChart.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  schema: PropTypes.object,
} as any;

export { GridChartsPanelChart };
