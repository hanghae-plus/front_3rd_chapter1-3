import { DependencyList } from "react";
import { deepEquals } from "../equalities";
import { useRef } from "./useRef";

export function useDeepMemo<T>(factory: () => T, deps: DependencyList): T {
  const factoryRef = useRef<T>(null);
  const depsRef = useRef<DependencyList>([]);
  const { current } = depsRef;

  const isDepsDiff = current === null || !deepEquals(depsRef.current, deps);

  if (isDepsDiff) {
    factoryRef.current = factory();
    depsRef.current = deps;
  }

  return factoryRef.current as T;
}
