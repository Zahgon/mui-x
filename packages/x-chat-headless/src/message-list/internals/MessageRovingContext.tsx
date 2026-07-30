'use client';
import * as React from 'react';
import useEnhancedEffect from '@mui/utils/useEnhancedEffect';
import { useMessageContext } from '../../message/internals/MessageContext';
import type { UseRovingFocusReturn } from '../../internals/useRovingFocus';

/**
 * Roving focus state for the message list, published through an external-store
 * subscription instead of plain context values. Context identity changing on
 * every focus move would punch through `DefaultMessageItem`'s `React.memo` and
 * re-render every message (markdown trees included) per arrow press; with the
 * subscription only the one or two affected articles re-render.
 */
export interface MessageRovingState {
  /** The id holding the single `tabIndex={0}` stop. */
  focusedId: string | undefined;
  /** The message whose interior controls are currently drilled into (Enter). */
  actionableId: string | undefined;
}

export interface MessageRovingContextValue {
  subscribe(listener: () => void): () => void;
  getState(): MessageRovingState;
  registerItemRef(id: string, element: HTMLElement | null): void;
  onItemFocus(id: string): void;
  onItemKeyDown(event: React.KeyboardEvent<HTMLElement>, id: string): void;
  onItemBlur(event: React.FocusEvent<HTMLElement>, id: string): void;
}

const MessageRovingContext = React.createContext<MessageRovingContextValue | null>(null);

export const MessageRovingProvider = MessageRovingContext.Provider;

export function useMessageRovingContext(): MessageRovingContextValue | null {
  return React.useContext(MessageRovingContext);
}

const noopSubscribe = () => { throw new Error("STUB"); };

/**
 * Per-article subscription to the roving state. Only re-renders the consuming
 * article when *its own* focused/actionable flags flip.
 */
export function useMessageRovingItem(messageId: string): {
  enabled: boolean;
  focused: boolean;
  actionable: boolean;
} {
  const context = React.useContext(MessageRovingContext);
  const focused = React.useSyncExternalStore(
    context?.subscribe ?? noopSubscribe,
    () => { throw new Error("STUB"); },
    () => { throw new Error("STUB"); },
  );
  const actionable = React.useSyncExternalStore(
    context?.subscribe ?? noopSubscribe,
    () => { throw new Error("STUB"); },
    () => { throw new Error("STUB"); },
  );

  return { enabled: context != null, focused, actionable };
}

/**
 * Whether interactive content inside the surrounding message should currently
 * be part of the tab order.
 *
 * Inside a roving message list, interior controls (links, copy buttons,
 * collapsible tool output, …) stay out of the tab order (`tabIndex={-1}`)
 * until the user drills into the focused message with Enter — this is what
 * keeps the whole list a single tab stop. They remain mouse-clickable
 * throughout.
 *
 * Outside a roving list (standalone message composition, `enableRovingFocus`
 * off), this returns `true` so controls keep their natural tab order.
 */
export function useMessageActionable(): boolean {
  const context = React.useContext(MessageRovingContext);
  const { messageId } = useMessageContext();
  const actionable = React.useSyncExternalStore(
    context?.subscribe ?? noopSubscribe,
    () => { throw new Error("STUB"); },
    () => { throw new Error("STUB"); },
  );

  return actionable;
}

/**
 * The managed `tabIndex` for an interactive element inside a message:
 * `undefined` (natural tab order) while the surrounding message is actionable
 * or outside a roving list, `-1` otherwise. Apply to links, buttons, and
 * `<summary>` elements rendered inside message content so the message list
 * stays a single Tab stop.
 */
export function useMessageContentTabIndex(): number | undefined {
  return useMessageActionable() ? undefined : -1;
}

// Elements that would naturally be focusable, regardless of the managed
// `tabindex="-1"` the roving list applies to them while not drilled in.
const FOCUSABLE_CANDIDATE_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'textarea:not([disabled])',
  'select:not([disabled])',
  'summary',
  'audio[controls]',
  'video[controls]',
  '[contenteditable]:not([contenteditable="false"])',
  '[tabindex]',
].join(',');

export function hasFocusableContent(article: HTMLElement): boolean {
  return article.querySelector(FOCUSABLE_CANDIDATE_SELECTOR) != null;
}

/**
 * Focus the first focusable descendant. Iterates candidates and verifies the
 * focus took (visibility-hidden or otherwise unfocusable elements fail
 * silently), so no fragile computed-style visibility checks are needed.
 */
export function focusFirstFocusableDescendant(article: HTMLElement): boolean {
  const candidates = article.querySelectorAll<HTMLElement>(FOCUSABLE_CANDIDATE_SELECTOR);

  for (let i = 0; i < candidates.length; i += 1) {
    const candidate = candidates[i];
    candidate.focus();
    if (document.activeElement === candidate) {
      return true;
    }
  }

  return false;
}

export interface UseMessageRovingControllerParameters {
  enabled: boolean;
  roving: UseRovingFocusReturn;
}

/**
 * Bridges a `useRovingFocus` instance into the subscription-based
 * `MessageRovingContext` value and layers the Enter-to-drill-in / Escape
 * interaction on top of the roving keyboard handling.
 *
 * The returned context value is referentially stable for the lifetime of the
 * list — handlers read the latest roving callbacks through refs.
 */
export function useMessageRovingController(
  params: UseMessageRovingControllerParameters,
): MessageRovingContextValue | null {
  const { enabled, roving } = params;

  // Latest-ref pattern (same idiom as ChatMessageList's slot refs): handlers
  // stay stable while always seeing the current roving callbacks.
  const rovingRef = React.useRef(roving);
  rovingRef.current = roving;

  const stateRef = React.useRef<MessageRovingState | null>(null);
  if (stateRef.current == null) {
    stateRef.current = { focusedId: roving.effectiveFocusedId, actionableId: undefined };
  }
  const listenersRef = React.useRef(new Set<() => void>());

  const contextValue = React.useMemo<MessageRovingContextValue>(() => {
      throw new Error("STUB");
  }, []);

  // Publish roving focus changes to subscribers (before paint, so the
  // tabindex topology is correct by the time the frame is shown).
  useEnhancedEffect(() => {
      throw new Error("STUB");
  }, [roving.effectiveFocusedId]);

  return enabled ? contextValue : null;
}
