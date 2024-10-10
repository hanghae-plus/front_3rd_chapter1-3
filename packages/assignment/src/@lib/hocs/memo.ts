import { shallowEquals } from "../equalities";
import { ComponentType, createElement, useRef } from "react";

// memo HOC는 컴포넌트의 props를 얕은 비교하여 불필요한 리렌더링을 방지합니다.
export function memo<P extends object>(
  Component: ComponentType<P>,
  equals = shallowEquals
) {

  const MemoizedComponent = (props: P) => {
    const prevPropsRef = useRef<P | null>(null);
    const prevComponentRef = useRef<React.ReactNode | null>(null);

    if (!equals(prevPropsRef.current, props)) {
      prevPropsRef.current = props;
      prevComponentRef.current = createElement(Component, props);
    }

    return prevComponentRef.current;
  };

  return MemoizedComponent;
    
  };