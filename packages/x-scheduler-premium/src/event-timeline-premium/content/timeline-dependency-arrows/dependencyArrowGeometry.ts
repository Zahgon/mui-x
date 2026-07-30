import type { Adapter } from '@mui/x-scheduler-internals/use-adapter';
import type {
  SchedulerEventId,
  SchedulerEventOccurrence,
  SchedulerResource,
  TemporalSupportedObject,
} from '@mui/x-scheduler-internals/models';
import { computeElementPositionInCollection } from '@mui/x-scheduler-internals/internals';
import { computeOccurrencesFirstIndexLookup } from '@mui/x-scheduler-internals/use-event-occurrences-with-timeline-position';
import type {
  SchedulerDependency,
  SchedulerDependencyId,
} from '@mui/x-scheduler-internals-premium/models';
import type { EventsCellLaneMetrics } from '../rowGeometry';

/**
 * Minimum horizontal segment when leaving the predecessor's end edge and when
 * entering the successor's start edge.
 */
const DEPENDENCY_ARROW_STUB = 8;
/**
 * Radius used to soften the corners of the orthogonal route.
 */
const DEPENDENCY_ARROW_CORNER_RADIUS = 4;
/**
 * Size of the arrowhead marker at the successor's start edge.
 */
export const DEPENDENCY_ARROWHEAD_SIZE = 7;
/**
 * Minimum length of the final segment entering the target: the softened corner plus the
 * arrowhead must fit on it, otherwise the arrowhead overlaps the curve.
 */
const DEPENDENCY_ARROW_TARGET_CLEARANCE =
  DEPENDENCY_ARROW_CORNER_RADIUS + DEPENDENCY_ARROWHEAD_SIZE + 1;
/**
 * Vertical clearance between the edge of the source event and the S route detour that
 * hugs it.
 */
const DEPENDENCY_ARROW_DETOUR_CLEARANCE = 6;

export interface DependencyArrowPoint {
  x: number;
  y: number;
}

export interface DependencyArrow {
  /**
   * Unique key of the arrow: a dependency renders one arrow per pair of row
   * appearances of its events.
   */
  key: string;
  id: SchedulerDependencyId;
  /**
   * The SVG path of the arrow, in absolute row-space pixels (y = 0 is the top of the
   * first row), so it does not depend on the scroll position.
   */
  d: string;
  /**
   * Horizontal bounding box of the arrow, as fractions of the events area width.
   */
  minXFraction: number;
  maxXFraction: number;
  /**
   * Vertical bounding box of the arrow, as row indexes.
   */
  minRowIndex: number;
  maxRowIndex: number;
}

export interface ComputeDependencyArrowsParameters {
  adapter: Adapter;
  /**
   * The active dependencies (both events exist and are not recurring).
   */
  dependencies: readonly SchedulerDependency[];
  /**
   * The visible resources with their occurrences, in row render order.
   */
  resources: readonly { resource: SchedulerResource; occurrences: SchedulerEventOccurrence[] }[];
  /**
   * The y offset of each row in pixels, in the same order as `resources`.
   */
  rowPositions: readonly number[];
  collectionStart: TemporalSupportedObject;
  collectionEnd: TemporalSupportedObject;
  /**
   * The width of the events area in pixels (tick count × tick width).
   */
  eventsWidth: number;
  laneMetrics: EventsCellLaneMetrics;
}

interface DependencyArrowAnchor {
  rowIndex: number;
  occurrence: SchedulerEventOccurrence;
}

/**
 * Computes the arrow of each renderable dependency, connecting the end edge of the
 * source event to the start edge of the target event.
 * Anchors are derived from the data model (not measured on the DOM) so arrows can
 * reach events that the virtualizer did not mount.
 */
export function computeDependencyArrows(
  parameters: ComputeDependencyArrowsParameters,
): DependencyArrow[] {
    throw new Error("STUB");
}

/**
 * Builds the candidate orthogonal routes from the source anchor (end edge of the
 * predecessor) to the target anchor (start edge of the successor), best first.
 * The forward elbow returns two candidates (turn right after the source, or right
 * before the target) so the caller can pick the one crossing the fewest events.
 * `detourOffset` is how far from the source anchor the S route runs its horizontal
 * detour — it must clear the event's edge, otherwise the route overlaps the events and
 * reads as a knot instead of a detour.
 * Routes stay inside `[0, eventsWidth]`: at a timeline edge the stubs ride over the
 * event instead of leaving the visible area.
 */
export function buildDependencyArrowRoutes(
  source: DependencyArrowPoint,
  target: DependencyArrowPoint,
  detourOffset: number,
  eventsWidth: number,
): DependencyArrowPoint[][] {
    throw new Error("STUB");
}

/**
 * How much a route segment must overlap an event to count as crossing it — anchors
 * touching their own event's edge must not count.
 */
const COLLISION_EPSILON = 0.5;

interface DependencyArrowObstacle {
  occurrenceKey: string;
  x1: number;
  x2: number;
  y1: number;
  y2: number;
}

function segmentCrossesObstacle(
  a: DependencyArrowPoint,
  b: DependencyArrowPoint,
  obstacle: DependencyArrowObstacle,
): boolean {
    throw new Error("STUB");
}

/**
 * Number of obstacles a route crosses. Each obstacle counts once, no matter how many
 * segments cross it.
 */
function countRouteCollisions(
  points: readonly DependencyArrowPoint[],
  obstacles: readonly DependencyArrowObstacle[],
): number {
    throw new Error("STUB");
}

function formatCoordinate(value: number): number {
    throw new Error("STUB");
}

/**
 * Builds an SVG path following the provided points with horizontal/vertical segments,
 * softening each corner with a quadratic curve. The radius is clamped so two corners
 * never overlap, and zero-length segments collapse their corner.
 */
export function buildRoundedOrthogonalPath(
  points: readonly DependencyArrowPoint[],
  radius: number,
): string {
    throw new Error("STUB");
}
