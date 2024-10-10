import { DependencyList } from "react";
import { shallowEquals } from "../equalities";
import { useRef } from "./useRef";

export function useMemo<T>(
  factory: () => T,
  deps: DependencyList,
  equals = shallowEquals
): T {
  const ref = useRef<{
    deps: DependencyList | undefined;
    value: T | undefined;
  }>({ deps: undefined, value: undefined });

  if (!ref.current.deps || !equals(ref.current.deps, deps)) {
    ref.current.value = factory();
    ref.current.deps = deps;
  }

  return ref.current.value as T;
}
