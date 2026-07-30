import type { GridLocaleText } from '../models/api/gridLocaleTextApi';
import { getGridLocalization, buildLocaleFormat } from '../utils/getGridLocalization';
import type { Localization } from '../utils/getGridLocalization';

const formatNumber = buildLocaleFormat('ca-ES');

const caESGrid: Partial<GridLocaleText> = {
  // Root
  noRowsLabel: 'Sense files',
  noResultsOverlayLabel: "No s'han trobat resultats",
  noColumnsOverlayLabel: 'Cap columna',
  noColumnsOverlayManageColumns: 'Gestiona les columnes',
  emptyPivotOverlayLabel: 'Afegiu camps a files, columnes i valors per crear una taula dinàmica',

  // Density selector toolbar button text
  toolbarDensity: 'Densitat',
  toolbarDensityLabel: 'Densitat',
  toolbarDensityCompact: 'Compacta',
  toolbarDensityStandard: 'Estàndard',
  toolbarDensityComfortable: 'Còmoda',

  // Undo/redo toolbar button text
  toolbarUndo: 'Desfés',
  toolbarRedo: 'Refés',

  // Columns selector toolbar button text
  toolbarColumns: 'Columnes',
  toolbarColumnsLabel: 'Selecciona columnes',

  // Filters toolbar button text
  toolbarFilters: 'Filtres',
  toolbarFiltersLabel: 'Mostra filtres',
  toolbarFiltersTooltipHide: 'Amaga filtres',
  toolbarFiltersTooltipShow: 'Mostra filtres',
  toolbarFiltersTooltipActive: (count) =>
    { throw new Error("STUB"); },

  // Quick filter toolbar field
  toolbarQuickFilterPlaceholder: 'Cerca…',
  toolbarQuickFilterLabel: 'Cerca',
  toolbarQuickFilterDeleteIconLabel: 'Neteja',

  // Export selector toolbar button text
  toolbarExport: 'Exporta',
  toolbarExportLabel: 'Exporta',
  toolbarExportCSV: 'Baixa com a CSV',
  toolbarExportPrint: 'Imprimeix',
  toolbarExportExcel: 'Baixa com a Excel',

  // Toolbar pivot button
  toolbarPivot: 'Taula dinàmica',

  // Toolbar charts button
  toolbarCharts: 'Gràfics',

  // Toolbar AI Assistant button
  toolbarAssistant: "Assistent d'IA",

  // Columns management text
  columnsManagementSearchTitle: 'Cerca',
  columnsManagementNoColumns: 'Sense columnes',
  columnsManagementShowHideAllText: 'Mostra/Amaga-ho tot',
  columnsManagementReset: 'Restableix',
  columnsManagementDeleteIconLabel: 'Neteja',

  // Filter panel text
  filterPanelAddFilter: 'Afegeix filtre',
  filterPanelRemoveAll: "Elimina'ls tots",
  filterPanelDeleteIconLabel: 'Esborra',
  filterPanelLogicOperator: 'Operador lògic',
  filterPanelOperator: 'Operadors',
  filterPanelOperatorAnd: 'I',
  filterPanelOperatorOr: 'O',
  filterPanelColumn: 'Columnes',
  filterPanelInputLabel: 'Valor',
  filterPanelInputPlaceholder: 'Valor del filtre',

  // Filter operators text
  filterOperatorContains: 'conté',
  filterOperatorDoesNotContain: 'no conté',
  filterOperatorEquals: 'és igual a',
  filterOperatorDoesNotEqual: 'no és igual a',
  filterOperatorStartsWith: 'comença per',
  filterOperatorEndsWith: 'acaba en',
  filterOperatorIs: 'és',
  filterOperatorNot: 'no és',
  filterOperatorAfter: 'és posterior',
  filterOperatorOnOrAfter: 'és igual o posterior',
  filterOperatorBefore: 'és anterior',
  filterOperatorOnOrBefore: 'és igual o anterior',
  filterOperatorIsEmpty: 'està buit',
  filterOperatorIsNotEmpty: 'no està buit',
  filterOperatorIsAnyOf: 'és qualsevol de',
  'filterOperator=': '=',
  'filterOperator!=': '!=',
  'filterOperator>': '>',
  'filterOperator>=': '>=',
  'filterOperator<': '<',
  'filterOperator<=': '<=',

  // Header filter operators text
  headerFilterOperatorContains: 'Conté',
  headerFilterOperatorDoesNotContain: 'No conté',
  headerFilterOperatorEquals: 'És igual a',
  headerFilterOperatorDoesNotEqual: 'No és igual a',
  headerFilterOperatorStartsWith: 'Comença per',
  headerFilterOperatorEndsWith: 'Acaba en',
  headerFilterOperatorIs: 'És',
  headerFilterOperatorNot: 'No és',
  headerFilterOperatorAfter: 'És posterior a',
  headerFilterOperatorOnOrAfter: 'És igual o posterior a',
  headerFilterOperatorBefore: 'És anterior a',
  headerFilterOperatorOnOrBefore: 'És igual o anterior a',
  headerFilterOperatorIsEmpty: 'Està buit',
  headerFilterOperatorIsNotEmpty: 'No està buit',
  headerFilterOperatorIsAnyOf: 'És qualsevol de',
  'headerFilterOperator=': 'És igual a',
  'headerFilterOperator!=': 'No és igual a',
  'headerFilterOperator>': 'És més gran que',
  'headerFilterOperator>=': 'És més gran o igual que',
  'headerFilterOperator<': 'És més petit que',
  'headerFilterOperator<=': 'És més petit o igual que',
  headerFilterClear: 'Neteja filtres',

  // Filter values text
  filterValueAny: 'qualsevol',
  filterValueTrue: 'veritable',
  filterValueFalse: 'fals',

  // Column menu text
  columnMenuLabel: 'Menú',
  columnMenuAriaLabel: (columnName: string) => { throw new Error("STUB"); },
  columnMenuShowColumns: 'Mostra columnes',
  columnMenuManageColumns: 'Gestiona columnes',
  columnMenuFilter: 'Filtre',
  columnMenuHideColumn: 'Amaga',
  columnMenuUnsort: 'Desordena',
  columnMenuSortAsc: 'Ordena ASC',
  columnMenuSortDesc: 'Ordena DESC',
  columnMenuManagePivot: 'Gestiona la taula dinàmica',
  columnMenuManageCharts: 'Gestiona els gràfics',

  // Column header text
  columnHeaderFiltersTooltipActive: (count) =>
    { throw new Error("STUB"); },
  columnHeaderFiltersLabel: 'Mostra filtres',
  columnHeaderSortIconLabel: 'Ordena',

  // Rows selected footer text
  footerRowSelected: (count) =>
    { throw new Error("STUB"); },

  // Total row amount footer text
  footerTotalRows: 'Files totals:',

  // Total visible row amount footer text
  footerTotalVisibleRows: (visibleCount, totalCount) =>
    { throw new Error("STUB"); },

  // Checkbox selection text
  checkboxSelectionHeaderName: 'Casella de selecció',
  checkboxSelectionSelectAllRows: 'Selecciona totes les files',
  checkboxSelectionUnselectAllRows: 'Desselecciona totes les files',
  checkboxSelectionSelectRow: 'Selecciona fila',
  checkboxSelectionUnselectRow: 'Desselecciona fila',

  // Boolean cell text
  booleanCellTrueLabel: 'sí',
  booleanCellFalseLabel: 'no',

  // Long text cell
  longTextCellExpandLabel: 'Expandeix',
  longTextCellCollapseLabel: 'Contrau',

  // Actions cell more text
  actionsCellMore: 'més',

  // Column pinning text
  pinToLeft: "Fixa a l'esquerra",
  pinToRight: 'Fixa a la dreta',
  unpin: 'Desfixa',

  // Tree Data
  treeDataGroupingHeaderName: 'Grup',
  treeDataExpand: 'mostra fills',
  treeDataCollapse: 'amaga fills',

  // Grouping columns
  groupingColumnHeaderName: 'Grup',
  groupColumn: (name) => { throw new Error("STUB"); },
  unGroupColumn: (name) => { throw new Error("STUB"); },

  // Master/detail
  detailPanelToggle: 'Alterna detall',
  expandDetailPanel: 'Expandeix',
  collapseDetailPanel: 'Contrau',

  // Pagination
  paginationRowsPerPage: 'Files per pàgina:',
  paginationDisplayedRows: ({ from, to, count, estimated }) => {
      throw new Error("STUB");
  },
  paginationItemAriaLabel: (type) => {
      throw new Error("STUB");
  },

  // Row reordering text
  rowReorderingHeaderName: 'Reordena files',

  // Aggregation
  aggregationMenuItemHeader: 'Agregació',
  aggregationFunctionLabelNone: 'cap',
  aggregationFunctionLabelSum: 'suma',
  aggregationFunctionLabelAvg: 'mitjana',
  aggregationFunctionLabelMin: 'mínim',
  aggregationFunctionLabelMax: 'màxim',
  aggregationFunctionLabelSize: 'recompte',

  // Pivot panel
  pivotToggleLabel: 'Taula dinàmica',
  pivotRows: 'Files',
  pivotColumns: 'Columnes',
  pivotValues: 'Valors',
  pivotCloseButton: 'Tanca la configuració de taula dinàmica',
  pivotSearchButton: 'Camps de cerca',
  pivotSearchControlPlaceholder: 'Camps de cerca',
  pivotSearchControlLabel: 'Camps de cerca',
  pivotSearchControlClear: 'Neteja la cerca',
  pivotNoFields: 'Cap camp',
  pivotMenuMoveUp: 'Mou amunt',
  pivotMenuMoveDown: 'Mou avall',
  pivotMenuMoveToTop: 'Mou al principi',
  pivotMenuMoveToBottom: 'Mou al final',
  pivotMenuRows: 'Files',
  pivotMenuColumns: 'Columnes',
  pivotMenuValues: 'Valors',
  pivotMenuOptions: 'Opcions del camp',
  pivotMenuAddToRows: 'Afegeix a files',
  pivotMenuAddToColumns: 'Afegeix a columnes',
  pivotMenuAddToValues: 'Afegeix a valors',
  pivotMenuRemove: 'Elimina',
  pivotDragToRows: 'Arrossega aquí per crear files',
  pivotDragToColumns: 'Arrossega aquí per crear columnes',
  pivotDragToValues: 'Arrossega aquí per crear valors',
  pivotYearColumnHeaderName: '(Any)',
  pivotQuarterColumnHeaderName: '(Trimestre)',

  // Charts configuration panel
  chartsNoCharts: 'No hi ha cap gràfic disponible',
  chartsChartNotSelected: 'Selecciona un tipus de gràfic per configurar les seves opcions',
  chartsTabChart: 'Gràfic',
  chartsTabFields: 'Camps',
  chartsTabCustomize: 'Personalitza',
  chartsCloseButton: 'Tanca la configuració de gràfics',
  chartsSyncButtonLabel: 'Sincronitza gràfic',
  chartsSearchPlaceholder: 'Camps de cerca',
  chartsSearchLabel: 'Camps de cerca',
  chartsSearchClear: 'Neteja la cerca',
  chartsNoFields: 'Cap camp',
  chartsFieldBlocked: 'Aquest camp no es pot afegir a cap secció',
  chartsCategories: 'Categories',
  chartsSeries: 'Sèries',
  chartsMenuAddToDimensions: (dimensionLabel: string) => { throw new Error("STUB"); },
  chartsMenuAddToValues: (valuesLabel: string) => { throw new Error("STUB"); },
  chartsMenuMoveUp: 'Mou amunt',
  chartsMenuMoveDown: 'Mou avall',
  chartsMenuMoveToTop: 'Mou al principi',
  chartsMenuMoveToBottom: 'Mou al final',
  chartsMenuOptions: 'Opcions del camp',
  chartsMenuRemove: 'Elimina',
  chartsDragToDimensions: (dimensionLabel: string) =>
    { throw new Error("STUB"); },
  chartsDragToValues: (valuesLabel: string) =>
    { throw new Error("STUB"); },

  // AI Assistant panel
  aiAssistantPanelTitle: "Assistent d'IA",
  aiAssistantPanelClose: "Tanca l'assistent d'IA",
  aiAssistantPanelNewConversation: 'Nova conversa',
  aiAssistantPanelConversationHistory: 'Historial de converses',
  aiAssistantPanelEmptyConversation: "L'historial de converses és buit",
  aiAssistantSuggestions: 'Suggeriments',

  // Prompt field
  promptFieldLabel: 'Petició',
  promptFieldPlaceholder: 'Escriu una petició…',
  promptFieldPlaceholderWithRecording: 'Escriu o enregistra una petició…',
  promptFieldPlaceholderListening: 'Esperant una petició…',
  promptFieldSpeechRecognitionNotSupported:
    'El reconeixement de veu no és compatible amb aquest navegador',
  promptFieldSend: 'Envia',
  promptFieldRecord: 'Enregistra',
  promptFieldStopRecording: "Atura l'enregistrament",

  // Prompt
  promptRerun: 'Torna a executar',
  promptProcessing: 'Processant…',
  promptAppliedChanges: "S'han aplicat els canvis",

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
  promptChangePivotEnableLabel: 'Taula dinàmica',
  promptChangePivotEnableDescription: 'Activa la taula dinàmica',
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

export const caES: Localization = getGridLocalization(caESGrid);
