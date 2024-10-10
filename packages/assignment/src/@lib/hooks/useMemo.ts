import { DependencyList } from 'react';
import { useRef } from './useRef';
import { shallowEquals } from '../equalities/shallowEquals'; // shallowEquals는 이 위치에 있다고 가정

// useMemo 훅은 계산 비용이 높은 값을 메모이제이션합니다.
export function useMemo<T>(
  factory: () => T,
  deps: DependencyList,
  equals = shallowEquals
): T {
  // 1. 이전 의존성과 결과를 저장할 ref 생성
  const previousDepsRef = useRef<DependencyList | undefined>(undefined); // 이전 의존성을 저장하는 ref
  const resultRef = useRef<T | undefined>(undefined); // 메모이제이션된 결과를 저장하는 ref

  // 2. 현재 의존성과 이전 의존성 비교
  if (previousDepsRef.current === undefined || !equals(previousDepsRef.current, deps)) {
    // 3. 의존성이 변경된 경우 factory 함수 실행 및 결과 저장
    resultRef.current = factory(); // 새로운 결과 저장
    previousDepsRef.current = deps; // 현재 의존성을 저장하여 다음에 비교할 수 있게 함
  }

  // 4. 메모이제이션된 값 반환
  return resultRef.current as T; // 메모이제이션된 값을 반환
}
