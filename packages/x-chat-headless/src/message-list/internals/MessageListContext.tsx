'use client';
import * as React from 'react';

export interface MessageListContextValue {
  isAtBottom: boolean;
  unseenMessageCount: number;
  scrollToBottom(options?: { behavior?: ScrollBehavior }): void;
}

const MessageListContext = React.createContext<MessageListContextValue>({
  isAtBottom: true,
  unseenMessageCount: 0,
  scrollToBottom: () => {
      throw new Error("STUB");
  },
});

export function MessageListContextProvider(props: {
  children: React.ReactNode;
  value: MessageListContextValue;
}) {
    throw new Error("STUB");
}

export function useMessageListContext() {
  return React.useContext(MessageListContext);
}
