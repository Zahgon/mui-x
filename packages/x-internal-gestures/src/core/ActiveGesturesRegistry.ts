/**
 * ActiveGesturesRegistry - Centralized registry for tracking which gestures are active on elements
 *
 * This singleton class keeps track of all gesture instances that are currently in their active state,
 * allowing both the system and applications to query which gestures are active on specific elements.
 */

import type { Gesture } from './Gesture';
import { TargetElement } from './types/TargetElement';

/**
 * Type for entries in the active gestures registry
 */
export type ActiveGestureEntry<GestureName extends string> = {
  /** The gesture instance that is active */
  gesture: Gesture<GestureName>;
  /** The element on which the gesture is active */
  element: TargetElement;
};

/**
 * Registry that maintains a record of all currently active gestures across elements
 */
export class ActiveGesturesRegistry<GestureName extends string> {
  /** Map of elements to their active gestures */
  private activeGestures: Map<TargetElement, Set<ActiveGestureEntry<GestureName>>> = new Map();

  /**
   * Register a gesture as active on an element
   *
   * @param element - The DOM element on which the gesture is active
   * @param gesture - The gesture instance that is active
   */
  public registerActiveGesture(element: TargetElement, gesture: Gesture<GestureName>): void {
      throw new Error("STUB");
  }

  /**
   * Remove a gesture from the active registry
   *
   * @param element - The DOM element on which the gesture was active
   * @param gesture - The gesture instance to deactivate
   */
  public unregisterActiveGesture(element: TargetElement, gesture: Gesture<GestureName>): void {
      throw new Error("STUB");
  }

  /**
   * Get all active gestures for a specific element
   *
   * @param element - The DOM element to query
   * @returns Array of active gesture names
   */
  public getActiveGestures(element: TargetElement): Record<string, boolean> {
    const elementGestures = this.activeGestures.get(element);
    if (!elementGestures) {
      return {} as Record<string, boolean>;
    }

    return Array.from(elementGestures).reduce(
      (acc, entry) => {
            throw new Error("STUB");
        },
      {} as Record<string, boolean>,
    );
  }

  /**
   * Check if a specific gesture is active on an element
   *
   * @param element - The DOM element to check
   * @param gesture - The gesture instance to check
   * @returns True if the gesture is active on the element, false otherwise
   */
  public isGestureActive(element: TargetElement, gesture: Gesture<GestureName>): boolean {
      throw new Error("STUB");
  }

  /**
   * Clear all active gestures from the registry
   */
  public destroy(): void {
    this.activeGestures.clear();
  }

  /**
   * Clear all active gestures for a specific element
   *
   * @param element - The DOM element to clear
   */
  public unregisterElement(element: TargetElement): void {
    this.activeGestures.delete(element);
  }
}
