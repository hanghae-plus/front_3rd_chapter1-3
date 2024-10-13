import { shallowEquals } from "../equalities";
import { ComponentType, createElement } from "react";
import { useCallback, useRef } from "../hooks";

export function memo<P extends object>(
  Component: ComponentType<P>,

  equals = shallowEquals
) {
  // 메모이제이션된 컴포넌트 생성
  function MemoizedComponent(props: P) {
    // 이전 props를 저장할 ref 생성
    const prevPropsRef = useRef<P | null>(null);

    // useCallback을 사용하여 equals 함수 메모이제이션
    // useCallback으로 isEqual 함수를 메모이제이션하여, props가 변경될 때마다 불필요한 함수 재생성을 방지
    const isEqual = useCallback(() => {
      // 이전 props와 현재 props를 비교
      return prevPropsRef.current && equals(prevPropsRef.current, props);
    }, [props]);

    if (!isEqual()) {
      prevPropsRef.current = props; // props가 변경되었을 때 업데이트
      return createElement(Component, props); // props가 변경된 경우에만 컴포넌트 렌더링
    }
    return null; // props가 같으면 렌더링하지 않음
  }

  return MemoizedComponent; // 메모이제이션된 컴포넌트를 반환
}
