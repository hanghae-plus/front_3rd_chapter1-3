import { DependencyList } from "react";
import { useRef } from "./useRef";
import { shallowEquals } from "../equalities";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function useMemo<T>(
  factory: () => T,
  deps: DependencyList,
  equals = shallowEquals
): T {
  const oldDeps = useRef<Readonly<DependencyList>>(deps);
  const memoized = useRef<T | null>(null);

  if (memoized.current === null) {
    memoized.current = factory();
  }

  if (memoized.current !== null && !equals(deps, oldDeps.current)) {
    memoized.current = factory();
  }

  oldDeps.current = deps;

  return memoized.current;
}
