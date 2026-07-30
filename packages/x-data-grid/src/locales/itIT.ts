import type { GridLocaleText } from '../models/api/gridLocaleTextApi';
import { getGridLocalization, buildLocaleFormat } from '../utils/getGridLocalization';
import type { Localization } from '../utils/getGridLocalization';

const formatNumber = buildLocaleFormat('it-IT');

const itITGrid: Partial<GridLocaleText> = {
  // Root
  noRowsLabel: 'Nessun record',
  noResultsOverlayLabel: 'Nessun record trovato.',
  noColumnsOverlayLabel: 'Nessuna colonna',
  noColumnsOverlayManageColumns: 'Gestisci colonne',
  emptyPivotOverlayLabel: 'Aggiungi campi a righe, colonne e valori per creare una tabella pivot',

  // Density selector toolbar button text
  toolbarDensity: 'Densità',
  toolbarDensityLabel: 'Densità',
  toolbarDensityCompact: 'Compatta',
  toolbarDensityStandard: 'Standard',
  toolbarDensityComfortable: 'Comoda',

  // Undo/redo toolbar button text
  toolbarUndo: 'Annulla',
  toolbarRedo: 'Ripeti',

  // Columns selector toolbar button text
  toolbarColumns: 'Colonne',
  toolbarColumnsLabel: 'Seleziona le colonne',

  // Filters toolbar button text
  toolbarFilters: 'Filtri',
  toolbarFiltersLabel: 'Mostra i filtri',
  toolbarFiltersTooltipHide: 'Nascondi i filtri',
  toolbarFiltersTooltipShow: 'Mostra i filtri',
  toolbarFiltersTooltipActive: (count) =>
    { throw new Error("STUB"); },

  // Quick filter toolbar field
  toolbarQuickFilterPlaceholder: 'Cerca…',
  toolbarQuickFilterLabel: 'Cerca',
  toolbarQuickFilterDeleteIconLabel: 'Resetta',

  // Export selector toolbar button text
  toolbarExport: 'Esporta',
  toolbarExportLabel: 'Esporta',
  toolbarExportCSV: 'Esporta in CSV',
  toolbarExportPrint: 'Stampa',
  toolbarExportExcel: 'Scarica come Excel',

  // Toolbar pivot button
  toolbarPivot: 'Pivota',

  // Toolbar charts button
  toolbarCharts: 'Grafici',

  // Toolbar AI Assistant button
  toolbarAssistant: 'Assistente AI',

  // Columns management text
  columnsManagementSearchTitle: 'Cerca',
  columnsManagementNoColumns: 'Nessuna colonna',
  columnsManagementShowHideAllText: 'Mostra/Nascondi Tutto',
  columnsManagementReset: 'Resetta',
  columnsManagementDeleteIconLabel: 'Cancella',

  // Filter panel text
  filterPanelAddFilter: 'Aggiungi un filtro',
  filterPanelRemoveAll: 'Rimuovi filtri',
  filterPanelDeleteIconLabel: 'Rimuovi',
  filterPanelLogicOperator: 'Operatore logico',
  filterPanelOperator: 'Operatori',
  filterPanelOperatorAnd: 'E (and)',
  filterPanelOperatorOr: 'O (or)',
  filterPanelColumn: 'Colonne',
  filterPanelInputLabel: 'Valore',
  filterPanelInputPlaceholder: 'Filtra il valore',

  // Filter operators text
  filterOperatorContains: 'contiene',
  filterOperatorDoesNotContain: 'non contiene',
  filterOperatorEquals: 'uguale a',
  filterOperatorDoesNotEqual: 'diverso da',
  filterOperatorStartsWith: 'comincia per',
  filterOperatorEndsWith: 'termina per',
  filterOperatorIs: 'uguale a',
  filterOperatorNot: 'diverso da',
  filterOperatorAfter: 'dopo il',
  filterOperatorOnOrAfter: 'a partire dal',
  filterOperatorBefore: 'prima del',
  filterOperatorOnOrBefore: 'fino al',
  filterOperatorIsEmpty: 'è vuoto',
  filterOperatorIsNotEmpty: 'non è vuoto',
  filterOperatorIsAnyOf: 'è uno tra',
  'filterOperator=': '=',
  'filterOperator!=': '!=',
  'filterOperator>': '>',
  'filterOperator>=': '>=',
  'filterOperator<': '<',
  'filterOperator<=': '<=',

  // Header filter operators text
  headerFilterOperatorContains: 'Contiene',
  headerFilterOperatorDoesNotContain: 'Non contiene',
  headerFilterOperatorEquals: 'Uguale a',
  headerFilterOperatorDoesNotEqual: 'Diverso da',
  headerFilterOperatorStartsWith: 'Comincia per',
  headerFilterOperatorEndsWith: 'Termina per',
  headerFilterOperatorIs: 'Uguale a',
  headerFilterOperatorNot: 'Diverso da',
  headerFilterOperatorAfter: 'Dopo il',
  headerFilterOperatorOnOrAfter: 'A partire dal',
  headerFilterOperatorBefore: 'Prima del',
  headerFilterOperatorOnOrBefore: 'Fino al',
  headerFilterOperatorIsEmpty: 'È vuoto',
  headerFilterOperatorIsNotEmpty: 'Non è vuoto',
  headerFilterOperatorIsAnyOf: 'È uno tra',
  'headerFilterOperator=': 'Uguale a',
  'headerFilterOperator!=': 'Diverso da',
  'headerFilterOperator>': 'Maggiore di',
  'headerFilterOperator>=': 'Maggiore o uguale a',
  'headerFilterOperator<': 'Minore di',
  'headerFilterOperator<=': 'Minore o uguale a',
  headerFilterClear: 'Rimuovi filtri',

  // Filter values text
  filterValueAny: 'qualunque',
  filterValueTrue: 'vero',
  filterValueFalse: 'falso',

  // Column menu text
  columnMenuLabel: 'Menu',
  columnMenuAriaLabel: (columnName: string) => { throw new Error("STUB"); },
  columnMenuShowColumns: 'Mostra le colonne',
  columnMenuManageColumns: 'Gestisci colonne',
  columnMenuFilter: 'Filtra',
  columnMenuHideColumn: 'Nascondi',
  columnMenuUnsort: "Annulla l'ordinamento",
  columnMenuSortAsc: 'Ordinamento crescente',
  columnMenuSortDesc: 'Ordinamento decrescente',
  columnMenuManagePivot: 'Gestisci pivoting',
  columnMenuManageCharts: 'Gestisci grafici',

  // Column header text
  columnHeaderFiltersTooltipActive: (count) =>
    { throw new Error("STUB"); },
  columnHeaderFiltersLabel: 'Mostra i filtri',
  columnHeaderSortIconLabel: 'Ordina',

  // Rows selected footer text
  footerRowSelected: (count) =>
    { throw new Error("STUB"); },

  // Total row amount footer text
  footerTotalRows: 'Record totali:',

  // Total visible row amount footer text
  footerTotalVisibleRows: (visibleCount, totalCount) =>
    { throw new Error("STUB"); },

  // Checkbox selection text
  checkboxSelectionHeaderName: 'Seleziona',
  checkboxSelectionSelectAllRows: 'Seleziona tutte le righe',
  checkboxSelectionUnselectAllRows: 'Deseleziona tutte le righe',
  checkboxSelectionSelectRow: 'Seleziona riga',
  checkboxSelectionUnselectRow: 'Deseleziona riga',

  // Boolean cell text
  booleanCellTrueLabel: 'vero',
  booleanCellFalseLabel: 'falso',

  // Long text cell
  longTextCellExpandLabel: 'Espandi',
  longTextCellCollapseLabel: 'Comprimi',

  // Actions cell more text
  actionsCellMore: 'più',

  // Column pinning text
  pinToLeft: 'Blocca a sinistra',
  pinToRight: 'Blocca a destra',
  unpin: 'Sblocca',

  // Tree Data
  treeDataGroupingHeaderName: 'Gruppo',
  treeDataExpand: 'mostra figli',
  treeDataCollapse: 'nascondi figli',

  // Grouping columns
  groupingColumnHeaderName: 'Gruppo',
  groupColumn: (name) => { throw new Error("STUB"); },
  unGroupColumn: (name) => { throw new Error("STUB"); },

  // Master/detail
  detailPanelToggle: 'Abilita pannello dettagli',
  expandDetailPanel: 'Espandi',
  collapseDetailPanel: 'Comprimi',

  // Pagination
  paginationRowsPerPage: 'Righe per pagina:',
  paginationDisplayedRows: ({ from, to, count, estimated }) => {
      throw new Error("STUB");
  },
  paginationItemAriaLabel: (type) => {
      throw new Error("STUB");
  },

  // Row reordering text
  rowReorderingHeaderName: 'Riordinamento righe',

  // Aggregation
  aggregationMenuItemHeader: 'aggregazione',
  aggregationFunctionLabelNone: 'nessuna',
  aggregationFunctionLabelSum: 'somma',
  aggregationFunctionLabelAvg: 'media',
  aggregationFunctionLabelMin: 'minimo',
  aggregationFunctionLabelMax: 'massimo',
  aggregationFunctionLabelSize: 'numero di elementi',

  // Pivot panel
  pivotToggleLabel: 'Pivota la tabella',
  pivotRows: 'Righe',
  pivotColumns: 'Colonne',
  pivotValues: 'Valori',
  pivotCloseButton: 'Chiudi impostazioni di trasposizione',
  pivotSearchButton: 'Cerca attributi',
  pivotSearchControlPlaceholder: 'Cerca attributi',
  pivotSearchControlLabel: 'Cerca attributi',
  pivotSearchControlClear: 'Annulla ricerca',
  pivotNoFields: 'Nessun attributo',
  pivotMenuMoveUp: 'Sposta in alto',
  pivotMenuMoveDown: 'Sposta in basso',
  pivotMenuMoveToTop: 'Sposta in cima',
  pivotMenuMoveToBottom: 'Sposta in fondo',
  pivotMenuRows: 'Righe',
  pivotMenuColumns: 'Colonne',
  pivotMenuValues: 'Valori',
  pivotMenuOptions: 'Opzioni',
  pivotMenuAddToRows: 'Aggiungi alle Righe',
  pivotMenuAddToColumns: 'Aggiungi alle Colonne',
  pivotMenuAddToValues: 'Aggiungi ai Valori',
  pivotMenuRemove: 'Rimuovi',
  pivotDragToRows: 'Trascina qui per creare le righe',
  pivotDragToColumns: 'Trascina qui per creare le colonne',
  pivotDragToValues: 'Trascina qui per creare valori',
  pivotYearColumnHeaderName: '(Anno)',
  pivotQuarterColumnHeaderName: '(Quarto)',

  // Charts configuration panel
  chartsNoCharts: 'Non ci sono grafici disponibili',
  chartsChartNotSelected: 'Seleziona un tipo di grafico per configurarne le opzioni',
  chartsTabChart: 'Grafico',
  chartsTabFields: 'Attributi',
  chartsTabCustomize: 'Personalizza',
  chartsCloseButton: 'Chiudi la configurazione dei grafici',
  chartsSyncButtonLabel: 'Sincronizza grafico',
  chartsSearchPlaceholder: 'Cerca attributi',
  chartsSearchLabel: 'Cerca attributi',
  chartsSearchClear: 'Annulla ricerca',
  chartsNoFields: 'Nessun attributo',
  chartsFieldBlocked: 'Questo attributo non può essere aggiunto ad alcuna sezione',
  chartsCategories: 'Categorie',
  chartsSeries: 'Serie',
  chartsMenuAddToDimensions: (dimensionLabel: string) => { throw new Error("STUB"); },
  chartsMenuAddToValues: (valuesLabel: string) => { throw new Error("STUB"); },
  chartsMenuMoveUp: 'Sposta in alto',
  chartsMenuMoveDown: 'Sposta in basso',
  chartsMenuMoveToTop: 'Sposta in cima',
  chartsMenuMoveToBottom: 'Sposta in fondo',
  chartsMenuOptions: "Opzioni per l'attributo",
  chartsMenuRemove: 'Rimuovi',
  chartsDragToDimensions: (dimensionLabel: string) =>
    { throw new Error("STUB"); },
  chartsDragToValues: (valuesLabel: string) =>
    { throw new Error("STUB"); },

  // AI Assistant panel
  aiAssistantPanelTitle: 'Assistente AI',
  aiAssistantPanelClose: 'Chiudi Assistente AI',
  aiAssistantPanelNewConversation: 'Nuova Conversazione',
  aiAssistantPanelConversationHistory: 'Conversazioni precedenti',
  aiAssistantPanelEmptyConversation: 'Nessuna conversazione precedente',
  aiAssistantSuggestions: 'Suggerimenti:',

  // Prompt field
  promptFieldLabel: 'Prompt',
  promptFieldPlaceholder: 'Scrivi un prompt…',
  promptFieldPlaceholderWithRecording: 'Scrivi o registra un prompt…',
  promptFieldPlaceholderListening: 'In attesa di un prompt…',
  promptFieldSpeechRecognitionNotSupported:
    'Il riconoscimento vocale non è supportato dal tuo browser.',
  promptFieldSend: 'Invia',
  promptFieldRecord: 'Registra',
  promptFieldStopRecording: 'Interrompi registrazione',

  // Prompt
  promptRerun: 'Esegui nuovamente',
  promptProcessing: 'In elaborazione…',
  promptAppliedChanges: 'Cambiamenti applicati',

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
  promptChangePivotEnableLabel: 'Pivota',
  promptChangePivotEnableDescription: 'Abilita pivoting',
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

export const itIT: Localization = getGridLocalization(itITGrid);
