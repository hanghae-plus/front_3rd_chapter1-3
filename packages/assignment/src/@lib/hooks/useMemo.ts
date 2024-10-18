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
    value: T | null;
    deps: DependencyList | null;
  }>({
    value: null,
    deps: null,
  });

  // 의존성이 변경되었는지 확인
  const isFirstRender = ref.current.deps === null;
  const hasChanged = !equals(ref.current.deps || [], deps);

  // 의존성이 변경되었거나 첫 렌더링일 때 factory를 호출
  if (hasChanged || isFirstRender) {
    ref.current.value = factory();
    ref.current.deps = deps;
  }

  return ref.current.value as T;
}
