import { shallowEquals } from "../equalities";
import { FunctionComponent, ReactElement } from "react";
import { useCallback, useRef } from "../hooks";

export function memo<P extends object>(
  Component: FunctionComponent<P>,
  equals = shallowEquals
) {
  const MemoizedComponent: FunctionComponent<P> = (props) => {
    const prevPropsRef = useRef<P | null>(null);
    const memoizedResultRef = useRef<ReactElement | null>(null);

    const memoizedRender = useCallback((currentProps: P) => {
      if (prevPropsRef.current === null || !equals(prevPropsRef.current, currentProps)) {
        memoizedResultRef.current = <Component {...currentProps} />;
      }
      prevPropsRef.current = currentProps;
      return memoizedResultRef.current;
    }, []);

    return memoizedRender(props);
  };

  MemoizedComponent.displayName = `Memo(${Component.displayName || Component.name})`;

  return MemoizedComponent;
}
