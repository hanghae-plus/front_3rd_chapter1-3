import { DependencyList } from "react";
import { shallowEquals } from "../equalities";
import { useRef } from "./useRef";

export function useMemo<T>(
  factory: () => T,
  deps: DependencyList,
  equals = shallowEquals
): T {
  // 1. 이전 의존성과 결과를 저장할 ref 생성
  const prevResultRef = useRef<T | null>(null);
  const prevDepsRef = useRef<DependencyList | null>(null);

  // 2. 현재 의존성과 이전 의존성 비교
  const currentDeps = deps;

  if (
    prevDepsRef.current === null || // 최초 실행
    !equals(prevDepsRef.current, currentDeps) // 의존성 변경 감지
  ) {
    // 3. 의존성이 변경된 경우 factory 함수 실행 및 결과 저장
    prevResultRef.current = factory(); // factory 함수 호출
  }

  // 4. 이전 의존성 업데이트
  prevDepsRef.current = currentDeps;

  // 5. 메모이제이션된 값 반환 (null일 경우에도 처리)
  if (prevResultRef.current === null) {
    prevResultRef.current = factory(); // 최초 호출 보장
  }

  return prevResultRef.current;
}
