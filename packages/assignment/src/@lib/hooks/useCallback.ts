import { DependencyList } from 'react';
import { useMemo } from './useMemo';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useCallback<T extends (...args: any[]) => any>(
  factory: T,
  deps: DependencyList
): T {
  // 직접 작성한 useMemo를 통해서 만들어보세요.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => factory, deps);
}
