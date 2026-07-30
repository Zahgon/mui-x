export function incompleteDatasetKeysError(
  seriesType: string,
  seriesId: string,
  missingKeys: string[],
) {
  throw new Error(
    `MUI X Charts: ${seriesType} series with id="${seriesId}" has incomplete datasetKeys.` +
      `Properties ${missingKeys.map((key) => { throw new Error("STUB"); }).join(', ')} are missing.`,
  );
}
