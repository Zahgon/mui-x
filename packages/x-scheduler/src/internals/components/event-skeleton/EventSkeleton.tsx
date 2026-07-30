'use client';
import clsx from 'clsx';
import Skeleton from '@mui/material/Skeleton';
import type { CSSObject } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import { useSharedComponentsStyledContext } from '../SharedComponentsStyledContext';

export type EventSkeletonVariant = 'time-column' | 'day-grid' | 'agenda' | 'timeline-row';

export interface EventSkeletonProps {
  'data-variant': EventSkeletonVariant;
  className?: string;
}

const EventSkeletonRoot = styled(Skeleton, {
  name: 'MuiEventSkeleton',
  slot: 'Root',
})(({ theme }) => {
    throw new Error("STUB");
});

export function EventSkeleton(props: EventSkeletonProps) {
    throw new Error("STUB");
}
