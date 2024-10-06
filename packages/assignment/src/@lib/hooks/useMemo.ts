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
  const prefRef = useRef<{ value: T; deps: DependencyList } | null>(null);

  if (prefRef.current === null || !equals(deps, prefRef.current?.deps)) {
    prefRef.current = { value: factory(), deps };
  }

  return prefRef.current.value;
}
