import type { GridLocaleText } from '../models/api/gridLocaleTextApi';
import { getGridLocalization } from '../utils/getGridLocalization';
import type { Localization } from '../utils/getGridLocalization';

const svSEGrid: Partial<GridLocaleText> = {
  // Root
  noRowsLabel: 'Inga rader',
  noResultsOverlayLabel: 'Inga resultat funna.',
  noColumnsOverlayLabel: 'Inga kolumner',
  noColumnsOverlayManageColumns: 'Hantera kolumner',
  emptyPivotOverlayLabel:
    'Lägg till fält i rader, kolumner och värden för att skapa en pivottabell',

  // Density selector toolbar button text
  toolbarDensity: 'Densitet',
  toolbarDensityLabel: 'Densitet',
  toolbarDensityCompact: 'Kompakt',
  toolbarDensityStandard: 'Standard',
  toolbarDensityComfortable: 'Luftig',

  // Undo/redo toolbar button text
  toolbarUndo: 'Ångra',
  toolbarRedo: 'Gör om',

  // Columns selector toolbar button text
  toolbarColumns: 'Kolumner',
  toolbarColumnsLabel: 'Välj kolumner',

  // Filters toolbar button text
  toolbarFilters: 'Filter',
  toolbarFiltersLabel: 'Visa filter',
  toolbarFiltersTooltipHide: 'Dölj filter',
  toolbarFiltersTooltipShow: 'Visa filter',
  toolbarFiltersTooltipActive: (count) =>
    { throw new Error("STUB"); },

  // Quick filter toolbar field
  toolbarQuickFilterPlaceholder: 'Sök…',
  toolbarQuickFilterLabel: 'Sök',
  toolbarQuickFilterDeleteIconLabel: 'Rensa',

  // Export selector toolbar button text
  toolbarExport: 'Exportera',
  toolbarExportLabel: 'Exportera',
  toolbarExportCSV: 'Ladda ner som CSV',
  toolbarExportPrint: 'Skriv ut',
  toolbarExportExcel: 'Ladda ner som Excel',

  // Toolbar pivot button
  toolbarPivot: 'Pivot',

  // Toolbar charts button
  toolbarCharts: 'Diagram',

  // Toolbar AI Assistant button
  toolbarAssistant: 'AI assistent',

  // Columns management text
  columnsManagementSearchTitle: 'Sök',
  columnsManagementNoColumns: 'Inga kolumner',
  columnsManagementShowHideAllText: 'Visa/Dölj alla',
  columnsManagementReset: 'Återställ',
  columnsManagementDeleteIconLabel: 'Rensa',

  // Filter panel text
  filterPanelAddFilter: 'Lägg till filter',
  filterPanelRemoveAll: 'Ta bort alla',
  filterPanelDeleteIconLabel: 'Ta bort',
  filterPanelLogicOperator: 'Logisk operator',
  filterPanelOperator: 'Operator',
  filterPanelOperatorAnd: 'Och',
  filterPanelOperatorOr: 'Eller',
  filterPanelColumn: 'Kolumner',
  filterPanelInputLabel: 'Värde',
  filterPanelInputPlaceholder: 'Filtervärde',

  // Filter operators text
  filterOperatorContains: 'innehåller',
  filterOperatorDoesNotContain: 'innehåller inte',
  filterOperatorEquals: 'lika med',
  filterOperatorDoesNotEqual: 'inte lika med',
  filterOperatorStartsWith: 'börjar med',
  filterOperatorEndsWith: 'slutar med',
  filterOperatorIs: 'är',
  filterOperatorNot: 'är inte',
  filterOperatorAfter: 'är efter',
  filterOperatorOnOrAfter: 'är på eller efter',
  filterOperatorBefore: 'är innan',
  filterOperatorOnOrBefore: 'är på eller innan',
  filterOperatorIsEmpty: 'är tom',
  filterOperatorIsNotEmpty: 'är inte tom',
  filterOperatorIsAnyOf: 'är någon av',
  'filterOperator=': '=',
  'filterOperator!=': '!=',
  'filterOperator>': '>',
  'filterOperator>=': '>=',
  'filterOperator<': '<',
  'filterOperator<=': '<=',

  // Header filter operators text
  headerFilterOperatorContains: 'Innehåller',
  headerFilterOperatorDoesNotContain: 'Innehåller inte',
  headerFilterOperatorEquals: 'Lika med',
  headerFilterOperatorDoesNotEqual: 'Inte lika med',
  headerFilterOperatorStartsWith: 'Börjar med',
  headerFilterOperatorEndsWith: 'Slutar med',
  headerFilterOperatorIs: 'Är',
  headerFilterOperatorNot: 'Är inte',
  headerFilterOperatorAfter: 'Är efter',
  headerFilterOperatorOnOrAfter: 'Är på eller efter',
  headerFilterOperatorBefore: 'Är innan',
  headerFilterOperatorOnOrBefore: 'Är på eller innan',
  headerFilterOperatorIsEmpty: 'Är tom',
  headerFilterOperatorIsNotEmpty: 'Är inte tom',
  headerFilterOperatorIsAnyOf: 'Innehåller någon av',
  'headerFilterOperator=': 'Lika med',
  'headerFilterOperator!=': 'Inte lika med',
  'headerFilterOperator>': 'Större än',
  'headerFilterOperator>=': 'Större eller lika med',
  'headerFilterOperator<': 'Mindre än',
  'headerFilterOperator<=': 'Mindre eller lika med',
  headerFilterClear: 'Rensa filter',

  // Filter values text
  filterValueAny: 'något',
  filterValueTrue: 'sant',
  filterValueFalse: 'falskt',

  // Column menu text
  columnMenuLabel: 'Meny',
  columnMenuAriaLabel: (columnName: string) => { throw new Error("STUB"); },
  columnMenuShowColumns: 'Visa kolumner',
  columnMenuManageColumns: 'Hantera kolumner',
  columnMenuFilter: 'Filtrera',
  columnMenuHideColumn: 'Dölj',
  columnMenuUnsort: 'Ta bort sortering',
  columnMenuSortAsc: 'Sortera stigande',
  columnMenuSortDesc: 'Sortera fallande',
  columnMenuManagePivot: 'Hantera pivot',
  columnMenuManageCharts: 'Hantera diagram',

  // Column header text
  columnHeaderFiltersTooltipActive: (count) =>
    { throw new Error("STUB"); },
  columnHeaderFiltersLabel: 'Visa filter',
  columnHeaderSortIconLabel: 'Sortera',

  // Rows selected footer text
  footerRowSelected: (count) =>
    { throw new Error("STUB"); },

  // Total row amount footer text
  footerTotalRows: 'Totalt antal rader:',

  // Total visible row amount footer text
  footerTotalVisibleRows: (visibleCount, totalCount) =>
    { throw new Error("STUB"); },

  // Checkbox selection text
  checkboxSelectionHeaderName: 'Markering med kryssruta',
  checkboxSelectionSelectAllRows: 'Markera alla rader',
  checkboxSelectionUnselectAllRows: 'Avmarkera alla rader',
  checkboxSelectionSelectRow: 'Markera rad',
  checkboxSelectionUnselectRow: 'Avmarkera rad',

  // Boolean cell text
  booleanCellTrueLabel: 'ja',
  booleanCellFalseLabel: 'nej',

  // Long text cell
  longTextCellExpandLabel: 'Expandera',
  longTextCellCollapseLabel: 'Kollapsa',

  // Actions cell more text
  actionsCellMore: 'mer',

  // Column pinning text
  pinToLeft: 'Lås till vänster',
  pinToRight: 'Lås till höger',
  unpin: 'Lås upp',

  // Tree Data
  treeDataGroupingHeaderName: 'Grupp',
  treeDataExpand: 'visa underordnade',
  treeDataCollapse: 'dölj underordnade',

  // Grouping columns
  groupingColumnHeaderName: 'Grupp',
  groupColumn: (name) => { throw new Error("STUB"); },
  unGroupColumn: (name) => { throw new Error("STUB"); },

  // Master/detail
  detailPanelToggle: 'Växla detaljpanel',
  expandDetailPanel: 'Expandera',
  collapseDetailPanel: 'Kollapsa',

  // Pagination
  paginationRowsPerPage: 'Rader per sida:',
  paginationDisplayedRows: ({ from, to, count, estimated }) => {
      throw new Error("STUB");
  },
  paginationItemAriaLabel: (type) => {
      throw new Error("STUB");
  },

  // Row reordering text
  rowReorderingHeaderName: 'Ordna om rader',

  // Aggregation
  aggregationMenuItemHeader: 'Aggregering',
  aggregationFunctionLabelNone: 'ingen',
  aggregationFunctionLabelSum: 'summa',
  aggregationFunctionLabelAvg: 'medel',
  aggregationFunctionLabelMin: 'min',
  aggregationFunctionLabelMax: 'max',
  aggregationFunctionLabelSize: 'antal',

  // Pivot panel
  pivotToggleLabel: 'Pivot',
  pivotRows: 'Rader',
  pivotColumns: 'Kolumner',
  pivotValues: 'Värden',
  pivotCloseButton: 'Stäng pivotinställningar',
  pivotSearchButton: 'Sökfält',
  pivotSearchControlPlaceholder: 'Sökfält',
  pivotSearchControlLabel: 'Sökfält',
  pivotSearchControlClear: 'Rensa sökfält',
  pivotNoFields: 'Inga fält',
  pivotMenuMoveUp: 'Flytta upp',
  pivotMenuMoveDown: 'Flytta ned',
  pivotMenuMoveToTop: 'Flytta till toppen',
  pivotMenuMoveToBottom: 'Flytta till botten',
  pivotMenuRows: 'Rader',
  pivotMenuColumns: 'Kolumner',
  pivotMenuValues: 'Värden',
  pivotMenuOptions: 'Fältalternativ',
  pivotMenuAddToRows: 'Lägg till i rader',
  pivotMenuAddToColumns: 'Lägg till i kolumner',
  pivotMenuAddToValues: 'Lägg till i värden',
  pivotMenuRemove: 'Ta bort',
  pivotDragToRows: 'Dra hit för att skapa rader',
  pivotDragToColumns: 'Dra hit för att skapa kolumner',
  pivotDragToValues: 'Dra hit för att skapa värden',
  pivotYearColumnHeaderName: '(År)',
  pivotQuarterColumnHeaderName: '(Kvartal)',

  // Charts configuration panel
  chartsNoCharts: 'Det finns inga diagram tillgängliga',
  chartsChartNotSelected: 'Välj en diagramtyp för att konfigurera alternativ',
  chartsTabChart: 'Diagram',
  chartsTabFields: 'Fält',
  chartsTabCustomize: 'Anpassa',
  chartsCloseButton: 'Stäng diagramkonfiguration',
  chartsSyncButtonLabel: 'Synkronisera diagram',
  chartsSearchPlaceholder: 'Sök fält',
  chartsSearchLabel: 'Sök fält',
  chartsSearchClear: 'Rensa sökning',
  chartsNoFields: 'Inga fält',
  chartsFieldBlocked: 'Det här fältet kan inte läggas till i någon sektion',
  chartsCategories: 'Kategorier',
  chartsSeries: 'Serie',
  chartsMenuAddToDimensions: (dimensionLabel: string) => { throw new Error("STUB"); },
  chartsMenuAddToValues: (valuesLabel: string) => { throw new Error("STUB"); },
  chartsMenuMoveUp: 'Flytta upp',
  chartsMenuMoveDown: 'Flytta ned',
  chartsMenuMoveToTop: 'Flytta till toppen',
  chartsMenuMoveToBottom: 'Flytta till botten',
  chartsMenuOptions: 'Fältalternativ',
  chartsMenuRemove: 'Ta bort',
  chartsDragToDimensions: (dimensionLabel: string) =>
    { throw new Error("STUB"); },
  chartsDragToValues: (valuesLabel: string) =>
    { throw new Error("STUB"); },

  // AI Assistant panel
  aiAssistantPanelTitle: 'AI assistent',
  aiAssistantPanelClose: 'Stäng AI assistent',
  aiAssistantPanelNewConversation: 'Ny konversation',
  aiAssistantPanelConversationHistory: 'Konversationshistorik',
  aiAssistantPanelEmptyConversation: 'Ingen prompthistorik',
  aiAssistantSuggestions: 'Förslag',

  // Prompt field
  promptFieldLabel: 'Prompt',
  promptFieldPlaceholder: 'Skriv en prompt…',
  promptFieldPlaceholderWithRecording: 'Skriv eller spela in en prompt…',
  promptFieldPlaceholderListening: 'Lyssnar efter prompt…',
  promptFieldSpeechRecognitionNotSupported: 'Taligenkänning stöds inte av webbläsaren',
  promptFieldSend: 'Skicka',
  promptFieldRecord: 'Spela in',
  promptFieldStopRecording: 'Stoppa inspelning',

  // Prompt
  promptRerun: 'Kör igen',
  promptProcessing: 'Bearbetar…',
  promptAppliedChanges: 'Tillämpade ändringar',

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
  promptChangePivotEnableDescription: 'Aktivera pivot',
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

export const svSE: Localization = getGridLocalization(svSEGrid);
