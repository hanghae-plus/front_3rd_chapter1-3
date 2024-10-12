import { DependencyList } from "react";
import { useRef } from "./useRef";
import { shallowEquals } from "../equalities";

// useMemo 훅은 계산 비용이 높은 값을 메모이제이션합니다.
export function useMemo<T>(
  factory: () => T,
  deps: DependencyList,
  equals = shallowEquals
): T {
  // 1. 이전 의존성과 결과를 저장할 ref 생성
  const memoizedRef = useRef<{
    result?: T;
    deps?: DependencyList;
  }>({});

  // 2. 새로운 의존성과 결과를 저장한다
  // - 아직 초기화 되지 않은 경우
  // - 의존성이 변경된 경우
  if (!memoizedRef.current.deps || !equals(memoizedRef.current.deps, deps)) {
    memoizedRef.current.result = factory();
    memoizedRef.current.deps = deps;
  }

  // 4. 메모이제이션된 값 반환
  return memoizedRef.current.result as T;
}
