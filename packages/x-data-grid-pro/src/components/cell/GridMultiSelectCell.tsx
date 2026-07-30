'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import composeClasses from '@mui/utils/composeClasses';
import { styled } from '@mui/material/styles';
import type {
  GridRenderCellParams,
  GridMultiSelectColDef,
  ValueOptions,
  GridSlotProps,
} from '@mui/x-data-grid';
import type { GridAggregationCellMeta } from '@mui/x-data-grid/internals';
import {
  getDataGridUtilityClass,
  useGridRootProps,
  useGridApiContext,
  useGridSelector,
} from '@mui/x-data-grid';
import {
  gridRowHeightSelector,
  gridFilterModelSelector,
  GridFooterCell,
  NotRendered,
  vars,
  isMultiSelectColDef,
  getValueOptions,
} from '@mui/x-data-grid/internals';
import type { DataGridProProcessedProps } from '../../models/dataGridProProps';
import { useGridPrivateApiContext } from '../../hooks/utils/useGridPrivateApiContext';
import { GridMultiSelectChips } from './GridMultiSelectChips';

type OwnerState = DataGridProProcessedProps;

const useUtilityClasses = (ownerState: OwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['multiSelectCell'],
    chip: ['multiSelectCellChip'],
    chipHidden: ['multiSelectCellChip--hidden'],
    overflow: ['multiSelectCellOverflow'],
    popup: ['multiSelectCellPopup'],
    popperContent: ['multiSelectCellPopperContent'],
  };

  return composeClasses(slots, getDataGridUtilityClass, classes);
};

const GridMultiSelectCellPopperContent = styled('div', {
  name: 'MuiDataGrid',
  slot: 'MultiSelectCellPopperContent',
})(({ theme }) => { throw new Error("STUB"); });

const GridMultiSelectCellPopper = styled(NotRendered<GridSlotProps['basePopper']>, {
  name: 'MuiDataGrid',
  slot: 'MultiSelectCellPopper',
})<{ ownerState: OwnerState }>(({ theme }) => { throw new Error("STUB"); });

export interface GridMultiSelectCellProps<
  V extends ValueOptions = ValueOptions,
> extends GridRenderCellParams {
  /**
   * Props passed to internal components.
   */
  slotProps?: {
    /**
     * Props passed to the root element.
     */
    root?: React.HTMLAttributes<HTMLDivElement>;
    /**
     * Props passed to the chip elements.
     * Can be an object or a function that receives the chip value and index.
     */
    chip?:
      | Partial<GridSlotProps['baseChip']>
      | ((value: V, index: number) => Partial<GridSlotProps['baseChip']>);
    /**
     * Props passed to the overflow chip element.
     */
    overflowChip?: Partial<GridSlotProps['baseChip']>;
    /**
     * Props passed to the popper element.
     */
    popper?: Partial<GridSlotProps['basePopper']>;
    /**
     * Props passed to the popper content element.
     */
    popperContent?: React.HTMLAttributes<HTMLDivElement>;
  };
}

