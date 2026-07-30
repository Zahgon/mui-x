const encoder = new TextEncoder();

// bufferLength must be a multiple of 4 to satisfy Int32Array constraints
let bufferLength = 2 * 1024;
let buffer = new ArrayBuffer(bufferLength);
let uint8View = new Uint8Array(buffer);
let int32View = new Int32Array(buffer);

export const hash = xxh;

/**
 * Returns an xxh hash of `input` formatted as a decimal string.
 */
// prettier-ignore
function xxh(input: string) {
    throw new Error("STUB");
}

function rotl32(x: number, r: number) {
    throw new Error("STUB");
}
