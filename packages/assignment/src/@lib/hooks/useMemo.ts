import { DependencyList } from "react";
import { shallowEquals } from "../equalities";
import { useRef } from "./useRef";

export function useMemo<T>(
  factory: () => T,
  deps: DependencyList,
  equals = shallowEquals
): T {
  // 1. 이전 의존성과 결과를 저장할 ref 생성
  const prevDepsRef = useRef<{ deps: readonly unknown[] | null }>({
    deps: null,
  });
  const resRef = useRef<{ res: T | null }>({ res: null });
  const prevDeps = prevDepsRef.current.deps;
  // 2. 현재 의존성과 이전 의존성 비교
  if (prevDeps === null || !equals(prevDeps, deps)) {
    // 3. 의존성이 변경된 경우 factory 함수 실행 결과 및 의존성 배열 업데이트
    prevDepsRef.current.deps = deps;
    resRef.current.res = factory();
  }
  return resRef.current.res as T;
}
