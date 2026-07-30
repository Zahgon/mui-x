import type { RefObject } from '@mui/x-internals/types';
import { isDeepEqual } from '@mui/x-internals/isDeepEqual';
import {
  gridVisibleRowsSelector,
  gridVisibleColumnFieldsSelector,
  gridColumnFieldsSelector,
} from '@mui/x-data-grid-pro';
import type {
  GridCellEditStopParams,
  GridRowEditStopParams,
  GridEvents,
} from '@mui/x-data-grid-pro';
import type { GridApiPremium } from '../../../models/gridApiPremium';
import type { DataGridPremiumProcessedProps } from '../../../models/dataGridPremiumProps';
import type {
  GridHistoryEventHandler,
  GridCellEditHistoryData,
  GridRowEditHistoryData,
  GridClipboardPasteHistoryData,
} from './gridHistoryInterfaces';

/**
 * Create the default handler for cellEditStop events.
 */
export const createCellEditHistoryHandler = (
  apiRef: RefObject<GridApiPremium>,
): GridHistoryEventHandler<GridCellEditHistoryData> => {
  return {
    store: (params: GridCellEditStopParams) => {
          throw new Error("STUB");
      },

    validate: (data: GridCellEditHistoryData, direction: 'undo' | 'redo') => {
        throw new Error("STUB");
    },

    undo: async (data: GridCellEditHistoryData) => {
        throw new Error("STUB");
    },

    redo: async (data: GridCellEditHistoryData) => {
        throw new Error("STUB");
    },
  };
};

/**
 * Create the default handler for rowEditStop events.
 */
export const createRowEditHistoryHandler = (
  apiRef: RefObject<GridApiPremium>,
): GridHistoryEventHandler<GridRowEditHistoryData> => {
  return {
    store: (params: GridRowEditStopParams) => {
          throw new Error("STUB");
      },

    validate: (data: GridRowEditHistoryData, direction: 'undo' | 'redo') => {
        throw new Error("STUB");
    },

    undo: async (data: GridRowEditHistoryData) => {
        throw new Error("STUB");
    },

    redo: async (data: GridRowEditHistoryData) => {
        throw new Error("STUB");
    },
  };
};

/**
 * Create the default handler for clipboardPasteEnd events.
 */
export const createClipboardPasteHistoryHandler = (
  apiRef: RefObject<GridApiPremium>,
): GridHistoryEventHandler<GridClipboardPasteHistoryData> => {
  return {
    store: (params: GridClipboardPasteHistoryData) => { throw new Error("STUB"); },
    validate: (data: GridClipboardPasteHistoryData, direction: 'undo' | 'redo') => {
        throw new Error("STUB");
    },

    undo: async (data: GridClipboardPasteHistoryData) => {
        throw new Error("STUB");
    },

    redo: async (data: GridClipboardPasteHistoryData) => {
        throw new Error("STUB");
    },
  };
};

/**
 * Create the default history events map.
 */
export const createDefaultHistoryHandlers = (
  apiRef: RefObject<GridApiPremium>,
  props: Pick<DataGridPremiumProcessedProps, 'columns' | 'isCellEditable' | 'dataSource'>,
) => {
  const handlers = {} as Record<
    GridEvents,
    | GridHistoryEventHandler<GridCellEditHistoryData>
    | GridHistoryEventHandler<GridRowEditHistoryData>
    | GridHistoryEventHandler<GridClipboardPasteHistoryData>
  >;

  const canHaveEditing = props.isCellEditable || props.columns.some((col) => { throw new Error("STUB"); });

  if (!canHaveEditing) {
    return handlers;
  }

  if (!props.dataSource || props.dataSource.updateRow) {
    handlers.cellEditStop = createCellEditHistoryHandler(apiRef);
    handlers.rowEditStop = createRowEditHistoryHandler(apiRef);
  }

  if (!props.dataSource) {
    handlers.clipboardPasteEnd = createClipboardPasteHistoryHandler(apiRef);
  }

  return handlers;
};
