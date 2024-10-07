/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { DependencyList } from 'react';
import { useMemo } from './useMemo';
export function useCallback<T extends (...args: any[]) => any>(factory: T, deps: DependencyList): T {
  return useMemo(() => factory, deps);
}
