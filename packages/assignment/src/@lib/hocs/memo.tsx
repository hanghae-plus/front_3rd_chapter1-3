import { ComponentType } from 'react';
import { shallowEquals } from '../equalities';
import { useRef } from '../hooks';

export function memo<P extends object>(
  Component: ComponentType<P>,
  equals = shallowEquals
) {
  return function MemoizedComponent(props: P) {
    const prevPropsRef = useRef<P | null>(null);
    const prevRenderedComponentRef = useRef<React.ReactElement | null>(null);

    // 처음 렌더링이거나, props가 변경된 경우에만 새로운 렌더링 결과 저장
    if (!prevPropsRef.current || !equals(prevPropsRef.current, props)) {
      prevPropsRef.current = props;
      prevRenderedComponentRef.current = <Component {...props} />;
    }

    // 이전에 렌더링된 결과를 반환
    return prevRenderedComponentRef.current;
  };
}
