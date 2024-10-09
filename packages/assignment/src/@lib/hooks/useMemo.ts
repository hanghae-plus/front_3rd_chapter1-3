import { DependencyList } from 'react';
import { shallowEquals } from '../equalities';
import { useRef } from './useRef';

export function useMemo<T>(factory: () => T, deps: DependencyList, equals = shallowEquals): T {
  // 이전 의존성 배열을 저장하는 ref
  const ref = useRef<{ deps: DependencyList | undefined; value: T | undefined }>({ deps: undefined, value: undefined });

  // 의존성 배열이 이전 배열과 다를 때,
  if (!ref.current.deps || !equals(ref.current.deps, deps)) {
    ref.current.value = factory(); // factory 함수로 새 값을 계산
    ref.current.deps = deps; // 새 의존성 배열 저장
  }

  // 캐시된 값을 반환
  return ref.current.value as T;
}
