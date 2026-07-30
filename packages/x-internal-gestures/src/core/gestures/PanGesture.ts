/**
 * PanGesture - Detects panning (dragging) movements
 *
 * This gesture tracks pointer dragging movements across elements, firing events when:
 * - The drag movement begins and passes the threshold distance (start)
 * - The drag movement continues (ongoing)
 * - The drag movement ends (end)
 *
 * The gesture can be configured to recognize movement only in specific directions.
 */

import { GesturePhase, GestureState } from '../Gesture';
import { PointerGesture, PointerGestureEventData, PointerGestureOptions } from '../PointerGesture';
import { PointerData } from '../PointerManager';
import { TargetElement } from '../types/TargetElement';
import { Direction } from '../types/Direction';
import { calculateCentroid, createEventName, getDirection, isDirectionAllowed } from '../utils';

/**
 * Configuration options for PanGesture
 * Extends PointerGestureOptions with direction constraints
 */
export type PanGestureOptions<GestureName extends string> = PointerGestureOptions<GestureName> & {
  /**
   * Optional array of allowed directions for the pan gesture
   * If not specified, all directions are allowed
   */
  direction?: Array<'up' | 'down' | 'left' | 'right'>;

  /**
   * Distance threshold in pixels for gesture activation.
   *
   * The gesture will only be recognized once the pointers have moved this many
   * pixels from their starting positions. Higher values prevent accidental
   * gesture recognition when the user makes small unintentional movements.
   *
   * @default 0 (no threshold)
   */
  threshold?: number;
};

/**
 * Event data specific to pan gesture events
 * Contains information about movement distance, direction, and velocity
 */
export type PanGestureEventData<
  CustomData extends Record<string, unknown> = Record<string, unknown>,
> = PointerGestureEventData<CustomData> & {
  /** The centroid position at the start of the gesture */
  initialCentroid: { x: number; y: number };
  /** Horizontal distance moved in pixels from last event */
  deltaX: number;
  /** Vertical distance moved in pixels from last event */
  deltaY: number;
  /** Total accumulated horizontal movement in pixels */
  totalDeltaX: number;
  /** Total accumulated vertical movement in pixels */
  totalDeltaY: number;
  /** Horizontal distance moved in pixels from the start of the current gesture */
  activeDeltaX: number;
  /** Vertical distance moved in pixels from the start of the current gesture */
  activeDeltaY: number;
  /** The direction of movement with vertical and horizontal components */
  direction: Direction;
  /** Horizontal velocity in pixels per second */
  velocityX: number;
  /** Vertical velocity in pixels per second */
  velocityY: number;
  /** Total velocity magnitude in pixels per second */
  velocity: number;
};

/**
 * Type definition for the CustomEvent created by PanGesture
 */
export type PanEvent<CustomData extends Record<string, unknown> = Record<string, unknown>> =
  CustomEvent<PanGestureEventData<CustomData>>;

/**
 * State tracking for the PanGesture
 */
export type PanGestureState = GestureState & {
  /** The initial centroid position when the gesture began */
  startCentroid: { x: number; y: number } | null;
  /** The most recent centroid position during the gesture */
  lastCentroid: { x: number; y: number } | null;
  /** Whether the movement threshold has been reached to activate the gesture */
  movementThresholdReached: boolean;
  /** Total accumulated horizontal delta since gesture tracking began */
  totalDeltaX: number;
  /** Total accumulated vertical delta since gesture tracking began */
  totalDeltaY: number;
  /** Active horizontal delta since the start of the current gesture */
  activeDeltaX: number;
  /** Active vertical delta since the start of the current gesture */
  activeDeltaY: number;
  /** Map of pointers that initiated the gesture, used for tracking state */
  startPointers: Map<number, PointerData>;
  /** The last direction of movement detected */
  lastDirection: Direction;
  /** The last delta movement in pixels since the last event */
  lastDeltas: { x: number; y: number } | null;
};

/**
 * PanGesture class for handling panning/dragging interactions
 *
 * This gesture detects when users drag across elements with one or more pointers,
 * and dispatches directional movement events with delta and velocity information.
 */
export class PanGesture<GestureName extends string> extends PointerGesture<GestureName> {
  protected state: PanGestureState = {
    startPointers: new Map(),
    startCentroid: null,
    lastCentroid: null,
    movementThresholdReached: false,
    totalDeltaX: 0,
    totalDeltaY: 0,
    activeDeltaX: 0,
    activeDeltaY: 0,
    lastDirection: {
      vertical: null,
      horizontal: null,
      mainAxis: null,
    },
    lastDeltas: null,
  };

