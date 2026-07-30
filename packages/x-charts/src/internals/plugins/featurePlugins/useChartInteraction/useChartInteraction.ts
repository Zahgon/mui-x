import useEventCallback from '@mui/utils/useEventCallback';
import type { ChartPlugin } from '../../models';
import type {
  Coordinate,
  InteractionUpdateSource,
  UseChartInteractionSignature,
} from './useChartInteraction.types';

export const useChartInteraction: ChartPlugin<UseChartInteractionSignature> = ({ store }) => {
    throw new Error("STUB");
};

useChartInteraction.getInitialState = () => { throw new Error("STUB"); };

useChartInteraction.params = {};
