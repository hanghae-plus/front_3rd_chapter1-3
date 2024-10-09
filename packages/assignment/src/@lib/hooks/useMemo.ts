import { DependencyList } from "react";
import { shallowEquals } from "../equalities";
import { useRef } from "./useRef";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function useMemo<T>(
  factory: () => T,
  deps: DependencyList,
  equals = shallowEquals
): T {
  // 직접 작성한 useRef를 통해서 만들어보세요! 이게 제일 중요합니다.

  // 1. 이전 의존성과 결과를 저장할 ref 생성
  let depsRef = useRef<DependencyList | null>(null);
  let factoryRef = useRef<T | null>(null);

  // 2. 현재 의존성과 이전 의존성 비교
  if (depsRef.current === null || !equals(deps, depsRef.current)) {
    depsRef.current = deps;
    factoryRef.current = factory();
  }

  // 3. 의존성이 변경된 경우 factory 함수 실행 및 결과 저장

  // 4. 메모이제이션된 값 반환
  return factoryRef.current as T;

  // 구현을 완성해주세요.
}

/* export function useMemo<T>(
  factory: () => T,
  deps: DependencyList,
  equals = shallowEquals
): T {
  // 직접 작성한 useRef를 통해서 만들어보세요! 이게 제일 중요합니다.

  // 1. 이전 의존성과 결과를 저장할 ref 생성
  let depsRef = useRef(deps);
  let factoryRef = useRef(factory());

  console.log(deps);
  console.log(depsRef);
  console.log(depsRef.current);

  console.log(factoryRef);
  console.log(factoryRef.current);
  console.log(equals(deps, depsRef.current));

  // 2. 현재 의존성과 이전 의존성 비교
  if (!equals(deps, depsRef.current)) {
    depsRef.current = deps;
    factoryRef.current = factory();
  }

  // 3. 의존성이 변경된 경우 factory 함수 실행 및 결과 저장

  // 4. 메모이제이션된 값 반환
  return factoryRef.current;

  // 구현을 완성해주세요.
} */
