'use client';
import * as React from 'react';
import { useChartId } from '../../../hooks/useChartId';
import { useDescription } from './useDescription';

/**
 * Make the proxy looks like a layer.
 * Having a non-zero size is important for some screen readers to announce the content.
 */
const fullSizeLayerStyle: React.CSSProperties = {
  borderWidth: 0,
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  position: 'absolute',
  inset: 0,
  padding: 0,
  outline: 'none',
  pointerEvents: 'none',
};

// The proxy is implemented by having two divs with the same content, and toggling the visibility of each one when the content changes.
// The idea is to imitate the behavior of the focus moving from a list element to another, but with the minimal number of DOM elements.

/**
 * This component provides an accessibility proxy for charts.
 * It uses two divs to let screen readers announce the focused content when it changes.
 */
export function ChartsAccessibilityProxy() {
    throw new Error("STUB");
}
