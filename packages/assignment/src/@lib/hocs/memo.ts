import { shallowEquals } from "../equalities";
import { ComponentType, createElement } from "react";
import { useRef } from "../hooks/useRef";

export function memo<P extends object>(
  Component: ComponentType<P>,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  equals = shallowEquals
) {
  // 2. 메모이제이션된 컴포넌트 생성
  function MemoizedComponent(props: P) {
    // const MemoizedComponent: FC<P> = (props) => {
    // 1. 이전 props를 저장할 ref 생성
    const prevPropsRef = useRef<P | null>(null);

    // 3. equals 함수를 사용하여 props 비교
    const isEqual = prevPropsRef.current && equals(prevPropsRef.current, props);

    // 4. props가 변경된 경우에만 새로운 렌더링 수행
    if (!isEqual) {
      prevPropsRef.current = props; // 이전 props 업데이트
      return createElement(Component, props); // React.createElement 사용
    }

    return null; // props가 같으면 렌더링하지 않음
  }

  return MemoizedComponent; // 메모이제이션된 컴포넌트를 반환
}
