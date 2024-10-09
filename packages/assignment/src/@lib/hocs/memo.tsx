import { ReactNode, ComponentType } from "react";
import { shallowEquals } from "../equalities";
import { useRef } from "../hooks";

export function memo<P extends object>(
  Component: ComponentType<P>,
  equals = shallowEquals
) {
  return (props: P) => {
    // 1. 이전 props와 렌더링 결과를 저장할 ref 생성
    const memoizedRef = useRef<{ props?: P; element?: ReactNode }>({});

    // 2. 새로운 props와 렌더링 결과를 저장한다
    // - 아직 초기화 되지 않은 경우
    // - props가 변경된 경우
    if (
      !memoizedRef.current.props ||
      !equals(props, memoizedRef.current.props)
    ) {
      memoizedRef.current.props = props;
      memoizedRef.current.element = <Component {...props} />;
    }

    // 3. 렌더링 결과를 반환한다
    return memoizedRef.current.element;
  };
}
