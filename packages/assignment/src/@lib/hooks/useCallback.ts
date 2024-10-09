import { DependencyList } from "react";
import {useMemo} from "../hooks";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-explicit-any
export function useCallback<T extends (...args: any[]) => any>(factory: T, deps: DependencyList): T {
  // 직접 작성한 useMemo를 통해서 만들어보세요.
 
  return useMemo(()=>factory, deps)
}


 // 만약 의존성배열이 빈배열상태라면..? 첫 렌더링에만 동작한다.

  /*
   //return useMemo((...args) => factory(...args), deps); // 
   -> 이렇게할경우 함수를 바로 실행하는 새로운 함수를 메모이제이션한다.
   즉, 의존성 배열이 변경되지 않으면 (...args) => factory(...args)라는 새로운 함수가 동일하게 유지된다. 
   이 방식은 factory함수가 호출될때마다 args를 받아서 실행되는 형태로 동작한다.
   -> factory함수가 호출되면서 전단되는 인자를 처리할 수 있는 구조로, factory함수가 동적으로 실행될 수 있다.
   -> 이 방식을 사용했을 경우 의존성 값이 변경되지않아도 새로운 함수를 반환하기에 테스트 케이스를 통과 못하는건가?

    //return useMemo(()=>factory, deps)
    -> factory함수 자체를 메모이제이션한다. deps가 변하지 않는한 factory함수 자체를 그대로 반환한다.
    이 방식에서는 메모이제이션된 함수가 실제로 호출되지 않는다. 함수 자체를 반환할 뿐 실행하지는 않는다.
    -> 즉, 함수 레퍼런스를 저장하는데 집중.

  */