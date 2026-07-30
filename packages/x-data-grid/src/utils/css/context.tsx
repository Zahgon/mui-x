'use client';
import * as React from 'react';
import { useGridRootProps } from '../../hooks/utils/useGridRootProps';
import { useGridConfiguration } from '../../hooks/utils/useGridConfiguration';

const CLASSNAME_PREFIX = 'MuiDataGridVariables';

const CSSVariablesContext = React.createContext({
  className: 'unset',
  tag: <style href="/unset" />,
});

export function useCSSVariablesClass() {
  return React.useContext(CSSVariablesContext).className;
}

export function useCSSVariablesContext() {
  return React.useContext(CSSVariablesContext);
}

export function GridPortalWrapper({ children }: { children: React.ReactNode }) {
    throw new Error("STUB");
}

export function GridCSSVariablesContext(props: { children: any }) {
    throw new Error("STUB");
}

function variablesToString(variables: Record<string, any>) {
    throw new Error("STUB");
}
