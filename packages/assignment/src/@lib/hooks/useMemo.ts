import { DependencyList } from "react";
import { shallowEquals } from "../equalities";
import { useRef } from "./useRef";

// useMemo 훅은 계산 비용이 높은 값을 메모이제이션합니다.
export function useMemo<T>(
  factory: () => T, // 메모이제이션할 함수
  deps: DependencyList, // 의존성 배열
  equals = shallowEquals // 의존성 비교 함수
): T {
  // 1. 이전 의존성 배열과 결과를 저장할 ref 생성
  const memoized = useRef<{ deps: DependencyList; value: T } | null>(null);

  // 2. 현재 의존성과 이전 의존성을 비교하여 변경 여부 확인
  const hasChanged =
    memoized.current === null || // 첫 렌더링일 경우
    (memoized.current !== null && !equals(memoized.current.deps, deps)); // 의존성이 변경된 경우

  if (hasChanged) {
    // 3. 의존성이 변경된 경우 factory 함수를 실행하여 새로운 결과를 저장
    memoized.current = { deps, value: factory() };
  }

  // 4. 메모이제이션된 값을 반환
  return memoized.current?.value as T; // null 체크 후 value 반환
}
