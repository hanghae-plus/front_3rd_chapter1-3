import { DependencyList } from "react";
import { useMemo } from "./useMemo";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useCallback<T extends (...args: any[]) => any>(
  factory: T,
  deps: DependencyList
): T {
  // @useMemo.ts 함수를 사용하여 메모이제이션을 적용합니다.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => factory, deps);
}
