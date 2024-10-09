import { DependencyList } from 'react';
import { useMemo } from './useMemo';
import { deepEquals } from '../equalities';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

export function useDeepMemo<T>(factory: () => T, deps: DependencyList): T {
  // useDeepMemo 훅은 깊은 비교를 사용하여 값을 메모이제이션합니다.
  // 직접 작성한 useMemo를 참고해서 만들어보세요.
  // 1. useMemo를 사용하되, 비교 함수로 deepEquals를 사용

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(factory, deps, deepEquals);
}
