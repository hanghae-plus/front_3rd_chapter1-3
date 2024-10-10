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
  const ref = useRef<{ factory: T | null; deps: DependencyList | null }>({
    factory: null,
    deps: null,
  });

  if (!ref.current.deps || !equals(deps, ref.current.deps)) {
    ref.current.factory = factory();
    ref.current.deps = deps;
  }

  return ref.current.factory as T;
}
