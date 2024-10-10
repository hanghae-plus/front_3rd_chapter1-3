import { DependencyList } from "react";
import { shallowEquals } from "../equalities";
import {useRef} from "../hooks";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// factory : memoization할 값을 생성하는 함수, 매번 렌더링될때마다 호출
// deps : DependencyList -> 의존성 배열
export function useMemo<T>(factory: () => T, deps: DependencyList, equals = shallowEquals): T {
  // 직접 작성한 useRef를 통해서 만들어보세요.

  const prevResult = useRef<DependencyList>([]); // // 1. 이전 의존성과 결과를 저장할 ref 생성
  const resultRef = useRef<T | null>(null); 

  //const isChanged = !equals(prevResult.current,deps); // // 2. 현재 의존성과 이전 의존성 비교
  // isChanged가 true여야한다. 
  if(resultRef.current === null || !equals(prevResult.current,deps)){ // 3. 의존성이 변경된 경우 factory 함수 실행 및 결과 저장
    resultRef.current = factory();
    prevResult.current = deps;
  }

  return resultRef.current as T; // 4. 메모이제이션된 값 반환
}
