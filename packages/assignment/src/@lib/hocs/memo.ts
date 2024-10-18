import { shallowEquals } from "../equalities";
import { ComponentType, createElement } from "react";
import { useRef } from "../hooks";

export function memo<P extends object>(
  Component: ComponentType<P>,
  equals: (prevProps: P, nextProps: P) => boolean = shallowEquals
) {
  return (props: P) => {
    // 1. 이전 props를 저장할 ref 생성
    const prevPropsRef = useRef<P | undefined>(undefined);
    const memoizedComponentRef = useRef<React.ReactElement<P> | undefined>(
      undefined
    );

    // 2. equals 함수를 사용하여 props 비교
    if (!prevPropsRef.current || !equals(prevPropsRef.current, props)) {
      // 3. props가 변경된 경우에만 새로운 렌더링 수행
      memoizedComponentRef.current = createElement(Component, props);
    }

    prevPropsRef.current = props; // 이전 props를 현재 props로 갱신

    // 4. 메모이제이션된 결과 반환
    return memoizedComponentRef.current;
  };
}
