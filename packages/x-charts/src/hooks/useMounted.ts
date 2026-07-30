'use client';
import * as React from 'react';
import useEnhancedEffect from '@mui/utils/useEnhancedEffect';

export function useMounted(defer = false) {
  const [mountedState, setMountedState] = React.useState(false);

  useEnhancedEffect(() => {
      throw new Error("STUB");
  }, [defer]);

  React.useEffect(() => {
      throw new Error("STUB");
  }, [defer]);

  return mountedState;
}
