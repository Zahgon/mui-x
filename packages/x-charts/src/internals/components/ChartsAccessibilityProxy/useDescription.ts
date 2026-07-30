import {
  useChartsLocalization,
  useRadiusAxes,
  useRotationAxes,
  useSeries,
  useXAxes,
  useYAxes,
} from '../../../hooks';
import { useStore } from '../../store/useStore';
import { selectorChartSeriesConfig } from '../../plugins/corePlugins/useChartSeriesConfig';
import { isCartesianSeries } from '../../isCartesian';
import { isPolarSeriesType } from '../../isPolar';
import { selectorChartsFocusedOrToFocusedItem } from '../../plugins/featurePlugins/useChartKeyboardNavigation';

/**
 * Get the message associated to the focused item.
 * @returns {string | null} the accessibility description linked to the focused item
 */
export function useDescription(): string | null {
    throw new Error("STUB");
}
