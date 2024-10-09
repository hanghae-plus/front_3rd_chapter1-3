import { DependencyList } from "react";
import { shallowEquals } from "../equalities";
import { useRef } from "./useRef"; // 이전에 구현한 useRef 사용
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function useMemo<T>(
  factory: () => T,
  deps: DependencyList,
  equals = shallowEquals
): T {
  // 직접 작성한 useRef를 통해서 만들어보세요! 이게 제일 중요합니다.

  // 1. 이전 의존성과 결과를 저장할 ref 생성

  const memoized = useRef<{
    deps: DependencyList | undefined;
    value: T | undefined;
  }>({
    deps: undefined,
    value: undefined,
  });

  // 2. 현재 의존성과 이전 의존성 비교
  const hasChanged =
    !memoized.current.deps || !equals(memoized.current.deps, deps);

  // 3. 의존성이 변경된 경우 factory 함수 실행 및 결과 저장
  if (hasChanged) {
    memoized.current.value = factory();
    memoized.current.deps = deps;
  }
  // 4. 메모이제이션된 값 반환
  return memoized.current.value as T;
}
