'use client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import type { SxProps } from '@mui/material/styles';
import { shouldForwardProp } from '@mui/system/createStyled';
import { useUtilityClasses } from './chartsAxisHighlightValueClasses';

const ChartsAxisHighlightValueText = styled('div', {
  name: 'MuiChartsAxisHighlightValue',
  slot: 'Root',

  shouldForwardProp: (prop) => { throw new Error("STUB"); },
})<Pick<ChartsAxisHighlightValueItemProps, 'position'>>(({ theme }) => { throw new Error("STUB"); });

export interface ChartsAxisHighlightValueItemProps {
  x: number;
  y: number;
  formattedValue: string;
  position: 'top' | 'right' | 'bottom' | 'left';
  minCoord: number;
  maxCoord: number;
  space: number;
  sx?: SxProps;
}

function ChartsAxisHighlightValueItem(props: ChartsAxisHighlightValueItemProps) {
  const { x, y, position, formattedValue, minCoord, maxCoord, space, sx } = props;

  const classes = useUtilityClasses({ position });

  const isXAxis = position === 'top' || position === 'bottom';
  return (
    <ChartsAxisHighlightValueText
      className={classes.root}
      position={position}
      style={
        {
          position: 'absolute',
          top: y,
          left: x,
          '--min': `${isXAxis ? x - minCoord : y - minCoord}px`,
          '--max': `${isXAxis ? maxCoord - x : maxCoord - y}px`,
          '--space': `${space}px`,
        } as React.CSSProperties
      }
      sx={sx}
    >
      {formattedValue}
    </ChartsAxisHighlightValueText>
  );
}

export { ChartsAxisHighlightValueItem };
