import { DependencyList } from 'react';
import { shallowEquals } from '../equalities';
import { useRef } from './useRef';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

export function useMemo<T>(
  factory: () => T,
  deps: DependencyList,
  equals: (prevDeps: DependencyList, newDeps: DependencyList) => boolean = shallowEquals,
): T {
  // 1. 이전 의존성과 결과를 저장할 ref 생성
  const prevDeps = useRef<DependencyList | null>(null);
  const memoized = useRef<T | null>(null);

  // 2. 현재 의존성과 이전 의존성 비교
  // 3. 의존성이 변경된 경우 factory 함수 실행 및 결과 저장
  if (!prevDeps.current || !equals(prevDeps.current, deps)) {
    memoized.current = factory();
  }

  prevDeps.current = deps;

  // 4. 메모이제이션된 값 반환
  return memoized.current as T;
}
