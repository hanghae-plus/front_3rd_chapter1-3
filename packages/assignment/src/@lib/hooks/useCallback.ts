import { DependencyList } from "react";
import { useMemo } from "./";

/**
 * @function useCallback
 * @description 함수를 메모이제이션하여 리렌더링 시 동일한 참조를 유지하기 위한 훅
 * 주어진 함수의 참조가 종속성 배열에 명시된 값이 변경되지 않는 한 동일하게 유지
 * 종속성 배열의 값이 변경되면 주어진 함수의 새로운 참조를 생성
 *
 * @param {T} factory - 메모이제이션할 함수
 * @param {DependencyList} deps - 함수의 참조를 유지할 종속성 배열
 * @returns {T} 메모이제이션된 함수 참조
 * @template T - 콜백 함수의 타입, 함수는 어떤 인자를 받고 어떤 타입을 반환하는지에 대한 타입 정보를 포함
 */

export function useCallback<T extends (...args: any[]) => any>(factory: T, deps: DependencyList): T {
  // useMemo를 사용하여 함수의 참조를 메모이제이션
  return useMemo(() => factory, deps);
}
