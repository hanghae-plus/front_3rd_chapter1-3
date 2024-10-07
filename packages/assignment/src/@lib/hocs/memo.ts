import { useRef } from "..";
import { shallowEquals } from "../equalities";
import { ComponentType, createElement } from "react";

export function memo<P extends object>(
  Component: ComponentType<P>,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  equals = shallowEquals
) {
  let renderComponent = null;
  //이전 props를 저장할 ref 생성
  return function MemoizedComponent(props: P) {
    const prevProps = useRef<P | null>(null);

    // props가 이전과 동일한지 비교
    if (prevProps.current && equals(prevProps.current, props)) return null; //props 동일한경우 리렌더링X
    prevProps.current = props;
    renderComponent = createElement(Component, { ...props });
    return renderComponent;
  };
}
