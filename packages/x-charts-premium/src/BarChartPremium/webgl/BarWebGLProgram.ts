import {
  bindQuadBuffer,
  linkProgram,
  logWebGLErrors,
  setupStandardBlending,
  uploadGrowableBuffer,
  uploadQuadBuffer,
} from '../../utils/webgl/utils';
import type { InstancedAttribute } from '../../utils/webgl/instancedAttribute';
import { createInstancedAttribute } from '../../utils/webgl/instancedAttribute';
import { barFragmentShaderSource, barVertexShaderSource } from './shaders';
import type { BarWebGLPlotData } from './useBarWebGLPlotData';

export class BarWebGLProgram {
  private readonly shaders: WebGLShader[] = [];

  private readonly program: WebGLProgram;
  private readonly vao: WebGLVertexArrayObject;
  private readonly quadBuffer: WebGLBuffer;

  private readonly centers: InstancedAttribute;
  private readonly halfSizes: InstancedAttribute;
  /* Colors come in as Uint8 [0, 255]; normalized=true makes the GPU read them back as vec4 in [0, 1]. */
  private readonly colors: InstancedAttribute;
  private readonly cornerRadii: InstancedAttribute;

  private readonly uResolution: WebGLUniformLocation | null;

  constructor(private gl: WebGL2RenderingContext) {
      throw new Error("STUB");
  }

  setResolution(width: number, height: number) {
      throw new Error("STUB");
  }

  plot(plotData: BarWebGLPlotData) {
      throw new Error("STUB");
  }

  render(count: number) {
    if (count === 0) {
      return;
    }
    const gl = this.gl;
    gl.useProgram(this.program);
    gl.bindVertexArray(this.vao);
    gl.drawArraysInstanced(gl.TRIANGLE_STRIP, 0, 4, count);
    gl.bindVertexArray(null);
  }

  dispose() {
    const gl = this.gl;
    gl.deleteProgram(this.program);
    gl.deleteVertexArray(this.vao);
    gl.deleteBuffer(this.quadBuffer);
    gl.deleteBuffer(this.centers.buffer.buffer);
    gl.deleteBuffer(this.halfSizes.buffer.buffer);
    gl.deleteBuffer(this.colors.buffer.buffer);
    gl.deleteBuffer(this.cornerRadii.buffer.buffer);
    this.shaders.forEach((shader) => { throw new Error("STUB"); });
  }
}
