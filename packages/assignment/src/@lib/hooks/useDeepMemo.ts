import { DependencyList } from 'react';
import { deepEquals } from '../equalities';
import { useRef } from './useRef';

export function useDeepMemo<T>(factory: () => T, deps: DependencyList): T {
  const prevDeps = useRef<DependencyList | null>(null);
  const memoized = useRef<T | null>(null);

  if (!prevDeps.current || !deepEquals(prevDeps.current, deps)) {
    memoized.current = factory();
  }

  prevDeps.current = deps;

  return memoized.current as T;
}
