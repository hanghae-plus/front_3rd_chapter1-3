import { shallowEquals } from '../equalities';
import React, { ComponentType, ReactElement } from 'react';
import { useRef, useMemo } from '../hooks';

// memo HOC는 컴포넌트의 props를 얕은 비교하여 불필요한 리렌더링을 방지합니다.
export function memo<P extends object>(
  Component: ComponentType<P>,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  equals = shallowEquals
) {
  return (props: P) => {
    // 1. 이전 props를 저장할 ref 생성
    const previousProps = useRef<P | null>(null);
    const renderedOutput = useRef<ReactElement | null>(null);

    // 2. 메모이제이션된 컴포넌트 생성
    const shouldUpdate = useMemo(() => {
      // 이전 props가 없으면 (첫 렌더링) 업데이트 수행
      if (previousProps.current === null) {
        previousProps.current = props; // 첫 렌더링 시 props 저장
        return true;
      }

      // 3. equals 함수를 사용하여 이전 props와 현재 props 비교
      const isEqual = equals(previousProps.current, props);

      // props가 다르면 업데이트 수행, 이전 props를 현재 props로 갱신
      if (!isEqual) {
        previousProps.current = props;
        return true;
      }

      // props가 동일하면 업데이트 필요 없음
      return false;
    }, [props]);

    // 4. props가 변경된 경우에만 컴포넌트를 재렌더링
    if (shouldUpdate) {
      renderedOutput.current = React.createElement(Component, props);
    }

    // 5. 이전에 렌더된 결과를 반환
    return renderedOutput.current as React.ReactElement;
  };
}
