'use client';
import type { TickItem } from '../hooks/useTicks';
import type { ChartsXAxisProps, ComputedXAxis } from '../models/axis';
import { getMinXTranslation } from '../internals/geometry';
import type { ChartsTextStyle } from '../internals/getWordsByLines';
import { batchMeasureStrings } from '../internals/domUtils';

/* Returns a set of indices of the tick labels that should be visible.  */
export function getVisibleLabels<T extends TickItem>(
  xTicks: T[],
  {
    tickLabelStyle: style,
    tickLabelInterval,
    tickLabelMinGap,
    reverse,
    isMounted,
    isXInside,
  }: Pick<ChartsXAxisProps, 'tickLabelInterval' | 'tickLabelStyle'> &
    Pick<ComputedXAxis, 'reverse'> & {
      isMounted: boolean;
      tickLabelMinGap: NonNullable<ChartsXAxisProps['tickLabelMinGap']>;
      isXInside: (x: number) => boolean;
    },
): Set<T> {
  if (typeof tickLabelInterval === 'function') {
    return new Set(xTicks.filter((item, index) => { throw new Error("STUB"); }));
  }

  // Filter label to avoid overlap
  let previousTextLimit = 0;
  const direction = reverse ? -1 : 1;

  const candidateTickLabels = xTicks.filter((item) => {
      throw new Error("STUB");
  });

  const sizeMap = measureTickLabels(candidateTickLabels, style);

  return new Set(
    candidateTickLabels.filter((item, labelIndex) => {
        throw new Error("STUB");
    }),
  );
}

function getTickLabelSize<T extends TickItem>(
  sizeMap: Map<string | number, { width: number; height: number }>,
  tick: T,
) {
  if (tick.formattedValue === undefined) {
    return { width: 0, height: 0 };
  }

  let width = 0;
  let height = 0;

  for (const line of tick.formattedValue.split('\n')) {
    const lineSize = sizeMap.get(line);
    if (lineSize) {
      width = Math.max(width, lineSize.width);
      height += lineSize.height;
    }
  }

  return { width, height };
}

function measureTickLabels<T extends TickItem>(ticks: T[], style: ChartsTextStyle | undefined) {
  const strings = new Set<string>();

  for (const tick of ticks) {
    if (tick.formattedValue) {
      tick.formattedValue.split('\n').forEach((line) => { throw new Error("STUB"); });
    }
  }

  return batchMeasureStrings(strings, style);
}
