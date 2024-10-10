import { DependencyList } from "react";
import { useMemo } from "./";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-explicit-any
export function useCallback<T extends (...args: any[]) => any>(
  factory: T,
  deps: DependencyList
): T {
  return useMemo(() => {
    return factory; // factory를 반환하여 메모이제이션
  }, deps);
}
