/**
 * TapGesture - Detects tap (quick touch without movement) gestures
 *
 * This gesture tracks simple tap interactions on elements, firing a single event when:
 * - A complete tap is detected (pointerup after brief touch without excessive movement)
 * - The tap is canceled (event.g., moved too far or held too long)
 */

import { GestureState } from '../Gesture';
import { PointerGesture, PointerGestureEventData, PointerGestureOptions } from '../PointerGesture';
import { PointerData } from '../PointerManager';
import { TargetElement } from '../types/TargetElement';
import { calculateCentroid, createEventName } from '../utils';

/**
 * Configuration options for TapGesture
 * Extends PointerGestureOptions with tap-specific settings
 */
export type TapGestureOptions<GestureName extends string> = PointerGestureOptions<GestureName> & {
  /**
   * Maximum distance in pixels a pointer can move for the gesture to still be considered a tap
   * @default 10
   */
  maxDistance?: number;

  /**
   * Number of consecutive taps to detect (for double-tap, triple-tap)
   * @default 1
   */
  taps?: number;
};

/**
 * Event data specific to tap gesture events
 * Contains information about the tap location and counts
 */
export type TapGestureEventData<
  CustomData extends Record<string, unknown> = Record<string, unknown>,
> = PointerGestureEventData<CustomData> & {
  /** X coordinate of the tap */
  x: number;
  /** Y coordinate of the tap */
  y: number;
  /** Current count of taps in a sequence */
  tapCount: number;
};

/**
 * Type definition for the CustomEvent created by TapGesture
 */
export type TapEvent<CustomData extends Record<string, unknown> = Record<string, unknown>> =
  CustomEvent<TapGestureEventData<CustomData>>;

/**
 * State tracking for the TapGesture
 */
export type TapGestureState = GestureState & {
  /** The initial centroid position when the gesture began */
  startCentroid: { x: number; y: number } | null;
  /** Current count of consecutive taps */
  currentTapCount: number;
  /** Timestamp of the last tap */
  lastTapTime: number;
  /** The most recent centroid position during the gesture */
  lastPosition: { x: number; y: number } | null;
  /** Pending timeout id used to reset multi-tap counters when the next tap doesn't arrive in time */
  multiTapResetTimeoutId: ReturnType<typeof setTimeout> | null;
};

/**
 * TapGesture class for handling tap interactions
 *
 * This gesture detects when users tap on elements without significant movement,
 * and can recognize single taps, double taps, or other multi-tap sequences.
 */
export class TapGesture<GestureName extends string> extends PointerGesture<GestureName> {
  protected state: TapGestureState = {
    startCentroid: null,
    currentTapCount: 0,
    lastTapTime: 0,
    lastPosition: null,
    multiTapResetTimeoutId: null,
  };

  protected readonly isSinglePhase!: true;

  protected readonly eventType!: TapEvent;

  protected readonly optionsType!: TapGestureOptions<GestureName>;

  protected readonly mutableOptionsType!: Omit<typeof this.optionsType, 'name'>;

  protected readonly mutableStateType!: never;

  /**
   * Maximum distance a pointer can move for a gesture to still be considered a tap
   */
  private maxDistance: number;

  /**
   * Number of consecutive taps to detect
   */
  private taps: number;

  constructor(options: TapGestureOptions<GestureName>) {
    super(options);
    this.maxDistance = options.maxDistance ?? 10;
    this.taps = options.taps ?? 1;
  }

  public clone(overrides?: Record<string, unknown>): TapGesture<GestureName> {
    return new TapGesture({
      name: this.name,
      preventDefault: this.preventDefault,
      stopPropagation: this.stopPropagation,
      minPointers: this.minPointers,
      maxPointers: this.maxPointers,
      maxDistance: this.maxDistance,
      taps: this.taps,
      requiredKeys: [...this.requiredKeys],
      pointerMode: [...this.pointerMode],
      preventIf: [...this.preventIf],
      pointerOptions: structuredClone(this.pointerOptions),
      // Apply any overrides passed to the method
      ...overrides,
    });
  }

  public destroy(): void {
    this.resetState();
    super.destroy();
  }

  protected updateOptions(options: typeof this.mutableOptionsType): void {
      throw new Error("STUB");
  }

  protected resetState(): void {
    this.isActive = false;
    if (this.state.multiTapResetTimeoutId !== null) {
      clearTimeout(this.state.multiTapResetTimeoutId);
    }
    this.state = {
      startCentroid: null,
      currentTapCount: 0,
      lastTapTime: 0,
      lastPosition: null,
      multiTapResetTimeoutId: null,
    };
  }

  /**
   * Handle pointer events for the tap gesture
   */
  protected handlePointerEvent = (
    pointers: Map<number, PointerData>,
    event: PointerEvent,
  ): void => {
      throw new Error("STUB");
  };

  /**
   * Fire the main tap event when a valid tap is detected
   */
  private fireTapEvent(
    element: TargetElement,
    pointers: PointerData[],
    event: PointerEvent,
    position: { x: number; y: number },
  ): void {
      throw new Error("STUB");
  }

  /**
   * Cancel the current tap gesture
   */
  private cancelTap(element: TargetElement, pointers: PointerData[], event: PointerEvent): void {
      throw new Error("STUB");
  }
}
