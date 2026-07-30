'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  MessageContent,
  useMessageContentTabIndex,
  type MessageContentProps,
  type ToolPartOwnerState,
  type ToolPartSectionOwnerState,
} from '@mui/x-chat-headless';
import { useToolDisclosure } from '@mui/x-chat-headless/internals';
import { styled, createUseThemeProps } from '../internals/zero-styled';
import { mergeSlotProps } from '../internals/mergeSlotProps';
import { useCopyToClipboard } from '../internals/useCopyToClipboard';
import { useChatMessageUtilityClasses } from './chatMessageClasses';
import { renderStreamingMarkdown } from './renderMarkdown';

// ---------------------------------------------------------------------------
// Inline SVG icons — kept module-local to avoid an @mui/icons-material dep.
// ---------------------------------------------------------------------------

function ToolDefaultIcon(props: React.SVGAttributes<SVGSVGElement>) {
    throw new Error("STUB");
}

function ReasoningDefaultIcon(props: React.SVGAttributes<SVGSVGElement>) {
    throw new Error("STUB");
}

function StatusCheckIcon(props: React.SVGAttributes<SVGSVGElement>) {
    throw new Error("STUB");
}

function StatusCrossIcon(props: React.SVGAttributes<SVGSVGElement>) {
    throw new Error("STUB");
}

function StatusWarningIcon(props: React.SVGAttributes<SVGSVGElement>) {
    throw new Error("STUB");
}

function StatusSpinnerIcon(props: React.SVGAttributes<SVGSVGElement>) {
    throw new Error("STUB");
}

function CopySvgIcon() {
    throw new Error("STUB");
}

function CheckSvgIcon() {
    throw new Error("STUB");
}

const useThemeProps = createUseThemeProps('MuiChatMessageContent');

export interface ChatMessageContentProps extends MessageContentProps {
  className?: string;
}

const ChatMessageContentStyled = styled('div', {
  name: 'MuiChatMessage',
  slot: 'Content',
  overridesResolver: (_, styles) => { throw new Error("STUB"); },
})(({ theme }) => { throw new Error("STUB"); });

const ChatMessageBubbleStyled = styled('div', {
  name: 'MuiChatMessage',
  slot: 'Bubble',
  shouldForwardProp: (prop) => { throw new Error("STUB"); },
  overridesResolver: (_, styles) => { throw new Error("STUB"); },
})<{ ownerState?: { role?: string; variant?: string; isOwnMessage?: boolean } }>(({
  theme,
  ownerState,
}) => {
    throw new Error("STUB");
});

// ---------------------------------------------------------------------------
// Tool Part — MUI-styled slot overrides
// ---------------------------------------------------------------------------

const ChatToolPartDetailsStyled = styled('details', {
  name: 'MuiChatMessage',
  slot: 'ToolRoot',
  shouldForwardProp: (prop) => { throw new Error("STUB"); },
})<{ ownerState?: { state?: string } }>(({ theme }) => { throw new Error("STUB"); });

// The package's built-in (no-policy) auto-open defaults, named once so the card root
// and its sections share a single source of truth. `useToolDisclosure` applies these
// with rising-edge semantics and layers the consumer's `defaultExpanded` policy on top.
function toolRootDefaultOpen(state?: string): boolean {
    throw new Error("STUB");
}

function toolSectionDefaultOpen(section?: 'input' | 'output', state?: string): boolean {
    throw new Error("STUB");
}

// Wires a styled `<details>` slot to `useToolDisclosure`: owns the controlled open
// state + ref (for focus safety) and chains a consumer-supplied `onToggle`.
function useControlledDisclosure(
  ownerState: ToolPartOwnerState | ToolPartSectionOwnerState,
  builtInOpen: boolean,
  onToggleProp?: React.ToggleEventHandler<HTMLDetailsElement>,
) {
    throw new Error("STUB");
}

