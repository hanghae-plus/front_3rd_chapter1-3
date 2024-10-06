import { DependencyList } from "react";
import { shallowEquals } from "../equalities";
import { useRef } from "./useRef";

export function useMemo<T>(
  factory: () => T,
  deps: DependencyList,
  equals = shallowEquals
): T {
  // 직접 작성한 useRef를 통해서 만들어보세요.
  const factoryRef = useRef<T>(null);
  const depsRef = useRef<DependencyList>(null);
  const { current } = depsRef;

  const isDepsEquals = current !== null && equals(depsRef.current, deps);

  if (!isDepsEquals) {
    factoryRef.current = factory();
    depsRef.current = deps;
  }

  return factoryRef.current as T;
}
