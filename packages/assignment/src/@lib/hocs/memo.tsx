import { shallowEquals } from "../equalities";
import { ComponentType, createElement } from "react";
import { useMemo, useRef } from "../hooks";

export function memo<P extends object>(
  Component: ComponentType<P>,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  equals = shallowEquals
) {
  // 1. 이전 props를 저장할 ref 생성
  return function MemoizedComponent(props: P) {
    const previousPropsRef = useRef<P | null>(null);

    // 이전 props이랑 현재 props가 다르면
    if (!equals(previousPropsRef.current, props)) {
      previousPropsRef.current = props;
    }

    const renderComponent = useMemo(() => {
      return createElement(Component, previousPropsRef.current);
    }, [previousPropsRef.current]);

    // 리렌더링이 필요한 경우에만 renderComponent 실행
    return renderComponent;
  };
}
