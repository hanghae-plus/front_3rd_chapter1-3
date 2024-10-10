import { DependencyList } from 'react';
import { useMemo } from '.';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useCallback<T extends (...args: any[]) => any>(
  factory: T,
  deps: DependencyList
): T {
  const memoizedCallback = useMemo(() => {
    return factory;
  }, deps);

  return memoizedCallback;
}
