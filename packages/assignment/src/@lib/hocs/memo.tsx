import { shallowEquals } from "../equalities";
import { FunctionComponent, ReactElement } from "react";

export function memo<P extends object>(
  Component: FunctionComponent<P>,
  equals = shallowEquals
) {
  let prevProps: P;
  let memoizedResult: ReactElement;

  const MemoizedComponent: FunctionComponent<P> = (props) => {
    if (prevProps === null || !equals(prevProps, props)) {
      memoizedResult = <Component {...props} />;
    }
    prevProps = props;
    return memoizedResult;
  };

  MemoizedComponent.displayName = `Memo(${Component.displayName || Component.name})`;

  return MemoizedComponent;
}
