export class TimeoutManager {
  private timeoutIds: Map<string, number> = new Map();

  private intervalIds: Map<string, number> = new Map();

  startTimeout = (key: string, delay: number, fn: Function) => {
      throw new Error("STUB");
  };

  startInterval = (key: string, delay: number, fn: Function) => {
      throw new Error("STUB");
  };

  clearTimeout = (key: string) => {
      throw new Error("STUB");
  };

  clearInterval = (key: string) => {
      throw new Error("STUB");
  };

  clearAll = () => {
      throw new Error("STUB");
  };
}