  protected readonly isSinglePhase!: false;

  protected readonly eventType!: PanEvent;

  protected readonly optionsType!: PanGestureOptions<GestureName>;

  protected readonly mutableOptionsType!: Omit<typeof this.optionsType, 'name'>;

  protected readonly mutableStateType!: Omit<
    Partial<typeof this.state>,
    | 'startPointers'
    | 'startCentroid'
    | 'lastCentroid'
    | 'movementThresholdReached'
    | 'lastDirection'
  >;

  /**
   * Movement threshold in pixels that must be exceeded before the gesture activates.
   * Higher values reduce false positive gesture detection for small movements.
   */
  protected threshold: number;

  /**
   * Allowed directions for the pan gesture
   * Default allows all directions
   */
  private direction: Array<'up' | 'down' | 'left' | 'right'>;

  constructor(options: PanGestureOptions<GestureName>) {
    super(options);
    this.direction = options.direction || ['up', 'down', 'left', 'right'];
    this.threshold = options.threshold || 0;
  }

  public clone(overrides?: Record<string, unknown>): PanGesture<GestureName> {
    return new PanGesture({
      name: this.name,
      preventDefault: this.preventDefault,
      stopPropagation: this.stopPropagation,
      threshold: this.threshold,
      minPointers: this.minPointers,
      maxPointers: this.maxPointers,
      direction: [...this.direction],
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
    this.state = {
      ...this.state,
      startPointers: new Map(),
      startCentroid: null,
      lastCentroid: null,
      lastDeltas: null,
      activeDeltaX: 0,
      activeDeltaY: 0,
      movementThresholdReached: false,
      lastDirection: {
        vertical: null,
        horizontal: null,
        mainAxis: null,
      },
    };
  }

  /**
   * Handle pointer events for the pan gesture
   */
  protected handlePointerEvent = (
    pointers: Map<number, PointerData>,
    event: PointerEvent,
  ): void => {
      throw new Error("STUB");
  };

  /**
   * Emit pan-specific events with additional data
   */
  private emitPanEvent(
    element: TargetElement,
    phase: GesturePhase,
    pointers: PointerData[],
    event: PointerEvent,
    currentCentroid: { x: number; y: number },
  ): void {
    if (!this.state.startCentroid) {
      return;
    }

    const deltaX = this.state.lastDeltas?.x ?? 0;
    const deltaY = this.state.lastDeltas?.y ?? 0;

    // Calculate velocity - time difference in seconds
    const firstPointer = this.state.startPointers.values().next().value;
    const timeElapsed = firstPointer ? (event.timeStamp - firstPointer.timeStamp) / 1000 : 0;
    const velocityX = timeElapsed > 0 ? deltaX / timeElapsed : 0;
    const velocityY = timeElapsed > 0 ? deltaY / timeElapsed : 0;
    const velocity = Math.sqrt(velocityX * velocityX + velocityY * velocityY);

    // Get list of active gestures
    const activeGestures = this.gesturesRegistry.getActiveGestures(element);

    // Create custom event data
    const customEventData: PanGestureEventData = {
      gestureName: this.name,
      initialCentroid: this.state.startCentroid,
      centroid: currentCentroid,
      target: event.target,
      srcEvent: event,
      phase,
      pointers,
      timeStamp: event.timeStamp,
      deltaX,
      deltaY,
      direction: this.state.lastDirection,
      velocityX,
      velocityY,
      velocity,
      totalDeltaX: this.state.totalDeltaX,
      totalDeltaY: this.state.totalDeltaY,
      activeDeltaX: this.state.activeDeltaX,
      activeDeltaY: this.state.activeDeltaY,
      activeGestures,
      customData: this.customData,
    };

    // Event names to trigger
    const eventName = createEventName(this.name, phase);

    // Dispatch custom events on the element
    const domEvent = new CustomEvent(eventName, {
      bubbles: true,
      cancelable: true,
      composed: true,
      detail: customEventData,
    });

    element.dispatchEvent(domEvent);

    // Apply preventDefault/stopPropagation if configured
    if (this.preventDefault) {
      event.preventDefault();
    }

    if (this.stopPropagation) {
      event.stopPropagation();
    }
  }

  /**
   * Cancel the current gesture
   */
  private cancel(
    element: TargetElement | null,
    pointers: PointerData[],
    event: PointerEvent,
  ): void {
    if (this.isActive) {
      const el = element ?? this.element;
      this.emitPanEvent(el, 'cancel', pointers, event, this.state.lastCentroid!);
      this.emitPanEvent(el, 'end', pointers, event, this.state.lastCentroid!);
    }
    this.resetState();
  }
}
