import { DependencyList } from "react";
import { shallowEquals } from "../equalities";
import { useRef } from "./useRef";

export function useMemo<T>(
  factory: () => T,
  deps: DependencyList,
  equals = shallowEquals
): T {
  const prevDeps = useRef<DependencyList | undefined>(undefined);
  const prevResult = useRef<T | undefined>(undefined);

  if (!prevDeps.current || !equals(prevDeps.current, deps)) {
    prevResult.current = factory();
    prevDeps.current = deps;
  }
  return prevResult.current as T;
}
