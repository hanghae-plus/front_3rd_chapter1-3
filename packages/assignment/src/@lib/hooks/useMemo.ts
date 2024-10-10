import { DependencyList } from "react";
import { shallowEquals } from "../equalities";
import { useRef } from "./useRef";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export function useMemo<T>(factory: () => T, deps: DependencyList, equals = shallowEquals): T {
  // 1. 이전 의존성과 결과를 저장할 ref 생성
  const valueRef = useRef<T | null>(null); // 메모이제이션된 값을 저장
  const depsRef = useRef<DependencyList | null>(null); // 이전 의존성 저장
  // 2. 현재 의존성과 이전 의존성 비교
  // 처음이거나 의존성 배열이 변경되었을 때만 재계산
  if (!depsRef.current || !equals(deps, depsRef.current)) {
    // 3. 의존성이 변경된 경우 factory 함수 실행 및 결과 저장
    valueRef.current = factory(); // 새 값 계산
    depsRef.current = deps; // 새 의존성 저장
  }
  // 4. 메모이제이션된 값 반환
  return valueRef.current as T; // 현재 값 반환
}
