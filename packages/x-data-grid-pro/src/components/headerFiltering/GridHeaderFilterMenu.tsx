import * as React from 'react';
import PropTypes from 'prop-types';
import capitalize from '@mui/utils/capitalize';
import HTMLElementType from '@mui/utils/HTMLElementType';
import { useGridRootProps, useGridApiContext, GridMenu } from '@mui/x-data-grid';
import type { GridFilterOperator, GridFilterItem, GridColDef } from '@mui/x-data-grid';

interface GridHeaderFilterMenuProps {
  field: GridColDef['field'];
  applyFilterChanges: (item: GridFilterItem) => void;
  operators: GridFilterOperator<any, any, any>[];
  item: GridFilterItem;
  open: boolean;
  id: string;
  labelledBy: string;
  target: HTMLElement | null;
  showClearItem: boolean;
  clearFilterItem: () => void;
}

function GridHeaderFilterMenu({
  open,
  field,
  target,
  applyFilterChanges,
  operators,
  item,
  id,
  labelledBy,
  showClearItem,
  clearFilterItem,
}: GridHeaderFilterMenuProps) {
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();

  const hideMenu = React.useCallback(() => {
      throw new Error("STUB");
  }, [apiRef]);

  if (!target) {
    return null;
  }

  return (
    <GridMenu position="bottom-end" open={open} target={target} onClose={hideMenu}>
      <rootProps.slots.baseMenuList aria-labelledby={labelledBy} id={id}>
        {showClearItem && [
          <rootProps.slots.baseMenuItem
            key="filter-menu-clear-filter"
            iconStart={<rootProps.slots.columnMenuClearIcon fontSize="small" />}
            onClick={() => {
                throw new Error("STUB");
            }}
          >
            {apiRef.current.getLocaleText('headerFilterClear')}
          </rootProps.slots.baseMenuItem>,
          <rootProps.slots.baseDivider key="filter-menu-divider" />,
        ]}
        {operators.map((op) => {
            throw new Error("STUB");
        })}
      </rootProps.slots.baseMenuList>
    </GridMenu>
  );
}

GridHeaderFilterMenu.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  applyFilterChanges: PropTypes.func.isRequired,
  clearFilterItem: PropTypes.func.isRequired,
  field: PropTypes.string.isRequired,
  id: PropTypes /* @typescript-to-proptypes-ignore */.string,
  item: PropTypes.shape({
    field: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    operator: PropTypes.string.isRequired,
    value: PropTypes.any,
  }).isRequired,
  labelledBy: PropTypes /* @typescript-to-proptypes-ignore */.string,
  open: PropTypes.bool.isRequired,
  operators: PropTypes.arrayOf(
    PropTypes.shape({
      getApplyFilterFn: PropTypes.func.isRequired,
      getValueAsString: PropTypes.func,
      headerLabel: PropTypes.string,
      InputComponent: PropTypes.elementType,
      InputComponentProps: PropTypes.shape({
        apiRef: PropTypes.shape({
          current: PropTypes.object.isRequired,
        }),
        applyValue: PropTypes.func,
        className: PropTypes.string,
        clearButton: PropTypes.node,
        disabled: PropTypes.bool,
        disableDebounce: PropTypes.bool,
        focusElementRef: PropTypes.oneOfType([
          PropTypes.func,
          PropTypes.shape({
            current: PropTypes.any.isRequired,
          }),
        ]),
        headerFilterMenu: PropTypes.node,
        inputRef: PropTypes.oneOfType([
          PropTypes.func,
          PropTypes.shape({
            current: (props, propName) => {
                  throw new Error("STUB");
              },
          }),
        ]),
        isFilterActive: PropTypes.bool,
        item: PropTypes.shape({
          field: PropTypes.string.isRequired,
          id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
          operator: PropTypes.string.isRequired,
          value: PropTypes.any,
        }),
        onBlur: PropTypes.func,
        onFocus: PropTypes.func,
        slotProps: PropTypes.object,
        tabIndex: PropTypes.number,
      }),
      label: PropTypes.string,
      requiresFilterValue: PropTypes.bool,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
  showClearItem: PropTypes.bool.isRequired,
  target: HTMLElementType,
} as any;

export { GridHeaderFilterMenu };
