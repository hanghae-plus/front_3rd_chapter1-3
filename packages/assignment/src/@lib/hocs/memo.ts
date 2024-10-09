/* eslint-disable @typescript-eslint/no-explicit-any */
import { shallowEquals } from '../equalities';
import { createElement, FunctionComponent } from 'react';
import { useRef } from '../hooks';

export function memo<P extends object>(Component: FunctionComponent<P>, equals = shallowEquals) {
  let renderedComponent: any = null;
  // 2. 메모이제이션된 컴포넌트 생성
  return function MemoizedComponent(props: any) {
    // 1. 이전 props를 저장할 ref 생성
    const oldProps = useRef(null);

    // 3. equals 함수를 사용하여 props 비교
    const isEqualProps = oldProps.current ? equals(oldProps.current, props) : false;

    // 4. props가 변경된 경우에만 새로운 렌더링 수행
    if (!isEqualProps) {
      oldProps.current = props;
      renderedComponent = createElement(Component, { ...props });
    }

    return renderedComponent;
  };
}
