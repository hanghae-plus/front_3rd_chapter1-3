import { DependencyList } from "react";
import { shallowEquals } from "../equalities";
import { useRef } from "../../@lib/hooks/useRef";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
//
export function useMemo<T>(
  factory: () => T,
  deps: DependencyList,
  equals = shallowEquals
): T {
  // 직접 작성한 useRef를 통해서 만들어보세요.
  console.log(deps);
  // 초기값 설정
  const refValue = useRef<{ deps: DependencyList | null; result: T }>({
    deps: null,
    result: null as T,
  });
  console.log("refValue", refValue);

  // 초기 값이거나 의존성 배열이 다른 경우
  if (!refValue.current.deps || !equals(deps, refValue.current.deps)) {
    refValue.current.deps = deps;
    refValue.current.result = factory(); //결과값을 메모이제이션
  }

  return refValue.current.result;
}
