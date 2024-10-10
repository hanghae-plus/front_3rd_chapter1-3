import { DependencyList } from 'react';
import { shallowEquals } from '../equalities';
import { useRef } from './useRef';

// useMemo 훅은 계산 비용이 높은 값을 메모이제이션합니다.
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function useMemo<T>(
  factory: () => T,
  deps: DependencyList,
  equals = shallowEquals
): T {
  // 1. 이전 의존성과 결과를 저장할 ref 생성
  const prevResultRef = useRef<T | null>(null);
  const prevDepsRef = useRef<DependencyList | null>(null);

  // 2. 현재 의존성과 이전 의존성 비교
  // 3. 의존성이 변경된 경우 factory 함수 실행 및 결과 저장
  if (prevResultRef.current === null || !equals(prevDepsRef.current, deps)) {
    prevResultRef.current = factory();
    prevDepsRef.current = deps;
  }

  // 4. 메모이제이션된 값 반환
  return prevResultRef.current;
}

// () => ({ user, login, logout })
// [user, login, logout];
