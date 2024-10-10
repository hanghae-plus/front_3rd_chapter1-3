import { DependencyList } from "react";
import { useMemo } from "@/@lib/hooks/useMemo";
import { deepEquals } from "@/@lib/equalities";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

export function useDeepMemo<T>(factory: () => T, deps: DependencyList): T {
  return useMemo(factory, deps, deepEquals);
}
