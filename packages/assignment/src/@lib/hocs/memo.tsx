import { shallowEquals } from "../equalities";
import { ComponentType, ReactElement } from "react";
import { useRef } from "../hooks";

/**
 * @description 컴포넌트의 props를 얕은 비교하여 불필요한 리렌더링을 방지하는 HOC입니다.
 * @param Component - 리렌더링을 방지할 대상 컴포넌트
 * @param equals - props 비교 함수 (기본값으로 shallowEquals 사용)
 * @returns props가 변경되지 않았다면 리렌더링을 방지하는 컴포넌트 반환
 */
export function memo<P extends object>(
  Component: ComponentType<P>,
  equals: (prevProps: P, nextProps: P) => boolean = shallowEquals
) {
  return function MemoizedComponent(props: P): ReactElement | null {
    const previousPropsRef = useRef<P | null>(null); // 이전 props를 저장할 ref 생성
    const memoizedComponentRef = useRef<ReactElement | null>(null); // 메모이제이션된 컴포넌트 생성
    const propsChanged = hasPropsChanged(previousPropsRef.current, props, equals); // 이전 props와 새로운 props를 비교하여 변경 여부 확인

    if (propsChanged) { // props가 변경된 경우에만 컴포넌트를 새로 렌더링
      memoizedComponentRef.current = <Component {...props} />;
      previousPropsRef.current = props;
    }

    return memoizedComponentRef.current; // 최종적으로 메모이제이션된 컴포넌트 반환
  };
}

/**
 * @description props의 변경 여부를 확인하는 함수
 * @param previousProps - 이전에 저장된 props
 * @param currentProps - 현재 전달된 props
 * @param equals - props 비교 함수
 * @returns props가 변경되었는지 여부를 반환
 */
function hasPropsChanged<P>(previousProps: P | null, currentProps: P, equals: (prevProps: P, nextProps: P) => boolean): boolean {
  if (previousProps === null) return true; // 이전 props가 없으면 첫 렌더링이므로 변경됨
  return !equals(previousProps, currentProps); // equals 함수를 사용하여 비교
}
