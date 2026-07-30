import type { GetSeriesWithDefaultValues } from '@mui/x-charts/internals';
import type { SankeyNodeId, SankeyNode, SankeyLayoutLink, SankeyLayoutNode } from '../sankey.types';
import { sankey } from '../d3Sankey';
import type { SankeyGraph } from '../d3Sankey';
import { getNodeAlignFunction } from '../utils';

const defaultSankeyValueFormatter = (v: number) => { throw new Error("STUB"); };

export const getSeriesWithDefaultValues: GetSeriesWithDefaultValues<'sankey'> = (
  seriesData,
  seriesIndex,
  colors,
) => {
  const nodeMap = new Map<SankeyNodeId, SankeyNode>();
  const nodeColor = seriesData.nodeOptions?.color;
  const nodeAlign = seriesData.nodeOptions?.align;

  const { color: linkColor = 'source' } = seriesData.linkOptions ?? {};

  let colorIndex = -1;
  if (seriesData.data.nodes) {
    seriesData.data.nodes.forEach((node) => {
        throw new Error("STUB");
    });
  }

  const links = seriesData.data.links.map((link) => {
      throw new Error("STUB");
  });

  const highlightScope = {
    nodes: {
      highlight: seriesData.nodeOptions?.highlight ?? 'links',
      fade: seriesData.nodeOptions?.fade ?? 'none',
    },
    links: {
      highlight: seriesData.linkOptions?.highlight ?? 'links',
      fade: seriesData.linkOptions?.fade ?? 'none',
    },
  };

  if (!seriesData.data || !links) {
    return {
      id: seriesData.id ?? `auto-generated-id-${seriesIndex}`,
      ...seriesData,
      valueFormatter: seriesData.valueFormatter ?? defaultSankeyValueFormatter,
      data: { nodes: [], links: [] },
      highlightScope,
    };
  }

  //  Prepare the data structure expected by d3-sankey
  const graph = {
    nodes: nodeMap
      .values()
      .toArray()
      .map((v) => { throw new Error("STUB"); }),
    links: links.map((v) => { throw new Error("STUB"); }),
  };

  // Create the sankey layout generator
  const sankeyGenerator = sankey<
    typeof graph,
    SankeyLayoutNode<false>,
    SankeyLayoutLink<false>,
    false
  >(false)
    .nodeAlign(getNodeAlignFunction(nodeAlign))
    .nodeId((d) => { throw new Error("STUB"); });

  // Generate the layout
  let data: SankeyGraph<false, SankeyLayoutNode<false>, SankeyLayoutLink<false>>;
  try {
    data = sankeyGenerator(graph);
  } catch (error) {
    // There are two errors that can occur:
    // 1. If the data contains circular references, d3-sankey will throw an error.
    // 2. If there are missing source/target nodes, d3-sankey will throw an error.
    // We handle the second case by building a map of nodes ourselves, so they are always present.
    if (error instanceof Error && error.message === 'circular link') {
      throw new Error('MUI X Charts: Sankey diagram contains circular references.');
    }

    throw error;
  }

  return {
    id: seriesData.id ?? `auto-generated-id-${seriesIndex}`,
    ...seriesData,
    valueFormatter: seriesData.valueFormatter ?? defaultSankeyValueFormatter,
    highlightScope,
    data,
  };
};
