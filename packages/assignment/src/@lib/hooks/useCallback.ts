/* eslint-disable @typescript-eslint/no-explicit-any */
import { DependencyList } from "react";
import { useMemo } from "./useMemo";

export function useCallback<T extends (...args: any[]) => any>(
  factory: T,
  deps: DependencyList
): T {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => factory, deps);
}
