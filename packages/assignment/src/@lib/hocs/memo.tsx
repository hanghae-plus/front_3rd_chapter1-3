/* eslint-disable @typescript-eslint/no-explicit-any */
import { shallowEquals } from '../equalities';
import {ComponentType} from 'react';
import {useRef} from '../hooks';

export function memo<P extends object>(
    Component: ComponentType<P>,
    equals = shallowEquals
) {

  return (props: P) => {
    // 1. 이전 props를 저장할 ref 생성
    const prevProps = useRef<P | null>(null)

    // 2. 메모이제이션된 컴포넌트 생성
    let memoizedResult = null

    // 3. equals 함수를 사용하여 props 비교
    const isEqualProps = prevProps.current ? equals(prevProps.current, props) : false

    // 4. props가 변경된 경우에만 새로운 렌더링 수행
    if (!isEqualProps) {
      prevProps.current = props;
      memoizedResult = <Component {...props} />
    }

    return memoizedResult
  };
}