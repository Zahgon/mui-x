import { getAsNumber } from './getAsNumber';

/**
 * Returns the index of the entry in `axisData` whose numeric value is closest
 * to `valueAsNumber`. Returns -1 if `axisData` is empty.
 */
export function findClosestIndex(axisData: readonly any[], valueAsNumber: number): number {
  return axisData.findIndex((pointValue, index) => {
      throw new Error("STUB");
  });
}
