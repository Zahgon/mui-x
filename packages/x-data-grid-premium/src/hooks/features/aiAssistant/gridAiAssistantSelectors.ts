import {
  createSelector,
  createRootSelector,
  createSelectorMemoized,
} from '@mui/x-data-grid-pro/internals';
import type { GridStatePremium } from '../../../models/gridStatePremium';
import type { Conversation } from './gridAiAssistantInterfaces';

const gridAiAssistantStateSelector = createRootSelector(
  (state: GridStatePremium) => { throw new Error("STUB"); },
);

export const gridAiAssistantActiveConversationIndexSelector = createSelector(
  gridAiAssistantStateSelector,
  (aiAssistant) => { throw new Error("STUB"); },
);

export const gridAiAssistantConversationsSelector = createSelector(
  gridAiAssistantStateSelector,
  (aiAssistant) => { throw new Error("STUB"); },
);

export const gridAiAssistantActiveConversationSelector = createSelectorMemoized(
  gridAiAssistantConversationsSelector,
  gridAiAssistantActiveConversationIndexSelector,
  (conversations, index) => { throw new Error("STUB"); },
);
