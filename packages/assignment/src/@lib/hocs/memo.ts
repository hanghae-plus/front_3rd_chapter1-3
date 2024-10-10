import { shallowEquals } from "../equalities";
import { ComponentType, createElement, ReactElement } from "react";

export function memo<P extends object>(
  Component: ComponentType<P>,
  equals: (prevProps: P, nextProps: P) => boolean = shallowEquals
) {
  // 1. 이전 props를 저장할 ref 생성
  // 클로저를 통해 prevProps와 memoizedResult 유지
  let prevProps: P | null = null;
  let memoizedResult: ReactElement | null = null;

  // 2. 메모이제이션된 컴포넌트 생성
  return function MemoizedComponent(props: P): ReactElement {
    // 3. equals 함수를 사용하여 props 비교
    if (!prevProps || !equals(prevProps, props)) {
      // 4. props가 변경된 경우에만 새로운 렌더링 수행
      memoizedResult = createElement(Component, props);
      prevProps = props; // 이전 props를 현재 props로 갱신
    }

    // 5. 메모이제이션된 결과 반환
    return memoizedResult as ReactElement;
  };
}
