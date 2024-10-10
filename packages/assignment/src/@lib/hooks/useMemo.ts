import { DependencyList } from "react";
import { shallowEquals } from "../equalities";
import { useRef } from "./";

export function useMemo<T>(
  factory: () => T,
  deps: DependencyList,
  equals = shallowEquals
): T {
  const depsRef = useRef<DependencyList | null>(null);
  const resultRef = useRef<T | null>(null);

  // 이전 의존성과 현재 의존성 비교
  if (!depsRef.current || !equals(depsRef.current, deps)) {
    depsRef.current = deps;
    resultRef.current = factory(); // 팩토리 함수 호출
  }

  // 메모이제이션된 값 반환
  return resultRef.current as T;
}
