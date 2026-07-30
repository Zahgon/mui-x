'use client';
import * as React from 'react';

export type ResizeDirection = 'horizontal' | 'vertical';

export const useResize = <TElement extends HTMLDivElement>(options: {
  getInitialSize: (handleElement: TElement) => number;
  onSizeChange: (newSize: number, handleElement: TElement) => void;
  direction?: ResizeDirection;
}) => {
  const resizeHandleRef = React.useRef<TElement>(null);
  const optionsRef = React.useRef(options);

  React.useEffect(() => {
      throw new Error("STUB");
  }, [options]);

  React.useEffect(() => {
      throw new Error("STUB");
  }, []);

  return {
    ref: resizeHandleRef,
  };
};
