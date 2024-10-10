import { useRef } from "../hooks/useRef";
import { ComponentType, createElement, ReactElement } from "react";
import { shallowEquals } from "../equalities";

// memo HOC는 컴포넌트의 props를 얕은 비교하여 불필요한 리렌더링을 방지합니다.
export function memo<P extends object>(
  Component: ComponentType<P>,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  equals = shallowEquals
) {
  return (props: P): ReactElement => {
    // 1. 이전 props를 저장할 ref 생성
    const prevPropsRef = useRef<P | null>(null);
    const prevComponentRef = useRef<ReactElement | null>(null);

    // 2. 메모이제이션된 컴포넌트 생성
    const newComponent = createElement(Component, props);

    // 3. equals 함수를 사용하여 props 비교
    const hasChanged =
      prevPropsRef.current === null || !equals(prevPropsRef.current, props);

    // 4. props가 변경된 경우에만 새로운 렌더링 수행
    if (hasChanged) {
      prevPropsRef.current = props; // 이전 props를 현재 props로 업데이트
      prevComponentRef.current = newComponent; // 이전 컴포넌트를 새로운 컴포넌트로 변경
    }

    return prevComponentRef.current as ReactElement;
  };
}
