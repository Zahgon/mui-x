import type { GridLocaleText } from '../models/api/gridLocaleTextApi';
import { getGridLocalization, buildLocaleFormat } from '../utils/getGridLocalization';
import type { Localization } from '../utils/getGridLocalization';

const formatNumber = buildLocaleFormat('cs-CZ');

const csCZGrid: Partial<GridLocaleText> = {
  // Root
  noRowsLabel: 'Žádné záznamy',
  noResultsOverlayLabel: 'Nenašly se žadné výsledky.',
  noColumnsOverlayLabel: 'Žádné sloupce',
  noColumnsOverlayManageColumns: 'Spravovat sloupce',
  // emptyPivotOverlayLabel: 'Add fields to rows, columns, and values to create a pivot table',

  // Density selector toolbar button text
  toolbarDensity: 'Zobrazení',
  toolbarDensityLabel: 'Zobrazení',
  toolbarDensityCompact: 'Kompaktní',
  toolbarDensityStandard: 'Standartní',
  toolbarDensityComfortable: 'Komfortní',

  // Undo/redo toolbar button text
  toolbarUndo: 'Zpět',
  toolbarRedo: 'Znovu',

  // Columns selector toolbar button text
  toolbarColumns: 'Sloupce',
  toolbarColumnsLabel: 'Vybrat sloupec',

  // Filters toolbar button text
  toolbarFilters: 'Filtry',
  toolbarFiltersLabel: 'Zobrazit filtry',
  toolbarFiltersTooltipHide: 'Skrýt filtry',
  toolbarFiltersTooltipShow: 'Zobrazit filtry',
  toolbarFiltersTooltipActive: (count) => {
      throw new Error("STUB");
  },

  // Quick filter toolbar field
  toolbarQuickFilterPlaceholder: 'Hledat…',
  toolbarQuickFilterLabel: 'Hledat',
  toolbarQuickFilterDeleteIconLabel: 'Vymazat',

  // Export selector toolbar button text
  toolbarExport: 'Export',
  toolbarExportLabel: 'Export',
  toolbarExportCSV: 'Stáhnout jako CSV',
  toolbarExportPrint: 'Vytisknout',
  toolbarExportExcel: 'Stáhnout jako Excel',

  // Toolbar pivot button
  // toolbarPivot: 'Pivot',

  // Toolbar charts button
  // toolbarCharts: 'Charts',

  // Toolbar AI Assistant button
  // toolbarAssistant: 'AI Assistant',

  // Columns management text
  columnsManagementSearchTitle: 'Hledat sloupce',
  columnsManagementNoColumns: 'Žádné sloupce',
  columnsManagementShowHideAllText: 'Zobrazit/skrýt vše',
  columnsManagementReset: 'Resetovat',
  columnsManagementDeleteIconLabel: 'Vyčistit',

  // Filter panel text
  filterPanelAddFilter: 'Přidat filtr',
  filterPanelRemoveAll: 'Odstranit vše',
  filterPanelDeleteIconLabel: 'Odstranit',
  filterPanelLogicOperator: 'Logický operátor',
  filterPanelOperator: 'Operátory',
  filterPanelOperatorAnd: 'A',
  filterPanelOperatorOr: 'Nebo',
  filterPanelColumn: 'Sloupce',
  filterPanelInputLabel: 'Hodnota',
  filterPanelInputPlaceholder: 'Hodnota filtru',

  // Filter operators text
  filterOperatorContains: 'obsahuje',
  filterOperatorDoesNotContain: 'neobsahuje',
  filterOperatorEquals: 'rovná se',
  filterOperatorDoesNotEqual: 'nerovná se',
  filterOperatorStartsWith: 'začíná na',
  filterOperatorEndsWith: 'končí na',
  filterOperatorIs: 'je',
  filterOperatorNot: 'není',
  filterOperatorAfter: 'je po',
  filterOperatorOnOrAfter: 'je po včetně',
  filterOperatorBefore: 'je před',
  filterOperatorOnOrBefore: 'je před včetně',
  filterOperatorIsEmpty: 'je prázdný',
  filterOperatorIsNotEmpty: 'není prázdný',
  filterOperatorIsAnyOf: 'je jeden z',
  'filterOperator=': '=',
  'filterOperator!=': '!=',
  'filterOperator>': '>',
  'filterOperator>=': '>=',
  'filterOperator<': '<',
  'filterOperator<=': '<=',

  // Header filter operators text
  headerFilterOperatorContains: 'Obsahuje',
  headerFilterOperatorDoesNotContain: 'Neobsahuje',
  headerFilterOperatorEquals: 'Rovná se',
  headerFilterOperatorDoesNotEqual: 'Nerovná se',
  headerFilterOperatorStartsWith: 'Začíná na',
  headerFilterOperatorEndsWith: 'Končí na',
  headerFilterOperatorIs: 'Je',
  headerFilterOperatorNot: 'Není',
  headerFilterOperatorAfter: 'Je po',
  headerFilterOperatorOnOrAfter: 'Je po včetně',
  headerFilterOperatorBefore: 'Je před',
  headerFilterOperatorOnOrBefore: 'Je před včetně',
  headerFilterOperatorIsEmpty: 'Je prázdný',
  headerFilterOperatorIsNotEmpty: 'Není prázdný',
  headerFilterOperatorIsAnyOf: 'Je jeden z',
  'headerFilterOperator=': 'Rovná se',
  'headerFilterOperator!=': 'Nerovná se',
  'headerFilterOperator>': 'Větší než',
  'headerFilterOperator>=': 'Větší než nebo rovno',
  'headerFilterOperator<': 'Menší než',
  'headerFilterOperator<=': 'Menší než nebo rovno',
  headerFilterClear: 'Zrušit filtr',

  // Filter values text
  filterValueAny: 'jakýkoliv',
  filterValueTrue: 'ano',
  filterValueFalse: 'ne',

  // Column menu text
  columnMenuLabel: 'Menu',
  columnMenuAriaLabel: (columnName: string) => { throw new Error("STUB"); },
  columnMenuShowColumns: 'Zobrazit sloupce',
  columnMenuManageColumns: 'Spravovat sloupce',
  columnMenuFilter: 'Filtr',
  columnMenuHideColumn: 'Skrýt',
  columnMenuUnsort: 'Zrušit řazení',
  columnMenuSortAsc: 'Seřadit vzestupně',
  columnMenuSortDesc: 'Seřadit sestupně',
  // columnMenuManagePivot: 'Manage pivot',
  // columnMenuManageCharts: 'Manage charts',

  // Column header text
  columnHeaderFiltersTooltipActive: (count) => {
      throw new Error("STUB");
  },
  columnHeaderFiltersLabel: 'Zobrazit filtry',
  columnHeaderSortIconLabel: 'Řadit',

  // Rows selected footer text
  footerRowSelected: (count) => {
      throw new Error("STUB");
  },

  // Total row amount footer text
  footerTotalRows: 'Celkem řádků:',

  // Total visible row amount footer text
  footerTotalVisibleRows: (visibleCount, totalCount) => {
      throw new Error("STUB");
  },

  // Checkbox selection text
  checkboxSelectionHeaderName: 'Výběr řádku',
  checkboxSelectionSelectAllRows: 'Označit všechny řádky',
  checkboxSelectionUnselectAllRows: 'Odznačit všechny řádky',
  checkboxSelectionSelectRow: 'Označit řádek',
  checkboxSelectionUnselectRow: 'Odznačit řádek',

  // Boolean cell text
  booleanCellTrueLabel: 'ano',
  booleanCellFalseLabel: 'ne',

  // Long text cell
  longTextCellExpandLabel: 'Rozbalit',
  longTextCellCollapseLabel: 'Sbalit',

  // Actions cell more text
  actionsCellMore: 'více',

  // Column pinning text
  pinToLeft: 'Připnout vlevo',
  pinToRight: 'Připnout vpravo',
  unpin: 'Odepnout',

  // Tree Data
  treeDataGroupingHeaderName: 'Skupina',
  treeDataExpand: 'zobrazit potomky',
  treeDataCollapse: 'skrýt potomky',

  // Grouping columns
  groupingColumnHeaderName: 'Skupina',
  groupColumn: (name) => { throw new Error("STUB"); },
  unGroupColumn: (name) => { throw new Error("STUB"); },

  // Master/detail
  detailPanelToggle: 'Přepnout detail panelu',
  expandDetailPanel: 'Rozbalit',
  collapseDetailPanel: 'Sbalit',

  // Pagination
  paginationRowsPerPage: 'Řádků na stránce:',
  paginationDisplayedRows: ({ from, to, count, estimated }) => {
      throw new Error("STUB");
  },
  paginationItemAriaLabel: (type) => {
      throw new Error("STUB");
  },

  // Row reordering text
  rowReorderingHeaderName: 'Přeuspořádávání řádků',

  // Aggregation
  aggregationMenuItemHeader: 'Seskupování',
  // aggregationFunctionLabelNone: 'none',
  aggregationFunctionLabelSum: 'součet',
  aggregationFunctionLabelAvg: 'průměr',
  aggregationFunctionLabelMin: 'min',
  aggregationFunctionLabelMax: 'max',
  aggregationFunctionLabelSize: 'počet',

  // Pivot panel
  // pivotToggleLabel: 'Pivot',
  // pivotRows: 'Rows',
  // pivotColumns: 'Columns',
  // pivotValues: 'Values',
  // pivotCloseButton: 'Close pivot settings',
  // pivotSearchButton: 'Search fields',
  // pivotSearchControlPlaceholder: 'Search fields',
  // pivotSearchControlLabel: 'Search fields',
  // pivotSearchControlClear: 'Clear search',
  // pivotNoFields: 'No fields',
  // pivotMenuMoveUp: 'Move up',
  // pivotMenuMoveDown: 'Move down',
  // pivotMenuMoveToTop: 'Move to top',
  // pivotMenuMoveToBottom: 'Move to bottom',
  // pivotMenuRows: 'Rows',
  // pivotMenuColumns: 'Columns',
  // pivotMenuValues: 'Values',
  // pivotMenuOptions: 'Field options',
  // pivotMenuAddToRows: 'Add to Rows',
  // pivotMenuAddToColumns: 'Add to Columns',
  // pivotMenuAddToValues: 'Add to Values',
  // pivotMenuRemove: 'Remove',
  // pivotDragToRows: 'Drag here to create rows',
  // pivotDragToColumns: 'Drag here to create columns',
  // pivotDragToValues: 'Drag here to create values',
  // pivotYearColumnHeaderName: '(Year)',
  // pivotQuarterColumnHeaderName: '(Quarter)',

  // Charts configuration panel
  // chartsNoCharts: 'There are no charts available',
  // chartsChartNotSelected: 'Select a chart type to configure its options',
  // chartsTabChart: 'Chart',
  // chartsTabFields: 'Fields',
  // chartsTabCustomize: 'Customize',
  // chartsCloseButton: 'Close charts configuration',
  // chartsSyncButtonLabel: 'Sync chart',
  // chartsSearchPlaceholder: 'Search fields',
  // chartsSearchLabel: 'Search fields',
  // chartsSearchClear: 'Clear search',
  // chartsNoFields: 'No fields',
  // chartsFieldBlocked: 'This field cannot be added to any section',
  // chartsCategories: 'Categories',
  // chartsSeries: 'Series',
  // chartsMenuAddToDimensions: (dimensionLabel: string) => `Add to ${dimensionLabel}`,
  // chartsMenuAddToValues: (valuesLabel: string) => `Add to ${valuesLabel}`,
  // chartsMenuMoveUp: 'Move up',
  // chartsMenuMoveDown: 'Move down',
  // chartsMenuMoveToTop: 'Move to top',
  // chartsMenuMoveToBottom: 'Move to bottom',
  // chartsMenuOptions: 'Field options',
  // chartsMenuRemove: 'Remove',
  // chartsDragToDimensions: (dimensionLabel: string) => `Drag here to use column as ${dimensionLabel}`,
  // chartsDragToValues: (valuesLabel: string) => `Drag here to use column as ${valuesLabel}`,

  // AI Assistant panel
  // aiAssistantPanelTitle: 'AI Assistant',
  // aiAssistantPanelClose: 'Close AI Assistant',
  // aiAssistantPanelNewConversation: 'New conversation',
  // aiAssistantPanelConversationHistory: 'Conversation history',
  // aiAssistantPanelEmptyConversation: 'No prompt history',
  // aiAssistantSuggestions: 'Suggestions',

  // Prompt field
  promptFieldLabel: 'Vstup požadavku',
  promptFieldPlaceholder: 'Napište požadavek…',
  promptFieldPlaceholderWithRecording: 'Napište nebo nahrajte požadavek…',
  promptFieldPlaceholderListening: 'Naslouchám požadavku…',
  // promptFieldSpeechRecognitionNotSupported: 'Speech recognition is not supported in this browser',
  promptFieldSend: 'Odeslat',
  promptFieldRecord: 'Nahrát',
  promptFieldStopRecording: 'Zastavit nahrávání',

  // Prompt
  // promptRerun: 'Run again',
  // promptProcessing: 'Processing…',
  // promptAppliedChanges: 'Applied changes',

  // Prompt changes
  // promptChangeGroupDescription: (column: string) => `Group by ${column}`,
  // promptChangeAggregationLabel: (column: string, aggregation: string) => `${column} (${aggregation})`,
  // promptChangeAggregationDescription: (column: string, aggregation: string) => `Aggregate ${column} (${aggregation})`,
  // promptChangeFilterLabel: (column: string, operator: string, value: string) => {
  //   if (operator === 'is any of') {
  //     return `${column} is any of: ${value}`;
  //   }
  //   return `${column} ${operator} ${value}`;
  // },
  // promptChangeFilterDescription: (column: string, operator: string, value: string) => {
  //   if (operator === 'is any of') {
  //     return `Filter where ${column} is any of: ${value}`;
  //   }
  //   return `Filter where ${column} ${operator} ${value}`;
  // },
  // promptChangeSortDescription: (column: string, direction: string) => `Sort by ${column} (${direction})`,
  // promptChangePivotEnableLabel: 'Pivot',
  // promptChangePivotEnableDescription: 'Enable pivot',
  // promptChangePivotColumnsLabel: (count: number) => `Columns (${count})`,
  // promptChangePivotColumnsDescription: (column: string, direction: string) => `${column}${direction ? ` (${direction})` : ''}`,
  // promptChangePivotRowsLabel: (count: number) => `Rows (${count})`,
  // promptChangePivotValuesLabel: (count: number) => `Values (${count})`,
  // promptChangePivotValuesDescription: (column: string, aggregation: string) => `${column} (${aggregation})`,
  // promptChangeChartsLabel: (dimensionsCount: number, valuesCount: number) => `Dimensions (${dimensionsCount}), Values (${valuesCount})`,
};

export const csCZ: Localization = getGridLocalization(csCZGrid);
