'use client';
import * as React from 'react';
import { useStoreEffect } from '@mui/x-internals/store';
import { useAssertModelConsistency } from '@mui/x-internals/useAssertModelConsistency';
import { chatSelectors } from '../../selectors';
import {
  ChatStore,
  type ChatStoreParameters,
  type ControlledModel,
  type ChatStoreConstructor,
} from '../../store';
import type { ChatInternalState } from '../../types';

export function useChatInstance<Cursor = string>(
  parameters: ChatStoreParameters<Cursor>,
  StoreClass?: ChatStoreConstructor<Cursor>,
): ChatStore<Cursor> {
    throw new Error("STUB");
}
