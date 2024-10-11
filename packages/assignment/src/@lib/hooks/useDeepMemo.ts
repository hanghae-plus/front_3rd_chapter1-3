import { DependencyList } from "react";
import { useMemo } from "./useMemo";
import { deepEquals } from "../equalities";

/**
 * @function useDeepMemo
 * @description 값 또는 복잡한 객체의 깊은 메모이제이션을 위한 훅
 * 주어진 팩토리 함수가 반환하는 값을 메모리에 저장하고, 종속성 배열에 따라 값이 변경되었는지 깊은 비교를 진행
 * deepEquals 함수를 사용하여 종속성의 이전 값과 현재 값을 비교하고, 완전히 같을 경우에만 새로운 값의 계산을 방지
 *
 * @param {() => T} factory - 메모이제이션할 값을 생성하는 팩토리 함수
 * @param {DependencyList} deps - 값이 변경되었는지 확인할 종속성 배열
 * @returns {T} 팩토리 함수에서 생성된 메모이제이션된 값
 * @template T - 메모이제이션할 값의 타입
 */

export function useDeepMemo<T>(factory: () => T, deps: DependencyList): T {
  // useMemo 훅을 사용하여 값을 메모이제이션
  return useMemo(factory, deps, deepEquals);
}