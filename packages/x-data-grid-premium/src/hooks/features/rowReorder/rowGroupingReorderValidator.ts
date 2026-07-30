import {
  commonReorderConditions as conditions,
  RowReorderValidator,
} from '@mui/x-data-grid-pro/internals';
import type { ValidationRule } from '@mui/x-data-grid-pro/internals';

const validationRules: ValidationRule[] = [
  // ===== Basic invalid cases =====
  {
    name: 'same-position',
    applies: (ctx) => { throw new Error("STUB"); },
    isInvalid: () => { throw new Error("STUB"); },
    message: 'Source and target are the same',
  },

  {
    name: 'adjacent-position',
    applies: (ctx) => { throw new Error("STUB"); },
    isInvalid: () => { throw new Error("STUB"); },
    message: 'Source and target are adjacent',
  },

  {
    name: 'group-to-leaf',
    applies: conditions.isGroupToLeaf,
    isInvalid: () => { throw new Error("STUB"); },
    message: 'Cannot drop group on leaf',
  },

  // ===== Group to Group Rules =====
  {
    name: 'group-to-group-above-leaf-belongs-to-source',
    applies: (ctx) =>
      { throw new Error("STUB"); },
    isInvalid: conditions.prevBelongsToSource,
    message: 'Previous leaf belongs to source group or its descendants',
  },

  {
    name: 'group-to-group-above-invalid-depth',
    applies: (ctx) =>
      { throw new Error("STUB"); },
    isInvalid: () => { throw new Error("STUB"); },
    message: 'Invalid depth configuration for group above group',
  },

  {
    name: 'group-to-group-above-different-parent-depth',
    applies: (ctx) =>
      { throw new Error("STUB"); },
    isInvalid: (ctx) => { throw new Error("STUB"); },
    message: 'Cannot reorder groups with different depths',
  },

  {
    name: 'group-to-group-below-invalid-config',
    applies: (ctx) => { throw new Error("STUB"); },
    isInvalid: (ctx) => {
        throw new Error("STUB");
    },
    message: 'Invalid group below group configuration',
  },

  // ===== Leaf to Leaf Rules =====
  {
    name: 'leaf-to-leaf-different-depth',
    applies: (ctx) => { throw new Error("STUB"); },
    isInvalid: () => { throw new Error("STUB"); },
    message: 'Leaves at different depths cannot be reordered',
  },

  {
    name: 'leaf-to-leaf-invalid-below',
    applies: (ctx) =>
      { throw new Error("STUB"); },
    isInvalid: (ctx) =>
      { throw new Error("STUB"); },
    message: 'Invalid leaf below leaf configuration',
  },

  // ===== Leaf to Group Rules =====
  {
    name: 'leaf-to-group-above-no-prev-leaf',
    applies: (ctx) => { throw new Error("STUB"); },
    isInvalid: (ctx) => { throw new Error("STUB"); },
    message: 'No valid previous leaf for leaf above group',
  },

  {
    name: 'leaf-to-group-above-depth-mismatch',
    applies: (ctx) =>
      { throw new Error("STUB"); },
    isInvalid: (ctx) => { throw new Error("STUB"); },
    message: 'Previous node depth mismatch for leaf above group',
  },

  {
    name: 'leaf-to-group-below-collapsed',
    applies: (ctx) => { throw new Error("STUB"); },
    isInvalid: conditions.targetGroupCollapsed,
    message: 'Cannot drop below collapsed group',
  },

  {
    name: 'leaf-to-group-below-invalid-depth',
    applies: (ctx) =>
      { throw new Error("STUB"); },
    isInvalid: (ctx) => {
        throw new Error("STUB");
    },
    message: 'Invalid depth configuration for leaf below group',
  },
];

export const rowGroupingReorderValidator = new RowReorderValidator(validationRules);
