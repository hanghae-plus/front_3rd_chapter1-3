import { DependencyList } from 'react';
import { deepEquals } from '../equalities';
import { useMemo } from './useMemo';

export function useDeepMemo<T>(factory: () => T, deps: DependencyList): T {
  // 직접 작성한 useMemo를 참고해서 만들어보세요.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(factory, deps, deepEquals);
}
