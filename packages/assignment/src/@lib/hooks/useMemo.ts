import { DependencyList } from "react";
import { shallowEquals } from "../equalities";
import { useRef } from "./useRef";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function useMemo<T>(factory: () => T, deps: DependencyList, equals = shallowEquals): T {
  // 직접 작성한 useRef를 통해서 만들어보세요.

  // 1. 이전 의존성과 결과를 저장할 ref 생성
  // ref.current 객체에 두가지 속성을 줌, 계산된 값과 의존성 배열
  // DependencyList는 의존성배열. 그 안의 값이 변동될때 useMemo안의 콜백함수가 작동. useRef(() => {value}, [deps])
  const ref = useRef<{factory: T; deps: DependencyList | null;}>({
    factory: null as T,
    deps: null,
  });

  // 2. 현재 의존성과 이전 의존성 비교
  // 처음 실행때는 ref.current.deps 없어서 항상 true
  if(!ref.current.deps || !equals(deps, ref.current.deps)) {
    // 즉 처음에 의존성 배열이 없거나, 비교를통해 값이 변경되었다면 fatory함수 호출 및 값 저장
    // 3. 의존성이 변경된 경우 factory 함수 실행 및 결과 저장
    ref.current.factory = factory();
    ref.current.deps = deps;
  }

  // 4. 메모이제이션된 값 반환
  // 구현을 완성해주세요.
  return ref.current.factory;
}
