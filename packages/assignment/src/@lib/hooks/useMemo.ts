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
  const prevDepsRef = useRef<DependencyList>([]);
  const resultRef = useRef<T | null>(null);

  // 2. 현재 의존성과 이전 의존성 비교
  const depsChanged = !equals(prevDepsRef.current, deps);

  if (depsChanged) {
    resultRef.current = factory();
    prevDepsRef.current = deps;
  }

  // 4. 메모이제이션된 값 반환
  return resultRef.current!;
}
