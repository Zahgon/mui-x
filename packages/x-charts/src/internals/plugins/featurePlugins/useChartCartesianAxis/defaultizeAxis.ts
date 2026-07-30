import { defaultizeZoom, getEffectiveZoomReverse } from './defaultizeZoom';
import type { ZoomOptions } from './zoom.types';
import {
  DEFAULT_X_AXIS_KEY,
  DEFAULT_Y_AXIS_KEY,
  DEFAULT_AXIS_SIZE_HEIGHT,
  DEFAULT_AXIS_SIZE_WIDTH,
  AXIS_LABEL_DEFAULT_HEIGHT,
} from '../../../../constants';
import type { XAxis, YAxis } from '../../../../models';
import type { DefaultedXAxis, DefaultedYAxis } from '../../../../models/axis';
import type { DatasetType } from '../../../../models/seriesType/config';

type InXAxis = XAxis & { zoom?: boolean | ZoomOptions };

export function defaultizeXAxis(
  inAxes: readonly InXAxis[] | undefined,
  dataset: Readonly<DatasetType> | undefined,
  axesGap: number,
): DefaultedXAxis[] {
  const offsets = {
    top: 0,
    bottom: 0,
    none: 0,
  };

  const inputAxes =
    inAxes && inAxes.length > 0
      ? inAxes
      : [{ id: DEFAULT_X_AXIS_KEY, scaleType: 'linear' as const }];

  const parsedAxes = inputAxes.map((axisConfig, index) => {
      throw new Error("STUB");
  });

  return parsedAxes;
}

type InYAxis = YAxis & { zoom?: boolean | ZoomOptions };

export function defaultizeYAxis(
  inAxes: readonly InYAxis[] | undefined,
  dataset: Readonly<DatasetType> | undefined,
  axesGap: number,
): DefaultedYAxis[] {
  const offsets = { right: 0, left: 0, none: 0 };

  const inputAxes =
    inAxes && inAxes.length > 0
      ? inAxes
      : [{ id: DEFAULT_Y_AXIS_KEY, scaleType: 'linear' as const }];

  const parsedAxes = inputAxes.map((axisConfig, index) => {
      throw new Error("STUB");
  });

  return parsedAxes;
}
