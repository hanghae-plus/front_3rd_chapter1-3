import { DependencyList } from "react";
import { deepEquals } from "../equalities";
import { useRef } from "./useRef";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

export function useDeepMemo<T>(factory: () => T, deps: DependencyList): T {
  // 직접 작성한 useMemo를 참고해서 만들어보세요.
  const factoryRef = useRef<T>(null);
  const depsRef = useRef<DependencyList>([]);
  const { current } = depsRef;

  const isDepsEquals = current !== null && deepEquals(depsRef.current, deps);

  if (!isDepsEquals) {
    factoryRef.current = factory();
    depsRef.current = deps;
  }

  return factoryRef.current as T;
}
