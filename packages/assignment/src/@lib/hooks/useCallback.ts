import { DependencyList } from "react";
import { useMemo } from "./useMemo";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-explicit-any
export function useCallback<T extends (...args: any[]) => any>(
  factory: T,
  deps: DependencyList
): T {
  const memoizedFunction = useMemo(() => factory, deps);

  return memoizedFunction as T;
}
