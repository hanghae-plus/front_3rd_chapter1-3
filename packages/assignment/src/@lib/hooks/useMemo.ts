import { DependencyList } from "react";
import { shallowEquals } from "../equalities";
import { useRef } from "./useRef";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

export function useMemo<T>(
  factory: () => T,
  deps: DependencyList,
  equals = shallowEquals
): T {
  // 직접 작성한 useRef를 통해서 만들어보세요.
  const previos = useRef<{ deps: DependencyList; result: T } | null>(null);

  if (previos.current && equals(previos.current.deps, deps)) {
    return previos.current.result;
  }

  const result = factory();
  previos.current = { deps, result };

  return result;
}
