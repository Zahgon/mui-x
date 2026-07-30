'use client';
import * as React from 'react';
import { useStableCallback } from '@base-ui/utils/useStableCallback';
import { EventManager } from '@mui/x-internals/EventManager';
import type {
  ContextValue,
  CreateModalConfig,
  ModalState,
  ProviderProps,
  TriggerProps,
} from './createModal.types';

export function createModal<TData>(config: CreateModalConfig) {
  const Context = React.createContext<ContextValue<TData> | undefined>(undefined);

  function useModalContext() {
    const context = React.useContext(Context);
    if (!context) {
      throw new Error(
        `MUI X Scheduler: \`${config.contextName}\` is missing. Hook must be placed within its Provider.`,
      );
    }
    return context;
  }

  function Provider(props: ProviderProps<TData>) {
      throw new Error("STUB");
  }

  const Trigger = React.forwardRef(function Trigger(
    props: TriggerProps<TData>,
    ref: React.ForwardedRef<HTMLElement | null>,
  ) {
      throw new Error("STUB");
  });

  return {
    Context,
    useContext: useModalContext,
    Provider,
    Trigger,
  };
}
