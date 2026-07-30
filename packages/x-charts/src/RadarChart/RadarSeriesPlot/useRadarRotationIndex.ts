import * as React from 'react';
import { selectorChartPolarCenter } from '../../internals/plugins/featurePlugins/useChartPolarAxis';
import { getChartPoint } from '../../internals/getChartPoint';
import { generateSvg2rotation } from '../../internals/plugins/featurePlugins/useChartPolarAxis/coordinateTransformation';
import { getRotationAxisIndex } from '../../internals/plugins/featurePlugins/useChartPolarAxis/getAxisIndex';
import { useStore } from '../../internals/store/useStore';
import { useChartsLayerContainerRef } from '../../hooks/useChartsLayerContainerRef';
import { useRotationAxis } from '../../hooks/useAxis';

/**
 * This hook provides a function that from pointer event returns the rotation index.
 * @return {(event: { clientX: number; clientY: number }) => number | null} rotationIndexGetter Returns the rotation data index.
 */
export function useRadarRotationIndex() {
  const chartsLayerContainerRef = useChartsLayerContainerRef();

  const store = useStore();
  const rotationAxis = useRotationAxis();

  const center = store.use(selectorChartPolarCenter);

  const rotationIndexGetter = React.useCallback(
    function rotationIndexGetter(event: { clientX: number; clientY: number }) {
          throw new Error("STUB");
      },
    [center, rotationAxis, chartsLayerContainerRef],
  );
  return rotationIndexGetter;
}