// Collapsible root: open/close state is owned by `useToolDisclosure`, which applies
// the consumer's `defaultExpanded` policy when present and otherwise falls back to the
// built-in rising-edge auto-open (approval requested / input streaming).
function ChatToolPartRoot({
  ownerState,
  onToggle: onToggleProp,
  open: _openProp,
  ...rest
}: {
  ownerState?: ToolPartOwnerState;
  onToggle?: React.ToggleEventHandler<HTMLDetailsElement>;
  open?: boolean;
  [key: string]: unknown;
}) {
    throw new Error("STUB");
}

ChatToolPartRoot.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  onToggle: PropTypes.func,
  open: PropTypes.bool,
  ownerState: PropTypes.shape({
    isMessageStreaming: PropTypes.bool.isRequired,
    messageId: PropTypes.string.isRequired,
    pendingApproval: PropTypes.bool.isRequired,
    role: PropTypes.oneOf(['assistant', 'system', 'user']).isRequired,
    state: PropTypes.oneOf([
      'approval-requested',
      'approval-responded',
      'input-available',
      'input-streaming',
      'output-available',
      'output-denied',
      'output-error',
    ]).isRequired,
    toolName: PropTypes.string.isRequired,
  }),
} as any;

const ChatToolPartHeader = styled('summary', {
  name: 'MuiChatMessage',
  slot: 'ToolHeader',
})(({ theme }) => { throw new Error("STUB"); });

const ChatToolPartIconStyled = styled('span', {
  name: 'MuiChatMessage',
  slot: 'ToolIcon',
  shouldForwardProp: (prop) => { throw new Error("STUB"); },
})<{ ownerState?: { toolName?: string } }>(({ theme }) => { throw new Error("STUB"); });

interface ChatToolPartIconProps extends React.HTMLAttributes<HTMLSpanElement> {
  ownerState?: { toolName?: string };
}

/**
 * Default icon: a generic tool/wrench glyph.
 * Replace per tool via `toolSlots` / `toolSlotProps` on `partProps.tool`.
 */
const ChatToolPartIconComponent = React.forwardRef<HTMLSpanElement, ChatToolPartIconProps>(
  function ChatToolPartIcon({ ownerState, ...rest }, ref) {
        throw new Error("STUB");
    },
);

ChatToolPartIconComponent.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  ownerState: PropTypes.shape({
    toolName: PropTypes.string,
  }),
} as any;

const ChatToolPartTitle = styled('div', {
  name: 'MuiChatMessage',
  slot: 'ToolTitle',
})(({ theme }) => { throw new Error("STUB"); });

type ToolStatePalette = 'warning' | 'success' | 'error' | 'info' | 'default';

function resolveToolStatePalette(state: string | undefined): ToolStatePalette {
  switch (state) {
    case 'input-streaming':
    case 'approval-requested':
      return 'warning';
    case 'output-available':
      return 'success';
    case 'output-error':
    case 'output-denied':
      return 'error';
    case 'input-available':
    case 'approval-responded':
      return 'info';
    default:
      return 'default';
  }
}

function resolveToolStatusIcon(state: string | undefined): React.ReactNode {
  switch (state) {
    case 'output-available':
      return <StatusCheckIcon />;
    case 'output-error':
    case 'output-denied':
      return <StatusCrossIcon />;
    case 'approval-requested':
      return <StatusWarningIcon />;
    case 'input-streaming':
    case 'input-available':
    case 'approval-responded':
      return <StatusSpinnerIcon className="MuiChatMessage-ToolStateSpinner" />;
    default:
      return null;
  }
}

const spinnerKeyframes = {
  '@keyframes mui-chat-tool-spin': {
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' },
  },
};

const ChatToolPartState = styled('span', {
  name: 'MuiChatMessage',
  slot: 'ToolState',
  shouldForwardProp: (prop) => { throw new Error("STUB"); },
})<{ ownerState?: { state?: string } }>(({ theme, ownerState }) => {
    throw new Error("STUB");
});

interface ChatToolPartStateRenderProps extends React.HTMLAttributes<HTMLSpanElement> {
  ownerState?: { state?: string };
  children?: React.ReactNode;
}

