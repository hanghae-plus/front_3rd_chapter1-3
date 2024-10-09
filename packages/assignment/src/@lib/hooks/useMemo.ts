import { DependencyList } from 'react';
import { shallowEquals } from '../equalities';
import { useRef } from './useRef';

export function useMemo<T>(
  factory: () => T,
  deps?: DependencyList,
  equals = shallowEquals
): T {
  const ref = useRef<{ deps?: DependencyList; value?: T }>({
    deps: undefined,
    value: undefined,
  });

  if (deps === undefined) {
    // deps가 undefined인 경우, 항상 다시 계산합니다.
    ref.current.value = factory();
  } else if (
    ref.current.deps === undefined ||
    !equals(deps, ref.current.deps)
  ) {
    // deps가 변경된 경우, 값을 다시 계산합니다.
    ref.current.deps = deps;
    ref.current.value = factory();
  }

  return ref.current.value!;
}
