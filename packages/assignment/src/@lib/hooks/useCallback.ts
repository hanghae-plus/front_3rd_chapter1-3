import { DependencyList } from "react";
import { useMemo } from "./useMemo";

export function useCallback<T extends (...args: unknown[]) => unknown>(
  factory: T,
  deps: DependencyList
): T {
  // useMemo를 사용하여 메모이제이션된 콜백 함수 생성
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memoizedCallback = useMemo(() => factory, deps);

  return memoizedCallback as T; // 메모이제이션된 콜백 반환
}
