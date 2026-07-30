import { gridRowTreeSelector } from '@mui/x-data-grid';
import { RowReorderValidator } from '../rowReorder/reorderValidator';
import type { ValidationRule } from '../rowReorder/reorderValidator';
import { commonReorderConditions as conditions } from '../rowReorder/commonReorderConditions';

const validationRules: ValidationRule[] = [
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
    name: 'to-descendent',
    applies: (ctx) => { throw new Error("STUB"); },
    isInvalid: (ctx) => {
        throw new Error("STUB");
    },
    message: 'Cannot drop group on one of its descendents',
  },
  {
    name: 'group-to-group-above-leaf-belongs-to-source',
    applies: (ctx) =>
      { throw new Error("STUB"); },
    isInvalid: conditions.prevBelongsToSource,
    message: 'Previous leaf belongs to source group or its descendants',
  },
];

export const treeDataReorderValidator = new RowReorderValidator(validationRules);
