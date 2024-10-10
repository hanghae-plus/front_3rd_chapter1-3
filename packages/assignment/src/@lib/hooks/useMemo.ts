import { DependencyList } from "react";
import { useRef } from "./useRef";
import { shallowEquals } from "../equalities/shallowEquals"; // shallowEquals를 import합니다.

export function useMemo<T>(
  factory: () => T,
  deps: DependencyList,
  equals = shallowEquals
): T {
  // 1. 이전 의존성과 결과를 저장할 ref 생성
  const ref = useRef<{ deps?: DependencyList; result?: T }>({
    deps: undefined,
    result: undefined,
  });

  // 2. 현재 의존성과 이전 의존성 비교
  // 3. 의존성이 변경된 경우 factory 함수 실행 및 결과 저장
  if (!deps) {
    ref.current.result = factory();
  } else if (!ref.current.deps || !equals(deps, ref.current.deps)) {
    ref.current.deps = deps;
    ref.current.result = factory();
  }

  // 4. 메모이제이션된 값 반환
  return ref.current.result!; // non-null assertion을 사용
}
