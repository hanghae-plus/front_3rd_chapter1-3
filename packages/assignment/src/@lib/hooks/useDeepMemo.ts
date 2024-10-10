import { DependencyList } from 'react';
import { deepEquals } from '../equalities';
import { useRef } from './useRef';

export function useDeepMemo<T>(factory: () => T, deps: DependencyList): T {
  const prev = useRef<{
    deps: DependencyList | null;
    result: T | null;
  }>({
    deps: null,
    result: null,
  });

  if (!prev.current.deps || !deepEquals(prev.current.deps, deps)) {
    prev.current.result = factory();
  }

  prev.current.deps = deps;

  return prev.current.result as T;
}
