import { shallowEquals } from "../equalities";
import { ComponentType, ReactElement } from "react";
import { useRef } from "../hooks/useRef";

export function memo<P extends object>(
  Component: ComponentType<P>,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  equals = shallowEquals
) {
  return function MemoizedComponent(props: P): ReactElement | null {
    // 이전 props와 이전 컴포넌트를 저장할 ref 생성
    const prevPropsRef = useRef<P | null>(null);
    const prevComponentRef = useRef<ReactElement | null>(null);

    // 처음 렌더링이거나, props가 변경된 경우에만 새로운 렌더링 결과 저장
    if (!prevPropsRef.current || !equals(prevPropsRef.current, props)) {
      prevPropsRef.current = props;
      prevComponentRef.current = <Component {...props} />;
    }

    // 이전에 렌더링된 결과를 반환
    return prevComponentRef.current;
  };
}
