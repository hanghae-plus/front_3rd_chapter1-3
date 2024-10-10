import { shallowEquals } from "../equalities";
import { ComponentType, createElement } from "react";
import { useRef } from "../hooks/useRef";

export function memo<P extends object>(
  Component: ComponentType<P>,
  equals = shallowEquals
) {
  return (props: P) => {
    const prevPropsRef = useRef<P | null>(null);

    // props가 변경되었는지 확인
    const isFirstRender = prevPropsRef.current === null;
    const propsChanged = !equals(prevPropsRef.current, props);

    // props가 변경되었으면 prevPropsRef를 업데이트
    if (propsChanged || isFirstRender) {
      prevPropsRef.current = props;
    }

    // 변경된 경우에만 컴포넌트를 리렌더링
    return propsChanged ? createElement(Component, props) : null;
  };
}
