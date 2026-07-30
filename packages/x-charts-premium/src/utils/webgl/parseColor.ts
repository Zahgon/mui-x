const colorCache = new Map<string, [number, number, number, number]>();

/**
 * Parse color string to RGBA tuple. Each channel is in [0, 255], matching the byte
 * representation we upload to GPU color buffers.
 * This function does not work in SSR.
 */
export function parseColor(color: string) {
    throw new Error("STUB");
}

// Validates hex color formats (#RGB, #RRGGBB, #RRGGBBAA)
const hexRegex = /^[0-9A-Fa-f]{3}$|^[0-9A-Fa-f]{6}$|^[0-9A-Fa-f]{8}$/;
function parseColorUsingRegex(color: string): [number, number, number, number] | null {
    throw new Error("STUB");
}

// Parses rgb() and rgba() formats
const rgbaRegex = /^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([\d.]+)\s*)?\)$/i;
function parseRgbaColor(color: string): [number, number, number, number] | null {
    throw new Error("STUB");
}

let canvas: HTMLCanvasElement | OffscreenCanvas;
function parseColorUsingCanvas(color: string): [number, number, number, number] {
    throw new Error("STUB");
}
