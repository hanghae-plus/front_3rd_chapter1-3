import { DependencyList } from 'react';
import { useRef } from './useRef';
import { shallowEquals } from '../equalities';

// useMemo 훅은 계산 비용이 높은 값을 메모이제이션합니다.
// factory: 값을 생성하는 함수. 주로 계산 비용이 높은 값이 될 수 있음.
// deps: 의존성 배열. 의존성 배열이 변하지 않는 한, 메모이제이션된 값이 반환됨.
// equals: //두 의존성 배열이 같은지 비교하는 함수. 기본값은 shallowEquals, 즉 얕은 비교를 하도록 설정되어 있음.
export function useMemo<T>(
  factory: () => T,
  deps: DependencyList,
  equals = shallowEquals
): T {
  // 1. 이전 의존성과 결과를 저장할 ref 생성
  const ref = useRef<{ deps: DependencyList; result: T } | null>(null);
 
  
  // 2. 현재 의존성과 이전 의존성 비교
  if (ref.current === null || !equals(ref.current.deps, deps)) {
    // 이전값과 현재값 비교
    // 3: 의존성이 변경된 경우 factory 함수 실행 및 결과 저장
    ref.current = { deps, result: factory() };
  }

  // 4. 메모이제이션된 값 반환

  // 구현을 완성해주세요.
  return ref.current.result; // 이 부분을 적절히 수정하세요.
}
