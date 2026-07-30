'use client';
import * as React from 'react';
import useSlotProps from '@mui/utils/useSlotProps';
import type { SlotComponentProps } from '@mui/utils/types';
import type {
  ChatDynamicToolMessagePart,
  ChatToolInvocationState,
  ChatToolMessagePart,
} from '../../types/chat-message-parts';
import type { ChatPartRenderer, ChatPartRendererProps } from '../../renderers/chatPartRenderer';
import type { ChatRole } from '../../types/chat-entities';
import { useChat } from '../../hooks/useChat';
import { useChatLocaleText } from '../../chat/internals/ChatLocaleContext';
import { useMessageContentTabIndex } from '../../message-list/internals/MessageRovingContext';
import { formatStructuredValue } from './partUtils';
import { type ChatToolExpand, ToolDisclosureContext } from './toolDisclosure';

type ToolPart = ChatToolMessagePart | ChatDynamicToolMessagePart;

export interface ToolPartOwnerState {
  messageId: string;
  pendingApproval: boolean;
  role: ChatRole;
  state: ChatToolInvocationState;
  toolName: string;
  /**
   * Whether the parent message is still streaming (`message.status === 'streaming'`).
   * Useful for `defaultExpanded` policies that keep a tool open for as long as the
   * whole message streams. For approval-specific behavior read `state` instead.
   */
  isMessageStreaming: boolean;
}

export interface ToolPartSectionOwnerState extends ToolPartOwnerState {
  section: 'input' | 'output';
  /** The localized label for the section ("Tool called", "Tool result"). */
  summaryLabel: string;
  /** A short, single-line preview of the section content (truncated to ~60 chars). */
  previewValue: string;
}

export interface ToolPartSlots {
  root: React.ElementType;
  header: React.ElementType;
  title: React.ElementType;
  state: React.ElementType;
  icon?: React.ElementType;
  section: React.ElementType;
  sectionSummary: React.ElementType;
  sectionContent: React.ElementType;
  error: React.ElementType;
  actions: React.ElementType;
  approveButton: React.ElementType;
  denyButton: React.ElementType;
}

export interface ToolPartSlotProps {
  root?: SlotComponentProps<'div', {}, ToolPartOwnerState>;
  header?: SlotComponentProps<'div', {}, ToolPartOwnerState>;
  title?: SlotComponentProps<'div', {}, ToolPartOwnerState>;
  state?: SlotComponentProps<'span', {}, ToolPartOwnerState>;
  icon?: SlotComponentProps<'span', {}, ToolPartOwnerState>;
  section?: SlotComponentProps<'div', {}, ToolPartSectionOwnerState>;
  sectionSummary?: SlotComponentProps<'strong', {}, ToolPartSectionOwnerState>;
  sectionContent?: SlotComponentProps<'pre', {}, ToolPartSectionOwnerState>;
  error?: SlotComponentProps<'div', {}, ToolPartOwnerState>;
  actions?: SlotComponentProps<'div', {}, ToolPartOwnerState>;
  approveButton?: SlotComponentProps<'button', {}, ToolPartOwnerState>;
  denyButton?: SlotComponentProps<'button', {}, ToolPartOwnerState>;
}

export interface ToolPartProps extends ChatPartRendererProps<ToolPart> {
  className?: string;
  slots?: Partial<ToolPartSlots>;
  slotProps?: ToolPartSlotProps;
  /**
   * Per-tool-name slot overrides, merged on top of `slots`.
   * Keyed by `toolInvocation.toolName`.
   * @example
   * toolSlots={{ bash: { icon: TerminalIcon }, glob: { icon: FolderSearchIcon } }}
   */
  toolSlots?: Record<string, Partial<ToolPartSlots>>;
  /**
   * Per-tool-name slotProps overrides, merged on top of `slotProps`.
   * Keyed by `toolInvocation.toolName`.
   */
  toolSlotProps?: Record<string, ToolPartSlotProps>;
  /**
   * Default expanded state of each tool card (and its `input`/`output` sections),
   * keyed by `toolInvocation.toolName` with a `'*'` fallback. Each value is either a
   * static `boolean` (applied to the card and its sections) or a resolver
   * `(ownerState) => boolean | undefined`.
   *
   * A resolver returning a `boolean` drives the disclosure on every state
   * transition (return `false` to collapse a card when its tool ends); returning
   * `undefined` — or omitting the tool — keeps the built-in default. The resolver
   * controls *expansion* only; section *visibility* stays gated by the tool state
   * (e.g. the output section appears only once output is available).
   * @example
   * defaultExpanded={{
   *   // expand `write` while it runs, collapse it when it ends; sections at default
   *   write: (ownerState) =>
   *     ownerState.section
   *       ? undefined
   *       : ownerState.state === 'input-streaming' || ownerState.state === 'input-available',
   *   search: true, // always expanded
   *   '*': undefined, // built-in default
   * }}
   */
  defaultExpanded?: Record<string, ChatToolExpand | undefined>;
}

export type ToolPartExternalProps = Omit<
  ToolPartProps,
  'index' | 'message' | 'onToolCall' | 'part'
>;

type ToolPartComponent = ((
  props: ToolPartProps & React.RefAttributes<HTMLDivElement>,
) => React.JSX.Element) & { propTypes?: any };

function buildPreviewValue(formatted: string): string {
    throw new Error("STUB");
}

function ToolPayloadSection(props: {
  label: string;
  ownerState: ToolPartOwnerState;
  section: 'input' | 'output';
  slotProps?: ToolPartSlotProps;
  slots?: Partial<ToolPartSlots>;
  value: unknown;
}) {
    throw new Error("STUB");
}

export const ToolPartInner = React.forwardRef(function ToolPartRenderer(
  props: ToolPartProps,
  ref: React.Ref<HTMLDivElement>,
) {
    throw new Error("STUB");
}) as ToolPartComponent;

// Use a separate export name to avoid conflict with the ToolPart type alias
export { ToolPartInner as ToolPart };

export function createToolPartRenderer(
  defaultProps: ToolPartExternalProps = {},
): ChatPartRenderer<ToolPart> {
    throw new Error("STUB");
}
