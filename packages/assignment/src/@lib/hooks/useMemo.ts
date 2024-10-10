import { DependencyList } from "react";
import { shallowEquals } from "../equalities";
import { useRef } from "./useRef";

export function useMemo<T>(
  factory: () => T,
  deps: DependencyList,
  equals = shallowEquals
): T {
  // 직접 작성한 useRef를 통해서 만들어보세요.
  const ref = useRef<{ value: T; deps: DependencyList } | null>(null);

  if (!ref.current || !equals(ref.current.deps, deps)) {
    ref.current = { value: factory(), deps };
  }
  return ref.current.value;
}
