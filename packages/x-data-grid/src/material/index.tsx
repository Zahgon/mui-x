import * as React from 'react';
import clsx from 'clsx';
import useForkRef from '@mui/utils/useForkRef';
import useEventCallback from '@mui/utils/useEventCallback';
import { styled, useTheme } from '@mui/material/styles';
import MUIAutocomplete from '@mui/material/Autocomplete';
import MUIBadge from '@mui/material/Badge';
import MUICheckbox from '@mui/material/Checkbox';
import MUIChip from '@mui/material/Chip';
import MUICircularProgress from '@mui/material/CircularProgress';
import MUIDivider from '@mui/material/Divider';
import MUIInputBase from '@mui/material/InputBase';
import type { InputBaseProps as MUIInputBaseProps } from '@mui/material/InputBase';
import MUIFocusTrap from '@mui/material/Unstable_TrapFocus';
import MUILinearProgress from '@mui/material/LinearProgress';
import MUIListItemIcon from '@mui/material/ListItemIcon';
import MUIListItemText, { listItemTextClasses } from '@mui/material/ListItemText';
import type { MenuProps as MUIMenuProps } from '@mui/material/Menu';
import MUIMenuList from '@mui/material/MenuList';
import MUIMenuItem from '@mui/material/MenuItem';
import MUIModal from '@mui/material/Modal';
import MUITextField from '@mui/material/TextField';
import MUITextareaAutosize from '@mui/material/TextareaAutosize';
import MUIFormControl from '@mui/material/FormControl';
import MUIFormControlLabel, { formControlLabelClasses } from '@mui/material/FormControlLabel';
import MUISelect from '@mui/material/Select';
import MUISwitch from '@mui/material/Switch';
import MUIButton from '@mui/material/Button';
import MUIIconButton, { iconButtonClasses } from '@mui/material/IconButton';
import MUIInputAdornment, { inputAdornmentClasses } from '@mui/material/InputAdornment';
import MUITooltip from '@mui/material/Tooltip';
import MUIPagination, { tablePaginationClasses } from '@mui/material/TablePagination';
import MUIPopper from '@mui/material/Popper';
import type { PopperProps as MUIPopperProps } from '@mui/material/Popper';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import MUIGrow from '@mui/material/Grow';
import MUIPaper from '@mui/material/Paper';
import MUIInputLabel from '@mui/material/InputLabel';
import MUISkeleton from '@mui/material/Skeleton';
import MUITabs from '@mui/material/Tabs';
import MUITab from '@mui/material/Tab';
import MUIToggleButton from '@mui/material/ToggleButton';
import { forwardRef } from '@mui/x-internals/forwardRef';
import useId from '@mui/utils/useId';
import {
  GridAddIcon,
  GridArrowDownwardIcon,
  GridArrowUpwardIcon,
  GridCheckIcon,
  GridCloseIcon,
  GridUndoIcon,
  GridRedoIcon,
  GridColumnIcon,
  GridDragIcon,
  GridExpandMoreIcon,
  GridFilterAltIcon,
  GridFilterListIcon,
  GridKeyboardArrowRight,
  GridMoreVertIcon,
  GridRemoveIcon,
  GridSearchIcon,
  GridSeparatorIcon,
  GridTableRowsIcon,
  GridTripleDotsVerticalIcon,
  GridViewHeadlineIcon,
  GridViewStreamIcon,
  GridVisibilityOffIcon,
  GridViewColumnIcon,
  GridClearIcon,
  GridLoadIcon,
  GridDeleteForeverIcon,
  GridDownloadIcon,
  GridLongTextCellExpandIcon,
  GridLongTextCellCollapseIcon,
} from './icons';
import type { GridIconSlotsComponent } from '../models';
import type { GridBaseSlots } from '../models/gridSlotsComponent';
import type { GridSlotProps as P } from '../models/gridSlotsComponentsProps';
import type { PopperProps } from '../models/gridBaseSlots';
import { GridColumnUnsortedIcon } from '../components/GridColumnUnsortedIcon';
import { useGridApiContext } from '../hooks/utils/useGridApiContext';
import { useGridRootProps } from '../hooks/utils/useGridRootProps';

import './augmentation';

export { useMaterialCSSVariables } from './variables';

/* eslint-disable mui/disallow-react-api-in-server-components */

const InputAdornment = styled(MUIInputAdornment, {
  slot: 'internal',
})(({ theme }) => { throw new Error("STUB"); });

const FormControlLabel = styled(MUIFormControlLabel, {
  slot: 'internal',
  shouldForwardProp: (prop) => { throw new Error("STUB"); },
})<{ fullWidth?: boolean }>(({ theme }) => { throw new Error("STUB"); });

