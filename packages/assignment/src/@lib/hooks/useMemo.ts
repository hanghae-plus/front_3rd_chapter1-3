import { DependencyList } from "react";
import { shallowEquals } from "../equalities";
import { useRef } from "./useRef";

export function useMemo<T>(factory: () => T, deps: DependencyList, equals = shallowEquals): T {
  // 1. 이전 의존성과 결과를 저장할 ref 생성
  const prev = useRef<{ result: null | T; deps: null | DependencyList }>({ result: null, deps: null });

  // 2. 현재 의존성과 이전 의존성 비교
  const hasChanged = prev.current.deps ? !equals(prev.current.deps, deps) : true;

  // 3. 의존성이 변경된 경우 factory 함수 실행 및 결과 저장
  if (hasChanged) {
    const result: T = factory();
    prev.current = { result, deps };

    return result;
  }

  return prev.current.result!;
}
