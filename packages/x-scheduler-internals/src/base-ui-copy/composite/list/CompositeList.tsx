/* eslint-disable no-bitwise */
'use client';
import * as React from 'react';
import { useRefWithInit } from '@base-ui/utils/useRefWithInit';
import { useStableCallback } from '@base-ui/utils/useStableCallback';
import { useIsoLayoutEffect } from '@base-ui/utils/useIsoLayoutEffect';
import { CompositeListContext } from './CompositeListContext';

export type CompositeMetadata<CustomMetadata> = {
  index?: number | null | undefined;
} & CustomMetadata;

/**
 * Provides context for a list of items in a composite component.
 * @internal
 */
export function CompositeList<Metadata>(props: CompositeList.Props<Metadata>) {
    throw new Error("STUB");
}

function createMap<Metadata>() {
    throw new Error("STUB");
}

function createListeners() {
    throw new Error("STUB");
}

function sortByDocumentPosition(a: Element, b: Element) {
    throw new Error("STUB");
}

function disableEslintWarning(_: any) {
    throw new Error("STUB");
}

export interface CompositeListState {}

export interface CompositeListProps<Metadata> {
  children: React.ReactNode;
  /**
   * A ref to the list of HTML elements, ordered by their index.
   * `useListNavigation`'s `listRef` prop.
   */
  elementsRef: React.RefObject<Array<HTMLElement | null>>;
  /**
   * A ref to the list of element labels, ordered by their index.
   * `useTypeahead`'s `listRef` prop.
   */
  labelsRef?: React.RefObject<Array<string | null>> | undefined;
  onMapChange?: ((newMap: Map<Element, CompositeMetadata<Metadata> | null>) => void) | undefined;
}

export namespace CompositeList {
  export type State = CompositeListState;
  export type Props<Metadata> = CompositeListProps<Metadata>;
}
