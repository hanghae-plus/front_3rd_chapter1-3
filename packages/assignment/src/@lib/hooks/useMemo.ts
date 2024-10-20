import { DependencyList } from "react";
import { useRef } from "./useRef";
import { shallowEquals } from "../equalities";

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
  const previousDepsRef = useRef<DependencyList | null>(null);
  const resultRef = useRef<T | null>(null);

  // 2. 현재 의존성과 이전 의존성 비교
  const hasChanged =
    previousDepsRef.current === null || !equals(previousDepsRef.current, deps);

  // 3. 의존성이 변경된 경우 factory 함수 실행 및 결과 저장
  if (hasChanged) {
    resultRef.current = factory();
    previousDepsRef.current = deps;
  }

  // 4. 메모이제이션된 값 반환
  return resultRef.current as T;
}
