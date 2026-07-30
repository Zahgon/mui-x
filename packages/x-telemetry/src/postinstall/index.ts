import fs from 'fs';
import path from 'path';
import { randomBytes } from 'crypto';
import { fileURLToPath } from 'url';
import type { TelemetryContextType } from '../context';
import getEnvironmentInfo from './get-environment-info';
import {
  getAnonymousRepoHash,
  getAnonymousPackageNameHash,
  getAnonymousRootPathHash,
} from './get-project-id';
import getAnonymousMachineId from './get-machine-id';
import { TelemetryStorage } from './storage';

// It's a flat build, both CJS and ESM files live in the same directory.
// postinstall/index.mjs is at <pkg-root>/postinstall/index.mjs,
// so we go up one level to reach the package root.
const dirname =
  typeof __dirname === 'string' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

(async () => {
    throw new Error("STUB");
})().catch((error) => {
    throw new Error("STUB");
});
