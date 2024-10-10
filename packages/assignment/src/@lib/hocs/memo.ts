import { shallowEquals } from "../equalities";
import { ComponentType, createElement } from "react";
import { useRef } from "../hooks";

// memo HOC는 컴포넌트의 props를 얕은 비교하여 불필요한 리렌더링을 방지합니다.
export function memo<P extends object>(
  Component: ComponentType<P>,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  equals = shallowEquals
) {
  // 1. 이전 props를 저장할 ref 생성
  // 2. 메모이제이션된 컴포넌트 생성
  // 3. equals 함수를 사용하여 props 비교
  // 4. props가 변경된 경우에만 새로운 렌더링 수행
  return function (currentProps: P) {
    const prevComponet = useRef<JSX.Element | null>(null);
    const prevProps = useRef<P | null>(null);

    if (prevProps.current !== null && equals(prevProps.current, currentProps)) {
      return prevComponet.current;
    }

    prevProps.current = currentProps;
    prevComponet.current = createElement(Component, currentProps);

    return prevComponet.current;
  };
}
