import { shallowEquals } from "../equalities";
import { ComponentType, createElement, ReactElement } from "react";

export function memo<P extends object>(
  Component: ComponentType<P>,
  equals = shallowEquals
) {
  // 1. 클로저를 통해 prevProps와 memoizedResult 유지
  let prevProps: P | null = null;
  let memoizedResult: ReactElement | null = null;

  // 2. 메모이제이션된 컴포넌트 반환
  return (props: P) => {
    // 3. 이전 props와 현재 props를 비교
    if (!prevProps || !equals(prevProps, props)) {
      // props가 변경된 경우에만 렌더링 수행
      memoizedResult = createElement(Component, props);

      // 이전 props를 현재 props로 갱신
      prevProps = props;
    }

    // 메모이제이션된 결과 반환
    return memoizedResult;
  };
}
