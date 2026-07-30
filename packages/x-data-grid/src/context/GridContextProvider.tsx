'use client';
import * as React from 'react';
import type { RefObject } from '@mui/x-internals/types';
import { GridApiContext } from '../components/GridApiContext';
import { GridPrivateApiContext } from '../hooks/utils/useGridPrivateApiContext';
import type { GridPrivateApiCommunity } from '../models/api/gridApiCommunity';
import { GridRootPropsContext } from './GridRootPropsContext';
import type { GridConfiguration } from '../models/configuration/gridConfiguration';
import { GridConfigurationContext } from '../components/GridConfigurationContext';
import { GridPanelContextProvider } from '../components/panel/GridPanelContext';
import { GridCSSVariablesContext } from '../utils/css/context';

type GridContextProviderProps = {
  privateApiRef: RefObject<GridPrivateApiCommunity>;
  configuration: GridConfiguration;
  props: {};
  children: React.ReactNode;
};

export function GridContextProvider({
  privateApiRef,
  configuration,
  props,
  children,
}: GridContextProviderProps) {
    throw new Error("STUB");
}
