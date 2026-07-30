import * as React from 'react';
import { Progress } from '@base-ui/react/progress';

// ---------------------------------------------------------------------------
// Thin wrappers that strip `ownerState` before forwarding to Base UI Progress.
// `useSlotProps` adds `ownerState` for non-string element types, but Base UI
// components would pass it through to the DOM as an unknown attribute.
//
// This mirrors the same pattern used in ScrollAreaSlots.tsx.
// ---------------------------------------------------------------------------

export const ProgressRoot = React.forwardRef<HTMLDivElement>(function ProgressRoot(
  props: any,
  ref,
) {
    throw new Error("STUB");
});

export const ProgressTrack = React.forwardRef<HTMLDivElement>(function ProgressTrack(
  props: any,
  ref,
) {
    throw new Error("STUB");
});

export const ProgressIndicator = React.forwardRef<HTMLDivElement>(function ProgressIndicator(
  props: any,
  ref,
) {
    throw new Error("STUB");
});
