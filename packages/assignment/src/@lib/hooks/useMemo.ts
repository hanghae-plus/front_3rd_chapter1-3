import { DependencyList } from "react";
import { shallowEquals } from "../equalities";
import { useRef } from "./useRef";

export function useMemo<T>(
  factory: () => T,
  deps: DependencyList,
  equals = shallowEquals
): T {
  // 1. 이전 의존성과 결과를 저장할 ref 생성
  const factoryRef = useRef<T | null>(null);
  const depsRef = useRef<DependencyList | null>(null);

  // 의존성이 변경된 경우 factory 실행
  if (!depsRef.current || !equals(depsRef.current, deps)) {
    factoryRef.current = factory();
    depsRef.current = deps;
  }

  return factoryRef.current as T;
}
