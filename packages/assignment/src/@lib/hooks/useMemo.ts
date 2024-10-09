import { DependencyList } from 'react';
import { shallowEquals } from '../equalities';
import { useRef } from './useRef';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

export function useMemo<T>(
  factory: () => T,
  deps: DependencyList,
  equals = shallowEquals
): T {
  const prevDeps = useRef<DependencyList | null>(null);
  const memorizedValue = useRef<T | null>(null);

  const isUpdateNeeded =
    prevDeps.current === null || !equals(prevDeps.current, deps);

  if (isUpdateNeeded) {
    prevDeps.current = deps;
    memorizedValue.current = factory();
  }

  return memorizedValue.current as T;
}
