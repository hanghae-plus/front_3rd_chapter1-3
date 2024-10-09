/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */

import { DependencyList } from "react";
import { useMemo } from "./useMemo";

/**
 * @description useCallback 훅은 주어진 의존성 배열이 변경되지 않으면 동일한 함수를 반환합니다.
 * @param factory - 메모이제이션할 함수
 * @param deps - 의존성 배열
 * @returns 메모이제이션된 콜백 함수 반환
 */
export function useCallback<T extends (...args: any[]) => any>(factory: T, deps: DependencyList): T {
  return useMemo(() => factory, deps); // useMemo를 사용하여 함수를 메모이제이션
}
