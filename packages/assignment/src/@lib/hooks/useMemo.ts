import { DependencyList } from "react";
import { shallowEquals } from "../equalities";
import { useRef } from "./useRef";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function useMemo<T>(factory: () => T, deps: DependencyList, equals = shallowEquals): T {
  // 직접 작성한 useRef를 통해서 만들어보세요.

  // 1. 이전 의존성과 결과를 저장할 ref 생성
  // usetMemo느ㄴ 인자로 factory 함수?와 deps를 받음. 추가로 얕은비교까지.
  const memoizedValueRef = useRef<T | null>(null);
  const prevDepsRef = useRef<any[] | null>(null);

  // 2. 현재 의존성과 이전 의존성 비교
  const hasChanged = () => {
    if (!prevDepsRef.current) {
      return true; // 처음 실행일 경우 변경된 것으로 간주
    }

    return deps.some((dep, i) => dep !== prevDepsRef.current![i]);
  };

  // 3. 의존성이 변경된 경우 factory 함수 실행 및 결과 저장
  if (hasChanged()) {
    memoizedValueRef.current = factory();
    prevDepsRef.current = [...deps];
  }

  // 4. 메모이제이션된 값 반환

  // 구현을 완성해주세요.
  return memoizedValueRef.current!;
}
