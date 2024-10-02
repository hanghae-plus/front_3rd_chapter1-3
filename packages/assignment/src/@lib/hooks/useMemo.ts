import { DependencyList } from "react";
import { shallowEquals } from "../equalities";
import { useRef } from "./useRef";

export function useMemo<T>(factory: () => T, deps: DependencyList, equals = shallowEquals): T {
  const ref = useRef({ deps, value: factory() });

  if (!ref.current.deps.length || !equals(deps, ref.current.deps)) {
    ref.current.deps = deps;
    ref.current.value = factory();
  }

  return ref.current.value;
}
