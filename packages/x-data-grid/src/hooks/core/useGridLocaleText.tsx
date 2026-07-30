import * as React from 'react';
import type { RefObject } from '@mui/x-internals/types';
import type { GridPrivateApiCommon } from '../../models/api/gridApiCommon';
import type { GridLocaleTextApi } from '../../models/api/gridLocaleTextApi';
import type { DataGridProcessedProps } from '../../models/props/DataGridProps';

export const useGridLocaleText = (
  apiRef: RefObject<GridPrivateApiCommon>,
  props: Pick<DataGridProcessedProps, 'localeText'>,
): void => {
  const getLocaleText = React.useCallback<GridLocaleTextApi['getLocaleText']>(
    (key) => {
          throw new Error("STUB");
      },
    [props.localeText],
  );

  apiRef.current.register('public', {
    getLocaleText,
  });
};
