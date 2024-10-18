import { DependencyList } from "react";
import { shallowEquals } from "../equalities";
import { useRef } from "./useRef";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function useMemo<T>(factory: () => T, deps: DependencyList, equals = shallowEquals): T {

  const memoized = useRef<{ deps: DependencyList, value: T } | undefined>(undefined);
  if (!memoized.current || !equals(memoized.current.deps, deps)) {

    memoized.current = { deps, value: factory() };
  }
  
  return memoized.current.value;
}
