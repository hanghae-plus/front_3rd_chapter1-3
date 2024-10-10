import { shallowEquals } from '../equalities';
import { ComponentType, createElement, ReactElement, useRef } from 'react';

// ComponentType<MyProps>
// -> const MyComponent: React.FC<MyProps> = (props) => { ... }

type PropsType<T> = {
  props: T;
  result: ReactElement;
};

export function memo<P extends object>(Component: ComponentType<P>, equals = shallowEquals) {
  // 1. 이전 props를 저장할 ref 생성
  // 2. 메모이제이션된 컴포넌트 생성
  // 3. equals 함수를 사용하여 props 비교
  // 4. props가 변경된 경우에만 새로운 렌더링 수행
  const MemoizedComponent = (props: P) => {
    // -> 1
    const prevProps = useRef<PropsType<P> | null>(null);

    // 이전 상태 값이 없거나, 비교함수를 통해 다른 값일때 값 변경 -> 3,4
    if (prevProps.current === null || !equals(prevProps.current.props, props)) {
      // tsx라 <Component .../> 대신 createElement
      prevProps.current = {
        result: createElement(Component, props),
        props,
      };
    }
    return prevProps.current.result;
  };
  return MemoizedComponent;
}
