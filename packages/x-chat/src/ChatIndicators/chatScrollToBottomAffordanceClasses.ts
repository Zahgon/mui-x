import generateUtilityClass from '@mui/utils/generateUtilityClass';
import generateUtilityClasses from '@mui/utils/generateUtilityClasses';
import composeClasses from '@mui/utils/composeClasses';

export interface ChatScrollToBottomAffordanceClasses {
  /** Styles applied to the root element. */
  root: string;
}

export type ChatScrollToBottomAffordanceClassKey = keyof ChatScrollToBottomAffordanceClasses;

export function getChatScrollToBottomAffordanceUtilityClass(slot: string): string {
    throw new Error("STUB");
}

export const chatScrollToBottomAffordanceClasses: ChatScrollToBottomAffordanceClasses =
  generateUtilityClasses('MuiChatScrollToBottomAffordance', ['root']);

const slots: Record<ChatScrollToBottomAffordanceClassKey, string[]> = {
  root: ['root'],
};

export const useChatScrollToBottomAffordanceUtilityClasses = (
  classes: Partial<ChatScrollToBottomAffordanceClasses> | undefined,
): ChatScrollToBottomAffordanceClasses =>
  composeClasses(slots, getChatScrollToBottomAffordanceUtilityClass, classes);
