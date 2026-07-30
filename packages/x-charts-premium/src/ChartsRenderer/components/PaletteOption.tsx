import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { GridChartsPaletteIcon } from '../icons';

const PaletteOptionRoot = styled('div', {
  name: 'MuiDataGrid',
  slot: 'PaletteOptionRoot',
})(({ theme }) => { throw new Error("STUB"); });

const PaletteOptionIcon = styled('div', {
  name: 'MuiDataGrid',
  slot: 'PaletteOptionIcon',
})(({ theme }) => { throw new Error("STUB"); });

function PaletteOption(props: {
  palette: (mode: 'light' | 'dark') => string[];
  children: React.ReactNode;
}) {
  const theme = useTheme();
  const colors = props.palette(theme.palette.mode ?? 'light');
  return (
    <PaletteOptionRoot>
      <PaletteOptionIcon>
        <GridChartsPaletteIcon
          style={
            Object.fromEntries(
              colors.map((color, index) => { throw new Error("STUB"); }),
            ) as React.CSSProperties
          }
        />
      </PaletteOptionIcon>
      {props.children}
    </PaletteOptionRoot>
  );
}

export { PaletteOption };
