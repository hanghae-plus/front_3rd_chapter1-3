import { ComponentType, createElement, memo as reactMemo } from "react";
import { shallowEquals } from "../equalities";
import { useMemo, useRef } from "../hooks";

// memo HOC는 컴포넌트의 props를 얕은 비교하여 불필요한 렌더링을 방지합니다.
export function memo<P extends object>(
  Component: ComponentType<P>,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  equals = shallowEquals
) {
  return reactMemo(function MemoizedComponent(props: P) {
    // 1. 이전 props를 저장할 ref 생성
    const prevPropsRef = useRef<P | null>(null);

    // 2. memoization 된 component 생성
    const memoizedComponent = useMemo(() => {
      //tsx : <Component {...props} /> 대신해서 createElement(Component, props); 사용
      return createElement(Component, props);
    }, [props]);

    // 3. equals 함수를 사용하여 props 비교
    if (prevPropsRef.current && equals(prevPropsRef.current, props)) {
      return memoizedComponent;
    }

    // 4. props가 변경된 경우에만 새로운 렌더링 수행
    prevPropsRef.current = props;
    return createElement(Component, props);
  }, equals);
}
