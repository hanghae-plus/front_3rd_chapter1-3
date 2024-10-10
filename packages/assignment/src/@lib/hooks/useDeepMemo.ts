import { DependencyList } from "react";
import { useMemo } from "./useMemo";
import { deepEquals } from "../equalities";

// 3
// useDeepMemo 혹은 깊은 비교를 사용하여 값을 메모이제이션합니다.
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export function useDeepMemo<T>(factory: () => T, deps: DependencyList): T {
  // 직접 작성한 useMemo를 참고해서 만들어보세요.
  // 1. useMemo 를 사용하되, 비교 함수로 deepEquals를 사용
  return useMemo(factory, deps, deepEquals);
}
