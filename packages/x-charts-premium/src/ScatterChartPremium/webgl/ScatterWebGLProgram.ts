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
import { scatterVertexShader, scatterFragmentShader } from './shaders';
import type { ScatterWebGLPlotData } from './useScatterWebGLPlotData';

export class ScatterWebGLProgram {
  private readonly shaders: WebGLShader[] = [];
  private readonly quadBuffer: WebGLBuffer;

  private readonly program: WebGLProgram;
  private readonly vao: WebGLVertexArrayObject;
  private readonly centers: InstancedAttribute;
  private readonly sizes: InstancedAttribute;
  /* Colors come in as Uint8 [0, 255]; normalized=true makes the GPU read them back as vec4 in [0, 1]. */
  private readonly colors: InstancedAttribute;

  constructor(private gl: WebGL2RenderingContext) {
      throw new Error("STUB");
  }

  setResolution(width: number, height: number) {
      throw new Error("STUB");
  }

  plot(plotData: ScatterWebGLPlotData) {
      throw new Error("STUB");
  }

  render(plotData: ScatterWebGLPlotData) {
    if (plotData.pointCount === 0) {
      return;
    }
    const { gl } = this;
    gl.useProgram(this.program);
    logWebGLErrors(gl);
    gl.bindVertexArray(this.vao);
    gl.drawArraysInstanced(gl.TRIANGLE_STRIP, 0, 4, plotData.pointCount);
    gl.bindVertexArray(null);
  }

  dispose() {
    const { gl } = this;
    gl.deleteProgram(this.program);
    gl.deleteVertexArray(this.vao);
    gl.deleteBuffer(this.centers.buffer.buffer);
    gl.deleteBuffer(this.sizes.buffer.buffer);
    gl.deleteBuffer(this.colors.buffer.buffer);
    gl.deleteBuffer(this.quadBuffer);
    this.shaders.forEach((shader) => { throw new Error("STUB"); });
  }
}
