import React from "react";
import { shallowEquals } from "../equalities";
import { ComponentType, useRef } from "react";

// memo HOC는 컴포넌트의 props를 얕은 비교하여 불필요한 리렌더링을 방지합니다.
export function memo<P extends object>(
  Component: ComponentType<P>,
  equals = shallowEquals
) {
  return (props: P) => {
    // 1. 이전 props를 저장할 ref 생성
    const prevPropsRef = useRef<P | undefined>(undefined);
    const prevProps = prevPropsRef.current;

    // 2. props가 변경되었는지 확인
    const shouldUpdate = !prevProps || !equals(prevProps, props);

    // 3. props가 변경된 경우에만 리렌더링
    if (shouldUpdate) {
      prevPropsRef.current = props; // 현재 props를 저장
      return React.createElement(Component, props);
    }

    // props가 변경되지 않으면 리렌더링하지 않음
    return null;
  };
}
