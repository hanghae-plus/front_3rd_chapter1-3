import { DependencyList } from "react";
import { shallowEquals } from "../equalities";
import { useRef } from ".//useRef";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export function useMemo<T>(factory: () => T, deps: DependencyList, equals = shallowEquals): T {
  const ref = useRef<{ deps: null | unknown[], value: null | unknown }>({ deps: null, value: null });

  if ((!ref.current.deps && !ref.current.value ) || !equals(ref.current.deps, deps)) {
    ref.current.value = factory();
    ref.current.deps = deps;
  }

  return ref.current.value; 
}
