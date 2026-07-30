import * as React from 'react';
import type { RefObject } from '@mui/x-internals/types';
import type { Logger } from '../../models';
import type { GridPrivateApiCommon } from '../../models/api/gridApiCommon';
import type { DataGridProcessedProps } from '../../models/props/DataGridProps';
import type { GridLoggerApi } from '../../models/api/gridLoggerApi';
import { localStorageAvailable } from '../../utils/utils';
import { useGridApiMethod } from '../utils';

const forceDebug = localStorageAvailable() && window.localStorage.getItem('DEBUG') != null;

const noop = () => {};

const noopLogger: Logger = {
  debug: noop,
  info: noop,
  warn: noop,
  error: noop,
};

const LOG_LEVELS = ['debug', 'info', 'warn', 'error'];

function getAppender(name: string, logLevel: string, appender: Logger = console): Logger {
  const minLogLevelIdx = LOG_LEVELS.indexOf(logLevel);

  if (minLogLevelIdx === -1) {
    throw new Error(`MUI X: Log level ${logLevel} not recognized.`);
  }

  const logger = LOG_LEVELS.reduce((loggerObj, method, idx) => {
      throw new Error("STUB");
  }, {} as any);

  return logger as Logger;
}

export const useGridLoggerFactory = (
  apiRef: RefObject<GridPrivateApiCommon>,
  props: Pick<DataGridProcessedProps, 'logger' | 'logLevel'>,
) => {
  const getLogger = React.useCallback<GridLoggerApi['getLogger']>(
    (name: string): Logger => {
          throw new Error("STUB");
      },
    [props.logLevel, props.logger],
  );

  useGridApiMethod(apiRef, { getLogger }, 'private');
};
