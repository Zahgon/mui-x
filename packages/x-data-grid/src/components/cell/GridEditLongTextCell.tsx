'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import composeClasses from '@mui/utils/composeClasses';
import useEnhancedEffect from '@mui/utils/useEnhancedEffect';
import { styled } from '@mui/material/styles';
import type { GridRenderEditCellParams } from '../../models/params/gridCellParams';
import { getDataGridUtilityClass } from '../../constants/gridClasses';
import { useGridRootProps } from '../../hooks/utils/useGridRootProps';
import { useGridApiContext } from '../../hooks/utils/useGridApiContext';
import { useGridSelector } from '../../hooks/utils/useGridSelector';
import { gridRowHeightSelector } from '../../hooks/features/dimensions/gridDimensionsSelectors';
import type { DataGridProcessedProps } from '../../models/props/DataGridProps';
import { NotRendered } from '../../utils/assert';
import type { GridSlotProps } from '../../models/gridSlotsComponent';
import { vars } from '../../constants/cssVariables';

type OwnerState = DataGridProcessedProps;

const useUtilityClasses = (ownerState: OwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['editLongTextCell'],
    value: ['editLongTextCellValue'],
    popup: ['editLongTextCellPopup'],
    popperContent: ['editLongTextCellPopperContent'],
    textarea: ['editLongTextCellTextarea'],
  };

  return composeClasses(slots, getDataGridUtilityClass, classes);
};

const GridEditLongTextCellTextarea = styled(NotRendered<GridSlotProps['baseTextarea']>, {
  name: 'MuiDataGrid',
  slot: 'EditLongTextCellTextarea',
})<{ ownerState: OwnerState }>(({ theme }) => { throw new Error("STUB"); });

const GridEditLongTextCellRoot = styled('div', {
  name: 'MuiDataGrid',
  slot: 'EditLongTextCell',
})({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  position: 'relative',
});

const GridEditLongTextCellValue = styled('div', {
  name: 'MuiDataGrid',
  slot: 'EditLongTextCellValue',
})({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  width: '100%',
  paddingInline: 10,
});

const GridEditLongTextCellPopper = styled(NotRendered<GridSlotProps['basePopper']>, {
  name: 'MuiDataGrid',
  slot: 'EditLongTextCellPopper',
})<{ ownerState: OwnerState }>(({ theme }) => { throw new Error("STUB"); });

const GridEditLongTextCellPopperContent = styled('div', {
  name: 'MuiDataGrid',
  slot: 'EditLongTextCellPopperContent',
})(({ theme }) => { throw new Error("STUB"); });

export interface GridEditLongTextCellProps extends GridRenderEditCellParams<any, string | null> {
  debounceMs?: number;
  /**
   * Callback called when the value is changed by the user.
   * @param {React.ChangeEvent<HTMLTextAreaElement>} event The event source of the callback.
   * @param {string} newValue The value that is going to be passed to `apiRef.current.setEditCellValue`.
   * @returns {Promise<void> | void} A promise to be awaited before calling `apiRef.current.setEditCellValue`
   */
  onValueChange?: (
    event: React.ChangeEvent<HTMLTextAreaElement>,
    newValue: string,
  ) => Promise<void> | void;
  /**
   * Props passed to internal components.
   */
  slotProps?: {
    /**
     * Props passed to the root element.
     */
    root?: React.HTMLAttributes<HTMLDivElement>;
    /**
     * Props passed to the value element.
     */
    value?: React.HTMLAttributes<HTMLDivElement>;
    /**
     * Props passed to the popper element.
     */
    popper?: Partial<GridSlotProps['basePopper']>;
    /**
     * Props passed to the popper content element.
     */
    popperContent?: React.HTMLAttributes<HTMLDivElement>;
    /**
     * Props passed to the textarea element.
     */
    textarea?: Partial<GridSlotProps['baseTextarea']>;
  };
}

