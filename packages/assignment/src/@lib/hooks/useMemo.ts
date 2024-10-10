import { DependencyList } from "react";
import { shallowEquals } from "../equalities";
import { useRef } from "./useRef";

export function useMemo<T>(
  factory: () => T,
  deps: DependencyList,
  equals = shallowEquals
): T {
  const factoryRef = useRef<T>(null);
  const depsRef = useRef<DependencyList>(null);
  const { current } = depsRef;

  const isDepsDiff = current === null || !equals(depsRef.current, deps);

  if (isDepsDiff) {
    factoryRef.current = factory();
    depsRef.current = deps;
  }

  return factoryRef.current as T;
}
