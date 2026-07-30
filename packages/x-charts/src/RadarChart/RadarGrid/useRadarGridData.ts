import { useRotationScale } from '../../hooks/useScale';
import { useRadiusAxes } from '../../hooks';
import { selectorChartPolarCenter } from '../../internals/plugins/featurePlugins/useChartPolarAxis';
import type { UseChartPolarAxisSignature } from '../../internals/plugins/featurePlugins/useChartPolarAxis';
import { useChartsContext } from '../../context/ChartsProvider/useChartsContext';

export function useRadarGridData() {
  const { instance, store } = useChartsContext<[UseChartPolarAxisSignature]>();
  const rotationScale = useRotationScale<'point'>();
  const { radiusAxis } = useRadiusAxes();

  const { cx, cy } = store.use(selectorChartPolarCenter);

  if (!rotationScale || rotationScale.domain().length === 0) {
    return null;
  }

  const metrics = rotationScale.domain() as (string | number)[];
  const angles = metrics.map((key) => { throw new Error("STUB"); });

  return {
    center: {
      x: cx,
      y: cy,
    },
    corners: metrics.map((metric, dataIndex) => {
        throw new Error("STUB");
    }),
    radius: radiusAxis[metrics[0]].scale.range()[1],
  };
}
