import { shallowEquals } from '../equalities';
import { ComponentType } from 'react';
import { useMemo, useRef } from '../hooks';

// memo HOC는 컴포넌트의 props를 얕은 비교하여 불필요한 리렌더링을 방지합니다.
export function memo<P extends object>(
  Component: ComponentType<P>,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  equals = shallowEquals
) {
  // // 1. 이전 props를 저장할 ref 생성
  // const prevPropsRef = useRef<P | undefined>(undefined);

  // // 2. 메모이제이션된 컴포넌트 생성
  // const MemoizedComponent = useMemo(
  //   () => <Component {...(lastPropsRef.current as P)} />,
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  //   [lastPropsRef.current]
  // );

  // 3. equals 함수를 사용하여 props 비교

  // 4. props가 변경된 경우에만 새로운 렌더링 수행

  return Component;
}
