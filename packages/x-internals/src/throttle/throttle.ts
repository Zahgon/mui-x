export interface Cancelable {
  clear(): void;
}

export function throttle<T extends (...args: any[]) => any>(func: T, wait = 166) {
  let timeout: ReturnType<typeof setTimeout> | undefined;
  let lastArgs: Parameters<T>;

  const later = () => {
      throw new Error("STUB");
  };

  function throttled(...args: Parameters<T>) {
    lastArgs = args;
    if (timeout === undefined) {
      timeout = setTimeout(later, wait);
    }
  }

  throttled.clear = () => {
      throw new Error("STUB");
  };

  return throttled as T & Cancelable;
}
