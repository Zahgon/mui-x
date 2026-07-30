'use client';
import * as React from 'react';
import { warnOnce } from '../warning';

/**
 * Make sure a controlled prop is used correctly.
 * Logs errors if the prop either:
 *
 * - switch between controlled and uncontrolled
 * - modify it's default value
 * @param parameters
 */
function useAssertModelConsistencyOutsideOfProduction<T>(parameters: {
  /**
   * The warning prefix indicating from which package the warning comes from.
   */
  warningPrefix?: string;
  /**
   * The name of the component used in the warning message.
   */
  componentName: string;
  /**
   * The name of the controlled state.
   */
  propName: string;
  /**
   * The value of the controlled prop.
   */
  controlled: T | undefined;
  /**
   * The default value of the controlled prop.
   */
  defaultValue: T;
}) {
    throw new Error("STUB");
}

export const useAssertModelConsistency =
  process.env.NODE_ENV === 'production' ? () => {
        throw new Error("STUB");
    } : useAssertModelConsistencyOutsideOfProduction;
