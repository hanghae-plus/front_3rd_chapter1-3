import { DependencyList } from 'react';
import { useMemo } from './useMemo';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useCallback<T extends (...args: any[]) => any>(factory: T, deps: DependencyList): T {
  return useMemo(() => factory, deps);
}
