import { useRef } from '../hooks/useRef';
import { shallowEquals } from '../equalities';
import { ComponentType, FunctionComponent, createElement } from 'react';

export function memo<P extends object>(
  Component: ComponentType<P>,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  equals = shallowEquals
) {
  // 2. 메모이제이션된 컴포넌트 생성
  const MemoizedComponent: FunctionComponent<P> = (newProps: P) => {
    // 1. 이전 props를 저장할 ref 생성
    const previousPropsRef = useRef<P | null>(null);
    const previousRenderedElementRef = useRef<ReturnType<
      typeof createElement
    > | null>(null);
    const isUpdate =
      !previousPropsRef.current || !equals(previousPropsRef.current, newProps);

    // 3. equals 함수를 사용하여 props 비교
    if (isUpdate) {
      // // 4. props가 변경된 경우에만 새로운 렌더링 수행
      previousPropsRef.current = newProps;
      previousRenderedElementRef.current = createElement(Component, newProps);
    }

    return previousRenderedElementRef.current;
  };

  return MemoizedComponent;
}
