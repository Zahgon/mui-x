import { TelemetryEventContext } from '../types';

const noop = () => null;

const muiXTelemetryEvents = {
  licenseVerification:
    process.env.NODE_ENV === 'production'
      ? noop
      : (
          context: TelemetryEventContext,
          payload: {
            packageReleaseInfo: string;
            packageName: string;
            licenseStatus?: string;
          },
        ) => { throw new Error("STUB"); },
};

export default muiXTelemetryEvents;
