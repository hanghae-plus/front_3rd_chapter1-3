import { DependencyList } from "react";
import { useMemo } from "./useMemo";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export function useCallback<T>(factory: T, deps: DependencyList): T {
  // 직접 작성한 useMemo를 통해서 만들어보세요.

  return useMemo(() => factory, deps);
}