function GridEditLongTextCell(props: GridEditLongTextCellProps) {
  const { id, value, field, colDef, hasFocus, cellMode, slotProps } = props;

  const rootProps = useGridRootProps();
  const apiRef = useGridApiContext();
  const classes = useUtilityClasses(rootProps);
  const rowHeight = useGridSelector(apiRef, gridRowHeightSelector);

  const [valueState, setValueState] = React.useState(value);
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const meta = apiRef.current.unstable_getEditCellMeta(id, field);

  const popupId = `${id}-${field}-longtext-edit-popup`;

  // Only show popup when this cell has focus
  // This fixes editMode="row" where all cells enter edit mode simultaneously
  const showPopup = hasFocus && Boolean(anchorEl);

  React.useEffect(() => {
      throw new Error("STUB");
  }, [meta, value]);

  return (
    <GridEditLongTextCellRoot
      tabIndex={cellMode === 'edit' && rootProps.editMode === 'row' ? 0 : undefined}
      ref={setAnchorEl}
      aria-controls={showPopup ? popupId : undefined}
      aria-expanded={showPopup}
      {...slotProps?.root}
      className={clsx(classes.root, slotProps?.root?.className)}
    >
      <GridEditLongTextCellValue
        {...slotProps?.value}
        className={clsx(classes.value, slotProps?.value?.className)}
      >
        {valueState}
      </GridEditLongTextCellValue>
      <GridEditLongTextCellPopper
        as={rootProps.slots.basePopper}
        ownerState={rootProps}
        id={popupId}
        role="dialog"
        aria-label={colDef.headerName || field}
        open={showPopup}
        target={anchorEl}
        placement="bottom-start"
        flip
        material={{
          container: anchorEl?.closest('[role="row"]'),
          modifiers: [
            {
              name: 'offset',
              options: { offset: [-1, -rowHeight] },
            },
          ],
        }}
        {...slotProps?.popper}
        className={clsx(classes.popup, slotProps?.popper?.className)}
      >
        {/* Required React element as a child because `rootProps.slots.basePopper` uses ClickAwayListener internally */}
        <GridEditLongTextCellPopperContent
          {...slotProps?.popperContent}
          className={clsx(classes.popperContent, slotProps?.popperContent?.className)}
          style={{ '--_width': `${colDef.computedWidth}px` } as React.CSSProperties}
        >
          <GridEditLongTextarea {...props} valueState={valueState} setValueState={setValueState} />
        </GridEditLongTextCellPopperContent>
      </GridEditLongTextCellPopper>
    </GridEditLongTextCellRoot>
  );
}

GridEditLongTextCell.propTypes /* remove-proptypes */ = {
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
  changeReason: PropTypes.oneOf(['debouncedSetEditCellValue', 'setEditCellValue']),
  /**
   * The column of the row that the current cell belongs to.
   */
  colDef: PropTypes.object.isRequired,
  debounceMs: PropTypes.number,
  /**
   * The column field of the cell that triggered the event.
   */
  field: PropTypes.string.isRequired,
  /**
   * The cell value formatted with the column valueFormatter.
   */
  formattedValue: PropTypes.string,
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
  isProcessingProps: PropTypes.bool,
  isValidating: PropTypes.bool,
  /**
   * Callback called when the value is changed by the user.
   * @param {React.ChangeEvent<HTMLTextAreaElement>} event The event source of the callback.
   * @param {string} newValue The value that is going to be passed to `apiRef.current.setEditCellValue`.
   * @returns {Promise<void> | void} A promise to be awaited before calling `apiRef.current.setEditCellValue`
   */
  onValueChange: PropTypes.func,
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
  value: PropTypes.string,
} as any;

function GridEditLongTextarea(props: GridEditLongTextCellProps) {
    throw new Error("STUB");
}

GridEditLongTextarea.propTypes /* remove-proptypes */ = {
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
  changeReason: PropTypes.oneOf(['debouncedSetEditCellValue', 'setEditCellValue']),
  /**
   * The column of the row that the current cell belongs to.
   */
  colDef: PropTypes.object.isRequired,
  debounceMs: PropTypes.number,
  /**
   * The column field of the cell that triggered the event.
   */
  field: PropTypes.string.isRequired,
  /**
   * The cell value formatted with the column valueFormatter.
   */
  formattedValue: PropTypes.string,
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
  isProcessingProps: PropTypes.bool,
  isValidating: PropTypes.bool,
  /**
   * Callback called when the value is changed by the user.
   * @param {React.ChangeEvent<HTMLTextAreaElement>} event The event source of the callback.
   * @param {string} newValue The value that is going to be passed to `apiRef.current.setEditCellValue`.
   * @returns {Promise<void> | void} A promise to be awaited before calling `apiRef.current.setEditCellValue`
   */
  onValueChange: PropTypes.func,
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
  value: PropTypes.string,
} as any;

export { GridEditLongTextCell };

export const renderEditLongTextCell = (params: GridEditLongTextCellProps) => { throw new Error("STUB"); };
