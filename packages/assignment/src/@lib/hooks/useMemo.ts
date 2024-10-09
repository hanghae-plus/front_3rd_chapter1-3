import { DependencyList } from "react";
import { shallowEquals } from "../equalities";
import { useRef } from "./";

export function useMemo<T>(
  factory: () => T,
  deps: DependencyList,
  equals = shallowEquals
): T {
  const prevDeps = useRef<DependencyList | undefined>(undefined);
  const value = useRef<T | undefined>(undefined);

  if (prevDeps.current === undefined || !equals(deps, prevDeps.current)) {
    prevDeps.current = deps;
    value.current = factory();
  }

  return value.current as T;
}
