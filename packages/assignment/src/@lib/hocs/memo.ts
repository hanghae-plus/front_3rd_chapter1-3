import { shallowEquals } from '../equalities'
import React, { ComponentType } from 'react'
import { useRef, useMemo } from '../hooks'

export function memo<P extends object>(
  Component: ComponentType<P>,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  equals = shallowEquals,
) {
  // 3. equals 함수를 사용하여 props 비교

  // 4. props가 변경된 경우에만 새로운 렌더링 수행

  // 구현을 완성해주세요.
  return (props: P) => {
    // 1. 이전 props를 저장할 ref 생성
    const prevProps = useRef<P | undefined>(undefined)

    // 2. 메모이제이션된 컴포넌트 생성
    if (prevProps.current === undefined || !equals(props, prevProps.current)) {
      prevProps.current = props
    }

    // memo HOC는 컴포넌트의 props를 얕은 비교하여 불필요한 리렌더링을 방지합니다.
    const MemoziedComponent = useMemo(() => React.createElement(Component, prevProps.current as P), [prevProps.current])
    return MemoziedComponent
  }
}
