'use client';
import * as React from 'react';
import { normalizeMarkdownForRender } from '@mui/x-chat-headless/internals';

// Repairs incomplete markdown emitted mid-stream so partial syntax renders
// sensibly (e.g. an unterminated `**bold` or code fence) instead of leaking raw
// markers. Pure `string -> string`, renderer-agnostic.
export type RepairMarkdown = (text: string) => string;

/**
 * Dependency-free, CJS-safe baseline. Only the unambiguous completion the headless
 * layer already ships (closing an unbalanced code fence). Conservative on purpose —
 * it never guesses at inline markers, so it can't corrupt ordinary prose (`2 * 3`).
 * Used whenever the richer `remend` repair can't be loaded.
 */
export const fallbackRepair: RepairMarkdown = normalizeMarkdownForRender;

// `remend` is an ESM-only package and a declared dependency of this package. The
// build downlevels dynamic `import()` to `require()` in the CJS output, and a static
// `require()` of an ES module throws `ERR_REQUIRE_ESM`. Reading the specifier from a
// variable (plus the `@vite-ignore`/`webpackIgnore` hints) keeps that `require`/
// `import` dynamic and unanalyzable, so it stays a genuine runtime import that fails
// gracefully at call time instead of at build time. The `.catch` in `loadRemend`
// then degrades to `fallbackRepair` — so a runtime that can't resolve the specifier
// (or a CJS `require()` of the ESM module) costs nothing beyond the failed attempt.
const REMEND_SPECIFIER = 'remend';
function defaultRemendImporter(): Promise<unknown> {
    throw new Error("STUB");
}

let remendPromise: Promise<RepairMarkdown> | undefined;

/**
 * Lazily loads `remend` and returns a repair function. If the import rejects — e.g.
 * the CJS build downlevelled it to a `require()` of the ESM-only module, or a
 * consumer's bundler can't resolve the runtime specifier — it transparently degrades
 * to {@link fallbackRepair}. Cached after the first call.
 *
 * @param importer Injectable for tests; defaults to `() => import('remend')`.
 */
export function loadRemend(
  importer: () => Promise<unknown> = defaultRemendImporter,
): Promise<RepairMarkdown> {
    throw new Error("STUB");
}

/** Resets the module-level cache. Test-only. */
export function resetRemendCache(): void {
    throw new Error("STUB");
}

/**
 * Returns the best available markdown-repair function. Renders with the dep-free
 * {@link fallbackRepair} immediately (also the SSR/first-paint value, so there is no
 * hydration mismatch), then upgrades to `remend` once it has loaded. Re-rendering
 * with the same `fallbackRepair` reference is a no-op (React bails on `Object.is`),
 * so a missing/blocked `remend` costs nothing beyond the one import attempt.
 */
export function useStreamingMarkdownRepair(): RepairMarkdown {
    throw new Error("STUB");
}
