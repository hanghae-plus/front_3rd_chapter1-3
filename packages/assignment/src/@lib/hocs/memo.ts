import { shallowEquals } from "../equalities";
import { ComponentType, createElement } from "react";
import { useRef } from "../hooks";

export function memo<P extends object>(
  Component: ComponentType<P>,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  equals = shallowEquals
) {

  return (props) => {
    // 1. 이전 props를 저장할 ref 생성
    const prevProps = useRef<P | null>(null);

  // 2. 메모이제이션된 컴포넌트 생성
  const MemoizedComponent = useRef(null);

  if ((!MemoizedComponent.current) || !equals(prevProps.current, props)) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    MemoizedComponent.current = createElement(Component, props);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    prevProps.current = props;
  }

  return MemoizedComponent.current;
  };
}