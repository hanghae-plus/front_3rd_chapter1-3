import { DependencyList } from "react";
import { useMemo } from "./useMemo";
import { deepEquals } from "../equalities";

export function useDeepMemo<T>(factory: () => T, deps: DependencyList): T {
  // factory와 기존 의존성 배열을 사용하여 useMemo 호출

  return useMemo<T>(factory, deps, deepEquals);
}
