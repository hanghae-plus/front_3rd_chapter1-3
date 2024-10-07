import { DependencyList } from "react";
import { shallowEquals } from "../equalities";
import { useRef } from ".";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function useMemo<T>(
  factory: () => T,
  deps: DependencyList,
  equals = shallowEquals
): T {
  // 직접 작성한 useRef를 통해서 만들어보세요.

  //이전 의존성과 결과를 지정할 ref 생성
  const memoizedValue = useRef<{
    value: T | null;
    deps: DependencyList | null;
  }>({
    value: null,
    deps: null,
  });
  // 2. 현재 의존성과 이전 의존성 비교
  if (
    !memoizedValue.current.deps ||
    !equals(memoizedValue.current.deps, deps)
  ) {
    // 3. 의존성이 변경된 경우 factory 함수 실행 및 결과 저장
    memoizedValue.current.value = factory();
    memoizedValue.current.deps = deps;
  }

  // 4. 메모이제이션된 값 반환
  return memoizedValue.current.value as T;
}
