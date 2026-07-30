import type { GridLocaleText } from '../models/api/gridLocaleTextApi';
import { buildLocaleFormat } from '../utils/getGridLocalization';

const formatNumber = buildLocaleFormat('en-US');

export const GRID_DEFAULT_LOCALE_TEXT: GridLocaleText = {
  // Root
  noRowsLabel: 'No rows',
  noResultsOverlayLabel: 'No results found.',
  noColumnsOverlayLabel: 'No columns',
  noColumnsOverlayManageColumns: 'Manage columns',
  emptyPivotOverlayLabel: 'Add fields to rows, columns, and values to create a pivot table',

  // Density selector toolbar button text
  toolbarDensity: 'Density',
  toolbarDensityLabel: 'Density',
  toolbarDensityCompact: 'Compact',
  toolbarDensityStandard: 'Standard',
  toolbarDensityComfortable: 'Comfortable',

  // Undo/redo toolbar button text
  toolbarUndo: 'Undo',
  toolbarRedo: 'Redo',

  // Columns selector toolbar button text
  toolbarColumns: 'Columns',
  toolbarColumnsLabel: 'Select columns',

  // Filters toolbar button text
  toolbarFilters: 'Filters',
  toolbarFiltersLabel: 'Show filters',
  toolbarFiltersTooltipHide: 'Hide filters',
  toolbarFiltersTooltipShow: 'Show filters',
  toolbarFiltersTooltipActive: (count) =>
    { throw new Error("STUB"); },

  // Quick filter toolbar field
  toolbarQuickFilterPlaceholder: 'Search…',
  toolbarQuickFilterLabel: 'Search',
  toolbarQuickFilterDeleteIconLabel: 'Clear',

  // Export selector toolbar button text
  toolbarExport: 'Export',
  toolbarExportLabel: 'Export',
  toolbarExportCSV: 'Download as CSV',
  toolbarExportPrint: 'Print',
  toolbarExportExcel: 'Download as Excel',

  // Toolbar pivot button
  toolbarPivot: 'Pivot',

  // Toolbar charts button
  toolbarCharts: 'Charts',

  // Toolbar AI Assistant button
  toolbarAssistant: 'AI Assistant',

  // Columns management text
  columnsManagementSearchTitle: 'Search',
  columnsManagementNoColumns: 'No columns',
  columnsManagementShowHideAllText: 'Show/Hide All',
  columnsManagementReset: 'Reset',
  columnsManagementDeleteIconLabel: 'Clear',

  // Filter panel text
  filterPanelAddFilter: 'Add filter',
  filterPanelRemoveAll: 'Remove all',
  filterPanelDeleteIconLabel: 'Delete',
  filterPanelLogicOperator: 'Logic operator',
  filterPanelOperator: 'Operator',
  filterPanelOperatorAnd: 'And',
  filterPanelOperatorOr: 'Or',
  filterPanelColumn: 'Column',
  filterPanelInputLabel: 'Value',
  filterPanelInputPlaceholder: 'Filter value',

  // Filter operators text
  filterOperatorContains: 'contains',
  filterOperatorDoesNotContain: 'does not contain',
  filterOperatorEquals: 'equals',
  filterOperatorDoesNotEqual: 'does not equal',
  filterOperatorStartsWith: 'starts with',
  filterOperatorEndsWith: 'ends with',
  filterOperatorIs: 'is',
  filterOperatorNot: 'is not',
  filterOperatorAfter: 'is after',
  filterOperatorOnOrAfter: 'is on or after',
  filterOperatorBefore: 'is before',
  filterOperatorOnOrBefore: 'is on or before',
  filterOperatorIsEmpty: 'is empty',
  filterOperatorIsNotEmpty: 'is not empty',
  filterOperatorIsAnyOf: 'is any of',
  'filterOperator=': '=',
  'filterOperator!=': '!=',
  'filterOperator>': '>',
  'filterOperator>=': '>=',
  'filterOperator<': '<',
  'filterOperator<=': '<=',

  // Header filter operators text
  headerFilterOperatorContains: 'Contains',
  headerFilterOperatorDoesNotContain: 'Does not contain',
  headerFilterOperatorEquals: 'Equals',
  headerFilterOperatorDoesNotEqual: 'Does not equal',
  headerFilterOperatorStartsWith: 'Starts with',
  headerFilterOperatorEndsWith: 'Ends with',
  headerFilterOperatorIs: 'Is',
  headerFilterOperatorNot: 'Is not',
  headerFilterOperatorAfter: 'Is after',
  headerFilterOperatorOnOrAfter: 'Is on or after',
  headerFilterOperatorBefore: 'Is before',
  headerFilterOperatorOnOrBefore: 'Is on or before',
  headerFilterOperatorIsEmpty: 'Is empty',
  headerFilterOperatorIsNotEmpty: 'Is not empty',
  headerFilterOperatorIsAnyOf: 'Is any of',
  'headerFilterOperator=': 'Equals',
  'headerFilterOperator!=': 'Not equals',
  'headerFilterOperator>': 'Greater than',
  'headerFilterOperator>=': 'Greater than or equal to',
  'headerFilterOperator<': 'Less than',
  'headerFilterOperator<=': 'Less than or equal to',
  headerFilterClear: 'Clear filter',

  // Filter values text
  filterValueAny: 'any',
  filterValueTrue: 'true',
  filterValueFalse: 'false',

  // Column menu text
  columnMenuLabel: 'Menu',
  columnMenuAriaLabel: (columnName: string) => { throw new Error("STUB"); },
  columnMenuShowColumns: 'Show columns',
  columnMenuManageColumns: 'Manage columns',
  columnMenuFilter: 'Filter',
  columnMenuHideColumn: 'Hide column',
  columnMenuUnsort: 'Unsort',
  columnMenuSortAsc: 'Sort by ASC',
  columnMenuSortDesc: 'Sort by DESC',
  columnMenuManagePivot: 'Manage pivot',
  columnMenuManageCharts: 'Manage charts',

  // Column header text
  columnHeaderFiltersTooltipActive: (count) =>
    { throw new Error("STUB"); },
  columnHeaderFiltersLabel: 'Show filters',
  columnHeaderSortIconLabel: 'Sort',

  // Rows selected footer text
  footerRowSelected: (count) =>
    { throw new Error("STUB"); },

  // Total row amount footer text
  footerTotalRows: 'Total Rows:',

  // Total visible row amount footer text
  footerTotalVisibleRows: (visibleCount, totalCount) =>
    { throw new Error("STUB"); },

  // Checkbox selection text
  checkboxSelectionHeaderName: 'Checkbox selection',
  checkboxSelectionSelectAllRows: 'Select all rows',
  checkboxSelectionUnselectAllRows: 'Unselect all rows',
  checkboxSelectionSelectRow: 'Select row',
  checkboxSelectionUnselectRow: 'Unselect row',

  // Boolean cell text
  booleanCellTrueLabel: 'yes',
  booleanCellFalseLabel: 'no',

  // Long text cell
  longTextCellExpandLabel: 'Expand',
  longTextCellCollapseLabel: 'Collapse',

  // Actions cell more text
  actionsCellMore: 'more',

  // Column pinning text
  pinToLeft: 'Pin to left',
  pinToRight: 'Pin to right',
  unpin: 'Unpin',

  // Tree Data
  treeDataGroupingHeaderName: 'Group',
  treeDataExpand: 'see children',
  treeDataCollapse: 'hide children',

  // Grouping columns
  groupingColumnHeaderName: 'Group',
  groupColumn: (name) => { throw new Error("STUB"); },
  unGroupColumn: (name) => { throw new Error("STUB"); },

  // Master/detail
  detailPanelToggle: 'Detail panel toggle',
  expandDetailPanel: 'Expand',
  collapseDetailPanel: 'Collapse',

  // Pagination
  paginationRowsPerPage: 'Rows per page:',
  paginationDisplayedRows: ({ from, to, count, estimated }) => {
      throw new Error("STUB");
  },
  paginationItemAriaLabel: (type) => {
      throw new Error("STUB");
  },

  // Row reordering text
  rowReorderingHeaderName: 'Row reordering',

  // Aggregation
  aggregationMenuItemHeader: 'Aggregation',
  aggregationFunctionLabelNone: 'none',
  aggregationFunctionLabelSum: 'sum',
  aggregationFunctionLabelAvg: 'avg',
  aggregationFunctionLabelMin: 'min',
  aggregationFunctionLabelMax: 'max',
  aggregationFunctionLabelSize: 'size',

  // Pivot panel
  pivotToggleLabel: 'Pivot',
  pivotRows: 'Rows',
  pivotColumns: 'Columns',
  pivotValues: 'Values',
  pivotCloseButton: 'Close pivot settings',
  pivotSearchButton: 'Search fields',
  pivotSearchControlPlaceholder: 'Search fields',
  pivotSearchControlLabel: 'Search fields',
  pivotSearchControlClear: 'Clear search',
  pivotNoFields: 'No fields',
  pivotMenuMoveUp: 'Move up',
  pivotMenuMoveDown: 'Move down',
  pivotMenuMoveToTop: 'Move to top',
  pivotMenuMoveToBottom: 'Move to bottom',
  pivotMenuRows: 'Rows',
  pivotMenuColumns: 'Columns',
  pivotMenuValues: 'Values',
  pivotMenuOptions: 'Field options',
  pivotMenuAddToRows: 'Add to Rows',
  pivotMenuAddToColumns: 'Add to Columns',
  pivotMenuAddToValues: 'Add to Values',
  pivotMenuRemove: 'Remove',
  pivotDragToRows: 'Drag here to create rows',
  pivotDragToColumns: 'Drag here to create columns',
  pivotDragToValues: 'Drag here to create values',
  pivotYearColumnHeaderName: '(Year)',
  pivotQuarterColumnHeaderName: '(Quarter)',

  // Charts configuration panel
  chartsNoCharts: 'There are no charts available',
  chartsChartNotSelected: 'Select a chart type to configure its options',
  chartsTabChart: 'Chart',
  chartsTabFields: 'Fields',
  chartsTabCustomize: 'Customize',
  chartsCloseButton: 'Close charts configuration',
  chartsSyncButtonLabel: 'Sync chart',
  chartsSearchPlaceholder: 'Search fields',
  chartsSearchLabel: 'Search fields',
  chartsSearchClear: 'Clear search',
  chartsNoFields: 'No fields',
  chartsFieldBlocked: 'This field cannot be added to any section',
  chartsCategories: 'Categories',
  chartsSeries: 'Series',
  chartsMenuAddToDimensions: (dimensionLabel: string) => { throw new Error("STUB"); },
  chartsMenuAddToValues: (valuesLabel: string) => { throw new Error("STUB"); },
  chartsMenuMoveUp: 'Move up',
  chartsMenuMoveDown: 'Move down',
  chartsMenuMoveToTop: 'Move to top',
  chartsMenuMoveToBottom: 'Move to bottom',
  chartsMenuOptions: 'Field options',
  chartsMenuRemove: 'Remove',
  chartsDragToDimensions: (dimensionLabel: string) =>
    { throw new Error("STUB"); },
  chartsDragToValues: (valuesLabel: string) => { throw new Error("STUB"); },

  // AI Assistant panel
  aiAssistantPanelTitle: 'AI Assistant',
  aiAssistantPanelClose: 'Close AI Assistant',
  aiAssistantPanelNewConversation: 'New conversation',
  aiAssistantPanelConversationHistory: 'Conversation history',
  aiAssistantPanelEmptyConversation: 'No prompt history',
  aiAssistantSuggestions: 'Suggestions',

  // Prompt field
  promptFieldLabel: 'Prompt',
  promptFieldPlaceholder: 'Type a prompt…',
  promptFieldPlaceholderWithRecording: 'Type or record a prompt…',
  promptFieldPlaceholderListening: 'Listening for prompt…',
  promptFieldSpeechRecognitionNotSupported: 'Speech recognition is not supported in this browser',
  promptFieldSend: 'Send',
  promptFieldRecord: 'Record',
  promptFieldStopRecording: 'Stop recording',

  // Prompt
  promptRerun: 'Run again',
  promptProcessing: 'Processing…',
  promptAppliedChanges: 'Applied changes',

  // Prompt changes
  promptChangeGroupDescription: (column: string) => { throw new Error("STUB"); },
  promptChangeAggregationLabel: (column: string, aggregation: string) =>
    { throw new Error("STUB"); },
  promptChangeAggregationDescription: (column: string, aggregation: string) =>
    { throw new Error("STUB"); },
  promptChangeFilterLabel: (column: string, operator: string, value: string) => {
      throw new Error("STUB");
  },
  promptChangeFilterDescription: (column: string, operator: string, value: string) => {
      throw new Error("STUB");
  },
  promptChangeSortDescription: (column: string, direction: string) =>
    { throw new Error("STUB"); },
  promptChangePivotEnableLabel: 'Pivot',
  promptChangePivotEnableDescription: 'Enable pivot',
  promptChangePivotColumnsLabel: (count: number) => { throw new Error("STUB"); },
  promptChangePivotColumnsDescription: (column: string, direction: string) =>
    { throw new Error("STUB"); },
  promptChangePivotRowsLabel: (count: number) => { throw new Error("STUB"); },
  promptChangePivotValuesLabel: (count: number) => { throw new Error("STUB"); },
  promptChangePivotValuesDescription: (column: string, aggregation: string) =>
    { throw new Error("STUB"); },
  promptChangeChartsLabel: (dimensionsCount: number, valuesCount: number) =>
    { throw new Error("STUB"); },
};
