import { DependencyList } from 'react';
import { deepEquals } from '../equalities';
import { useMemo } from './useMemo';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export function useDeepMemo<T>(factory: () => T, deps: DependencyList): T {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(factory, deps, deepEquals);
}
