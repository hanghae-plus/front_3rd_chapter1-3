import { shallowEquals } from '../equalities';
import { ComponentType, useEffect } from 'react';
import { useRef } from '../hooks';

// memo HOC는 컴포넌트의 props를 얕은 비교하여 불필요한 리렌더링을 방지합니다.
export function memo<P extends object>(
  Component: ComponentType<P>,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  equals = shallowEquals
) {
  return function MemoizedComponent(props: P) {
    // 1. 이전 props를 저장할 ref 생성
    const prevPropsRef = useRef<P | null>(null);
    // 2. 메모이제이션된 컴포넌트 생성
    const memoizedComponentRef = useRef<React.ReactElement | null>(null);

    // 3. equals 함수를 사용하여 props 비교
    const isPropsChanged = prevPropsRef.current === null || !equals(prevPropsRef.current, props);

    // props가 변경 되거나 처음 랜더링시 prevPropsRef가 null인 경우 컴포넌트를 저장
    if (isPropsChanged) {
      memoizedComponentRef.current = <Component {...props} />;
      prevPropsRef.current = props;
    }

    // 4. 최종적으로 렌더링 결과를 반환
    return memoizedComponentRef.current as React.ReactElement;
  };
}
