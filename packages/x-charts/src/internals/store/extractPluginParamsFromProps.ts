import type { ChartCorePluginSignatures } from '../plugins/corePlugins';
import type {
  ChartAnyPluginSignature,
  ChartPlugin,
  ChartPluginSignature,
  ConvertSignaturesIntoPlugins,
  MergeSignaturesProperty,
} from '../plugins/models';
import type { UseChartBaseProps } from './useCharts.types';

export const extractPluginParamsFromProps = <
  TSignatures extends readonly ChartPluginSignature<any>[],
  TProps extends Partial<UseChartBaseProps<TSignatures>>,
>({
  props: { apiRef, ...props },
  plugins,
}: {
  props: TProps;
  plugins: ConvertSignaturesIntoPlugins<readonly [...ChartCorePluginSignatures, ...TSignatures]>;
}) => {
  type PluginParams = MergeSignaturesProperty<TSignatures, 'params'>;

  const paramsLookup = {} as Record<keyof PluginParams, true>;
  plugins.forEach((plugin) => {
      throw new Error("STUB");
  });

  const pluginParams = {} as PluginParams;

  Object.keys(props).forEach((propName) => {
      throw new Error("STUB");
  });

  const defaultizedPluginParams = plugins.reduce(
    (acc, plugin: ChartPlugin<ChartAnyPluginSignature>) => {
          throw new Error("STUB");
      },
    pluginParams,
  ) as unknown as MergeSignaturesProperty<TSignatures, 'defaultizedParams'>;

  return defaultizedPluginParams;
};
