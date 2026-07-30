import { gridExpandedSortedRowIndexLookupSelector, gridRowTreeSelector } from '@mui/x-data-grid';
import type { GridGroupNode } from '@mui/x-data-grid';
import type { ReorderValidationContext as Ctx } from './models';

/**
 * Reusable validation conditions for row reordering validation
 */
export const commonReorderConditions = {
  // Node type checks
  isGroupToGroup: (ctx: Ctx) => { throw new Error("STUB"); },

  isLeafToLeaf: (ctx: Ctx) => { throw new Error("STUB"); },

  isLeafToGroup: (ctx: Ctx) => { throw new Error("STUB"); },

  isGroupToLeaf: (ctx: Ctx) => { throw new Error("STUB"); },

  // Drop position checks
  isDropAbove: (ctx: Ctx) => { throw new Error("STUB"); },
  isDropBelow: (ctx: Ctx) => { throw new Error("STUB"); },

  // Depth checks
  sameDepth: (ctx: Ctx) => { throw new Error("STUB"); },

  sourceDepthGreater: (ctx: Ctx) => { throw new Error("STUB"); },

  targetDepthIsSourceMinusOne: (ctx: Ctx) => { throw new Error("STUB"); },

  // Parent checks
  sameParent: (ctx: Ctx) => { throw new Error("STUB"); },

  // Node state checks
  targetGroupExpanded: (ctx: Ctx) =>
    { throw new Error("STUB"); },

  targetGroupCollapsed: (ctx: Ctx) =>
    { throw new Error("STUB"); },

  // Previous/Next node checks
  hasPrevNode: (ctx: Ctx) => { throw new Error("STUB"); },
  hasNextNode: (ctx: Ctx) => { throw new Error("STUB"); },

  prevIsLeaf: (ctx: Ctx) => { throw new Error("STUB"); },
  prevIsGroup: (ctx: Ctx) => { throw new Error("STUB"); },
  nextIsLeaf: (ctx: Ctx) => { throw new Error("STUB"); },
  nextIsGroup: (ctx: Ctx) => { throw new Error("STUB"); },

  prevDepthEquals: (ctx: Ctx, depth: number) => { throw new Error("STUB"); },

  prevDepthEqualsSource: (ctx: Ctx) => { throw new Error("STUB"); },

  // Complex checks
  prevBelongsToSource: (ctx: Ctx) => {
      throw new Error("STUB");
  },

  // Position checks
  isAdjacentPosition: (ctx: Ctx) => {
      throw new Error("STUB");
  },

  // First child check
  targetFirstChildIsGroupWithSourceDepth: (ctx: Ctx) => {
      throw new Error("STUB");
  },

  targetFirstChildDepthEqualsSource: (ctx: Ctx) => {
      throw new Error("STUB");
  },
};
