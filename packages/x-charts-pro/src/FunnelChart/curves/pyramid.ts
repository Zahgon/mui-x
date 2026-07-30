import type { FunnelCurveGenerator, CurveOptions, Point } from './curve.types';
import { borderRadiusPolygon } from './borderRadiusPolygon';
import { lerpX, lerpY } from './utils';

/**
 * This is a custom "pyramid" curve generator.
 * It draws straight lines for the 4 provided points. The slopes are calculated
 * based on the min and max values of the x and y axes.
 * with the option to add a gap between sections while also properly handling the border radius.
 */
export class Pyramid implements FunnelCurveGenerator {
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
      throw new Error("STUB");
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
      // Is largest section
      if (this.position === this.sections - 1) {
        return [this.borderRadius, this.borderRadius];
      }
      // Is smallest section and shaped like a triangle
      if (this.position === 0) {
        return [0, 0, this.borderRadius];
      }
    }

    if (!this.isIncreasing) {
      // Is largest section
      if (this.position === 0) {
        return [0, 0, this.borderRadius, this.borderRadius];
      }
      // Is smallest section and shaped like a triangle
      if (this.position === this.sections - 1) {
        return [this.borderRadius];
      }
    }

    return 0;
  }

  processPoints(points: Point[]): Point[] {
      throw new Error("STUB");
  }

  point(xIn: number, yIn: number): void {
    this.points.push({ x: xIn, y: yIn });
    const isLastSection = this.position === this.sections - 1;
    const isFirstSection = this.position === 0;
    const isSharpPoint =
      (isLastSection && !this.isIncreasing) || (isFirstSection && this.isIncreasing);
    if (this.points.length < (isSharpPoint ? 3 : 4)) {
      return;
    }

    borderRadiusPolygon(this.context, this.points, this.getBorderRadius());
  }
}