const ChatToolPartStateComponent = React.forwardRef<HTMLSpanElement, ChatToolPartStateRenderProps>(
  function ChatToolPartStateRender({ ownerState, children: _label, ...rest }, ref) {
        throw new Error("STUB");
    },
);

ChatToolPartStateComponent.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  children: PropTypes.node,
  ownerState: PropTypes.shape({
    state: PropTypes.string,
  }),
} as any;

const ChatToolPartSectionDetails = styled('details', {
  name: 'MuiChatMessage',
  slot: 'ToolSection',
  shouldForwardProp: (prop) => { throw new Error("STUB"); },
})<{ ownerState?: { section?: string } }>(({ theme }) => { throw new Error("STUB"); });

const ChatToolPartSectionSummaryStyled = styled('summary', {
  name: 'MuiChatMessage',
  slot: 'ToolSectionSummary',
  shouldForwardProp: (prop) => { throw new Error("STUB"); },
})<{ ownerState?: { section?: string } }>(({ theme }) => { throw new Error("STUB"); });

interface ChatToolPartSectionRenderProps extends React.DetailsHTMLAttributes<HTMLDetailsElement> {
  ownerState?: { section?: 'input' | 'output'; state?: string };
}

function ChatToolPartSection({
  ownerState,
  onToggle: onToggleProp,
  // The disclosure is controlled internally; ignore a consumer-supplied `open`
  // so a slotProps override can't desync the `<details>` from the auto-open state.
  open: _openProp,
  ...rest
}: ChatToolPartSectionRenderProps) {
    throw new Error("STUB");
}

ChatToolPartSection.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  ownerState: PropTypes.shape({
    section: PropTypes.oneOf(['input', 'output']),
    state: PropTypes.string,
  }),
} as any;

interface ChatToolPartSectionSummaryProps extends React.HTMLAttributes<HTMLElement> {
  ownerState?: {
    section?: 'input' | 'output';
    summaryLabel?: string;
    previewValue?: string;
  };
  children?: React.ReactNode;
}

const ChatToolPartSectionSummary = React.forwardRef<HTMLElement, ChatToolPartSectionSummaryProps>(
  function ChatToolPartSectionSummary({ ownerState, children, ...rest }, ref) {
        throw new Error("STUB");
    },
);

ChatToolPartSectionSummary.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  children: PropTypes.node,
  ownerState: PropTypes.shape({
    previewValue: PropTypes.string,
    section: PropTypes.oneOf(['input', 'output']),
    summaryLabel: PropTypes.string,
  }),
} as any;

const ChatToolPartSectionContentWrapper = styled('div', {
  name: 'MuiChatMessage',
  slot: 'ToolSectionContent',
})(({ theme }) => { throw new Error("STUB"); });

const ChatToolPartSectionContentPre = styled('pre')(({ theme }) => { throw new Error("STUB"); });

const ChatToolPartSectionCopyButton = styled('button')(({ theme }) => { throw new Error("STUB"); });

interface ChatToolPartSectionContentRenderProps extends React.HTMLAttributes<HTMLDivElement> {
  ownerState?: { section?: 'input' | 'output' };
  children?: React.ReactNode;
}

function ChatToolPartSectionContent({
  ownerState: _ownerState,
  children,
  ...rest
}: ChatToolPartSectionContentRenderProps) {
    throw new Error("STUB");
}

ChatToolPartSectionContent.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  children: PropTypes.node,
  ownerState: PropTypes.shape({
    section: PropTypes.oneOf(['input', 'output']),
  }),
} as any;

const ChatToolPartError = styled('div', {
  name: 'MuiChatMessage',
  slot: 'ToolError',
})(({ theme }) => { throw new Error("STUB"); });

const ChatToolPartActions = styled('div', {
  name: 'MuiChatMessage',
  slot: 'ToolActions',
})(({ theme }) => { throw new Error("STUB"); });

const toolActionButtonBase = ({ theme }: { theme: any }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(0.4, 1.25),
  borderRadius: typeof theme.shape.borderRadius === 'number' ? theme.shape.borderRadius / 2 : 2,
  fontSize: theme.typography.caption.fontSize,
  fontWeight: theme.typography.fontWeightMedium,
  fontFamily: theme.typography.fontFamily,
  lineHeight: 1.4,
  cursor: 'pointer',
  border: '1px solid transparent',
  transition: 'background-color 150ms, border-color 150ms, color 150ms',
  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
});