const Checkbox = styled(MUICheckbox, {
  slot: 'internal',
  shouldForwardProp: (prop) => { throw new Error("STUB"); },
})<{ density?: P['baseCheckbox']['density'] }>(({ theme }) => { throw new Error("STUB"); });

const ListItemText = styled(MUIListItemText, {
  slot: 'internal',
})({
  [`& .${listItemTextClasses.primary}`]: {
    overflowX: 'clip',
    textOverflow: 'ellipsis',
    maxWidth: '300px',
  },
});

const BaseSelect = forwardRef<any, P['baseSelect']>(function BaseSelect(props, ref) {
    throw new Error("STUB");
});

const StyledPagination = styled(MUIPagination, {
  slot: 'internal',
})(({ theme }) => { throw new Error("STUB"); }) as typeof MUIPagination;

const BasePagination = forwardRef<any, P['basePagination']>(function BasePagination(props, ref) {
    throw new Error("STUB");
});

const BaseBadge = forwardRef<any, P['baseBadge']>(function BaseBadge(props, ref) {
    throw new Error("STUB");
});

const BaseCheckbox = forwardRef<any, P['baseCheckbox']>(function BaseCheckbox(props, ref) {
    throw new Error("STUB");
});

const BaseCircularProgress = forwardRef<any, P['baseCircularProgress']>(
  function BaseCircularProgress(props, ref) {
        throw new Error("STUB");
    },
);

const BaseDivider = forwardRef<any, P['baseDivider']>(function BaseDivider(props, ref) {
    throw new Error("STUB");
});

const BaseLinearProgress = forwardRef<any, P['baseLinearProgress']>(
  function BaseLinearProgress(props, ref) {
        throw new Error("STUB");
    },
);

const BaseButton = forwardRef<any, P['baseButton']>(function BaseButton(props, ref) {
    throw new Error("STUB");
});

const StyledToggleButton = styled(MUIToggleButton, {
  slot: 'internal',
})(({ theme }) => { throw new Error("STUB"); });

const BaseToggleButton = forwardRef<any, P['baseToggleButton']>(
  function BaseToggleButton(props, ref) {
        throw new Error("STUB");
    },
);

const BaseChip = forwardRef<any, P['baseChip']>(function BaseChip(props, ref) {
    throw new Error("STUB");
});

const BaseIconButton = forwardRef<any, P['baseIconButton']>(function BaseIconButton(props, ref) {
    throw new Error("STUB");
});

const BaseTooltip = forwardRef<any, P['baseTooltip']>(function BaseTooltip(props, ref) {
    throw new Error("STUB");
});

const BaseSkeleton = forwardRef<any, P['baseSkeleton']>(function BaseSkeleton(props, ref) {
    throw new Error("STUB");
});

const BaseSwitch = forwardRef<any, P['baseSwitch']>(function BaseSwitch(props, ref) {
    throw new Error("STUB");
});

const BaseMenuList = forwardRef<any, P['baseMenuList']>(function BaseMenuList(props, ref) {
    throw new Error("STUB");
});

function BaseMenuItem(props: P['baseMenuItem']) {
    throw new Error("STUB");
}

function BaseModal(props: P['baseModal']) {
    throw new Error("STUB");
}

function BaseTextField(props: P['baseTextField']) {
    throw new Error("STUB");
}

function BaseAutocomplete(props: P['baseAutocomplete']) {
    throw new Error("STUB");
}

function BaseInput(props: P['baseInput']) {
    throw new Error("STUB");
}

function transformInputProps(props: P['baseInput'] | undefined, wrapAdornments = true) {
    throw new Error("STUB");
}

const BaseTextarea = forwardRef<any, P['baseTextarea']>(function BaseTextarea(props, ref) {
    throw new Error("STUB");
});

const transformOrigin = {
  'bottom-start': 'top left',
  'bottom-end': 'top right',
};

const BasePopper = forwardRef<any, P['basePopper']>(function BasePopper(props, ref) {
    throw new Error("STUB");
});

function wrappers(props: PopperProps, content: any) {
  return focusTrapWrapper(props, clickAwayWrapper(props, content));
}

function clickAwayWrapper(props: PopperProps, content: any) {
  if (props.onClickAway === undefined) {
    return content;
  }
  return (
    <ClickAwayListener
      onClickAway={props.onClickAway as any}
      touchEvent={props.clickAwayTouchEvent}
      mouseEvent={props.clickAwayMouseEvent}
    >
      {content}
    </ClickAwayListener>
  );
}

function focusTrapWrapper(props: PopperProps, content: any) {
  if (props.focusTrap === undefined) {
    return content;
  }
  return (
    <MUIFocusTrap open disableEnforceFocus disableAutoFocus>
      <div tabIndex={-1}>{content}</div>
    </MUIFocusTrap>
  );
}

