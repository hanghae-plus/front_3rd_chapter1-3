import { ComponentType, ReactElement } from "react";
import { shallowEquals } from "../equalities";

// memo HOC는 컴포넌트의 props를 얕은 비교하여 불필요한 리렌더링을 방지합니다.
export function memo<P extends object>(
  Component: ComponentType<P>,
  equals: (prevProps: P, nextProps: P) => boolean = shallowEquals
) {
  let prevProps: P | null = null;
  let memoizedComponent: ReactElement | null = null;

  return (props: P): ReactElement => {
    if (prevProps && equals(prevProps, props)) {
      return memoizedComponent as ReactElement;
    }
    prevProps = props;
    memoizedComponent = <Component {...props} />;
    return memoizedComponent;
  };
}
