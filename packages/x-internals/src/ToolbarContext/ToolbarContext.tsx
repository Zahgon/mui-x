'use client';
import * as React from 'react';

export interface ToolbarContextValue {
  focusableItemId: string | null;
  registerItem: (id: string, ref: React.RefObject<HTMLButtonElement | null>) => void;
  unregisterItem: (id: string) => void;
  onItemKeyDown: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
  onItemFocus: (id: string) => void;
  onItemDisabled: (id: string, disabled: boolean) => void;
}

export const ToolbarContext = React.createContext<ToolbarContextValue | undefined>(undefined);

export function useToolbarContext() {
  const context = React.useContext(ToolbarContext);

  if (context === undefined) {
    throw new Error(
      'MUI X: Missing context. Toolbar subcomponents must be placed within a <Toolbar /> component.',
    );
  }

  return context;
}

type Item = {
  id: string;
  ref: React.RefObject<HTMLButtonElement | null>;
};

export function ToolbarContextProvider({ children }: React.PropsWithChildren) {
    throw new Error("STUB");
}

/* eslint-disable no-bitwise */
function sortByDocumentPosition(
  a: { ref: React.RefObject<HTMLButtonElement | null> },
  b: { ref: React.RefObject<HTMLButtonElement | null> },
) {
    throw new Error("STUB");
}
