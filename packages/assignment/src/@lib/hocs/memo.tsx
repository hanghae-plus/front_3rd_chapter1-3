import { shallowEquals } from "../equalities";
import { ComponentType } from "react";
import { useRef } from "../hooks";

export function memo<P extends object>(
  Component: ComponentType<P>,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  equals = shallowEquals
) {
  return function MemoizedComponent(props: P){
    // 1. 이전 props를 저장할 ref 생성
    const prevPropsRef = useRef<P | null>(null);
    
    // 2. 메모이제이션된 컴포넌트 결과를 저장할 ref 생성
    const memoizedResultRef = useRef<React.ReactElement | null>(null);

    // 3. equals 함수를 사용하여 props 비교
    if (prevPropsRef.current === null || !equals(prevPropsRef.current, props)) {
       // 현재 props를 prevPropsRef에 저장
      prevPropsRef.current = props;
      // 4. props가 변경된 경우에만 새로운 렌더링 수행
      memoizedResultRef.current = <Component {...props} />;
    }

   

    // 메모이제이션된 결과 반환 
    return memoizedResultRef.current;
  };
}
