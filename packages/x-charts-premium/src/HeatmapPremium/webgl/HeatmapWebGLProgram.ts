import {
  bindQuadBuffer,
  createGrowableBuffer,
  linkProgram,
  logWebGLErrors,
  setupStandardBlending,
  uploadGrowableBuffer,
  uploadQuadBuffer,
} from '../../utils/webgl/utils';
import { bindInstancedAttribute } from '../../utils/webgl/instancedAttribute';
import type { GrowableBuffer } from '../../utils/webgl/utils';
import {
  heatmapFragmentShaderSourceNoBorderRadius,
  heatmapFragmentShaderSourceWithBorderRadius,
  heatmapVertexShaderSource,
} from './shaders';

export interface HeatmapPlotData {
  centers: Float32Array;
  /* RGBA, 1 byte per channel; shader reads normalized [0, 1] floats. */
  colors: Uint8Array;
  saturations: Float32Array;
}

type ProgramVariant = {
  program: WebGLProgram;
  vao: WebGLVertexArrayObject;
  uResolution: WebGLUniformLocation | null;
  uDimensions: WebGLUniformLocation | null;
  uBorderRadius: WebGLUniformLocation | null;
};

export class HeatmapWebGLProgram {
  private readonly shaders: WebGLShader[] = [];

  private readonly quadBuffer: WebGLBuffer;

  private readonly centers: GrowableBuffer;

  private readonly colors: GrowableBuffer;

  private readonly saturations: GrowableBuffer;

  private readonly flatVariant: ProgramVariant;

  private readonly roundedVariant: ProgramVariant;

  private active: ProgramVariant;

  constructor(private gl: WebGL2RenderingContext) {
      throw new Error("STUB");
  }

  private buildVariant(fragmentShaderSource: string): ProgramVariant {
      throw new Error("STUB");
  }

  setBorderRadius(borderRadius: number) {
      throw new Error("STUB");
  }

  setResolution(width: number, height: number) {
      throw new Error("STUB");
  }

  setRectDimensions(width: number, height: number) {
      throw new Error("STUB");
  }

  plot(plotData: HeatmapPlotData) {
      throw new Error("STUB");
  }

  render(dataLength: number) {
    if (dataLength === 0) {
      return;
    }
    const { gl } = this;
    gl.useProgram(this.active.program);
    gl.bindVertexArray(this.active.vao);
    gl.drawArraysInstanced(gl.TRIANGLE_STRIP, 0, 4, dataLength);
    logWebGLErrors(gl);
  }

  dispose() {
    const { gl } = this;
    gl.deleteBuffer(this.quadBuffer);
    gl.deleteBuffer(this.centers.buffer);
    gl.deleteBuffer(this.colors.buffer);
    gl.deleteBuffer(this.saturations.buffer);

    gl.deleteProgram(this.flatVariant.program);
    gl.deleteVertexArray(this.flatVariant.vao);
    gl.deleteProgram(this.roundedVariant.program);
    gl.deleteVertexArray(this.roundedVariant.vao);

    this.shaders.forEach((shader) => { throw new Error("STUB"); });
  }
}
