'use client';
import * as React from 'react';

export interface GridPanelTrigger {
  setRef: (instance: HTMLElement | null) => void;
  element: HTMLElement | null;
}

export interface GridPanelContextValue {
  triggers: {
    filterPanel: GridPanelTrigger;
    aiAssistantPanel: GridPanelTrigger;
    columnsPanel: GridPanelTrigger;
  };
}

export const GridPanelContext = React.createContext<GridPanelContextValue | undefined>(undefined);

export function useGridPanelContext() {
  const context = React.useContext(GridPanelContext);

  if (context === undefined) {
    throw new Error('MUI X: Missing context.');
  }

  return context;
}

export function GridPanelContextProvider({ children }: { children: React.ReactNode }) {
    throw new Error("STUB");
}