const ChatToolPartApproveButton = styled('button', {
  name: 'MuiChatMessage',
  slot: 'ToolApproveButton',
})(({ theme }) => { throw new Error("STUB"); });

const ChatToolPartDenyButton = styled('button', {
  name: 'MuiChatMessage',
  slot: 'ToolDenyButton',
})(({ theme }) => { throw new Error("STUB"); });

const toolPartSlots = {
  root: ChatToolPartRoot,
  header: ChatToolPartHeader,
  title: ChatToolPartTitle,
  state: ChatToolPartStateComponent,
  icon: ChatToolPartIconComponent,
  section: ChatToolPartSection,
  sectionSummary: ChatToolPartSectionSummary,
  sectionContent: ChatToolPartSectionContent,
  error: ChatToolPartError,
  actions: ChatToolPartActions,
  approveButton: ChatToolPartApproveButton,
  denyButton: ChatToolPartDenyButton,
};

// ---------------------------------------------------------------------------
// Reasoning Part — MUI-styled slot overrides
// ---------------------------------------------------------------------------

const ChatReasoningPartRoot = styled('details', {
  name: 'MuiChatMessage',
  slot: 'ReasoningRoot',
})(({ theme }) => { throw new Error("STUB"); });

const ChatReasoningPartSummaryStyled = styled('summary', {
  name: 'MuiChatMessage',
  slot: 'ReasoningSummary',
})(({ theme }) => { throw new Error("STUB"); });

interface ChatReasoningSummaryProps extends React.HTMLAttributes<HTMLElement> {
  ownerState?: { streaming?: boolean };
  children?: React.ReactNode;
}

const ChatReasoningPartSummary = React.forwardRef<HTMLElement, ChatReasoningSummaryProps>(
  function ChatReasoningPartSummaryRender({ ownerState, children, ...rest }, ref) {
        throw new Error("STUB");
    },
);

ChatReasoningPartSummary.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  children: PropTypes.node,
  ownerState: PropTypes.shape({
    streaming: PropTypes.bool,
  }),
} as any;

const ChatReasoningPartContent = styled('div', {
  name: 'MuiChatMessage',
  slot: 'ReasoningContent',
})(({ theme }) => { throw new Error("STUB"); });

const reasoningPartSlots = {
  root: ChatReasoningPartRoot,
  summary: ChatReasoningPartSummary,
  content: ChatReasoningPartContent,
};

// ---------------------------------------------------------------------------
// File Part — MUI-styled slot overrides (compact chip appearance)
// ---------------------------------------------------------------------------

const ChatFilePartRoot = styled('div', {
  name: 'MuiChatMessage',
  slot: 'FileRoot',
})(({ theme }) => { throw new Error("STUB"); });

const ChatFilePartPreview = styled('img', {
  name: 'MuiChatMessage',
  slot: 'FilePreview',
})({
  width: 20,
  height: 20,
  objectFit: 'cover',
  borderRadius: 3,
  flexShrink: 0,
});

const ChatFilePartLink = styled('a', {
  name: 'MuiChatMessage',
  slot: 'FileLink',
})({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 4,
  textDecoration: 'none',
  color: 'inherit',
  minWidth: 0,
});

const ChatFilePartFilename = styled('span', {
  name: 'MuiChatMessage',
  slot: 'FileFilename',
})({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  minWidth: 0,
});

const filePartSlots = {
  root: ChatFilePartRoot,
  preview: ChatFilePartPreview,
  link: ChatFilePartLink,
  filename: ChatFilePartFilename,
};

// ---------------------------------------------------------------------------
// Source URL Part — MUI-styled slot overrides
// ---------------------------------------------------------------------------

const ChatSourceUrlPartRoot = styled('span', {
  name: 'MuiChatMessage',
  slot: 'SourceUrlRoot',
})(({ theme }) => { throw new Error("STUB"); });

