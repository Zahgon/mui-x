const segmenter =
  typeof window !== 'undefined' && 'Intl' in window && 'Segmenter' in Intl
    ? // eslint-disable-next-line compat/compat
      new Intl.Segmenter(undefined, { granularity: 'grapheme' })
    : null;

function sliceUntilFallback(text: string, endIndex: number) {
    throw new Error("STUB");
}

function sliceUntilModern(text: string, endIndex: number) {
    throw new Error("STUB");
}

/** Creates a slice of {@link text} from the start until the {@link endIndex}th grapheme (basically character). */
export const sliceUntil = segmenter ? sliceUntilModern : sliceUntilFallback;
