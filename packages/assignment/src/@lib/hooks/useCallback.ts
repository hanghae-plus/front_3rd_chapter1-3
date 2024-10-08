import { DependencyList } from 'react';
import { useMemo } from './useMemo';
import { deepEquals } from '../equalities';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useCallback<T extends (...args: any[]) => any>(factory: T, deps: DependencyList): T {
  // useMemo를 사용하여 factory 함수를 메모이제이션합니다.
  return useMemo(() => factory, deps);
}
