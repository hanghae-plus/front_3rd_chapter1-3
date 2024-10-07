import { ComponentType, useRef } from "react";
import { shallowEquals } from "../equalities";

export function memo<P extends object>(
  Component: ComponentType<P>,
  equals = shallowEquals
) {
  return function MemoizedComponent(props: P) {

  // 1. 이전 props를 저장할 ref 생성

  // 2. 메모이제이션된 컴포넌트 생성

  // 3. equals 함수를 사용하여 props 비교

  // 4. props가 변경된 경우에만 새로운 렌더링 수행

    const prevPropsRef = useRef<P | null>(null);
    
    const isRenderRef = prevPropsRef.current === null || !equals(prevPropsRef.current, props);

    if (isRenderRef){
      prevPropsRef.current = props; 
      return <Component {...props} />; 
    }

    return null;
  };
}