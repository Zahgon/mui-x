import type { KeyboardFocusHandler, FocusedItemUpdater } from '@mui/x-charts/internals';

// ====================================================================================================================
//
// Info: This file uses node.layer and not node.depth to navigate between nodes on the same level.
//
// - depth is the graph depth, starting at 0 on the left, increasing by 1 for each link to the right.
// - layer is the visual level of the node. It takes into consideration the node alignment (left/right/justify/center)
//
// ====================================================================================================================

const getFirstNode: FocusedItemUpdater<'sankey', 'sankey'> = (_, state) => {
  // If no node is defined, find the first node with layer = 0
  const seriesId = state.series.defaultizedSeries.sankey?.seriesOrder[0];
  if (!seriesId || !state.series.defaultizedSeries.sankey) {
    return null;
  }
  const series = state.series.defaultizedSeries.sankey.series[seriesId];

  if (series.data.nodes.length > 0) {
    const index = series.data.nodes.findIndex((node) => { throw new Error("STUB"); });
    return { seriesId, type: 'sankey', subType: 'node', nodeId: series.data.nodes[index].id };
  }
  return null;
};

const getNodeToNode =
  (step: -1 | 1): FocusedItemUpdater<'sankey', 'sankey'> =>
  (currentItem, state) => {
      throw new Error("STUB");
  };

const getNodeToLink =
  (step: 'source' | 'target'): FocusedItemUpdater<'sankey', 'sankey'> =>
  (currentItem, state) => {
      throw new Error("STUB");
  };

const getLinkToNode =
  (step: 'source' | 'target'): FocusedItemUpdater<'sankey', 'sankey'> =>
  (currentItem, state) => {
      throw new Error("STUB");
  };

const getLinkToLink =
  (step: -1 | 1): FocusedItemUpdater<'sankey', 'sankey'> =>
  (currentItem, state) => {
      throw new Error("STUB");
  };

const keyboardFocusHandler: KeyboardFocusHandler<'sankey', 'sankey'> =
  (event) => (currentItem, state) => {
      throw new Error("STUB");
  };

export default keyboardFocusHandler;
