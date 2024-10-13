import { shallowEquals } from "../equalities";
import { ComponentType, createElement } from "react";
import { useRef } from "../hooks/useRef";
import { useCallback } from "../hooks";

export function memo<P extends object>(
  Component: ComponentType<P>,
  equals = shallowEquals
) {
  // 메모이제이션된 컴포넌트 생성
  function MemoizedComponent(props: P) {
    // 이전 props를 저장할 ref 생성
    const prevPropsRef = useRef<P | null>(null);

    // equals 함수를 사용하여 props 비교
    // useCallback으로 isEqual 함수를 메모이제이션하여, props가 변경될 때마다 불필요한 함수 재생성을 방지
    const isEqual = useCallback(() => {
      return prevPropsRef.current && equals(prevPropsRef.current, props);
    }, [props]);

    // props가 변경된 경우에만 새로운 렌더링 수행
    if (!isEqual) {
      prevPropsRef.current = props; // 이전 props 업데이트
      return createElement(Component, props); // React.createElement 사용
    }

    return null; // props가 같으면 렌더링하지 않음
  }

  return MemoizedComponent; // 메모이제이션된 컴포넌트를 반환
}
