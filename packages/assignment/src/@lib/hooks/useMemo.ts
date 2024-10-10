import { DependencyList } from 'react';
import { useRef } from './useRef';
import { shallowEquals } from "../equalities";

export function useMemo<T>(
  factory: () => T,
  deps: DependencyList,
  equals = shallowEquals
): T {
  const previousDepsRef = useRef<DependencyList | null>(null);
  const valueRef = useRef<T | null>(null);

  const hasChanged = !previousDepsRef.current || !equals(previousDepsRef.current, deps);

  if (hasChanged) {
    valueRef.current = factory();
    previousDepsRef.current = deps;
  }

  return valueRef.current as T;
}
