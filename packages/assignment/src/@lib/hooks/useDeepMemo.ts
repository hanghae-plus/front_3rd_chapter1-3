import { DependencyList } from "react";
import { useMemo } from "./useMemo";
import { deepEquals } from "../equalities";

export function useDeepMemo<T>(factory: () => T, deps: DependencyList): T {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(factory, deps, deepEquals);
}
