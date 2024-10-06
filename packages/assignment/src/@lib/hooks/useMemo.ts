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
  // // 직접 작성한 useRef를 통해서 만들어보세요.
  // const previousDeps = useRef<DependencyList>([]);
  // const previousResult = useRef<T>(undefined as unknown as T);

  // // 현재 의존성과 이전 의존성 비교
  // if (!equals(previousDeps.current, deps)) {
  //   previousResult.current = factory(); // factory 함수 실행
  //   previousDeps.current = deps; // 이전 의존성 업데이트
  // }

  // return previousResult.current; // 메모이제이션된 값 반환
  const previousDeps = useRef<DependencyList | null>(null);
  const previousResult = useRef<T | null>(null);

  if (previousDeps.current === null || !equals(previousDeps.current, deps)) {
    previousResult.current = factory();
    previousDeps.current = deps;
  }

  return previousResult.current as T;
}
