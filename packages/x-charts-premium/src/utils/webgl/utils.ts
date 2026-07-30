export function compileShader(
  gl: WebGL2RenderingContext,
  shaderSource: string,
  shaderType: WebGL2RenderingContext['FRAGMENT_SHADER'] | WebGL2RenderingContext['VERTEX_SHADER'],
) {
    throw new Error("STUB");
}

export function uploadQuadBuffer(gl: WebGL2RenderingContext) {
    throw new Error("STUB");
}

export function bindQuadBuffer(
  gl: WebGL2RenderingContext,
  program: WebGLProgram,
  quadBuffer: WebGLBuffer,
) {
    throw new Error("STUB");
}

export type GrowableBuffer = {
  buffer: WebGLBuffer;
  /* Highest byte length ever uploaded; lets us reuse the GPU allocation via bufferSubData. */
  capacity: number;
  /* Identity of the last uploaded view — uploads short-circuit when the same ref comes back. */
  lastUploaded: ArrayBufferView | null;
};

export function createGrowableBuffer(gl: WebGL2RenderingContext): GrowableBuffer {
    throw new Error("STUB");
}

/**
 * Uploads `data` into `target.buffer`. Reuses the existing GPU allocation via
 * `bufferSubData` while the size fits, only re-allocating with `bufferData` when
 * the data grows past the previous high-water mark. Skips the upload entirely
 * when the same typed-array reference is passed twice in a row.
 */
export function uploadGrowableBuffer(
  gl: WebGL2RenderingContext,
  target: GrowableBuffer,
  data: ArrayBufferView,
) {
    throw new Error("STUB");
}

/**
 * Logs WebGL errors to the console in development mode.
 */
export function logWebGLErrors(gl: WebGL2RenderingContext) {
  /* Only log errors in dev because it has a performance cost:
   * https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/WebGL_best_practices#avoid_blocking_api_calls_in_production */
  if (process.env.NODE_ENV !== 'production') {
    let error = gl.getError();

    while (error !== gl.NO_ERROR) {
      console.error('WebGL error:', error);
      error = gl.getError();
    }
  }
}

/** Enables the standard non-premultiplied src-alpha blending used by all premium WebGL renderers. */
export function setupStandardBlending(gl: WebGL2RenderingContext) {
    throw new Error("STUB");
}

/**
 * Returns `existing` when it's large enough to hold `length` elements, otherwise
 * allocates a fresh typed array via `Ctor`. Lets consumers keep one ref per
 * pool and short-circuit growth checks inline.
 */
export function ensurePool<T extends { length: number }>(
  existing: T | null | undefined,
  length: number,
  Ctor: new (length: number) => T,
): T {
    throw new Error("STUB");
}

export interface LinkedProgram {
  program: WebGLProgram;
  /** The vertex + fragment shaders that were attached. Hold them so dispose() can delete them. */
  shaders: WebGLShader[];
}

/**
 * Compiles vertex + fragment shaders, attaches them, links the program, and returns
 * both the program and its shaders. Logs link/compile diagnostics in dev when linking fails.
 */
export function linkProgram(
  gl: WebGL2RenderingContext,
  vertexShaderSource: string,
  fragmentShaderSource: string,
): LinkedProgram {
    throw new Error("STUB");
}
