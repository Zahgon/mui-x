'use client';
import * as React from 'react';
import type { ErrorContainerClasses } from './error-container/errorContainerClasses';
import type { EventSkeletonClasses } from './event-skeleton/eventSkeletonClasses';

/**
 * Styling injected by the consuming product into the shared internal components
 * (e.g. `ErrorContainer`, `EventSkeleton`) so they stay decoupled from any
 * product-specific styled context.
 */
export interface SharedComponentsStyledContextValue {
  classes: ErrorContainerClasses & EventSkeletonClasses;
}

export const SharedComponentsStyledContext =
  React.createContext<SharedComponentsStyledContextValue | null>(null);

export function useSharedComponentsStyledContext(): SharedComponentsStyledContextValue {
    throw new Error("STUB");
}
