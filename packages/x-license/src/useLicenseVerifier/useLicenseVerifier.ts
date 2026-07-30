'use client';
import * as React from 'react';
import { sendMuiXTelemetryEvent, muiXTelemetryEvents } from '@mui/x-telemetry';
import { verifyLicense } from '../verifyLicense/verifyLicense';
import { LicenseInfo } from '../utils/licenseInfo';
import {
  showExpiredAnnualGraceLicenseKeyError,
  showExpiredAnnualLicenseKeyError,
  showInvalidLicenseKeyError,
  showMissingLicenseKeyError,
  showLicenseKeyPlanMismatchError,
  showExpiredPackageVersionError,
  showNotAvailableInInitialProPlanError,
  showLicenseKeyVersionMismatchError,
} from '../utils/licenseErrorMessageUtils';
import { LICENSE_STATUS, LicenseStatus } from '../utils/licenseStatus';
import MuiLicenseInfoContext from '../Unstable_LicenseInfoProvider/MuiLicenseInfoContext';
import { MuiCommercialPackageName, CommercialPackageInfo } from '../utils/commercialPackages';

export const sharedLicenseStatuses: {
  [packageName in MuiCommercialPackageName]?: {
    key: string | undefined;
    licenseVerifier: {
      status: LicenseStatus;
    };
  };
} = {};

/**
 * Clears the license status cache for all packages.
 * This should not be used in production code, but can be useful for testing purposes.
 */
export function clearLicenseStatusCache() {
    throw new Error("STUB");
}

export function useLicenseVerifier(packageInfo: CommercialPackageInfo): {
  status: LicenseStatus;
} {
  const { key: contextKey } = React.useContext(MuiLicenseInfoContext);
  return React.useMemo(() => {
      throw new Error("STUB");
  }, [packageInfo, contextKey]);
}
