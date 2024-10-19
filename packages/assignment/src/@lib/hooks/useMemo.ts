import { DependencyList } from "react";
import { shallowEquals } from "../equalities";
import { useRef } from "./useRef";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function useMemo<T>(
  factory: () => T,
  deps: DependencyList,
  equals = shallowEquals
): T {
  // 직접 작성한 useRef를 통해서 만들어보세요.

  // 1. 이전 의존성과 결과를 저장할 ref 생성

  // 2. 현재 의존성과 이전 의존성 비교

  // 3. 의존성이 변경된 경우 factory 함수 실행 및 결과 저장

  // 4. 메모이제이션된 값 반환
  // 구현을 완성해주세요.

  const ref = useRef<{ value: T | null; deps: DependencyList | null }>({
    value: null,
    deps: null,
  });
  const hasChanged = !ref.current.deps || !equals(deps, ref.current.deps);
  if (hasChanged) {
    ref.current.value = factory();
    ref.current.deps = deps;
  }
  return ref.current.value as T;
}
// as T를 통한 타입 단언 사용
