import { DependencyList } from "react";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-explicit-any
import { useMemo } from "./";

export function useCallback<T extends (...args: any[]) => any>(factory: T, deps: DependencyList): T {
  return useMemo(() => factory, deps);
}
