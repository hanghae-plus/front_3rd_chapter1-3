import React, { useRef } from "react";
import { shallowEquals } from "../equalities";

export function memo<P extends object>(
  Component: React.ComponentType<P>,
  equals = shallowEquals
) {
  return function MemoizedComponent(props: P) {
    // 1. 이전 props를 저장할 ref 생성
    const prevPropsRef = useRef<P | null>(null);
    const shouldRender = !prevPropsRef.current || !equals(prevPropsRef.current, props);

    // 2. props가 변경된 경우에만 컴포넌트를 리렌더링하고, 이전 props를 업데이트
    if (shouldRender) {
      prevPropsRef.current = props;
    }

    // 3. 리렌더링 조건에 맞게 컴포넌트 반환
    return shouldRender ? React.createElement(Component, props) : prevPropsRef.current;
  };
}
