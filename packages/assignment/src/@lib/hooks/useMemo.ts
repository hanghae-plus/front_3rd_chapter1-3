import { DependencyList } from "react";
import { shallowEquals } from "../equalities";
import { useRef } from "./useRef";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

export function useMemo<T>(
  factory: () => T,
  deps: DependencyList,
  equals: (a: DependencyList, b: DependencyList) => boolean = shallowEquals // 기본값 설정
): T {
  const ref = useRef<{
    value: T | undefined;
    deps: DependencyList | undefined;
  }>({
    value: undefined,
    deps: undefined,
  });

  // 의존성이 변경되었는지 확인
  const hasChanged =
    !equals(ref.current.deps || [], deps) || ref.current.deps === undefined; // 기본값을 빈 배열로 설정

  // 의존성이 변경된 경우에만 factory를 호출
  if (hasChanged) {
    ref.current.value = factory();
    ref.current.deps = deps;
  }

  return ref.current.value as T;
}
