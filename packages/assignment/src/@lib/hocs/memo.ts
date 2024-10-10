import React from "react";
import { shallowEquals } from "../equalities";
import { ComponentType, useRef } from "react";

export function memo<P extends object>(
  Component: ComponentType<P>,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  equals = shallowEquals
) {
  // 2. 메모이제이션된 컴포넌트 생성
  return function memoizedComponent(props: P) {
      // 1. 이전 props를 저장할 ref 생성
      const ref = useRef<{props: P | null; shouldRender: Boolean}>({
        props: null,
        shouldRender: true,
      })

      // 3. equals 함수를 사용하여 props 비교
      if (ref.current.props && equals(ref.current.props, props)) {
        ref.current.shouldRender = false;
      } else {
        // 4. props가 변경된 경우에만 새로운 렌더링 수행
        ref.current.shouldRender = true;
      }

      // 리렌더링 여부에 따라 컴포넌트를 렌더링
      if (!ref.current.shouldRender && ref.current.props) {
        return null; // 리렌더링을 막음
      }

      ref.current.props = props;

      return React.createElement(Component, props);
    }
  
}