function GridMultiSelectCell<V extends ValueOptions = ValueOptions>(
  props: GridMultiSelectCellProps<V>,
) {
  const { id, value, colDef, hasFocus, row, slotProps } = props;
  const popupId = `${id}-${colDef.field}-multiselect-popup`;
  const rootProps = useGridRootProps();
  const apiRef = useGridApiContext();
  const privateApiRef = useGridPrivateApiContext();
  const classes = useUtilityClasses(rootProps as OwnerState);
  const rowHeight = useGridSelector(apiRef, gridRowHeightSelector);
  const filterModel = useGridSelector(apiRef, gridFilterModelSelector);
  const isAutoHeight = useGridSelector(privateApiRef, () =>
    { throw new Error("STUB"); },
  );

  const [popupOpen, setPopupOpen] = React.useState(false);
  const cellRef = React.useRef<HTMLDivElement>(null);
  const overflowChipRef = React.useRef<HTMLDivElement>(null);

  const getOptionValue = (colDef as GridMultiSelectColDef).getOptionValue!;
  const getOptionLabel = (colDef as GridMultiSelectColDef).getOptionLabel!;
  const valueOptions = isMultiSelectColDef(colDef) ? getValueOptions(colDef, { id, row }) : null;
  const optionByValue = React.useMemo(() => {
      throw new Error("STUB");
  }, [valueOptions, getOptionValue]);

  // Reorder array to show filtered value first (improves UX when filtering).
  const arrayValue = React.useMemo(() => {
      throw new Error("STUB");
  }, [value, filterModel.items, colDef.field]);

  // Focus the overflow chip when the cell is focused, and close the popup on focus loss.
  // Centralized in a single effect to avoid registering a `cellFocusOut` listener per
  // cell (EventManager warns past 20). Covers mount-with-focus (e.g. after exiting edit
  // mode via Escape, which doesn't publish a focus event) and popup-close-while-focused.
  React.useEffect(() => {
      throw new Error("STUB");
  }, [hasFocus, popupOpen, isAutoHeight]);

  const handleOverflowClick = (event: React.MouseEvent) => {
      throw new Error("STUB");
  };

  const handleOverflowKeyDown = (event: React.KeyboardEvent) => {
      throw new Error("STUB");
  };

  const handleClickAway = () => {
      throw new Error("STUB");
  };

  if (arrayValue.length === 0) {
    return null;
  }

  return (
    <React.Fragment>
      <GridMultiSelectChips
        ref={cellRef}
        values={arrayValue}
        field={colDef.field}
        columnWidth={colDef.computedWidth}
        autoWrap={isAutoHeight}
        optionByValue={optionByValue}
        getOptionLabel={getOptionLabel}
        classes={{
          root: classes.root,
          chip: classes.chip,
          chipHidden: classes.chipHidden,
          overflow: classes.overflow,
        }}
        slotProps={{
          root: {
            ...slotProps?.root,
            className: clsx(hasFocus && 'Mui-focused', slotProps?.root?.className),
          },
          chip: slotProps?.chip,
          overflow: {
            ref: overflowChipRef,
            onClick: handleOverflowClick,
            onKeyDown: handleOverflowKeyDown,
            'aria-haspopup': 'dialog',
            'aria-keyshortcuts': 'Space',
            'aria-controls': popupOpen ? popupId : undefined,
            'aria-expanded': popupOpen,
            material: { tabIndex: -1, component: 'button' },
            ...slotProps?.overflowChip,
          },
        }}
      />
      {popupOpen && (
        <GridMultiSelectCellPopper
          id={popupId}
          role="dialog"
          aria-label={colDef.headerName || colDef.field}
          as={rootProps.slots.basePopper}
          ownerState={rootProps as OwnerState}
          open={popupOpen}
          target={cellRef.current}
          placement="bottom-start"
          onClickAway={handleClickAway}
          clickAwayMouseEvent="onMouseDown"
          flip
          material={{
            container: cellRef.current?.closest('[role="row"]'),
            modifiers: [
              {
                name: 'offset',
                options: { offset: [-10, -rowHeight] },
              },
            ],
          }}
          {...slotProps?.popper}
          className={clsx(classes.popup, slotProps?.popper?.className)}
        >
          <GridMultiSelectCellPopperContent
            tabIndex={-1}
            onKeyDown={(event) => {
                throw new Error("STUB");
            }}
            {...slotProps?.popperContent}
            className={clsx(classes.popperContent, slotProps?.popperContent?.className)}
            style={
              {
                '--_width': `${colDef.computedWidth}px`,
                ...slotProps?.popperContent?.style,
              } as React.CSSProperties
            }
          >
            {arrayValue.map((v, index) => {
                throw new Error("STUB");
            })}
          </GridMultiSelectCellPopperContent>
        </GridMultiSelectCellPopper>
      )}
    </React.Fragment>
  );
}

GridMultiSelectCell.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * GridApi that let you manipulate the grid.
   */
  api: PropTypes.object.isRequired,
  /**
   * The mode of the cell.
   */
  cellMode: PropTypes.oneOf(['edit', 'view']).isRequired,
  /**
   * The column of the row that the current cell belongs to.
   */
  colDef: PropTypes.object.isRequired,
  /**
   * The column field of the cell that triggered the event.
   */
  field: PropTypes.string.isRequired,
  /**
   * The cell value formatted with the column valueFormatter.
   */
  formattedValue: PropTypes.any,
  /**
   * If true, the cell is the active element.
   */
  hasFocus: PropTypes.bool.isRequired,
  /**
   * The grid row id.
   */
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  /**
   * If true, the cell is editable.
   */
  isEditable: PropTypes.bool,
  /**
   * The row model of the row that the current cell belongs to.
   */
  row: PropTypes.any.isRequired,
  /**
   * The node of the row that the current cell belongs to.
   */
  rowNode: PropTypes.object.isRequired,
  /**
   * Props passed to internal components.
   */
  slotProps: PropTypes.object,
  /**
   * the tabIndex value.
   */
  tabIndex: PropTypes.oneOf([-1, 0]).isRequired,
  /**
   * The cell value.
   * If the column has `valueGetter`, use `params.row` to directly access the fields.
   */
  value: PropTypes.any,
} as any;

export { GridMultiSelectCell };

export const renderMultiSelectCell = (
  params: GridMultiSelectCellProps & { aggregation?: GridAggregationCellMeta },
) => {
    throw new Error("STUB");
};