function BaseSelectOption({ native, ...props }: NonNullable<P['baseSelectOption']>) {
    throw new Error("STUB");
}

const StyledTabs = styled(MUITabs, {
  name: 'MuiDataGrid',
  slot: 'Tabs',
})(({ theme }) => { throw new Error("STUB"); });

const StyledTab = styled(MUITab, {
  name: 'MuiDataGrid',
  slot: 'Tab',
})({
  flex: 1,
  minWidth: 'fit-content',
});

const StyledTabPanel = styled('div', {
  name: 'MuiDataGrid',
  slot: 'TabPanel',
})({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
});

function TabPanel(
  props: {
    children?: React.ReactNode;
    value: string;
    active: boolean;
  } & React.HTMLAttributes<HTMLDivElement>,
) {
    throw new Error("STUB");
}

function BaseTabs({ items, value, material, ...props }: P['baseTabs']) {
    throw new Error("STUB");
}

const iconSlots: GridIconSlotsComponent = {
  booleanCellTrueIcon: GridCheckIcon,
  booleanCellFalseIcon: GridCloseIcon,
  columnMenuIcon: GridTripleDotsVerticalIcon,
  openFilterButtonIcon: GridFilterListIcon,
  filterPanelDeleteIcon: GridCloseIcon,
  undoIcon: GridUndoIcon,
  redoIcon: GridRedoIcon,
  columnFilteredIcon: GridFilterAltIcon,
  columnSelectorIcon: GridColumnIcon,
  columnUnsortedIcon: GridColumnUnsortedIcon,
  columnSortedAscendingIcon: GridArrowUpwardIcon,
  columnSortedDescendingIcon: GridArrowDownwardIcon,
  columnResizeIcon: GridSeparatorIcon,
  densityCompactIcon: GridViewHeadlineIcon,
  densityStandardIcon: GridTableRowsIcon,
  densityComfortableIcon: GridViewStreamIcon,
  exportIcon: GridDownloadIcon,
  moreActionsIcon: GridMoreVertIcon,
  treeDataCollapseIcon: GridExpandMoreIcon,
  treeDataExpandIcon: GridKeyboardArrowRight,
  groupingCriteriaCollapseIcon: GridExpandMoreIcon,
  groupingCriteriaExpandIcon: GridKeyboardArrowRight,
  detailPanelExpandIcon: GridAddIcon,
  detailPanelCollapseIcon: GridRemoveIcon,
  rowReorderIcon: GridDragIcon,
  quickFilterIcon: GridSearchIcon,
  quickFilterClearIcon: GridClearIcon,
  columnMenuHideIcon: GridVisibilityOffIcon,
  columnMenuSortAscendingIcon: GridArrowUpwardIcon,
  columnMenuSortDescendingIcon: GridArrowDownwardIcon,
  columnMenuUnsortIcon: null,
  columnMenuFilterIcon: GridFilterAltIcon,
  columnMenuManageColumnsIcon: GridViewColumnIcon,
  columnMenuClearIcon: GridClearIcon,
  loadIcon: GridLoadIcon,
  filterPanelAddIcon: GridAddIcon,
  filterPanelRemoveAllIcon: GridDeleteForeverIcon,
  columnReorderIcon: GridDragIcon,
  menuItemCheckIcon: GridCheckIcon,
  longTextCellExpandIcon: GridLongTextCellExpandIcon,
  longTextCellCollapseIcon: GridLongTextCellCollapseIcon,
};

const baseSlots: GridBaseSlots = {
  baseAutocomplete: BaseAutocomplete,
  baseBadge: BaseBadge,
  baseCheckbox: BaseCheckbox,
  baseChip: BaseChip,
  baseCircularProgress: BaseCircularProgress,
  baseDivider: BaseDivider,
  baseInput: BaseInput,
  baseTextarea: BaseTextarea,
  baseLinearProgress: BaseLinearProgress,
  baseMenuList: BaseMenuList,
  baseMenuItem: BaseMenuItem,
  baseModal: BaseModal,
  baseTextField: BaseTextField,
  baseButton: BaseButton,
  baseIconButton: BaseIconButton,
  baseToggleButton: BaseToggleButton,
  baseTooltip: BaseTooltip,
  baseTabs: BaseTabs,
  basePagination: BasePagination,
  basePopper: BasePopper,
  baseSelect: BaseSelect,
  baseSelectOption: BaseSelectOption,
  baseSkeleton: BaseSkeleton,
  baseSwitch: BaseSwitch,
};

const materialSlots: GridBaseSlots & GridIconSlotsComponent = {
  ...baseSlots,
  ...iconSlots,
};

export default materialSlots;
