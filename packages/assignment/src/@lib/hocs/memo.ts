import { shallowEquals } from "../equalities";
import { ComponentType, createElement, ElementType } from "react";

export function memo<P extends object>(Component: ComponentType<P>, equals = shallowEquals): ElementType {
  // 1. 이전 props를 저장할 ref 생성
  let prevProps: P | null = null;

  // 2. 메모이제이션된 컴포넌트 생성
  let MemoizedComponent = createElement(Component);

  // 3. equals 함수를 사용하여 props 비교
  const hasChanged = (props: P) => (prevProps ? !equals(prevProps, props) : true);

  return (props: P) => {
    if (hasChanged(props)) {
      // 4. props가 변경된 경우에만 새로운 렌더링 수행
      const newComponent = createElement(Component, props);
      MemoizedComponent = newComponent;
      prevProps = props;
    }
    return MemoizedComponent;
  };
}
