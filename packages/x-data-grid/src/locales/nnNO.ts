import type { GridLocaleText } from '../models/api/gridLocaleTextApi';
import { getGridLocalization, buildLocaleFormat } from '../utils/getGridLocalization';
import type { Localization } from '../utils/getGridLocalization';

const formatNumber = buildLocaleFormat('nn-NO');

const nnNOGrid: Partial<GridLocaleText> = {
  // Root
  noRowsLabel: 'Ingen rader',
  noResultsOverlayLabel: 'Fann ingen resultat.',
  noColumnsOverlayLabel: 'Ingen kolonner',
  noColumnsOverlayManageColumns: 'Vel kolonner',
  emptyPivotOverlayLabel:
    'Legg til felt i rader, kolonner og verdiar for å opprette ein pivot-tabell',

  // Density selector toolbar button text
  toolbarDensity: 'Tettheit',
  toolbarDensityLabel: 'Tettheit',
  toolbarDensityCompact: 'Kompakt',
  toolbarDensityStandard: 'Standard',
  toolbarDensityComfortable: 'Komfortabelt',

  // Undo/redo toolbar button text
  toolbarUndo: 'Angre',
  toolbarRedo: 'Gjer om',

  // Columns selector toolbar button text
  toolbarColumns: 'Kolonner',
  toolbarColumnsLabel: 'Vel kolonner',

  // Filters toolbar button text
  toolbarFilters: 'Filter',
  toolbarFiltersLabel: 'Vis filter',
  toolbarFiltersTooltipHide: 'Skjul filter',
  toolbarFiltersTooltipShow: 'Vis filter',
  toolbarFiltersTooltipActive: (count) =>
    { throw new Error("STUB"); },

  // Quick filter toolbar field
  toolbarQuickFilterPlaceholder: 'Søk…',
  toolbarQuickFilterLabel: 'Søk',
  toolbarQuickFilterDeleteIconLabel: 'Slett',

  // Export selector toolbar button text
  toolbarExport: 'Eksporter',
  toolbarExportLabel: 'Eksporter',
  toolbarExportCSV: 'Last ned som CSV',
  toolbarExportPrint: 'Skriv ut',
  toolbarExportExcel: 'Last ned som Excel',

  // Toolbar pivot button
  toolbarPivot: 'Pivot',

  // Toolbar charts button
  // toolbarCharts: 'Charts',

  // Toolbar AI Assistant button
  toolbarAssistant: 'AI Assistent',

  // Columns management text
  columnsManagementSearchTitle: 'Søk',
  columnsManagementNoColumns: 'Ingen kolonner',
  columnsManagementShowHideAllText: 'Vis/skjul alle',
  columnsManagementReset: 'Nullstill',
  columnsManagementDeleteIconLabel: 'Tøm',

  // Filter panel text
  filterPanelAddFilter: 'Legg til filter',
  filterPanelRemoveAll: 'Fjern alle',
  filterPanelDeleteIconLabel: 'Slett',
  filterPanelLogicOperator: 'Logisk operator',
  filterPanelOperator: 'Operator',
  filterPanelOperatorAnd: 'Og',
  filterPanelOperatorOr: 'Eller',
  filterPanelColumn: 'Kolonner',
  filterPanelInputLabel: 'Verdi',
  filterPanelInputPlaceholder: 'Filter verdi',

  // Filter operators text
  filterOperatorContains: 'inneheld',
  filterOperatorDoesNotContain: 'inneheld ikkje',
  filterOperatorEquals: 'er lik',
  filterOperatorDoesNotEqual: 'er ikkje lik',
  filterOperatorStartsWith: 'startar med',
  filterOperatorEndsWith: 'sluttar med',
  filterOperatorIs: 'er',
  filterOperatorNot: 'er ikkje',
  filterOperatorAfter: 'er etter',
  filterOperatorOnOrAfter: 'er på eller etter',
  filterOperatorBefore: 'er før',
  filterOperatorOnOrBefore: 'er på eller før',
  filterOperatorIsEmpty: 'er tom',
  filterOperatorIsNotEmpty: 'er ikkje tom',
  filterOperatorIsAnyOf: 'er ein av',
  'filterOperator=': '=',
  'filterOperator!=': '!=',
  'filterOperator>': '>',
  'filterOperator>=': '>=',
  'filterOperator<': '<',
  'filterOperator<=': '<=',

  // Header filter operators text
  headerFilterOperatorContains: 'Inneheld',
  headerFilterOperatorDoesNotContain: 'Inneheld ikkje',
  headerFilterOperatorEquals: 'Lik',
  headerFilterOperatorDoesNotEqual: 'Er ikkje lik',
  headerFilterOperatorStartsWith: 'Startar på',
  headerFilterOperatorEndsWith: 'Sluttar på',
  headerFilterOperatorIs: 'Er',
  headerFilterOperatorNot: 'Er ikkje',
  headerFilterOperatorAfter: 'Er etter',
  headerFilterOperatorOnOrAfter: 'Er på eller etter',
  headerFilterOperatorBefore: 'Er før',
  headerFilterOperatorOnOrBefore: 'Er på eller før',
  headerFilterOperatorIsEmpty: 'Er tom',
  headerFilterOperatorIsNotEmpty: 'Er ikkje tom',
  headerFilterOperatorIsAnyOf: 'Er ein av',
  'headerFilterOperator=': 'Lik',
  'headerFilterOperator!=': 'Ikkje lik',
  'headerFilterOperator>': 'Større enn',
  'headerFilterOperator>=': 'Større enn eller lik',
  'headerFilterOperator<': 'Mindre enn',
  'headerFilterOperator<=': 'Mindre enn eller lik',
  headerFilterClear: 'Tøm filter',

  // Filter values text
  filterValueAny: 'nokon',
  filterValueTrue: 'sant',
  filterValueFalse: 'usant',

  // Column menu text
  columnMenuLabel: 'Meny',
  columnMenuAriaLabel: (columnName: string) => { throw new Error("STUB"); },
  columnMenuShowColumns: 'Vis kolonner',
  columnMenuManageColumns: 'Administrer kolonner',
  columnMenuFilter: 'Filter',
  columnMenuHideColumn: 'Skjul',
  columnMenuUnsort: 'Usorter',
  columnMenuSortAsc: 'Sorter AUKANDE',
  columnMenuSortDesc: 'Sorter SYNKANDE',
  columnMenuManagePivot: 'Behandle pivot',
  // columnMenuManageCharts: 'Manage charts',

  // Column header text
  columnHeaderFiltersTooltipActive: (count) =>
    { throw new Error("STUB"); },
  columnHeaderFiltersLabel: 'Vis filter',
  columnHeaderSortIconLabel: 'Sorter',

  // Rows selected footer text
  footerRowSelected: (count) =>
    { throw new Error("STUB"); },

  // Total row amount footer text
  footerTotalRows: 'Totalt tal rader:',

  // Total visible row amount footer text
  footerTotalVisibleRows: (visibleCount, totalCount) =>
    { throw new Error("STUB"); },

  // Checkbox selection text
  checkboxSelectionHeaderName: 'Avmerkingsboks',
  checkboxSelectionSelectAllRows: 'Vel alle rader',
  checkboxSelectionUnselectAllRows: 'Vel vekk alle rader',
  checkboxSelectionSelectRow: 'Vel rad',
  checkboxSelectionUnselectRow: 'Vel vekk rad',

  // Boolean cell text
  booleanCellTrueLabel: 'sant',
  booleanCellFalseLabel: 'usant',

  // Long text cell
  longTextCellExpandLabel: 'Vis',
  longTextCellCollapseLabel: 'Gøym',

  // Actions cell more text
  actionsCellMore: 'meir',

  // Column pinning text
  pinToLeft: 'Fest til venstre',
  pinToRight: 'Fest til høgre',
  unpin: 'Lausne',

  // Tree Data
  treeDataGroupingHeaderName: 'Grupper',
  treeDataExpand: 'vis barn',
  treeDataCollapse: 'skjul barn',

  // Grouping columns
  groupingColumnHeaderName: 'Grupper',
  groupColumn: (name) => { throw new Error("STUB"); },
  unGroupColumn: (name) => { throw new Error("STUB"); },

  // Master/detail
  detailPanelToggle: 'Vis/gøym detaljpanel',
  expandDetailPanel: 'Vis',
  collapseDetailPanel: 'Gøym',

  // Pagination
  paginationRowsPerPage: 'Rader per side:',
  paginationDisplayedRows: ({ from, to, count, estimated }) => {
      throw new Error("STUB");
  },
  paginationItemAriaLabel: (type) => {
      throw new Error("STUB");
  },

  // Row reordering text
  rowReorderingHeaderName: 'Radreorganisering',

  // Aggregation
  aggregationMenuItemHeader: 'Aggregering',
  // aggregationFunctionLabelNone: 'none',
  aggregationFunctionLabelSum: 'sum',
  aggregationFunctionLabelAvg: 'snitt',
  aggregationFunctionLabelMin: 'min',
  aggregationFunctionLabelMax: 'maks',
  aggregationFunctionLabelSize: 'størrelse',

  // Pivot panel
  pivotToggleLabel: 'Pivot',
  pivotRows: 'Rader',
  pivotColumns: 'Kolonner',
  pivotValues: 'Verdiar',
  pivotCloseButton: 'Lukk pivotinnstillingar',
  pivotSearchButton: 'Søk felt',
  pivotSearchControlPlaceholder: 'Søk felt',
  pivotSearchControlLabel: 'Søk felt',
  pivotSearchControlClear: 'Tøm søk',
  pivotNoFields: 'Ingen felt',
  pivotMenuMoveUp: 'Flytt opp',
  pivotMenuMoveDown: 'Flytt ned',
  pivotMenuMoveToTop: 'Flytt til toppen',
  pivotMenuMoveToBottom: 'Flytt til botnen',
  pivotMenuRows: 'Rader',
  pivotMenuColumns: 'Kolonner',
  pivotMenuValues: 'Verdiar',
  pivotMenuOptions: 'Feltalternativ',
  pivotMenuAddToRows: 'Legg til i Rader',
  pivotMenuAddToColumns: 'Legg til i Kolonner',
  pivotMenuAddToValues: 'Legg til i Verdiar',
  pivotMenuRemove: 'Fjern',
  pivotDragToRows: 'Dra hit for å opprette rader',
  pivotDragToColumns: 'Dra hit for å opprette kolonner',
  pivotDragToValues: 'Dra hit for å opprette verdiar',
  pivotYearColumnHeaderName: '(År)',
  pivotQuarterColumnHeaderName: '(Kvartal)',

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
  aiAssistantPanelTitle: 'AI Assistent',
  aiAssistantPanelClose: 'Lukk AI Assistent',
  aiAssistantPanelNewConversation: 'Ny samtale',
  aiAssistantPanelConversationHistory: 'Samtalehistorikk',
  aiAssistantPanelEmptyConversation: 'Ingen prompt-historikk',
  aiAssistantSuggestions: 'Forslag',

  // Prompt field
  promptFieldLabel: 'Prompt',
  promptFieldPlaceholder: 'Skriv ein prompt…',
  promptFieldPlaceholderWithRecording: 'Skriv eller spel inn ein prompt…',
  promptFieldPlaceholderListening: 'Lyttar etter prompt…',
  promptFieldSpeechRecognitionNotSupported: 'Talegjenkjenning er ikkje støtta i denne nettlesaren',
  promptFieldSend: 'Send',
  promptFieldRecord: 'Spel inn',
  promptFieldStopRecording: 'Stopp opptak',

  // Prompt
  promptRerun: 'Kjør på nytt',
  promptProcessing: 'Behandlar…',
  promptAppliedChanges: 'Brukte endringar',

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
  promptChangePivotEnableDescription: 'Aktiver pivot',
  promptChangePivotColumnsLabel: (count: number) => { throw new Error("STUB"); },
  promptChangePivotColumnsDescription: (column: string, direction: string) =>
    { throw new Error("STUB"); },
  promptChangePivotRowsLabel: (count: number) => { throw new Error("STUB"); },
  promptChangePivotValuesLabel: (count: number) => { throw new Error("STUB"); },
  promptChangePivotValuesDescription: (column: string, aggregation: string) =>
    { throw new Error("STUB"); },
  // promptChangeChartsLabel: (dimensionsCount: number, valuesCount: number) => `Dimensions (${dimensionsCount}), Values (${valuesCount})`,
};

export const nnNO: Localization = getGridLocalization(nnNOGrid);
