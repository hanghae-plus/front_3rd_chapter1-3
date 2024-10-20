import { DependencyList } from "react";
import { shallowEquals } from "../equalities";
import { useRef } from "./useRef";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function useMemo<T>(
  factory: () => T,
  deps: DependencyList,
  equals = shallowEquals
): T {
  const prevDeps = useRef<DependencyList | null>(null);
  const result = useRef<T | null>(null);

  if (prevDeps.current === null || !equals(deps, prevDeps.current)) {
    prevDeps.current = deps;
    result.current = factory();
  }

  return result.current as T;
}
