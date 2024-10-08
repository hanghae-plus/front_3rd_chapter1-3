import { DependencyList } from 'react';
import { shallowEquals } from '../equalities';
import { useRef } from '.';

export function useMemo<T>(factory: () => T, deps: DependencyList, equals = shallowEquals): T {
  const ref = useRef<T | null>(null);
  const dependencies = useRef<DependencyList | null>(null);

  if (ref.current === null || !equals(dependencies.current, deps)) {
    ref.current = factory();
    dependencies.current = deps;
  }

  return ref.current;
}
