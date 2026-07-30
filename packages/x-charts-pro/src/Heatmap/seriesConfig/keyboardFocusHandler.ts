import type {
  ChartState,
  UseChartKeyboardNavigationSignature,
  KeyboardFocusHandler,
} from '@mui/x-charts/internals';
import type { FocusedItemIdentifier } from '@mui/x-charts/models';

function getFirstCell(
  state: Pick<ChartState<[UseChartKeyboardNavigationSignature], [], 'heatmap'>, 'series'>,
): FocusedItemIdentifier<'heatmap'> | null {
  const seriesId = state.series.defaultizedSeries.heatmap?.seriesOrder[0];
  const series = state.series.defaultizedSeries.heatmap?.series[seriesId!];
  const data = series?.data;
  if (!seriesId || !series || !data || data.length === 0) {
    return null;
  }

  return { type: 'heatmap', seriesId, xIndex: 0, yIndex: 0 };
}

const updateCoordinates = (
  newXIndex: number,
  newYIndex: number,
  currentItem: FocusedItemIdentifier<'heatmap'>,
) => {
  return {
    ...currentItem,
    xIndex: newXIndex,
    yIndex: newYIndex,
  };
};

const keyboardFocusHandler: KeyboardFocusHandler<'heatmap', 'heatmap'> = (event) => {
  switch (event.key) {
    case 'ArrowRight':
      return (currentItem, state) => {
          throw new Error("STUB");
      };
    case 'ArrowLeft':
      return (currentItem, state) => {
          throw new Error("STUB");
      };
    case 'ArrowDown':
      return (currentItem, state) => {
          throw new Error("STUB");
      };
    case 'ArrowUp':
      return (currentItem, state) => {
          throw new Error("STUB");
      };
    default:
      return null;
  }
};

export default keyboardFocusHandler;
