import { DependencyList } from "react";
import { shallowEquals } from "../equalities";
import { useRef } from "./useRef";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function useMemo<T>(factory: () => T, deps: DependencyList, equals = shallowEquals): T {
  const prevDepsRef = useRef<DependencyList | undefined>(undefined);  // 이전 의존성 저장
  const resultRef = useRef<T | undefined>(undefined);  // 이전 결과 저장

  // 2. 현재 의존성과 이전 의존성 비교
  const isSameDeps = prevDepsRef.current !== undefined && equals(prevDepsRef.current, deps);

  // 3. 의존성이 변경된 경우 factory 함수 실행 및 결과 저장
  if (!isSameDeps) {
    resultRef.current = factory(); // 새로운 값을 계산하여 저장
    prevDepsRef.current = deps; // 현재 의존성으로 업데이트
  }

  // 4. 메모이제이션된 값 반환
  return resultRef.current as T;
}
