import { DependencyList } from 'react';
import { shallowEquals } from '../equalities';
import { useRef } from './useRef';

/**
 * @function useMemo
 * @description 값 또는 복잡한 객체를 메모이제이션하기 위해 사용되는 훅
 * 의존성 배열의 변화를 감지하여 제공된 팩토리 함수를 실행하고, 결과를 메모이제이션 하는 역할
 * 의존성 배열의 비교는 기본적으로 shallowEquals를 사용하거나, 사용자가 지정한 비교 함수를 사용
 *
 * @param {() => T} factory - 메모이제이션할 값을 생성하는 함수
 * @param {DependencyList} deps - 값이 변경되었는지 확인할 종속성 배열
 * @param {(a: DependencyList, b: DependencyList) => boolean} [equals=shallowEquals] - 종속성 배열의 비교에 사용될 함수
 * @returns {T} 팩토리 함수에서 생성된 메모이제이션된 값
 * @template T - 메모이제이션할 값의 타입
 */

export function useMemo<T>(factory: () => T, deps: DependencyList, equals = shallowEquals): T {
  // 이전 의존성과 결과를 저장할 ref 객체 생성
  const ref = useRef<{ deps: DependencyList; value: T } | undefined>(undefined);

  // 현재 의존성과 이전 의존성을 비교하여 변화가 있는지 확인
  if (!ref.current || !equals(ref.current.deps, deps)) {
    // 의존성이 변경된 경우, 팩토리 함수를 실행하여 새로운 값을 생성하고 저장
    const newValue = factory();
    ref.current = { deps, value: newValue };
    return newValue;
  }

  // 의존성이 변경되지 않은 경우, 이전에 메모이제이션된 값을 반환
  return ref.current.value;
}
