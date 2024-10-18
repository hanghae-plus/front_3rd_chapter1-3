import { DependencyList } from "react";
import { shallowEquals } from "../equalities";
import { useRef } from "./useRef";

// 2
// useMemo 혹은 계산 비용이 높은 값을 메모이제이션합니다.
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function useMemo<T>(
  factory: () => T,
  deps: DependencyList,
  equals = shallowEquals
): T {
  // 직접 작성한 useRef를 통해서 만들어보세요.
  // 1. 이전 의존성과 결과를 저장할 ref 생성
  const previousDepsRef = useRef<DependencyList | null>(null);
  const previousResultRef = useRef<T | null>(null);
  // 2. 현재 의존성과 이전 의존성 비교
  if (previousDepsRef.current && equals(previousDepsRef.current, deps)) {
    // 4. 메모이제이션된 값 반환
    return previousResultRef.current as T;
  }

  // 3. 의존성이 변경된 경우 factory 함수 실행 및 결과 저장
  const result = factory();
  previousDepsRef.current = deps;
  previousResultRef.current = result;

  // 구현을 완성해주세요.
  // 이 부분을 적절히 수정하세요.
  return result;
}
