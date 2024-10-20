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
  const depsRef = useRef<DependencyList | undefined>(undefined);
  const resultRef = useRef<T | undefined>(undefined);

  if (depsRef.current === undefined || !equals(deps, depsRef.current)) {
    resultRef.current = factory();
    depsRef.current = deps;
  }

  return resultRef.current as T;
}
