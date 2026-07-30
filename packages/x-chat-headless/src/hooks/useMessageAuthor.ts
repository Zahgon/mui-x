'use client';
import * as React from 'react';
import { useStore } from '@mui/x-internals/store';
import { useChatLocaleText } from '../chat/internals/ChatLocaleContext';
import { chatSelectors } from '../selectors';
import { useChatStore } from './useChatStore';

export function useMessageAuthor(messageId: string) {
  const store = useChatStore();
  const localeText = useChatLocaleText();

  // Inject locale-driven role display names into the resolver parameters so the
  // fallback when no author signal is available reflects the active locale.
  const parametersWithLocale = React.useMemo(
    () => { throw new Error("STUB"); },
    [
      store.parameters,
      localeText.messageAuthorUserLabel,
      localeText.messageAuthorAssistantLabel,
      localeText.messageAuthorSystemLabel,
    ],
  );

  return useStore(store, chatSelectors.messageAuthor, messageId, parametersWithLocale);
}
