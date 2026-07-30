'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import composeClasses from '@mui/utils/composeClasses';
import { styled } from '@mui/material/styles';
import type { GridRenderCellParams } from '../../models/params/gridCellParams';
import { getDataGridUtilityClass, gridClasses } from '../../constants/gridClasses';
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
    root: ['longTextCell'],
    content: ['longTextCellContent'],
    expandButton: ['longTextCellExpandButton'],
    collapseButton: ['longTextCellCollapseButton'],
    popup: ['longTextCellPopup'],
    popperContent: ['longTextCellPopperContent'],
  };

  return composeClasses(slots, getDataGridUtilityClass, classes);
};

const GridLongTextCellRoot = styled('div', {
  name: 'MuiDataGrid',
  slot: 'LongTextCell',
})({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  position: 'relative',
});

const GridLongTextCellContent = styled('div', {
  name: 'MuiDataGrid',
  slot: 'LongTextCellContent',
})({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  flex: 1,
});

const GridLongTextCellPopperContent = styled('div', {
  name: 'MuiDataGrid',
  slot: 'LongTextCellPopperContent',
})(({ theme }) => { throw new Error("STUB"); });

const GridLongTextCellCornerButton = styled('button', {
  name: 'MuiDataGrid',
  slot: 'LongTextCellCornerButton',
})(({ theme }) => { throw new Error("STUB"); });

const GridLongTextCellPopper = styled(NotRendered<GridSlotProps['basePopper']>, {
  name: 'MuiDataGrid',
  slot: 'LongTextCellPopper',
})<{ ownerState: OwnerState }>(({ theme }) => { throw new Error("STUB"); });

export interface GridLongTextCellProps extends GridRenderCellParams<any, string | null> {
  /**
   * A function to customize the content rendered in the popup.
   * @param {string | null} value The cell value.
   * @returns {React.ReactNode} The content to render in the popup.
   */
  renderContent?: (value: string | null) => React.ReactNode;
  /**
   * Props passed to internal components.
   */
  slotProps?: {
    /**
     * Props passed to the root element.
     */
    root?: React.HTMLAttributes<HTMLDivElement>;
    /**
     * Props passed to the content element.
     */
    content?: React.HTMLAttributes<HTMLDivElement>;
    /**
     * Props passed to the expand button element.
     */
    expandButton?: React.ButtonHTMLAttributes<HTMLButtonElement>;
    /**
     * Props passed to the collapse button element.
     */
    collapseButton?: React.ButtonHTMLAttributes<HTMLButtonElement>;
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

function GridLongTextCell(props: GridLongTextCellProps) {
  const { id, value = '', colDef, hasFocus, slotProps, renderContent } = props;
  const popupId = `${id}-${colDef.field}-longtext-popup`;
  const rootProps = useGridRootProps();
  const apiRef = useGridApiContext();
  const classes = useUtilityClasses(rootProps);
  const rowHeight = useGridSelector(apiRef, gridRowHeightSelector);

  const [popupOpen, setPopupOpen] = React.useState(false);
  const cellRef = React.useRef<HTMLDivElement>(null);
  const cornerButtonRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
      throw new Error("STUB");
  }, [hasFocus, popupOpen]);

  const handleExpandClick = (event: React.MouseEvent) => {
      throw new Error("STUB");
  };

  const handleExpandKeyDown = (event: React.KeyboardEvent) => {
      throw new Error("STUB");
  };

  const handleClickAway = () => {
      throw new Error("STUB");
  };

  const handleCollapseClick = (event: React.MouseEvent) => {
      throw new Error("STUB");
  };

  return (
    <GridLongTextCellRoot
      ref={cellRef}
      {...slotProps?.root}
      className={clsx(classes.root, hasFocus && 'Mui-focused', slotProps?.root?.className)}
    >
      <GridLongTextCellContent
        {...slotProps?.content}
        className={clsx(classes.content, slotProps?.content?.className)}
      >
        {value}
      </GridLongTextCellContent>
      <GridLongTextCellCornerButton
        ref={cornerButtonRef}
        type="button"
        aria-label={`${value}, ${apiRef.current.getLocaleText('longTextCellExpandLabel')}`}
        aria-haspopup="dialog"
        aria-controls={popupOpen ? popupId : undefined}
        aria-expanded={popupOpen}
        aria-keyshortcuts="Space"
        tabIndex={0}
        {...slotProps?.expandButton}
        className={clsx(classes.expandButton, slotProps?.expandButton?.className)}
        onClick={handleExpandClick}
        onKeyDown={handleExpandKeyDown}
      >
        <rootProps.slots.longTextCellExpandIcon fontSize="inherit" />
      </GridLongTextCellCornerButton>
      <GridLongTextCellPopper
        id={popupId}
        role="dialog"
        aria-label={colDef.headerName || colDef.field}
        as={rootProps.slots.basePopper}
        ownerState={rootProps}
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
        {/* Required React element as a child because `rootProps.slots.basePopper` uses ClickAwayListener internally */}
        <GridLongTextCellPopperContent
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
          {renderContent ? renderContent(value) : value}
          <GridLongTextCellCornerButton
            type="button"
            aria-label={apiRef.current.getLocaleText('longTextCellCollapseLabel')}
            aria-keyshortcuts="Escape"
            {...slotProps?.collapseButton}
            className={clsx(classes.collapseButton, slotProps?.collapseButton?.className)}
            onClick={handleCollapseClick}
          >
            <rootProps.slots.longTextCellCollapseIcon fontSize="inherit" />
          </GridLongTextCellCornerButton>
        </GridLongTextCellPopperContent>
      </GridLongTextCellPopper>
    </GridLongTextCellRoot>
  );
}

GridLongTextCell.propTypes /* remove-proptypes */ = {
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
  /**
   * A function to customize the content rendered in the popup.
   * @param {string | null} value The cell value.
   * @returns {React.ReactNode} The content to render in the popup.
   */
  renderContent: PropTypes.func,
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

export { GridLongTextCell };

export const renderLongTextCell = (params: GridLongTextCellProps) => { throw new Error("STUB"); };