const ChatSourceUrlPartIcon = styled('span', {
  name: 'MuiChatMessage',
  slot: 'SourceUrlIcon',
})(({ theme }) => { throw new Error("STUB"); });

const ChatSourceUrlPartLink = styled('a', {
  name: 'MuiChatMessage',
  slot: 'SourceUrlLink',
})(({ theme }) => { throw new Error("STUB"); });

const sourceUrlPartSlots = {
  root: ChatSourceUrlPartRoot,
  icon: ChatSourceUrlPartIcon,
  link: ChatSourceUrlPartLink,
};

// ---------------------------------------------------------------------------
// Source Document Part — MUI-styled slot overrides
// ---------------------------------------------------------------------------

const ChatSourceDocumentPartRoot = styled('div', {
  name: 'MuiChatMessage',
  slot: 'SourceDocumentRoot',
})(({ theme }) => { throw new Error("STUB"); });

const ChatSourceDocumentPartTitle = styled('div', {
  name: 'MuiChatMessage',
  slot: 'SourceDocumentTitle',
})(({ theme }) => { throw new Error("STUB"); });

const ChatSourceDocumentPartExcerpt = styled('div', {
  name: 'MuiChatMessage',
  slot: 'SourceDocumentExcerpt',
})(({ theme }) => { throw new Error("STUB"); });

const sourceDocumentPartSlots = {
  root: ChatSourceDocumentPartRoot,
  title: ChatSourceDocumentPartTitle,
  excerpt: ChatSourceDocumentPartExcerpt,
};

// ---------------------------------------------------------------------------
// ChatMessageContent
// ---------------------------------------------------------------------------

const ChatMessageContent = React.forwardRef<HTMLDivElement, ChatMessageContentProps>(
  function ChatMessageContent(inProps, ref) {
        throw new Error("STUB");
    },
);

ChatMessageContent.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Content rendered inside the bubble after the message parts.
   * Useful for placing inline metadata (e.g. timestamp, status) inside the bubble.
   */
  afterContent: PropTypes.node,
  className: PropTypes.string,
  /**
   * Props forwarded to the built-in unstyled part renderer components.
   * Use this to pass `slots` and `slotProps` to individual part type renderers.
   */
  partProps: PropTypes.shape({
    'dynamic-tool': PropTypes.shape({
      className: PropTypes.string,
      defaultExpanded: PropTypes.object,
      slotProps: PropTypes.object,
      slots: PropTypes.object,
      toolSlotProps: PropTypes.object,
      toolSlots: PropTypes.object,
    }),
    file: PropTypes.shape({
      className: PropTypes.string,
      slotProps: PropTypes.object,
      slots: PropTypes.object,
    }),
    reasoning: PropTypes.shape({
      className: PropTypes.string,
      slotProps: PropTypes.object,
      slots: PropTypes.object,
    }),
    'source-document': PropTypes.shape({
      className: PropTypes.string,
      slotProps: PropTypes.object,
      slots: PropTypes.object,
    }),
    'source-url': PropTypes.shape({
      className: PropTypes.string,
      slotProps: PropTypes.object,
      slots: PropTypes.object,
    }),
    text: PropTypes.shape({
      renderText: PropTypes.func,
    }),
    tool: PropTypes.shape({
      className: PropTypes.string,
      defaultExpanded: PropTypes.object,
      slotProps: PropTypes.object,
      slots: PropTypes.object,
      toolSlotProps: PropTypes.object,
      toolSlots: PropTypes.object,
    }),
  }),
  /**
   * @deprecated Use `partProps` instead.
   * Callback to resolve a built-in part renderer for a given part type.
   * @param {ChatMessagePart} part The message part to resolve a renderer for.
   * @param {ChatLocaleText} localeText The locale text for the chat.
   * @returns {ChatPartRenderer<ChatMessagePart> | null} A renderer or null.
   */
  resolveBuiltInPartRenderer: PropTypes.func,
  slotProps: PropTypes.object,
  slots: PropTypes.object,
} as any;

export { ChatMessageContent };
