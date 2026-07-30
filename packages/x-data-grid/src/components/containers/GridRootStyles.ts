import type { RefObject } from '@mui/x-internals/types';
import type { CSSInterpolation } from '@mui/system';
import { styled, css } from '@mui/material/styles';
import type {} from '../../themeAugmentation/overrides';
import { gridClasses as c, gridClassesOverrides } from '../../constants/gridClasses';
import { vars } from '../../constants/cssVariables';
import type { DataGridProcessedProps } from '../../models/props/DataGridProps';
import { useGridSelector } from '../../hooks/utils/useGridSelector';
import { useGridPrivateApiContext } from '../../hooks/utils/useGridPrivateApiContext';
import type { GridApiCommunity } from '../../models/api/gridApiCommunity';

export type OwnerState = DataGridProcessedProps;

const columnSeparatorTargetSize = 10;
const columnSeparatorOffset = -5;

const focusOutlineWidth = 1;

const separatorIconDragStyles = {
  width: 3,
  rx: 1.5,
  x: 10.5,
};

// Emotion thinks it knows better than us which selector we should use.
// https://github.com/emotion-js/emotion/issues/1105#issuecomment-1722524968
const ignoreSsrWarning =
  '/* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */';

const shouldShowBorderTopRightRadiusSelector = (apiRef: RefObject<GridApiCommunity>) =>
  { throw new Error("STUB"); };

export const GridRootStyles = styled('div', {
  name: 'MuiDataGrid',
  slot: 'Root',
  overridesResolver: (props, styles) => {
      throw new Error("STUB");
  },
})<{ ownerState: OwnerState }>(() => {
    throw new Error("STUB");
});

function setOpacity(color: string, opacity: number) {
  return `rgba(from ${color} r g b / ${opacity})`;
}

function removeOpacity(color: string) {
  return setOpacity(color, 1);
}

export const supportsColorMix =
  typeof CSS !== 'undefined' &&
  typeof CSS.supports === 'function' &&
  CSS.supports('color', 'color-mix(in srgb, red 50%, blue 50%)');

export const colorMixIfSupported = (colorMixValue: string, fallback: string) => {
  if (!supportsColorMix) {
    return fallback;
  }
  return colorMixValue;
};

function mix(background: string, overlay: string, opacity: number | string, fallback: string) {
  return colorMixIfSupported(
    `color-mix(in srgb,${background}, ${overlay} calc(${opacity} * 100%))`,
    fallback,
  );
}
