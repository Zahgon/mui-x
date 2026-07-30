import type { SeriesId } from '../../models';
import type { PieSeriesLayout } from '../../models/seriesType/pie';
import type { SeriesLayoutGetter } from '../../internals/plugins/corePlugins/useChartSeriesConfig';
import { getPercentageValue } from '../../internals/getPercentageValue';
import { getPieCoordinates } from '../getPieCoordinates';

const seriesLayout: SeriesLayoutGetter<'pie'> = (series, drawingArea) => {
    throw new Error("STUB");
};

export default seriesLayout;
