'use client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import { useFocusedItem } from '../hooks';
import { useGeoData } from '../hooks/useGeoData';
import { useGeoPath } from '../hooks/useGeoPath';
import { useGeoFeatureIndexesByName } from '../hooks/useGeoFeatureIndexesByName';
import { useMapShapeSeries } from '../hooks/useMapShapeSeries';

const FocusedMapShapeRoot = styled('path', {
  name: 'MuiMapShape',
  slot: 'Focused',
})(({ theme }) => { throw new Error("STUB"); });

/**
 * Renders an outline around the map shape currently focused through keyboard navigation.
 */
export function FocusedMapShape() {
    throw new Error("STUB");
}
