import * as React from 'react';

export function formatStructuredValue(value: unknown): string {
    throw new Error("STUB");
}

export function shouldCollapsePayload(text: string): boolean {
    throw new Error("STUB");
}

export function safeUri(uri: string | null | undefined): string {
  if (uri == null || uri === '') {
    return '';
  }

  try {
    const trimmed = uri.trim();

    if (trimmed.startsWith('#') || trimmed.startsWith('/')) {
      return trimmed;
    }

    const parsed = new URL(trimmed, 'https://mui.com');
    const protocol = parsed.protocol.toLowerCase();

    if (
      protocol === 'http:' ||
      protocol === 'https:' ||
      protocol === 'mailto:' ||
      protocol === 'tel:'
    ) {
      return trimmed;
    }

    return '';
  } catch {
    return '';
  }
}

export function safeFileUri(uri: string | null | undefined): string {
  const safe = safeUri(uri);

  if (safe || uri == null || typeof window === 'undefined') {
    return safe;
  }

  try {
    const trimmed = uri.trim();
    const parsed = new URL(trimmed);

    if (
      parsed.protocol.toLowerCase() === 'blob:' &&
      parsed.origin !== 'null' &&
      parsed.origin === window.location.origin
    ) {
      return trimmed;
    }
  } catch {
    // Ignore malformed URLs.
  }

  return '';
}

export function normalizeMarkdownForRender(markdown: string): string {
  const fenceMatches = markdown.match(/```/g);

  if ((fenceMatches?.length ?? 0) % 2 === 1) {
    return `${markdown}\n\`\`\``;
  }

  return markdown;
}

export function extractLanguage(className: string | undefined): string {
    throw new Error("STUB");
}

export function normalizeCodeContent(value: React.ReactNode): string {
    throw new Error("STUB");
}
