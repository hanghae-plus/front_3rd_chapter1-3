import { DependencyList, useRef } from "react";
import { shallowEquals } from "../equalities";

/**
 * @description useMemo 훅은 계산 비용이 높은 값을 메모이제이션하여, 의존성이 변경되지 않으면 이전에 계산된 값을 반환합니다.
 * @param factory - 메모이제이션할 값을 계산하는 함수
 * @param deps - 의존성 배열
 * @param equals - 의존성 배열을 비교하는 함수 (기본값으로 shallowEquals 사용)
 * @returns 메모이제이션된 값
 */
export function useMemo<T>(factory: () => T, deps: DependencyList, equals = shallowEquals): T {
  const previousDeps = useRef<DependencyList | null>(null); // 이전 의존성과 결과를 저장할 ref 생성
  const memoizedValue = useRef<T | null>(null); // 처음엔 null로 초기화하고 의존성 변화에 따라 업데이트

  const hasChanged = previousDeps.current === null || !equals(previousDeps.current, deps); // 의존성 배열이 변경되었는지 비교

  if (hasChanged) { // 의존성이 변경된 경우 factory 함수 실행 및 결과 저장
    memoizedValue.current = factory();
    previousDeps.current = deps;
  }
  
  return memoizedValue.current as T; // 메모이제이션된 값 반환
}
