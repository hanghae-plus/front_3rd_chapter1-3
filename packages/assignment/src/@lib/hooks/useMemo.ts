import { DependencyList } from "react";
import { shallowEquals } from "../equalities";
import { useRef } from "./useRef";

export function useMemo<T>(
  factory: () => T,
  deps: DependencyList,
  equals = shallowEquals
): T {
  const prevDepsRef = useRef<DependencyList | undefined>(undefined);
  const memoizedValueRef = useRef<T | undefined>(undefined);

  if (!deps) {
    return factory();
  }

  if (prevDepsRef.current && equals(prevDepsRef.current, deps)) {
    return memoizedValueRef.current as T;
  }

  const newValue = factory();
  prevDepsRef.current = deps;
  memoizedValueRef.current = newValue;

  return newValue;
}
