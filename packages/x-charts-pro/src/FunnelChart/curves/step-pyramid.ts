import type { FunnelCurveGenerator, CurveOptions, Point } from './curve.types';
import { borderRadiusPolygon } from './borderRadiusPolygon';
import { lerpX, lerpY } from './utils';

/**
 * This is a custom "step-pyramid" curve generator.
 * It creates a step pyramid, which is a step-like shape with static lengths.
 * It has the option to add a gap between sections while also properly handling the border radius.
 */
export class StepPyramid implements FunnelCurveGenerator {
  private context: CanvasRenderingContext2D;

  private position: number = 0;

  private sections: number = 0;

  private isHorizontal: boolean = false;

  private isIncreasing: boolean = false;

  private gap: number = 0;

  private borderRadius: number = 0;

  private min: Point = { x: 0, y: 0 };

  private max: Point = { x: 0, y: 0 };

  private points: Point[] = [];

  constructor(
    context: CanvasRenderingContext2D,
    { isHorizontal, gap, position, sections, borderRadius, min, max, isIncreasing }: CurveOptions,
  ) {
    this.context = context;
    this.isHorizontal = isHorizontal ?? false;
    this.gap = gap ?? 0;
    this.position = position ?? 0;
    this.sections = sections ?? 1;
    this.borderRadius = borderRadius ?? 0;
    this.isIncreasing = isIncreasing ?? false;
    this.min = min ?? { x: 0, y: 0 };
    this.max = max ?? { x: 0, y: 0 };
  }

  areaStart(): void {
      throw new Error("STUB");
  }

  areaEnd(): void {
      throw new Error("STUB");
  }

  lineStart(): void {}

  lineEnd(): void {}

  protected getBorderRadius(): number | number[] {
    if (this.gap > 0) {
      return this.borderRadius;
    }

    if (this.isIncreasing) {
      if (this.position === this.sections - 1) {
        return this.borderRadius;
      }

      return [0, 0, this.borderRadius, this.borderRadius];
    }

    if (this.position === 0) {
      return this.borderRadius;
    }

    return [this.borderRadius, this.borderRadius];
  }

  slopeStart(index: number): Point {
      throw new Error("STUB");
  }

  slopeEnd(index: number): Point {
      throw new Error("STUB");
  }

  initialX(index: number, points: Point[]): number {
      throw new Error("STUB");
  }

  initialY(index: number, points: Point[]): number {
      throw new Error("STUB");
  }

  processPoints(points: Point[]): Point[] {
      throw new Error("STUB");
  }

  point(xIn: number, yIn: number): void {
    this.points.push({ x: xIn, y: yIn });
    if (this.points.length < 4) {
      return;
    }

    borderRadiusPolygon(this.context, this.points, this.getBorderRadius());
  }
}
