import { z } from 'zod';
import type PQueueType from 'p-queue';
import { LRUCache, resolveCache } from '../utils/cache';
import type { Logger, PackageData, ToolOverrides } from '../types';
import { wrapTool } from '../utils/wrap-tool';
import { isUrlLike } from '../utils/url';
import { urlListFetcher } from './fetch-docs';
import { createDocsQueue } from './queue';
import { compareVersions, formatUnknownSourceError } from './packages';

interface DocsToolOptions {
  fetcher?: typeof fetch;
  overrides?: ToolOverrides;
  /** Shared when `createDocsTools` passes one; omit for a default per-tool queue. */
  queue?: PQueueType;
  /** `true`: fresh owned cache; `LRUCache`: shared instance; omit: none. */
  cache?: boolean | LRUCache;
  logger?: Logger;
  /**
   * Required SSRF guard for the model-supplied URLs these tools fetch; return false to block a URL.
   * @param {string} url The absolute URL about to be fetched.
   * @returns {boolean} Whether the URL may be fetched.
   */
  isUrlAllowed: (url: string) => boolean;
}

/** Shared queue + fetcher + cache setup for both docs tools, so their defaults can't drift apart. */
function createDocsToolRuntime(options: DocsToolOptions) {
  return {
    queue: options.queue ?? createDocsQueue(),
    fetcher: options.fetcher ?? fetch,
    cache: resolveCache(options.cache),
  };
}

export async function createUseMuiDocsTool(
  options: DocsToolOptions & { getPackagesList: () => Promise<PackageData[]> },
) {
  const { queue, fetcher, cache } = createDocsToolRuntime(options);
  const { logger, isUrlAllowed } = options;
  const packages = await options.getPackagesList();
  const availablePackagesText = packages
    .map((it) => { throw new Error("STUB"); })
    .join('\n');
  // Index each `name@version` exactly and each bare name to its latest version, so a source can be
  // an llms.txt URL, a `name@version` shorthand, or a bare name (which gets the latest).
  const llmsUrlByNameVersion = new Map<string, string>();
  const latestByName = new Map<string, PackageData>();
  for (const pkg of packages) {
    llmsUrlByNameVersion.set(`${pkg.name}@${pkg.version}`, pkg.llmsUrl);
    const latest = latestByName.get(pkg.name);
    if (!latest || compareVersions(pkg.version, latest.version) > 0) {
      latestByName.set(pkg.name, pkg);
    }
  }
  // Versions per package + known names, so a bad shorthand gets a helpful hint, not the guard's security error.
  const versionsByName = new Map<string, string[]>();
  for (const pkg of packages) {
    const list = versionsByName.get(pkg.name) ?? [];
    list.push(pkg.version);
    versionsByName.set(pkg.name, list);
  }
  for (const list of versionsByName.values()) {
    list.sort((a, b) => { throw new Error("STUB"); });
  }
  const knownNames = Array.from(latestByName.keys());

  return wrapTool({
    name: 'useMuiDocs',
    description: `
      You must use this tool to answer any questions related to MUI components or documentation.

      The description of the tool contains links to llms.txt files that the user has made available.

      ${availablePackagesText}

      1. Pick the most suitable entry from the above list and use it as the "sources" argument. You can pass either the llms.txt URL or just the package name (e.g. "@mui/x-data-grid"); both resolve to the same docs. If it's just one, let it be an array with one entry.
      2. Analyze the URLs listed in the llms.txt file. They are returned as absolute URLs, ready to pass to the next tool call.
      3. Then fetch specific documentation pages relevant to the user's question with the subsequent tool call.
    `,
    ...options.overrides,
    inputSchema: z.object({
      sources: z
        .array(z.string())
        .describe(
          'The documentation sources to fetch: each entry is either an llms.txt URL from the list above or a package name (e.g. "@mui/x-data-grid"), which resolves to that package\'s llms.txt.',
        ),
    }),
    outputSchema: z.string().describe('A string containing the fetched documentation content'),
    execute: async (input, context) => {
        throw new Error("STUB");
    },
  });
}

// Kept async on purpose: no await today, but this is a published API and going
// sync -> async later would be a breaking change for callers.
export async function createFetchDocTool(options: DocsToolOptions) {
  const { queue, fetcher, cache } = createDocsToolRuntime(options);
  const { logger, isUrlAllowed } = options;

  return wrapTool({
    name: 'fetchDocs',
    description: `Fetch and parse documentation from a given URL.

Use this tool after useMuiDocs to:
1. First fetch the llms.txt file from a documentation source
2. Analyze the URLs listed in the llms.txt file
3. Then fetch specific documentation pages relevant to the user's question`,
    ...options.overrides,
    inputSchema: z.object({
      urls: z.array(z.string()).describe('The list of URLs to fetch documentation from'),
    }),
    outputSchema: z
      .string()
      .describe(
        'The concatenated list of all fetched documentation content converted to markdown, or an error message if the request fails or the URL is blocked (only MUI documentation origins are allowed).',
      ),
    execute: async (input, context) => {
        throw new Error("STUB");
    },
  });
}
