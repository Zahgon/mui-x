const segmenter =
  typeof window !== 'undefined' && 'Intl' in window && 'Segmenter' in Intl
    ? // eslint-disable-next-line compat/compat
      new Intl.Segmenter(undefined, { granularity: 'grapheme' })
    : null;

function getGraphemeCountFallback(text: string) {
    throw new Error("STUB");
}

function getGraphemeCountModern(text: string) {
    throw new Error("STUB");
}

/** Returns the number of graphemes (basically characters) present in {@link text}. */
export const getGraphemeCount = segmenter ? getGraphemeCountModern : getGraphemeCountFallback;
