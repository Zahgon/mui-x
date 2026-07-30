'use client';
import * as React from 'react';
import type { ChartPlugin } from '@mui/x-charts/internals';
import type { UseGeoProjectionSignature } from './useGeoProjection.types';

export const useGeoProjection: ChartPlugin<UseGeoProjectionSignature> = ({ params, store }) => {
    throw new Error("STUB");
};

useGeoProjection.params = {
  geoData: true,
  geoFeatureKey: true,
  projection: true,
  parallels: true,
};

useGeoProjection.getDefaultizedParams = ({ params }) => { throw new Error("STUB"); };

useGeoProjection.getInitialState = (params) => { throw new Error("STUB"); };
