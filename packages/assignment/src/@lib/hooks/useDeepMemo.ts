/* eslint-disable react-hooks/exhaustive-deps */

import { DependencyList } from "react";
import { useMemo } from "./useMemo";
import { deepEquals } from "../equalities";

/**
 * @description 깊은 비교를 사용하여 메모이제이션된 값을 반환하는 훅입니다.
 * @param factory - 메모이제이션할 값을 생성하는 함수
 * @param deps - 의존성 배열 (deepEquals로 깊은 비교하여 변경 여부를 확인)
 * @returns 메모이제이션된 값 반환
 */
export function useDeepMemo<T>(factory: () => T, deps: DependencyList): T {
  return useMemo(factory, deps, deepEquals);
}
