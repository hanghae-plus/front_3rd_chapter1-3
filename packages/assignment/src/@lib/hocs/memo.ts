import { shallowEquals } from "../equalities";
import { ComponentType } from "react";
import React from "react";
import { useRef, useMemo } from "../hooks";

// memo HOC는 컴포넌트의 props를 얕은 비교하여 불필요한 리렌더링을 방지합니다.
export function memo<P extends object>(
  Component: ComponentType<P>,
  equals = shallowEquals
) {
  // 1. 메모이제이션된 컴포넌트 생성
  const MemorizedComponent = (props: P) => {
    // 2. 이전 props를 저장할 ref 생성
    const propsRef = useRef<P | null>(null); // useRef를 호출하여 값을 유지

    // props가 변경된 경우에만 새로운 렌더링 수행
    if (propsRef.current === null || !equals(propsRef.current, props)) {
      propsRef.current = props; // props 업데이트
    }

    // 기존의 렌더링 반환
    return useMemo(
      () => React.createElement(Component, { ...propsRef.current } as P),
      [propsRef.current]
    );
  };

  return MemorizedComponent;
}
