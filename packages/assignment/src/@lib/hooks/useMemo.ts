import { DependencyList } from 'react';
import { shallowEquals } from '../equalities';
import { useRef } from './useRef';

export function useMemo<T>(
  factory: () => T,
  deps: DependencyList,
  equals = shallowEquals
): T {
  // 직접 작성한 useRef를 통해서 만들어보세요.
  const ref = useRef<{ deps: DependencyList | null; value: T | null }>({
    value: null,
    deps: null
  });

  if (!ref.current.deps || !equals(ref.current.deps, deps)) {
    ref.current.value = factory();
    ref.current.deps = deps;
  }

  return ref.current.value as T;
}
