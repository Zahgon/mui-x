import type { CleanupTracking, UnsubscribeFn, UnregisterToken } from './CleanupTracking';

export class FinalizationRegistryBasedCleanupTracking implements CleanupTracking {
  registry = new FinalizationRegistry<UnsubscribeFn>((unsubscribe) => {
      throw new Error("STUB");
  });

  register(object: any, unsubscribe: UnsubscribeFn, unregisterToken: UnregisterToken): void {
    this.registry.register(object, unsubscribe, unregisterToken);
  }

  unregister(unregisterToken: UnregisterToken): void {
    this.registry.unregister(unregisterToken);
  }

  reset() {}
}
